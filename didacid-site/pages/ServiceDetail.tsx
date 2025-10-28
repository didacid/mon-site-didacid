import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { servicesList } from '../data/servicesData';
import PageMeta from '../components/PageMeta';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesList.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <PageMeta 
        title={`${service.name} - Didacid`}
        description={service.description}
      />
      <div className="bg-background py-12 sm:py-20 animate-fadeIn">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link to="/services" className="text-primary hover:underline mb-8 inline-block">&larr; Retour à tous les services</Link>
            
            <div className="flex items-center gap-4 mb-6">
                 {React.cloneElement(service.icon, { className: 'w-16 h-16 text-primary' })}
                <h1 className="text-4xl font-extrabold text-text-primary">{service.name}</h1>
            </div>

            <div className="bg-surface p-8 rounded-lg shadow-lg">
                <article className="prose prose-invert lg:prose-xl max-w-none prose-h2:text-primary prose-h3:text-text-primary prose-a:text-primary">
                    <ReactMarkdown>{service.content}</ReactMarkdown>
                </article>
                <div className="mt-8 pt-6 border-t border-gray-800 text-center">
                    <h3 className="text-2xl font-bold text-text-primary mb-4">Prêt à résoudre ce problème ?</h3>
                    <p className="text-text-secondary mb-6">Commencez par un diagnostic gratuit avec mon assistant IA ou planifiez une intervention.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/ai-support" className="bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all w-full sm:w-auto">
                            Support IA Gratuit
                        </Link>
                         <Link to="/booking" className="bg-gray-700 text-text-primary font-semibold py-3 px-8 rounded-full hover:bg-gray-600 transition-all w-full sm:w-auto">
                            Prendre rendez-vous
                        </Link>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
