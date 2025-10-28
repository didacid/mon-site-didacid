import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Twitter, Linkedin, Github } from 'lucide-react';
import FooterAccordion from './FooterAccordion';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            console.log('Subscribed with:', email);
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    const socialLinks = [
        { href: '#', icon: <Twitter size={20} />, label: 'Twitter' },
        { href: '#', icon: <Linkedin size={20} />, label: 'LinkedIn' },
        { href: '#', icon: <Github size={20} />, label: 'GitHub' },
    ];

    const navLinks = [
        { to: '/', label: 'Accueil' },
        { to: '/services', label: 'Services' },
        { to: '/pricing', label: 'Tarifs' },
        { to: '/blog', label: 'Blog' },
    ];

    const supportLinks = [
        { to: '/faq', label: 'FAQ' },
        { to: '/contact', label: 'Contact' },
        { to: '/ai-support', label: 'Support IA' },
    ];

    const legalLinks = [
        { to: '/about', label: 'À Propos' },
        { to: '/legal', label: 'Mentions Légales' },
        { to: '/privacy', label: 'Confidentialité' },
        { to: '/terms', label: 'Conditions de Vente' },
    ];
    
    return (
        <footer className="bg-surface border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-4 lg:col-span-5">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <Bot className="w-8 h-8 text-primary" />
                            <span className="text-2xl font-bold text-text-primary">Didacid</span>
                        </Link>
                        <p className="text-text-secondary text-sm max-w-xs">
                            Votre expert en assistance informatique, réinventé par l'IA.
                        </p>
                        <form onSubmit={handleSubscribe} className="mt-6 max-w-sm">
                            <h3 className="font-semibold text-text-primary mb-2 text-base">Rejoindre la newsletter</h3>
                             {subscribed ? (
                                <p className="text-green-400">Merci pour votre inscription !</p>
                            ) : (
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input 
                                      type="email" 
                                      placeholder="votre.email@example.com" 
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      className="w-full bg-gray-800 border-gray-700 rounded-md py-2 px-4 text-sm focus:ring-primary focus:border-primary" 
                                      required
                                    />
                                    <button type="submit" className="bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-opacity-80 transition-all flex-shrink-0">
                                        S'inscrire
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                    <div className="md:col-span-8 lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="w-full">
                           <FooterAccordion title="Navigation">
                                <ul className="space-y-3">
                                    {navLinks.map(link => (
                                        <li key={link.to}><Link to={link.to} className="hover:text-primary transition-colors">{link.label}</Link></li>
                                    ))}
                                </ul>
                            </FooterAccordion>
                        </div>
                         <div className="w-full">
                            <h3 className="font-semibold text-text-primary mb-4 hidden md:block">Support</h3>
                            <div className="md:hidden">
                                <FooterAccordion title="Support">
                                     <ul className="space-y-3">
                                        {supportLinks.map(link => (
                                            <li key={link.to}><Link to={link.to} className="hover:text-primary transition-colors">{link.label}</Link></li>
                                        ))}
                                    </ul>
                                </FooterAccordion>
                            </div>
                             <ul className="space-y-3 hidden md:block">
                                {supportLinks.map(link => (
                                    <li key={link.to}><Link to={link.to} className="hover:text-primary transition-colors">{link.label}</Link></li>
                                ))}
                            </ul>
                        </div>
                         <div className="w-full">
                           <h3 className="font-semibold text-text-primary mb-4 hidden md:block">Légal</h3>
                           <div className="md:hidden">
                               <FooterAccordion title="Légal">
                                     <ul className="space-y-3">
                                        {legalLinks.map(link => (
                                            <li key={link.to}><Link to={link.to} className="hover:text-primary transition-colors">{link.label}</Link></li>
                                        ))}
                                    </ul>
                                </FooterAccordion>
                           </div>
                             <ul className="space-y-3 hidden md:block">
                                {legalLinks.map(link => (
                                    <li key={link.to}><Link to={link.to} className="hover:text-primary transition-colors">{link.label}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-text-secondary">
                    <p>&copy; {new Date().getFullYear()} Didacid. Tous droits réservés.</p>
                    <div className="flex gap-4 mt-4 sm:mt-0">
                        {socialLinks.map(link => (
                            <a key={link.label} href={link.href} aria-label={link.label} className="text-text-secondary hover:text-primary transition-colors">
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
