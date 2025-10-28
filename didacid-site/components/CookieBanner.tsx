import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (consent: boolean) => {
    localStorage.setItem('cookie_consent', consent.toString());
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-surface/95 backdrop-blur-sm p-4 shadow-lg z-50 animate-fadeIn">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Cookie className="h-10 w-10 text-primary flex-shrink-0" />
          <p className="text-sm text-text-secondary">
            J'utilise des cookies pour améliorer votre expérience sur mon site. En continuant, vous acceptez ma{' '}
            <Link to="/privacy" className="text-primary underline hover:text-opacity-80">
              Politique de Confidentialité
            </Link>.
          </p>
        </div>
        <div className="flex gap-4 flex-shrink-0">
          <button
            onClick={() => handleConsent(true)}
            className="bg-primary text-white font-semibold py-2 px-5 rounded-full hover:bg-opacity-80 transition-all duration-300"
          >
            Accepter
          </button>
          <button
            onClick={() => handleConsent(false)}
            className="bg-gray-700 text-text-primary font-semibold py-2 px-5 rounded-full hover:bg-gray-600 transition-all duration-300"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
