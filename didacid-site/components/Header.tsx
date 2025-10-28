import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bot, Menu, X, UserCircle, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const navLinks = [
    { to: '/services', label: 'Services' },
    { to: '/pricing', label: 'Tarifs' },
    { to: '/blog', label: 'Blog' },
    { to: '/about', label: 'À Propos' },
    { to: '/contact', label: 'Contact' },
    { to: '/faq', label: 'FAQ' },
  ];

  const activeLinkClass = "text-primary";
  const inactiveLinkClass = "hover:text-primary transition-colors";
  
  const renderUserActions = () => {
    if (user?.isSubscribed) {
      return (
        <div className="relative group">
          <Link to="/client-area" className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-text-primary font-semibold py-2 px-4 rounded-full transition-colors">
            <UserCircle size={20} />
            <span>Espace Client</span>
          </Link>
          <div className="absolute top-full right-0 mt-2 w-48 bg-surface rounded-md shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
            <button onClick={logout} className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-gray-700 rounded-md">
              <LogOut size={16}/>
              Se déconnecter
            </button>
          </div>
        </div>
      );
    }
    if (user?.hasActiveTicket) {
      return (
        <Link to="/premium-support" className="bg-primary text-white font-semibold py-2 px-6 rounded-full hover:bg-opacity-80 transition-all">
          Support Premium
        </Link>
      );
    }
    return (
      <Link to="/ai-support" className="bg-primary text-white font-semibold py-2 px-6 rounded-full hover:bg-opacity-80 transition-all">
        Assistant IA
      </Link>
    );
  };
  
  const renderMobileUserActions = () => {
     if (user?.isSubscribed) {
      return (
        <>
          <Link to="/client-area" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-text-primary font-semibold py-2 px-4 rounded-full transition-colors w-full">
            <UserCircle size={20} />
            <span>Espace Client</span>
          </Link>
          <button onClick={() => { logout(); setIsOpen(false); }} className="w-full text-center flex items-center justify-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-red-900/50 rounded-md">
            <LogOut size={16}/>
            Se déconnecter
          </button>
        </>
      );
    }
    if (user?.hasActiveTicket) {
      return (
        <Link to="/premium-support" onClick={() => setIsOpen(false)} className="bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-opacity-80 transition-all w-full text-center">
          Support Premium
        </Link>
      );
    }
    return (
       <Link to="/ai-support" onClick={() => setIsOpen(false)} className="bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-opacity-80 transition-all w-full text-center">
        Assistant IA
      </Link>
    );
  }

  return (
    <header className="bg-surface/80 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <Bot className="w-8 h-8 text-primary" />
            <span className="text-xl sm:text-2xl font-bold text-text-primary">Didacid</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <NavLink to="/" className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} font-semibold px-2 py-1`}>Accueil</NavLink>
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} font-semibold px-2 py-1`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            {renderUserActions()}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-surface absolute top-20 left-0 w-full shadow-lg animate-fadeIn z-50">
          <nav className="flex flex-col p-4 space-y-2">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => `p-3 rounded ${isActive ? 'bg-primary text-white' : 'hover:bg-gray-700'}`}>Accueil</NavLink>
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `p-3 rounded ${isActive ? 'bg-primary text-white' : 'hover:bg-gray-700'}`}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="border-t border-gray-700 pt-4 mt-2 flex flex-col items-center gap-4">
              {renderMobileUserActions()}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;