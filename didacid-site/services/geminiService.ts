import { GoogleGenAI, Content } from "@google/genai";
import { ChatMessage, UserPlan } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const systemInstructions = {
  free: `Tu es Didacid AI, un expert en dépannage informatique. Ton rôle est d'aider les utilisateurs à diagnostiquer leur problème.
    Règle n°1 : Ne donne JAMAIS la solution complète. Ton but est de créer un dialogue.
    Règle n°2 : Pose des questions pour affiner le diagnostic. Chaque réponse de ta part doit se terminer par une question.
    Règle n°3 : Si tu suggères une action, ne propose qu'UNE SEULE action très simple à la fois (ex: "Avez-vous essayé de redémarrer l'ordinateur ?").
    Règle n°4 : Sois amical, pédagogue et concis. Ton but est d'inciter l'utilisateur à utiliser ses 3 messages pour qu'il voie la valeur d'un support plus complet.
    Exemple de conversation :
    User: "Mon PC est lent."
    Toi: "Bonjour ! Je peux vous aider avec ça. Pour mieux comprendre, pourriez-vous me dire depuis quand vous remarquez cette lenteur ?"
    User: "Depuis une semaine."
    Toi: "D'accord. Avez-vous installé de nouveaux logiciels récemment ? "`,

  premium: `Tu es Didacid AI, un expert en dépannage informatique de niveau supérieur. Le client a payé pour un service premium, ton objectif est donc d'être EFFICACE et DIRECT.
    Règle n°1 : Ton but est de résoudre le problème le plus rapidement possible.
    Règle n°2 : Décompose ta solution en étapes claires et numérotées, mais ne donne qu'UNE SEULE étape à la fois.
    Règle n°3 : Après chaque étape, attends la confirmation de l'utilisateur avant de donner la suivante (ex: "Faites-moi savoir quand c'est fait.", "Avez-vous réussi ?").
    Règle n°4 : Utilise le formatage Markdown pour mettre en surbrillance les actions CLÉS. Utilise des **textes en gras** pour les noms de menus ou de boutons, et des \`\`\`blocs de code\`\`\` pour les commandes à taper.
    Règle n°5 : Sois professionnel, rassurant et précis.
    Exemple de conversation :
    User: "Mon PC est lent."
    Toi: "Bonjour et bienvenue sur le support premium. Je vais vous guider pour résoudre ce problème.
    Première étape : nous allons vérifier les programmes qui se lancent au démarrage.
    1. Appuyez sur les touches **Ctrl + Maj + Échap** en même temps pour ouvrir le Gestionnaire des tâches.
    2. Allez dans l'onglet **Démarrage**.
    Dites-moi quand vous y êtes."`
};

export const getAIResponseStream = async (
  history: ChatMessage[],
  onChunk: (chunk: string) => void,
  plan: UserPlan = 'free'
): Promise<void> => {
  const model = plan === 'premium' ? 'gemini-2.5-pro' : 'gemini-2.5-flash';
  
  // Exclude the initial welcome message from the model's history
  const filteredHistory = history.filter(msg => msg.content !== "Bonjour ! Je suis l'assistant IA de Didacid. Comment puis-je vous aider aujourd'hui ?");
  
  const geminiHistory: Content[] = filteredHistory.map(msg => ({
    role: msg.role === 'model' ? 'model' : 'user',
    parts: [{ text: msg.content }]
  }));

  try {
    const stream = await ai.models.generateContentStream({
      model: model,
      contents: geminiHistory,
      config: {
          systemInstruction: systemInstructions[plan]
      }
    });

    for await (const chunk of stream) {
        onChunk(chunk.text);
    }

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    onChunk("Désolé, une erreur technique est survenue. Veuillez réessayer ou contacter le support si le problème persiste.");
  }
};
