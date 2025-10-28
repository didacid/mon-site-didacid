import React, { useEffect } from 'react';

const StructuredData: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Didacid",
    "url": "https://didacid.fr", // L'URL canonique est importante pour le SEO
    "telephone": "+33-1-23-45-67-89",
    "description": "Expert en assistance informatique personnelle, réinventé par l'IA. Didacid propose des solutions rapides pour le dépannage, la suppression de virus, l'optimisation et plus encore.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Rue de l'IA",
      "addressLocality": "Paris",
      "postalCode": "75000",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-1-23-45-67-89",
      "contactType": "customer service",
      "areaServed": "FR",
      "availableLanguage": "French"
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default StructuredData;