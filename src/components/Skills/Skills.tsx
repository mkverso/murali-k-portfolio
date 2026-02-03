import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { SKILLS, CORE_COMPETENCIES } from '../../constants';
import { ScrollWrapper } from '../ScrollWrapper/ScrollWrapper';

export const Skills: React.FC = () => {
  // Memoize skills data to prevent unnecessary re-renders
  const skillsData = useMemo(() => SKILLS, []);
  const competencies = useMemo(() => CORE_COMPETENCIES, []);

  return (
    <section id="skills" className="py-16 md:py-24 bg-light relative overflow-hidden">
      {/* Tech Logo Watermark (Layers/Web) */}
      <div className="absolute top-[10%] left-[5%] opacity-[0.05] pointer-events-none select-none z-0 scale-75 md:scale-100">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="#31363F" strokeWidth="0.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>

      <div className="px-6 max-w-7xl mx-auto relative z-10">
        <ScrollWrapper className="text-center mb-12 md:mb-16">
          <h2 className="text-tealer font-mono font-bold text-xs md:text-sm tracking-wider uppercase mb-3">Technical Proficiency</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-dark-900 mb-6">Expertise & <span className="text-tealer">Tools</span></h3>
          <p className="text-dark-800/80 max-w-2xl mx-auto">
            A comprehensive toolkit refined over 4+ years of building scalable applications and enterprise CMS solutions.
          </p>
        </ScrollWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, idx) => (
            <ScrollWrapper key={category.category} delay={idx * 0.1} variant="scale" className="h-full">
              <div className="bg-white/80 backdrop-blur-sm border border-dark-900/5 rounded-2xl p-6 h-full hover:border-tealer/30 transition-colors group shadow-sm hover:shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-light border border-dark-900/5 text-tealer group-hover:scale-110 transition-transform">
                    <category.icon size={24} />
                  </div>
                  <h4 className="font-bold text-lg text-dark-900">{category.category}</h4>
                </div>

                <div className="flex flex-col gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center justify-between group/skill">
                      <span className="text-dark-800/70 text-sm font-medium group-hover/skill:text-tealer transition-colors">{skill}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-tealer/20 group-hover/skill:bg-tealer transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollWrapper>
          ))}
        </div>

        {/* Core Competencies Grid */}
        <div className="mt-20 max-w-7xl mx-auto">
          <ScrollWrapper variant="scale" className="bg-tealer rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-dark-900/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="text-center mb-12 relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold text-dark-900 mb-4">Core Competencies</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 relative z-10 min-h-[800px]">
              {competencies.map((comp, idx) => {
                let gridClasses = "";

                if (idx === 1) gridClasses = "md:col-start-2 md:row-start-1 md:row-span-2";
                else if (idx === 3) gridClasses = "md:col-start-1 md:row-start-2 md:row-span-2";
                else if (idx === 5) gridClasses = "md:col-start-2 md:row-start-3 md:col-span-2";
                else if (idx === 0) gridClasses = "md:col-start-1 md:row-start-1";
                else if (idx === 2) gridClasses = "md:col-start-3 md:row-start-1";
                else if (idx === 4) gridClasses = "md:col-start-3 md:row-start-2";

                return (
                  <ScrollWrapper
                    key={comp.name}
                    delay={0.1 + (idx * 0.05)}
                    variant="fade"
                    className={`h-full ${gridClasses}`}
                  >
                    <div className="p-8 rounded-2xl bg-white border border-dark-900/5 shadow-lg h-full transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-center">
                      <h5 className="font-bold text-xl text-dark-900 mb-4 tracking-tight">{comp.name}</h5>
                      <p className="text-dark-800/70 text-sm leading-relaxed font-medium">
                        {comp.description}
                      </p>
                    </div>
                  </ScrollWrapper>
                )
              })}
            </div>
          </ScrollWrapper>
        </div>
      </div>
    </section>
  );
};
