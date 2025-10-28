export interface FAQItem {
  question: string;
  answer: string;
}

export const faqList: FAQItem[] = [
  {
    question: "Comment fonctionne l'assistant IA ?",
    answer: "L'assistant IA est un chatbot avancé entraîné pour diagnostiquer et résoudre des milliers de problèmes informatiques courants. Vous décrivez votre problème en langage naturel, et il vous guide étape par étape vers la solution. C'est comme avoir un technicien disponible 24/7."
  },
  {
    question: "Que se passe-t-il si l'IA ne peut pas résoudre mon problème ?",
    answer: "Si l'assistant IA atteint ses limites ou si votre problème est trop complexe, il vous proposera de planifier une intervention personnalisée avec moi. Vos conversations avec l'IA me donnent un contexte précieux pour résoudre votre problème plus rapidement."
  },
  {
    question: "Quels types d'appareils prenez-vous en charge ?",
    answer: "Je prends en charge une large gamme d'appareils, y compris les ordinateurs de bureau et portables (Windows et macOS), les smartphones et tablettes (iOS et Android), ainsi que les périphériques courants comme les imprimantes et les routeurs."
  },
  {
    question: "Vos interventions sont-elles sécurisées ?",
    answer: "Absolument. La sécurité et la confidentialité de vos données sont ma priorité absolue. Toutes les interventions à distance sont effectuées via des connexions sécurisées et cryptées. Je ne vous demanderai jamais vos mots de passe personnels."
  },
  {
    question: "Combien de temps faut-il pour obtenir une réponse ?",
    answer: "L'assistant IA fournit des réponses instantanées. Pour les demandes de support personnalisé par email ou via le formulaire de contact, je m'efforce de répondre en moins de 24 heures ouvrées. Les abonnés au plan Premium ont une priorité."
  },
  {
    question: "Proposez-vous des services pour les entreprises ?",
    answer: "Oui, mon plan 'Professionnel' est spécialement conçu pour les petites entreprises et les indépendants. Il inclut un support dédié, un nombre illimité d'appareils, et des solutions sur mesure pour répondre à vos besoins professionnels. Contactez-moi pour discuter d'un devis personnalisé."
  }
];
