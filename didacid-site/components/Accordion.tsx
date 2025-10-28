import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5 px-2"
      >
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        <ChevronDown
          className={`w-6 h-6 text-primary transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 px-2 text-text-secondary">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
