import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import { useAuth } from '../context/AuthContext';

const SessionResolved: React.FC = () => {
  const { user, endPremiumSession } = useAuth();

  useEffect(() => {
    // End the premium session only if the user has an active ticket (is not a subscriber)
    if (user && user.hasActiveTicket) {
      endPremiumSession();
    }
    // Subscribers who end a chat are not logged out, they just finish the conversation.
  }, [user, endPremiumSession]);

  return (
    <>
      <PageMeta 
        title="Session Terminée - Didacid"
        description="Votre session de support premium est terminée. Merci de votre confiance."
      />
      <div className="bg-background py-12 sm:py-20 animate-fadeIn">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center bg-surface p-8 sm:p-12 rounded-lg shadow-lg">
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-text-primary mb-4">Session Terminée avec Succès !</h1>
            <p className="text-text-secondary mb-8">
              J'espère que votre problème a été résolu. Merci d'avoir fait confiance à Didacid.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all w-full sm:w-auto">
                Retour à l'accueil
              </Link>
               <Link to="/pricing" className="bg-gray-700 text-text-primary font-semibold py-3 px-8 rounded-full hover:bg-gray-600 transition-all w-full sm:w-auto">
                Voir les autres offres
              {/* FIX: Corrected a typo in the closing tag. It was `</Aide>` and has been changed to `</Link>`. */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionResolved;
