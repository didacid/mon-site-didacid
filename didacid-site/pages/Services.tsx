import React from 'react';
import { Link } from 'react-router-dom';
import { servicesList } from '../data/servicesData';
import PageMeta from '../components/PageMeta';
import AnimatedBanner from '../components/AnimatedBanner';

const Services: React.FC = () => {
  return (
    <>
      <PageMeta 
        title="Services de Dépannage Informatique - Didacid"
        description="Découvrez tous les services de support informatique : suppression de virus, dépannage réseau, récupération de données, optimisation et plus."
      />
      <div className="animate-fadeIn">
        <section className="relative bg-background pt-24 pb-32 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-70">
            <AnimatedBanner />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary">Mes Services</h1>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Des solutions complètes pour tous vos problèmes informatiques, du plus simple au plus complexe.
            </p>
          </div>
        </section>

        <div className="bg-background py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map(service => (
                <Link 
                  to={`/services/${service.slug}`} 
                  key={service.slug}
                  className="block bg-surface p-8 rounded-lg shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300"
                >
                  {React.cloneElement(service.icon, { className: 'w-10 h-10 mb-4 text-primary' })}
                  <h2 className="text-xl font-bold text-text-primary mb-2">{service.name}</h2>
                  <p className="text-text-secondary">{service.description}</p>
                  <span className="text-primary font-semibold mt-4 inline-block">En savoir plus &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
