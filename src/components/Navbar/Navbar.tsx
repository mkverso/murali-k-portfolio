import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from '../Logo/Logo';
import { navLinks } from '../../constants';


export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const [logoSize, setLogoSize] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      setLogoSize(window.innerWidth < 768 ? 60 : 100);
    };
    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-dark-900/95 border-b border-white/5 backdrop-blur-sm shadow-xl' : 'py-6 bg-dark-900 border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group text-white"
        >
          <Logo size={logoSize} />
        </motion.a>

        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-tealer transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="#contact" className="px-6 py-2.5 bg-tealer text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(118,171,174,0.4)] transition-all transform hover:-translate-y-0.5">
            Hire Me
          </a>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white hover:bg-white/5 rounded-lg transition-colors" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-900 border-t border-white/5 overflow-hidden backdrop-blur-lg"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white/70 hover:text-white pl-4 border-l-2 border-transparent hover:border-tealer transition-all uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-tealer text-white font-bold rounded-xl text-center shadow-lg active:scale-95 transition-all"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
