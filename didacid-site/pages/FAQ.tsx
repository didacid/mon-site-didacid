import React from 'react';
import { faqList } from '../data/faqData';
import PageMeta from '../components/PageMeta';
import Accordion from '../components/Accordion';
import { HelpCircle } from 'lucide-react';
import AnimatedBanner from '../components/AnimatedBanner';

const FAQ: React.FC = () => {
  return (
    <>
      <PageMeta 
        title="FAQ - Didacid"
        description="Trouvez les réponses aux questions les plus fréquentes sur mes services de support informatique, l'assistant IA, et plus encore."
      />
      <div className="animate-fadeIn">
        <section className="relative bg-background pt-24 pb-32 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-70">
            <AnimatedBanner />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary">Questions Fréquemment Posées</h1>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Vous avez des questions ? J'ai les réponses.
            </p>
          </div>
        </section>

        <div className="bg-background py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-surface p-4 sm:p-8 rounded-lg shadow-lg">
                  {faqList.map((item, index) => (
                      <Accordion key={index} title={item.question}>
                          <p>{item.answer}</p>
                      </Accordion>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
