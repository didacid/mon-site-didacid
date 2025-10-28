import React from 'react';
import PageMeta from '../components/PageMeta';
import { Bot, UserCheck, ShieldCheck, Cpu, Briefcase, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBanner from '../components/AnimatedBanner';

const About: React.FC = () => {
  return (
    <>
      <PageMeta 
        title="À Propos - Didacid"
        description="Découvrez l'histoire de Didacid, ma mission de rendre le support informatique accessible et efficace grâce à l'intelligence artificielle et à une expertise humaine."
      />
      <div className="animate-fadeIn">
         <section className="relative bg-background pt-24 pb-32 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-70">
            <AnimatedBanner />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary">Mon Histoire</h1>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Allier la puissance de l'IA à une expertise humaine pour un support technique qui vous comprend vraiment.
            </p>
          </div>
        </section>

        <div className="bg-background py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

              <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-center mb-20">
                <div className="md:col-span-2 flex justify-center">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 bg-surface rounded-full p-2 relative shadow-lg">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                          <Bot className="w-24 h-24 sm:w-32 sm:h-32 text-primary"/>
                      </div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h2 className="text-3xl font-bold text-primary mb-4">Mettre un visage sur l'expertise</h2>
                  <p className="text-text-secondary mb-4">
                    Je suis un passionné de technologie avec plus de 10 ans d'expérience. J'ai créé Didacid pour combler le fossé entre la complexité de la technologie et les utilisateurs qui veulent simplement que "ça marche".
                  </p>
                  <p className="text-text-secondary">
                    Ma conviction est que l'IA peut gérer 80% des problèmes, me permettant de me concentrer sur les 20% qui nécessitent une véritable expertise humaine. C'est ce modèle hybride qui vous offre le meilleur des deux mondes.
                  </p>
                </div>
              </div>

              <div className="text-center mb-20">
                <h2 className="text-3xl font-bold text-text-primary mb-12">Mes Valeurs Fondamentales</h2>
                <div className="grid sm:grid-cols-3 gap-8">
                  <div className="bg-surface p-8 rounded-lg">
                    <Cpu className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Innovation & IA</h3>
                    <p className="text-text-secondary mt-2">Utiliser les dernières technologies pour fournir des diagnostics rapides et précis, disponibles à toute heure.</p>
                  </div>
                  <div className="bg-surface p-8 rounded-lg">
                    <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Pédagogie & Proximité</h3>
                    <p className="text-text-secondary mt-2">Ne pas seulement réparer, mais aussi expliquer. Je veux que vous compreniez le problème pour mieux l'éviter à l'avenir.</p>
                  </div>
                  <div className="bg-surface p-8 rounded-lg">
                    <Smile className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Efficacité & Résultat</h3>
                    <p className="text-text-secondary mt-2">Mon objectif n'est pas de passer du temps, c'est de résoudre votre problème. Votre satisfaction est ma seule mesure de succès.</p>
                  </div>
                </div>
              </div>

               <div className="mb-20">
                  <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Mon Approche : Votre Parcours Simplifié</h2>
                  <div className="relative">
                      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 hidden md:block" aria-hidden="true"></div>
                      <ul className="space-y-12">
                          <li className="md:grid md:grid-cols-2 md:gap-8 items-center">
                              <div className="md:text-right mb-4 md:mb-0">
                                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ml-auto md:ml-0 md:mr-auto">1</div>
                                  <h3 className="text-2xl font-bold mt-2">Diagnostic</h3>
                              </div>
                              <p className="text-text-secondary md:border-l-2 md:border-primary md:pl-8">Que ce soit via l'IA ou un contact direct, la première étape est toujours de comprendre précisément votre problème, son contexte et son impact sur votre quotidien.</p>
                          </li>
                           <li className="md:grid md:grid-cols-2 md:gap-8 items-center">
                               <p className="text-text-secondary md:text-right md:border-r-2 md:border-primary md:pr-8 order-last md:order-first">J'applique la solution la plus adaptée : un guidage pas-à-pas avec l'IA Premium, une intervention à distance, ou des conseils clairs pour une action que vous pouvez mener vous-même en toute sécurité.</p>
                               <div className="mb-4 md:mb-0">
                                   <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">2</div>
                                  <h3 className="text-2xl font-bold mt-2">Résolution</h3>
                              </div>
                          </li>
                           <li className="md:grid md:grid-cols-2 md:gap-8 items-center">
                               <div className="md:text-right mb-4 md:mb-0">
                                   <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ml-auto md:ml-0 md:mr-auto">3</div>
                                   <h3 className="text-2xl font-bold mt-2">Accompagnement</h3>
                               </div>
                               <p className="text-text-secondary md:border-l-2 md:border-primary md:pl-8">Mon travail ne s'arrête pas à la résolution. Je m'assure que vous comprenez ce qui a été fait et je vous donne les clés pour éviter que le problème ne se reproduise. Votre autonomie est aussi une victoire.</p>
                          </li>
                      </ul>
                  </div>
              </div>

              <div className="text-center bg-surface p-10 rounded-lg shadow-lg">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">Devenons partenaires technologiques</h2>
                  <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                      Au-delà du dépannage, je suis là pour vous accompagner dans votre vie numérique.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all text-lg"
                  >
                    Discutons de vos besoins
                  </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
