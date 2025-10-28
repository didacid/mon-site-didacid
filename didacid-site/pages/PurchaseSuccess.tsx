import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import { useAuth } from '../context/AuthContext';

const PurchaseSuccess: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect if no user or user is subscribed (they shouldn't be here)
  useEffect(() => {
    if (!user || user.isSubscribed) {
      navigate('/pricing');
    }
  }, [user, navigate]);

  return (
    <>
      <PageMeta 
        title="Achat Réussi - Didacid"
        description="Votre session de support premium est maintenant active. Vous pouvez démarrer la conversation avec l'IA experte."
      />
      <div className="bg-background py-12 sm:py-20 animate-fadeIn">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center bg-surface p-8 sm:p-12 rounded-lg shadow-lg">
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-text-primary mb-4">Paiement Réussi !</h1>
            <p className="text-text-secondary mb-8">
              Félicitations, {user?.name}. Votre session de support premium est débloquée. Vous pouvez maintenant accéder à l'IA experte pour résoudre votre problème.
            </p>
            <Link to="/premium-support" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all text-lg">
                Commencer le support premium
                <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseSuccess;
