import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Lock, User, Check } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import { useAuth } from '../context/AuthContext';
import { pricingPlans } from '../data/pricingData';

const Subscribe: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const plan = pricingPlans.find(p => p.id === 'serenite');

    const [formData, setFormData] = useState({ name: '', email: '', cardName: '', cardNumber: '', expiry: '', cvc: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'error'>('idle');
    const [isTouched, setIsTouched] = useState<{ [key: string]: boolean }>({});

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name) newErrors.name = 'Le nom est requis.';
        if (!formData.email) {
            newErrors.email = 'L\'email est requis.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'L\'adresse email est invalide.';
        }
        if (!formData.cardName) newErrors.cardName = 'Le nom sur la carte est requis.';
        if (!formData.cardNumber) newErrors.cardNumber = 'Le numéro de carte est requis.';
        if (!formData.expiry) newErrors.expiry = 'La date d\'expiration est requise.';
        if (!formData.cvc) newErrors.cvc = 'Le CVC est requis.';
        return newErrors;
    };
    
    useEffect(() => {
        if(Object.keys(isTouched).length > 0) {
            setErrors(validate());
        }
    }, [formData, isTouched]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsTouched({ ...isTouched, [e.target.name]: true });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsTouched({ name: true, email: true, cardName: true, cardNumber: true, expiry: true, cvc: true });
        const validationErrors = validate();
        setErrors(validationErrors);
        
        if (Object.keys(validationErrors).length === 0) {
            setFormState('submitting');
            setTimeout(() => {
                console.log("Subscription processed for:", formData.name);
                login(formData.name);
                navigate('/client-area', { state: { fromSubscription: true } });
            }, 2000);
        }
    };

    if (!plan) return null;

    return (
        <>
            <PageMeta
                title="S'abonner au plan Sérénité - Didacid"
                description="Souscrivez à l'abonnement Sérénité pour une tranquillité d'esprit totale avec un support illimité."
            />
            <div className="bg-background py-12 sm:py-20 animate-fadeIn">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
                        <div className="lg:col-span-1">
                            <h1 className="text-3xl font-extrabold text-text-primary">Finalisez votre abonnement</h1>
                            <p className="mt-4 text-text-secondary">
                                Rejoignez le plan Sérénité et ne vous souciez plus de vos problèmes informatiques.
                            </p>
                            <div className="bg-surface p-8 rounded-lg shadow-lg mt-8">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                     <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Nom complet</label>
                                        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} onBlur={handleBlur} className={`w-full bg-gray-800 border rounded-md py-2 px-4 focus:ring-primary focus:border-primary ${errors.name ? 'border-red-500' : 'border-gray-700'}`} />
                                         {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Adresse email</label>
                                        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} onBlur={handleBlur} className={`w-full bg-gray-800 border rounded-md py-2 px-4 focus:ring-primary focus:border-primary ${errors.email ? 'border-red-500' : 'border-gray-700'}`} />
                                         {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                                    </div>
                                    <div className="border-t border-gray-700 pt-4">
                                        <h3 className="text-lg font-semibold mb-4">Informations de paiement</h3>
                                        <div>
                                            <label htmlFor="cardName" className="block text-sm font-medium text-text-secondary mb-2">Nom sur la carte</label>
                                            <input type="text" name="cardName" id="cardName" required value={formData.cardName} onChange={handleChange} onBlur={handleBlur} className={`w-full bg-gray-800 border rounded-md py-2 px-4 focus:ring-primary focus:border-primary ${errors.cardName ? 'border-red-500' : 'border-gray-700'}`} />
                                            {errors.cardName && <p className="text-red-400 text-sm mt-1">{errors.cardName}</p>}
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor="cardNumber" className="block text-sm font-medium text-text-secondary mb-2">Numéro de carte</label>
                                            <div className="relative">
                                                <input type="text" name="cardNumber" id="cardNumber" required placeholder="0000 0000 0000 0000" value={formData.cardNumber} onChange={handleChange} onBlur={handleBlur} className={`w-full bg-gray-800 border rounded-md py-2 px-4 pl-10 focus:ring-primary focus:border-primary ${errors.cardNumber ? 'border-red-500' : 'border-gray-700'}`} />
                                                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            </div>
                                            {errors.cardNumber && <p className="text-red-400 text-sm mt-1">{errors.cardNumber}</p>}
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <label htmlFor="expiry" className="block text-sm font-medium text-text-secondary mb-2">Expiration (MM/AA)</label>
                                                <input type="text" name="expiry" id="expiry" required placeholder="MM/AA" value={formData.expiry} onChange={handleChange} onBlur={handleBlur} className={`w-full bg-gray-800 border rounded-md py-2 px-4 focus:ring-primary focus:border-primary ${errors.expiry ? 'border-red-500' : 'border-gray-700'}`} />
                                                {errors.expiry && <p className="text-red-400 text-sm mt-1">{errors.expiry}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="cvc" className="block text-sm font-medium text-text-secondary mb-2">CVC</label>
                                                <input type="text" name="cvc" id="cvc" required placeholder="123" value={formData.cvc} onChange={handleChange} onBlur={handleBlur} className={`w-full bg-gray-800 border rounded-md py-2 px-4 focus:ring-primary focus:border-primary ${errors.cvc ? 'border-red-500' : 'border-gray-700'}`} />
                                                {errors.cvc && <p className="text-red-400 text-sm mt-1">{errors.cvc}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" disabled={formState === 'submitting'} className="w-full inline-flex justify-center items-center gap-2 bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all disabled:bg-gray-500">
                                        {formState === 'submitting' ? 'Traitement...' : `S'abonner et payer ${plan.price}`}
                                        <Lock size={20} />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="bg-surface p-8 rounded-lg shadow-lg sticky top-24">
                               <h2 className="text-2xl font-bold text-text-primary mb-6">Récapitulatif de votre abonnement</h2>
                               <div className="border-b border-gray-700 pb-4 mb-4">
                                   <div className="flex justify-between items-center">
                                       <span className="text-text-secondary">{plan.name}</span>
                                       <span className="font-semibold">{plan.price}/mois</span>
                                   </div>
                               </div>
                               <div className="flex justify-between items-center font-bold text-lg">
                                   <span>Total (par mois)</span>
                                   <span>{plan.price}</span>
                               </div>
                               <div className="mt-8">
                                   <h3 className="font-bold mb-4">Ce qui est inclus :</h3>
                                   <ul className="space-y-3">
                                    {plan.features.map((feature, index) => (
                                      <li key={index} className="flex items-start gap-3 text-sm">
                                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-text-secondary">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subscribe;
