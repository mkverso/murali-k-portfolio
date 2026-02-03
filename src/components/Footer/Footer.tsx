import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Logo } from '../Logo/Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
        <div className="flex items-center gap-2 text-white">
          <Logo size={100} />
        </div>

        <div className="text-white/50 text-sm max-w-xs md:max-w-none">
          © {currentYear} Murali K. Crafted with React & Tailwind.
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/mkverso" target="_blank" rel="noopener noreferrer" className="p-2 text-white/50 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="www.linkedin.com/in/murali-k-dev" target="_blank" rel="noopener noreferrer" className="p-2 text-white/50 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:muralikshetty5@gmail.com" className="p-2 text-white/50 hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};
