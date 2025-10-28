import React, { useState } from 'react';
import { Calendar, Clock, Send } from 'lucide-react';
import PageMeta from '../components/PageMeta';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    details: '',
    preferredDate: '',
  });
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    console.log("Booking request submitted:", formData);
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', service: '', details: '', preferredDate: '' });
    }, 1500);
  };

  return (
    <>
      <PageMeta 
        title="Prendre Rendez-vous - Didacid"
        description="Planifiez une intervention personnalisée pour résoudre vos problèmes informatiques. Choisissez un créneau qui vous convient."
      />
      <div className="bg-background py-12 sm:py-20 animate-fadeIn">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Calendar className="w-16 h-16 text-primary mx-auto mb-4 p-3 bg-surface rounded-full" />
              <h1 className="text-4xl font-extrabold text-text-primary">Planifier une Intervention</h1>
              <p className="mt-4 text-lg text-text-secondary">
                Si l'IA n'a pas pu vous aider ou si vous préférez une assistance humaine, remplissez ce formulaire pour prendre rendez-vous.
              </p>
            </div>

            <div className="bg-surface p-8 rounded-lg shadow-lg">
              {formState === 'success' ? (
                <div className="text-center p-8 bg-green-900/50 text-green-300 rounded-lg">
                  <h2 className="text-2xl font-bold">Demande Envoyée !</h2>
                  <p className="mt-2">Merci pour votre demande. Je vous recontacterai très prochainement par email pour confirmer le rendez-vous.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Votre Nom</label>
                      <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-md py-2 px-4 focus:ring-primary focus:border-primary" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Votre Email</label>
                      <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-md py-2 px-4 focus:ring-primary focus:border-primary" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-2">Type de Problème</label>
                    <select name="service" id="service" required value={formData.service} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-md py-2 px-4 focus:ring-primary focus:border-primary">
                        <option value="">Sélectionnez un service</option>
                        <option value="virus">Suppression de Virus</option>
                        <option value="reseau">Dépannage Réseau</option>
                        <option value="donnees">Récupération de Données</option>
                        <option value="performance">Optimisation des Performances</option>
                        <option value="autre">Autre</option>
                    </select>
                  </div>
                   <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-text-secondary mb-2">Date et Heure Souhaitées</label>
                      <input type="datetime-local" name="preferredDate" id="preferredDate" required value={formData.preferredDate} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-md py-2 px-4 focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-text-secondary mb-2">Détails du Problème</label>
                    <textarea name="details" id="details" rows={5} required value={formData.details} onChange={handleChange} placeholder="Décrivez votre problème le plus précisément possible..." className="w-full bg-gray-800 border-gray-700 rounded-md py-2 px-4 focus:ring-primary focus:border-primary"></textarea>
                  </div>
                  <div className="text-right">
                    <button type="submit" disabled={formState === 'submitting'} className="inline-flex items-center gap-2 bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all disabled:bg-gray-500">
                      {formState === 'submitting' ? 'Envoi en cours...' : 'Prendre Rendez-vous'}
                      <Clock size={20} />
                    </button>
                  </div>
                   {formState === 'error' && <p className="text-red-400 mt-4">Une erreur est survenue. Veuillez réessayer.</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
