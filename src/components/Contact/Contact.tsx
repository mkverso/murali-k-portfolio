import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ScrollWrapper } from '../ScrollWrapper/ScrollWrapper';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-bl from-tealer to-light relative overflow-hidden">

      {/* Tech Logo Watermark (React/Tech) - High Visibility */}
      <div className="absolute top-[10%] right-[15%] opacity-[0.4] md:opacity-[0.7] pointer-events-none select-none z-0 rotate-[15deg] scale-75 md:scale-100">
        <svg width="450" height="450" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg" fill="#76ABAE">
          <circle cx="0" cy="0" r="2.05" />
          <g stroke="#76ABAE" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      </div>

      <div className="px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div className="lg:pr-12">
            <ScrollWrapper variant="slide">
              <h2 className="text-dark-800/70 font-mono tracking-widest uppercase mb-4 font-bold text-xs md:text-sm">Get in Touch</h2>
              <h3 className="text-3xl md:text-6xl font-bold mb-8 tracking-tight text-dark-900 leading-tight">
                Let's create something <span className="text-tealer">legendary.</span>
              </h3>
              <p className="text-dark-800/70 text-lg mb-12 leading-relaxed max-w-lg font-medium">
                Whether you have a ground-breaking idea or need a hand with a complex project,
                I'm here to build high-quality, scalable digital solutions.
              </p>
            </ScrollWrapper>

            <div className="space-y-8">
              <ScrollWrapper delay={0.2} variant="fade">
                <div className="flex items-center space-x-6 group">
                  <div className="p-4 rounded-2xl text-tealer bg-white border border-dark-900/5 group-hover:bg-tealer group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-tealer font-bold uppercase tracking-widest mb-1">Email me</p>
                    <a href="mailto:muralikshetty5@gmail.com" className="text-xl font-bold text-dark-900 group-hover:text-tealer transition-colors tracking-tight underline decoration-tealer/20 underline-offset-4">muralikshetty5@gmail.com</a>
                  </div>
                </div>
              </ScrollWrapper>

              <ScrollWrapper delay={0.4} variant="fade">
                <div className="flex items-center space-x-6 group">
                  <div className="p-4 rounded-2xl text-tealer bg-white border border-dark-900/5 group-hover:bg-tealer group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-tealer font-bold uppercase tracking-widest mb-1">Location</p>
                    <p className="text-xl font-bold text-dark-900 tracking-tight">Bengaluru, KA, India</p>
                  </div>
                </div>
              </ScrollWrapper>
            </div>
          </div>

          {/* Right Side Form Card */}
          <ScrollWrapper delay={0.3} variant="scale" className="relative mt-12 lg:mt-0">
            {/* Decorative glow - adjusted for light theme */}
            <div className="absolute -inset-4 bg-tealer/5 rounded-[3rem] blur-2xl opacity-10"></div>

            <div className="relative bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-dark-900/5">
              <ContactForm />
            </div>
          </ScrollWrapper>
        </div>
      </div>
    </section>
  );
};
