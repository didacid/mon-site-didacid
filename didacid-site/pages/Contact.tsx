import React, { useState, useEffect } from 'react';
import { Mail, Phone, Clock, Send, Loader2 } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import AnimatedBanner from '../components/AnimatedBanner';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [isTouched, setIsTouched] = useState<{ [key: string]: boolean }>({});

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name) newErrors.name = 'Le nom est requis.';
        if (!formData.email) {
            newErrors.email = 'L\'email est requis.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'L\'adresse email est invalide.';
        }
        if (!formData.subject) newErrors.subject = 'Le sujet est requis.';
        if (!formData.message) newErrors.message = 'Le message est requis.';
        return newErrors;
    };
    
    useEffect(() => {
        if(Object.keys(isTouched).length > 0) {
            setErrors(validate());
        }
    }, [formData, isTouched]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setIsTouched({ ...isTouched, [e.target.name]: true });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsTouched({ name: true, email: true, subject: true, message: true });
        const validationErrors = validate();
        setErrors(validationErrors);
        
        if (Object.keys(validationErrors).length === 0) {
            setFormState('submitting');
            console.log("Contact form submitted:", formData);
            setTimeout(() => {
                setFormState('success');
            }, 1500);
        }
    };

    return (
        <>
            <PageMeta
                title="Contact - Didacid"
                description="Contactez-moi pour toute question, demande de devis personnalisé ou partenariat. Je suis à votre écoute."
            />
            <div className="animate-fadeIn">
                <section className="relative bg-background pt-24 pb-32 text-center overflow-hidden">
                    <div className="absolute inset-0 opacity-70">
                        <AnimatedBanner />
                    </div>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary">Contactez-moi</h1>
                        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
                            Une question ? Une demande spécifique ? Je suis là pour vous aider.
                        </p>
                    </div>
                </section>

                <div className="bg-background py-12 sm:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-5xl mx-auto bg-surface rounded-lg shadow-lg overflow-hidden md:grid md:grid-cols-2">
                            <div className="p-8 sm:p-12 bg-gray-800/50">
                                <h2 className="text-3xl font-bold text-text-primary mb-4">Informations</h2>
                                <p className="text-text-secondary mb-8">
                                    Vous pouvez me joindre directement via ces coordonnées ou en utilisant le formulaire de contact.
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="bg-primary/20 p-3 rounded-full"><Mail className="w-6 h-6 text-primary" /></div>
                                        <div>
                                            <h3 className="font-semibold">Email</h3>
                                            <a href="mailto:contact@didacid.fr" className="text-primary hover:underline">contact@didacid.fr</a>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-primary/20 p-3 rounded-full"><Phone className="w-6 h-6 text-primary" /></div>
                                        <div>
                                            <h3 className="font-semibold">Téléphone</h3>
                                            <p className="text-text-secondary">01 23 45 67 89 (fictif)</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-primary/20 p-3 rounded-full"><Clock className="w-6 h-6 text-primary" /></div>
                                        <div>
                                            <h3 className="font-semibold">Horaires</h3>
                                            <p className="text-text-secondary">Lundi - Vendredi : 9h - 18h</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-8 sm:p-12">
                                {formState === 'success' ? (
                                    <div className="flex flex-col items-center justify-center h-full text-center">
                                        <div className="bg-green-900/50 text-green-300 p-8 rounded-lg">
                                            <h2 className="text-2xl font-bold">Message Envoyé !</h2>
                                            <p className="mt-2">Merci ! Je vous répondrai dans les plus brefs délais.</p>
                                        </div>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="sr-only">Votre Nom</label>
                                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} placeholder="Votre Nom" className={`w-full bg-gray-800 border rounded-md py-2 px-4 focus:ring-primary focus:border-primary ${errors.name ? 'border-red-500' : 'border-gray-700'}`} />
                                            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="sr-only">Votre Email</label>
                                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} placeholder="Votre Email" className={`w-full bg-gray-800 border rounded-md py-2 px-4 focus:ring-primary focus:border-primary ${errors.email ? 'border-red-500' : 'border-gray-700'}`} />
                                            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="sr-only">Sujet</label>
                                            <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} onBlur={handleBlur} placeholder="Sujet" className={`w-full bg-gray-800 border rounded-md py-2 px-4 focus:ring-primary focus:border-primary ${errors.subject ? 'border-red-500' : 'border-gray-700'}`} />
                                            {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="sr-only">Votre Message</label>
                                            <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} onBlur={handleBlur} placeholder="Votre Message..." className={`w-full bg-gray-800 border rounded-md py-2 px-4 focus:ring-primary focus:border-primary ${errors.message ? 'border-red-500' : 'border-gray-700'}`}></textarea>
                                            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                                        </div>
                                        <div className="text-right">
                                            <button type="submit" disabled={formState === 'submitting'} className="inline-flex items-center gap-2 bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all disabled:bg-gray-500">
                                                {formState === 'submitting' ? <><Loader2 className="animate-spin" /> Envoi...</> : <><Send size={20} /> Envoyer</>}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
