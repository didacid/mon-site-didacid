import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import Testimonials from '../components/Testimonials';
import AnimatedBanner from '../components/AnimatedBanner';
import { servicesList } from '../data/servicesData';
import { faqList } from '../data/faqData';
import Accordion from '../components/Accordion';


const Home: React.FC = () => {

  const features = [
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "Diagnostic IA Immédiat",
      description: "Obtenez une première analyse de votre problème en quelques minutes, 24/7, grâce à mon assistant intelligent."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>,
      title: "Optimisation & Maintenance",
      description: "Améliorez la vitesse et la longévité de vos appareils grâce à des interventions de fond et des conseils préventifs."
    },
    {
       icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary"><path d="M12 12v.01"/><path d="M15.31 8.89a9 9 0 0 1 0 6.22"/><path d="M17.66 6.54a12 12 0 0 1 0 10.92"/><path d="M19.4 4.8a15 15 0 0 1 0 14.4"/><path d="M8.69 8.89a9 9 0 0 0 0 6.22"/><path d="M6.34 6.54a12 12 0 0 0 0 10.92"/><path d="M4.6 4.8a15 15 0 0 0 0 14.4"/></svg>,
      title: "Support Humain Expert",
      description: "Pour les cas complexes, bénéficiez d'une assistance personnalisée et d'interventions à distance efficaces."
    }
  ];

  return (
    <>
      <PageMeta 
        title="Didacid - Support Informatique Intelligent & Personnel"
        description="Expert en assistance informatique personnelle, réinventé par l'IA. Solutions rapides pour dépannage, virus, optimisation et plus."
      />
      <div className="animate-fadeIn">
        {/* Hero Section */}
        <section className="relative bg-background text-center py-24 sm:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 opacity-70">
            <AnimatedBanner />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-text-primary tracking-tight">
              Le Support Informatique, <br />
              <span className="text-primary">Réinventé par l'IA.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-text-secondary">
              Ne laissez plus un problème technique gâcher votre journée. Obtenez une aide instantanée et des solutions efficaces, quand vous en avez besoin.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/ai-support"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all text-lg"
              >
                Commencer un Diagnostic Gratuit
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center w-full sm:w-auto font-semibold py-3 px-8 rounded-full bg-surface hover:bg-gray-700 transition-colors text-lg"
              >
                Voir mes services
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {features.map((feature, index) => (
                <div key={index} className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-background mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h2 className="text-xl font-bold text-text-primary mb-2">{feature.title}</h2>
                  <p className="text-text-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">Des Solutions Complètes Pour Vos Besoins</h2>
              <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
                Que ce soit un virus tenace, une connexion internet capricieuse ou un ordinateur qui rame, j'ai une solution.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.slice(0, 3).map(service => (
                <Link 
                  to={`/services/${service.slug}`} 
                  key={service.slug}
                  className="block bg-surface p-8 rounded-lg shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300"
                >
                  {React.cloneElement(service.icon, { className: 'w-10 h-10 mb-4 text-primary' })}
                  <h3 className="text-xl font-bold text-text-primary mb-2">{service.name}</h3>
                  <p className="text-text-secondary">{service.description}</p>
                  <span className="text-primary font-semibold mt-4 inline-block">En savoir plus &rarr;</span>
                </Link>
              ))}
            </div>
             <div className="text-center mt-12">
                <Link to="/services" className="text-primary font-semibold hover:underline text-lg">
                    Voir tous mes services &rarr;
                </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />
        
         {/* FAQ Section */}
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">Questions Fréquentes</h2>
                    <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
                        Trouvez rapidement les réponses à vos interrogations.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <div className="bg-surface p-4 sm:p-8 rounded-lg shadow-lg">
                        {faqList.slice(0, 4).map((item, index) => (
                            <Accordion key={index} title={item.question}>
                                <p>{item.answer}</p>
                            </Accordion>
                        ))}
                    </div>
                     <div className="text-center mt-8">
                        <Link to="/faq" className="text-primary font-semibold hover:underline">
                            Voir toutes les questions &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-surface">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-background rounded-lg p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-text-primary mb-4">Prêt à résoudre vos problèmes ?</h2>
                    <p className="text-lg text-text-secondary mb-8">
                        N'attendez pas que le problème s'aggrave. Lancez un diagnostic IA gratuit ou explorez mes offres.
                    </p>
                    <Link 
                      to="/pricing" 
                      className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all text-lg"
                    >
                      Obtenir de l'aide maintenant
                    </Link>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                   <Bot className="w-32 h-32 text-primary animate-pulse-glow" />
                </div>
              </div>
            </div>
        </section>

      </div>
    </>
  );
};

export default Home;
