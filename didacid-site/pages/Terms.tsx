import React from 'react';
import PageMeta from '../components/PageMeta';

const Terms: React.FC = () => {
  return (
    <>
      <PageMeta 
        title="Conditions Générales de Vente - Didacid"
        description="Consultez les conditions générales de vente pour les services de support informatique proposés par Didacid."
      />
      <div className="bg-background py-12 sm:py-20 animate-fadeIn">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-text-primary mb-8">Conditions Générales de Vente</h1>
            <div className="prose prose-invert lg:prose-xl max-w-none prose-h2:text-primary">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
              
              <h2>Article 1 : Objet</h2>
              <p>
                Les présentes conditions générales de vente visent à définir les relations contractuelles entre Didacid et le client et les conditions applicables à tout achat de service effectué par le biais du site internet didacid.fr.
              </p>

              <h2>Article 2 : Services</h2>
              <p>
                Les services proposés sont ceux qui figurent sur le site didacid.fr. Ces services sont proposés dans la limite des disponibilités. Didacid s'engage à mettre en œuvre tous les moyens nécessaires pour résoudre les problèmes informatiques du client, mais est soumis à une obligation de moyens et non de résultat.
              </p>

              <h2>Article 3 : Tarifs</h2>
              <p>
                Les prix figurant sur le site sont des prix en Euros (€). Didacid se réserve le droit de modifier ses prix à tout moment, étant toutefois entendu que le prix figurant sur le site le jour de la commande sera le seul applicable au client.
              </p>
              
              <h2>Article 4 : Commandes et modalités de paiement</h2>
              <p>
                Le paiement est exigible immédiatement à la commande. Le paiement sera effectué par carte bancaire par le biais du système sécurisé [Nom du prestataire de paiement, ex: Stripe] qui utilise le protocole SSL (Secure Socket Layer) de telle sorte que les informations transmises sont cryptées par un logiciel et qu'aucun tiers ne peut en prendre connaissance au cours du transport sur le réseau.
              </p>
              
              <h2>Article 5 : Rétractation</h2>
              <p>
                Conformément à l'article L. 221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture de services pleinement exécutés avant la fin du délai de rétractation et dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation. En acceptant ces CGV, le client accepte que la prestation commence dès la validation du paiement et renonce expressément à son droit de rétractation.
              </p>

              <h2>Article 6 : Responsabilité</h2>
              <p>
                Didacid, dans le processus de vente à distance, n'est tenu que par une obligation de moyens. Sa responsabilité ne pourra être engagée pour un dommage résultant de l'utilisation du réseau Internet tel que perte de données, intrusion, virus, rupture du service, ou autres problèmes involontaires. Le client est seul responsable de la sauvegarde de ses données avant toute intervention.
              </p>

               <h2>Article 7 : Droit applicable et litiges</h2>
              <p>
                Les présentes conditions de vente à distance sont soumises à la loi française. En cas de litige, compétence est attribuée aux tribunaux compétents de [Ville], nonobstant pluralité de défendeurs ou appel en garantie.
              </p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
