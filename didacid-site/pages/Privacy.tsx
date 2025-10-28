import React from 'react';
import PageMeta from '../components/PageMeta';

const Privacy: React.FC = () => {
  return (
    <>
      <PageMeta 
        title="Politique de Confidentialité - Didacid"
        description="Découvrez comment Didacid collecte, utilise et protège vos données personnelles. Votre vie privée est notre priorité."
      />
      <div className="bg-background py-12 sm:py-20 animate-fadeIn">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-text-primary mb-8">Politique de Confidentialité</h1>
            <div className="prose prose-invert lg:prose-xl max-w-none prose-h2:text-primary">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
              <p>
                La présente Politique de Confidentialité décrit la manière dont Didacid collecte, utilise et protège les informations que vous nous transmettez lorsque vous utilisez notre site web didacid.fr.
              </p>
              
              <h2>Collecte de l'information</h2>
              <p>
                Nous collectons des informations lorsque vous utilisez notre formulaire de contact, achetez un service, ou interagissez avec notre assistant IA. Les informations collectées incluent votre nom, votre adresse e-mail, et le contenu des messages que vous nous envoyez.
              </p>

              <h2>Utilisation des informations</h2>
              <p>
                Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
              </p>
              <ul>
                <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                <li>Fournir un contenu publicitaire personnalisé</li>
                <li>Améliorer notre site Web</li>
                <li>Améliorer le service client et vos besoins de prise en charge</li>
                <li>Vous contacter par e-mail</li>
              </ul>

              <h2>Confidentialité</h2>
              <p>
                Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande ou une transaction.
              </p>
              
              <h2>Protection des informations</h2>
              <p>
                Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.
              </p>

              <h2>Vos droits</h2>
              <p>
                Conformément à la loi "Informatique et Libertés" et au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant. Vous pouvez exercer ce droit en nous contactant via notre formulaire de contact ou à l'adresse e-mail mentionnée dans nos mentions légales.
              </p>
              
              <h2>Consentement</h2>
              <p>
                En utilisant notre site, vous consentez à notre politique de confidentialité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
