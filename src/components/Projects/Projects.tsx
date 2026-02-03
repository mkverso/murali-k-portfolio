import React from 'react';
import { PROJECTS } from '../../constants';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { ScrollWrapper } from '../ScrollWrapper/ScrollWrapper';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-light relative overflow-hidden">
      {/* Tech Logo Watermark (JS) */}
      <div className="absolute bottom-[10%] left-[5%] opacity-[0.05] pointer-events-none select-none z-0 -rotate-12 scale-75 md:scale-100">
        <svg width="300" height="300" viewBox="0 0 24 24" fill="#31363F" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3h18v18H3V3zm15.425 15.011c-.347-.211-.539-.333-.941-.58-.292-.178-.344-.199-.516-.307-.221-.132-.387-.251-.555-.412-.086-.086-.145-.164-.2-.266-.1-.184-.131-.295-.145-.515-.015-.224.015-.403.1-.579.083-.178.204-.33.364-.46.195-.157.409-.251.644-.284.153-.019.229-.019.387 0 .211.026.37.071.516.15.111.06.183.111.266.191l.144.143v-2.001l-.226-.144c-.22-.144-.393-.217-.611-.274-.117-.03-.231-.05-.36-.062-.069-.009-.23-.013-.341-.013-.393 0-.693.064-.972.204-.263.134-.486.331-.628.56-.091.144-.15.301-.182.46-.017.091-.017.26-.002.355.021.144.053.251.111.37.071.143.167.288.27.423.083.091.166.168.271.266l.169.155c.168.143.344.271.514.385.111.066.216.143.344.218.105.06.219.123.344.184.22.115.365.184.505.251.196.091.311.134.455.195.143.06.262.111.411.168-.134.017-.229.022-.229.022z" />
          <path d="M12.5 15.222V13.5h.352c.241 0 .445.083.611.25.167.167.25.371.25.611s-.083.444-.25.611c-.166.167-.37.25-.611.25H12.5zm0-2.444V11.5h.352c.241 0 .445.083.611.25.167.167.25.371.25.611s-.083.444-.25.611c-.166.167-.37.25-.611.25H12.5z" />
        </svg>
      </div>

      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-tealer/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="px-6 max-w-7xl mx-auto relative z-10">
        <ScrollWrapper className="text-center mb-12 md:mb-16">
          <h2 className="text-tealer font-mono font-bold text-xs md:text-sm tracking-widest uppercase mb-4">Projects</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-dark-900 mb-6">Engineered <span className="text-tealer">Solutions.</span></h3>
          <p className="text-dark-800/70 max-w-2xl mx-auto">
            A portfolio of high-performance applications demonstrating proficiency in AI integration, complex state management, and enterprise CMS architecture.
          </p>
        </ScrollWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
