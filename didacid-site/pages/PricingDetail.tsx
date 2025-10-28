import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { pricingPlans } from '../data/pricingData';
import PageMeta from '../components/PageMeta';
import AnimatedBanner from '../components/AnimatedBanner';

const PricingDetail: React.FC = () => {
  const { planId } = useParams<{ planId: string }>();
  const plan = pricingPlans.find(p => p.id === planId);

  if (!plan) {
    return <Navigate to="/pricing" replace />;
  }

  return (
    <>
      <PageMeta 
        title={`${plan.name} - Didacid`}
        description={plan.description}
      />
      <div className="animate-fadeIn">
        <section className="relative bg-background pt-24 pb-32 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-70">
            <AnimatedBanner />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary">{plan.name}</h1>
            <div className="my-6 text-center">
                <span className="text-5xl font-extrabold text-text-primary">{plan.price}</span>
                {plan.priceDescription.split('/')[1] && <span className="text-text-secondary">/{plan.priceDescription.split('/')[1]}</span>}
            </div>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              {plan.description}
            </p>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-surface p-8 sm:p-12 rounded-lg shadow-lg">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Pour qui ?</h2>
                        <p className="text-text-secondary">{plan.targetAudience}</p>
                        
                        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Description complète</h2>
                        <p className="text-text-secondary">{plan.fullDescription}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Fonctionnalités clés</h2>
                         <ul className="space-y-4 mb-8">
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
                           <div className="text-center mt-6">
                             <Link to="/pricing" className="text-sm text-primary hover:underline">&larr; Retour à tous les tarifs</Link>
                           </div>
                    </div>
                </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default PricingDetail;