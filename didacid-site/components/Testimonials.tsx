import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    quote: "Didacid a transformé ma gestion IT. Un problème qui prenait des heures est maintenant résolu en minutes. C'est tout simplement révolutionnaire.",
    name: 'Marie Dubois',
    company: 'Directrice Technique, Innovatech',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop'
  },
  {
    quote: "Le support IA est bluffant de précision. J'ai pu dépanner mon réseau Wi-Fi en suivant des instructions claires, sans avoir à attendre un technicien.",
    name: 'Julien Mercier',
    company: 'Freelance Développeur Web',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop'
  },
  {
    quote: "En tant que petite entreprise, nous n'avons pas le budget pour un service IT dédié. Didacid est la solution parfaite : abordable, efficace et toujours disponible.",
    name: 'Carole Lemaire',
    company: 'Gérante, PME Créative',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const timer = setTimeout(nextTestimonial, 7000); // Change testimonial every 7 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const { quote, name, company, avatar } = testimonialsData[currentIndex];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-12">Ce que mes clients disent</h2>
        <div className="relative max-w-3xl mx-auto min-h-[300px] flex items-center justify-center">
          <button onClick={prevTestimonial} className="absolute left-0 -translate-x-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-700/50 hover:bg-primary transition-colors text-white z-10 hidden md:block" aria-label="Témoignage précédent">
            <ChevronLeft size={24} />
          </button>
          
          <div className="w-full">
            <div key={currentIndex} className="animate-fadeIn">
              <img src={avatar} alt={`Portrait de ${name}, client satisfait de Didacid`} className="w-24 h-24 mx-auto rounded-full mb-6 border-4 border-primary shadow-lg object-cover"/>
              <blockquote className="text-xl italic text-text-secondary mb-6">
                  "{quote}"
              </blockquote>
              <div>
                  <p className="font-semibold text-text-primary text-lg">{name}</p>
                  <p className="text-text-secondary">{company}</p>
              </div>
            </div>
          </div>
          
          <button onClick={nextTestimonial} className="absolute right-0 translate-x-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-700/50 hover:bg-primary transition-colors text-white z-10 hidden md:block" aria-label="Témoignage suivant">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;