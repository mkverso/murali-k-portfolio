import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Layout, Smartphone, Server, Cpu, Cloud } from 'lucide-react';
import { EXPERIENCES } from '../../constants';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tealer/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Icons - Left Side */}
      <div className="absolute left-4 md:left-10 top-20 bottom-20 w-12 md:w-20 flex flex-col justify-between items-center z-0 opacity-20 pointer-events-none hidden md:flex">
        <Code2 size={40} className="text-tealer rotate-12" />
        <Database size={40} className="text-white -rotate-12" />
        <Server size={40} className="text-tealer rotate-6" />
        <Globe size={40} className="text-white -rotate-6" />
      </div>

      {/* Floating Icons - Right Side */}
      <div className="absolute right-4 md:right-10 top-20 bottom-20 w-12 md:w-20 flex flex-col justify-between items-center z-0 opacity-20 pointer-events-none hidden md:flex">
        <Layout size={40} className="text-tealer -rotate-12" />
        <Smartphone size={40} className="text-white rotate-12" />
        <Cpu size={40} className="text-tealer -rotate-6" />
        <Cloud size={40} className="text-white rotate-6" />
      </div>

      <div className="px-6 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-tealer font-mono font-bold text-xs md:text-sm tracking-widest uppercase mb-4">Journey</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Work Experience</h3>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-8 border-l-2 border-white/5 pb-12 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-dark-900 border-2 border-tealer rounded-full shadow-[0_0_10px_rgba(118,171,174,0.5)]" />
              <div className="relative bg-brand-card/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-tealer/30 transition-all duration-300 shadow-lg hover:shadow-xl group">
                <span className="text-xs font-bold text-tealer bg-tealer/10 border border-tealer/20 px-3 py-1 rounded-full mb-4 inline-block font-mono">
                  {exp.period}
                </span>
                <h4 className="text-2xl font-bold mb-1 text-white group-hover:text-tealer transition-colors">{exp.role}</h4>
                <p className="text-white/60 font-medium mb-6 font-mono text-sm">{exp.company}</p>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {exp.achievements && (
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-tealer/50 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
