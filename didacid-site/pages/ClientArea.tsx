import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { useAuth } from '../context/AuthContext';
import { User, LifeBuoy, BookOpen, Settings } from 'lucide-react';

const ClientArea: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();
  const fromSubscription = location.state?.fromSubscription;

  return (
    <>
      <PageMeta 
        title="Espace Client - Didacid"
        description="Gérez votre abonnement, accédez à votre historique de support et contactez-moi pour une nouvelle intervention."
      />
      <div className="bg-background py-12 sm:py-20 animate-fadeIn">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {fromSubscription && (
              <div className="mb-8 p-4 bg-green-900/50 text-green-300 rounded-lg text-center">
                Félicitations et bienvenue ! Votre abonnement est maintenant actif.
              </div>
            )}
            <div className="text-center mb-12">
              <User className="w-20 h-20 text-primary mx-auto mb-6 p-4 bg-surface rounded-full" />
              <h1 className="text-4xl font-extrabold text-text-primary">Bienvenue, {user?.name}</h1>
              <p className="mt-4 text-lg text-text-secondary">
                Ceci est votre espace personnel. D'ici, vous pouvez gérer votre compte et accéder à votre support premium.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link to="/booking" className="block bg-surface p-8 rounded-lg shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 text-center">
                    <LifeBuoy className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-text-primary">Nouvelle Demande</h2>
                    <p className="text-text-secondary mt-2">Planifier une nouvelle intervention pour n'importe quel appareil.</p>
                </Link>
                 <div className="block bg-surface/50 p-8 rounded-lg text-center cursor-not-allowed">
                    <BookOpen className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-gray-500">Historique</h2>
                    <p className="text-gray-600 mt-2">Consultez vos anciennes demandes (bientôt disponible).</p>
                </div>
                 <div className="block bg-surface/50 p-8 rounded-lg text-center cursor-not-allowed">
                    <Settings className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-gray-500">Mon Compte</h2>
                    <p className="text-gray-600 mt-2">Gérez votre abonnement et vos informations (bientôt disponible).</p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ClientArea;
