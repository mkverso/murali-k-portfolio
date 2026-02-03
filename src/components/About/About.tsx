import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tealer/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-tealer font-mono font-bold tracking-widest uppercase mb-4 text-xs md:text-sm">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">4+ Years of crafting digital experiences.</h3>
            <p className="text-slate-300 leading-loose text-lg mb-8">
              Detail-oriented Web Developer with 4+ years of experience developing and supporting responsive web interfaces,
              CMS platforms, and custom UI solutions. Skilled in React.js, accessibility standards, and user interface layout.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl group hover:border-tealer/30 transition-all duration-300">
                <h4 className="text-3xl font-bold text-white mb-1">4+</h4>
                <p className="text-sm text-tealer font-mono uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl group hover:border-tealer/30 transition-all duration-300">
                <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
                <p className="text-sm text-tealer font-mono uppercase tracking-wider">Projects Done</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-tealer/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-dark-800 rounded-[2rem] overflow-hidden aspect-square flex items-center justify-center p-8 border border-white/5 shadow-2xl">
              <Code2 size={120} className="text-white/5 absolute top-4 left-4" />
              <Layout size={100} className="text-white/5 absolute bottom-4 right-4" />
              <div className="text-center relative z-10">
                <div className="relative inline-block">
                  <div className="absolute -inset-1 bg-tealer rounded-2xl blur opacity-20"></div>
                  <img
                    src="/images/experience-developer.jpeg"
                    alt="Profile"
                    className="w-64 h-64 rounded-2xl object-cover mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl relative z-10"
                  />
                </div>
                <p className="font-bold text-xl uppercase tracking-widest text-white mt-4">Murali K.</p>
                <p className="text-tealer font-mono text-sm mt-1">Bengaluru, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
