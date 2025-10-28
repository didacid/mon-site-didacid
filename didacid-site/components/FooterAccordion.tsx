import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FooterAccordionProps {
  title: string;
  children: React.ReactNode;
}

const FooterAccordion: React.FC<FooterAccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-2"
      >
        <h3 className="font-semibold text-text-primary">{title}</h3>
        <ChevronDown
          className={`w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
            <div className="pt-3">
                {children}
            </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAccordion;
