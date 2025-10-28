import React from 'react';
import PageMeta from '../components/PageMeta';

const Legal: React.FC = () => {
  return (
    <>
      <PageMeta 
        title="Mentions Légales - Didacid"
        description="Consultez les mentions légales de Didacid, incluant les informations sur l'éditeur du site et l'hébergement."
      />
      <div className="bg-background py-12 sm:py-20 animate-fadeIn">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-text-primary mb-8">Mentions Légales</h1>
            <div className="prose prose-invert lg:prose-xl max-w-none prose-h2:text-primary">
              <h2>Éditeur du site</h2>
              <p>
                Le site didacid.fr est édité par [Votre Nom ou Nom de votre entreprise], une entreprise individuelle / société immatriculée au RCS de [Ville] sous le numéro [Numéro SIRET].
              </p>
              <ul>
                <li><strong>Nom :</strong> [Votre Nom Complet]</li>
                <li><strong>Adresse :</strong> [Votre Adresse Postale]</li>
                <li><strong>Email :</strong> <a href="mailto:contact@didacid.fr">contact@didacid.fr</a></li>
                <li><strong>Directeur de la publication :</strong> [Votre Nom Complet]</li>
              </ul>

              <h2>Hébergement</h2>
              <p>
                Le site est hébergé par [Nom de l'hébergeur], dont le siège social est situé au [Adresse de l'hébergeur].
              </p>
              
              <h2>Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>

              <h2>Données personnelles</h2>
              <p>
                Pour plus d'informations sur la manière dont nous collectons et traitons vos données personnelles, veuillez consulter notre <a href="/privacy">Politique de Confidentialité</a>.
              </p>

              <h2>Cookies</h2>
              <p>
                Le site didacid.fr peut être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Legal;
