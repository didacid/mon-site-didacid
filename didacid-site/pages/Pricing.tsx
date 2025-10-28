import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';
import { pricingPlans } from '../data/pricingData';
import PageMeta from '../components/PageMeta';
import AnimatedBanner from '../components/AnimatedBanner';

const Pricing: React.FC = () => {
  const location = useLocation();
  const message = location.state?.message;

  return (
    <>
      <PageMeta 
        title="Tarifs - Didacid"
        description="Découvrez nos offres de support informatique : du diagnostic IA gratuit à l'abonnement sérénité complet."
      />
      <div className="animate-fadeIn">
        <section className="relative bg-background pt-24 pb-32 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-70">
            <AnimatedBanner />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary">Des Tarifs Clairs et Adaptés</h1>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Choisissez la formule qui correspond à vos besoins, sans frais cachés.
            </p>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {message && (
              <div className="mb-8 p-4 bg-yellow-900/50 text-yellow-300 rounded-lg text-center max-w-2xl mx-auto">
                {message}
              </div>
            )}
            <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
              {pricingPlans.map((plan) => (
                <div key={plan.id} className={`relative flex flex-col bg-surface rounded-lg shadow-lg p-8 ${plan.isFeatured ? 'border-2 border-primary' : ''}`}>
                  {plan.isFeatured && (
                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
                      Le plus populaire
                    </div>
                  )}
                  <h2 className="text-2xl font-bold text-text-primary text-center">{plan.name}</h2>
                  <div className="my-6 text-center">
                    <span className="text-5xl font-extrabold text-text-primary">{plan.price}</span>
                    <span className="text-text-secondary">/{plan.priceDescription.split('/')[1]}</span>
                  </div>
                  <p className="text-text-secondary text-center mb-8 flex-grow">{plan.description}</p>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={plan.ctaLink} className={`mt-auto block w-full text-center font-semibold py-3 px-6 rounded-full transition-all ${plan.isFeatured ? 'bg-primary text-white hover:bg-opacity-80' : 'bg-gray-700 text-text-primary hover:bg-gray-600'}`}>
                    {plan.ctaText}
                  </Link>
                   <div className="text-center mt-4">
                      <Link to={`/pricing/${plan.id}`} className="text-sm text-primary hover:underline">Plus d'infos &rarr;</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-surface">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-4">Besoin d'un service sur-mesure ?</h2>
                <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                    Pour les besoins spécifiques des entreprises ou des interventions complexes (récupération de données, etc.), n'hésitez pas à me contacter pour un devis personnalisé.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all text-lg"
                >
                  Demander un devis
                </Link>
            </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;
