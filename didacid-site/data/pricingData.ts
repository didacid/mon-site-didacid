export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceDescription: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  isFeatured: boolean;
  fullDescription?: string;
  targetAudience?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'gratuit',
    name: 'Diagnostic IA Gratuit',
    price: 'Gratuit',
    priceDescription: 'Diagnostic / 3 messages',
    description: "Idéal pour obtenir une première analyse rapide et gratuite de votre problème par l'IA.",
    features: [
      'Analyse par IA',
      'Diagnostic préliminaire',
      'Limite de 3 messages',
      'Disponible 24/7'
    ],
    ctaText: 'Démarrer le diagnostic',
    ctaLink: '/ai-support',
    isFeatured: false,
    fullDescription: "Commencez par une conversation avec mon assistant IA pour obtenir un premier diagnostic. C'est le moyen le plus rapide d'identifier la source de votre problème. L'IA est entraînée pour reconnaître des milliers de situations et vous poser les bonnes questions. C'est entièrement gratuit et sans engagement.",
    targetAudience: "Pour tous ceux qui rencontrent un problème informatique et souhaitent une première évaluation rapide sans dépenser d'argent."
  },
  {
    id: 'premium-ia',
    name: 'Résolution IA Premium',
    price: '49€',
    priceDescription: 'par résolution / ticket',
    description: "La solution la plus efficace pour résoudre un problème complexe avec des instructions pas-à-pas de l'IA experte.",
    features: [
      'Accès à l\'IA experte',
      'Messages illimités pour 1 problème',
      'Solutions guidées étape par étape',
      'Session active jusqu\'à résolution',
      'Prioritaire sur le support gratuit'
    ],
    ctaText: 'Acheter une résolution',
    ctaLink: '/unlock-premium',
    isFeatured: true,
    fullDescription: "Lorsque le diagnostic gratuit ne suffit pas, l'IA Premium prend le relais. Pour un paiement unique, vous débloquez une session de chat illimitée avec une version plus avancée de l'IA, spécifiquement conçue pour vous guider à travers des étapes de résolution complexes. Elle vous fournira des commandes précises, des explications claires et des solutions structurées jusqu'à ce que votre problème soit résolu.",
    targetAudience: "Pour les utilisateurs qui ont un problème bien identifié et qui sont à l'aise pour suivre des instructions techniques détaillées pour le résoudre eux-mêmes."
  },
  {
    id: 'serenite',
    name: 'Abonnement Sérénité',
    price: '29€',
    priceDescription: 'par mois',
    description: "La tranquillité d'esprit totale avec un accès illimité à l'IA et un support humain prioritaire.",
    features: [
      'Accès IA Premium illimité',
      'Interventions humaines prioritaires',
      'Maintenance préventive mensuelle à distance',
      'Conseils et suivi personnalisés',
      'Support multi-appareils'
    ],
    ctaText: 'S\'abonner',
    ctaLink: '/subscribe',
    isFeatured: false,
    fullDescription: "Ne vous souciez plus jamais de vos problèmes informatiques. L'abonnement Sérénité vous offre un accès illimité à l'IA Premium, mais aussi un accès prioritaire à mon support humain pour les cas les plus difficiles. J'effectue également une vérification de santé mensuelle à distance de votre machine pour prévenir les problèmes avant qu'ils n'arrivent. C'est votre assurance tranquillité numérique.",
    targetAudience: "Pour les professionnels, les familles ou toute personne qui dépend fortement de ses outils informatiques et qui souhaite un partenaire de confiance sur le long terme."
  }
];
