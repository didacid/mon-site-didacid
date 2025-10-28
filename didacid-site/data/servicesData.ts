import React from 'react';
import { ShieldX, Wifi, HardDrive, Settings, LifeBuoy, HelpCircle } from 'lucide-react';

export interface Service {
  name: string;
  slug: string;
  description: string;
  // FIX: The `icon` type was too generic (`React.ReactElement`), causing type errors when using `React.cloneElement`.
  // By specifying that it's a ReactElement with SVG props, we allow `className` and other attributes to be passed,
  // fixing the issue at its source and allowing for type-safe styling.
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  content: string;
}

export const servicesList: Service[] = [
  { 
    name: 'Suppression de Virus et Malwares', 
    slug: 'suppression-virus-malwares',
    description: "Éradiquez les menaces et protégez vos appareils contre les logiciels malveillants.", 
    // FIX: Replaced JSX with React.createElement to be compatible with a .ts file extension,
    // which likely isn't configured to parse JSX.
    icon: React.createElement(ShieldX, { className: "w-10 h-10 mb-4 text-primary" }),
    content: `
## Éliminez les Menaces, Retrouvez la Sérénité

Un virus ou un malware peut non seulement ralentir votre ordinateur, mais aussi voler vos informations personnelles. Mon service de suppression est conçu pour nettoyer en profondeur votre système et le protéger contre de futures attaques.

### Ce que j'inclus :
- **Analyse complète** du système pour détecter tous types de menaces (virus, spywares, adwares, ransomwares).
- **Suppression sécurisée** des logiciels malveillants sans endommager vos fichiers personnels.
- **Mise à jour** de vos logiciels de sécurité et de votre système d'exploitation.
- **Conseils personnalisés** pour adopter des pratiques de navigation plus sûres.

Ne laissez pas les menaces compromettre votre sécurité.
`
  },
  { 
    name: 'Dépannage Réseau et Internet', 
    slug: 'depannage-reseau-internet',
    description: "Résolvez les problèmes de connexion Wi-Fi, de lenteur internet et de configuration réseau.", 
    // FIX: Replaced JSX with React.createElement to be compatible with a .ts file extension.
    icon: React.createElement(Wifi, { className: "w-10 h-10 mb-4 text-primary" }),
    content: `
## Une Connexion Fiable, Partout Chez Vous

Les problèmes de Wi-Fi ou de connexion internet sont frustrants. Je diagnostique la source du problème, qu'il s'agisse de votre routeur, de la configuration de votre appareil ou d'interférences, pour restaurer une connexion rapide et stable.

### Solutions courantes :
- Optimisation du signal **Wi-Fi** et de la couverture dans votre domicile.
- Configuration de votre **routeur** et de vos répéteurs.
- Résolution des conflits d'adresse IP et des problèmes DNS.
- Sécurisation de votre réseau sans fil contre les accès non autorisés.
`
  },
  { 
    name: 'Récupération de Données', 
    slug: 'recuperation-de-donnees',
    description: "Récupérez vos fichiers importants perdus suite à une panne de disque ou une suppression accidentelle.", 
    // FIX: Replaced JSX with React.createElement to be compatible with a .ts file extension.
    icon: React.createElement(HardDrive, { className: "w-10 h-10 mb-4 text-primary" }),
    content: `
## Vos Fichiers Importants Ne Sont Pas Perdus

La perte de données est une expérience stressante. Que ce soit à cause d'une panne de disque dur, d'une suppression accidentelle ou d'un formatage, j'utilise des outils avancés pour tenter de récupérer vos photos, documents et autres fichiers précieux.

### Types de récupération :
- Fichiers supprimés de la corbeille.
- Données sur des disques durs (HDD/SSD) endommagés ou formatés.
- Récupération depuis des cartes SD, clés USB et autres supports de stockage.
- **Important :** Le succès de la récupération dépend de l'état du support. Contactez-moi rapidement pour maximiser les chances.
`
  },
  { 
    name: "Installation et Configuration", 
    slug: 'installation-configuration-logiciels',
    description: "J'installe et configure vos applications pour une performance optimale et sans tracas.", 
    // FIX: Replaced JSX with React.createElement to be compatible with a .ts file extension.
    icon: React.createElement(Settings, { className: "w-10 h-10 mb-4 text-primary" }),
    content: `
## Des Logiciels Parfaitement Installés

Une nouvelle imprimante ? Un logiciel complexe à configurer ? Gagnez du temps et évitez les maux de tête. Je m'occupe de l'installation et de la configuration de vos logiciels et périphériques pour qu'ils fonctionnent parfaitement.

### Prestations :
- Installation de systèmes d'exploitation (Windows, macOS).
- Configuration de logiciels de productivité (Suite Office, etc.).
- Installation d'imprimantes, scanners et autres périphériques.
- Mise en place de solutions de sauvegarde automatique.
`
  },
  { 
    name: 'Optimisation des Performances', 
    slug: 'optimisation-performances',
    description: "Accélérez votre ordinateur, nettoyez les fichiers inutiles et améliorez sa réactivité globale.", 
    // FIX: Replaced JSX with React.createElement to be compatible with a .ts file extension.
    icon: React.createElement(LifeBuoy, { className: "w-10 h-10 mb-4 text-primary" }),
    content: `
## Redonnez une Seconde Jeunesse à Votre PC

Avec le temps, tous les ordinateurs ralentissent. Mon service d'optimisation est un "nettoyage de printemps" complet pour votre système, qui lui redonnera sa vitesse et sa réactivité d'origine.

### Mon processus :
- Nettoyage des fichiers temporaires et des registres inutiles.
- Optimisation des programmes qui se lancent au démarrage.
- Vérification de la santé de votre disque dur.
- Mise à jour des pilotes pour une meilleure compatibilité matérielle.
`
  },
  { 
    name: 'Support Technique Général', 
    slug: 'support-technique-general',
    description: "Pour tous les autres problèmes, mon IA et moi-même sommes là pour vous guider.", 
    // FIX: Replaced JSX with React.createElement to be compatible with a .ts file extension.
    icon: React.createElement(HelpCircle, { className: "w-10 h-10 mb-4 text-primary" }),
    content: `
## Une Réponse à Chaque Problème

Vous avez un problème qui ne rentre dans aucune catégorie ? N'hésitez pas. De la simple question sur l'utilisation d'un logiciel à des problèmes plus complexes, je suis là pour vous aider.

### Exemples :
- Configuration de votre boîte mail.
- Problèmes d'affichage ou de son.
- Conseils pour l'achat de nouveau matériel.
- Formation sur l'utilisation de nouvelles technologies.
`
  }
];