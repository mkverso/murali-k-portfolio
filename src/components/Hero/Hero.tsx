import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronRight, Download, Zap, Award, Code2, Activity, ShieldCheck } from 'lucide-react';

const Typewriter = ({ text, delay }: { text: string; delay: number }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse text-tealer">|</span>
    </span>
  );
};

const FloatingMetric = ({ label, value, icon, className, delay, color = "tealer" }: any) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute p-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-tealer/20 flex items-center gap-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] z-20 hover:scale-105 transition-transform duration-300 ${className}`}
  >
    <div className={`p-2.5 rounded-xl bg-tealer/10 text-tealer shadow-inner`}>
      {icon}
    </div>
    <div className="flex flex-col">
      <p className="text-[10px] text-dark-900/40 uppercase font-black tracking-widest leading-none mb-1">{label}</p>
      <p className="text-sm font-black text-dark-900 tracking-tight leading-none">{value}</p>
    </div>
  </motion.div>
);

const TechPulseDashboard = () => {
  return (
    <div className="relative w-full aspect-square flex items-center justify-center pt-8 md:pt-0">
      {/* Background interactive field */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-tealer/5 rounded-full blur-[100px]" />
      </div>

      {/* Main Container with 3D Interaction */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ rotateX: 2, rotateY: 2 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
        className="relative w-full max-w-md aspect-square bg-[#1A1F26]/60 backdrop-blur-2xl rounded-[3.5rem] border border-white/10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] p-10 flex flex-col items-center justify-center group preserve-3d"
      >
        {/* Decorative Grid */}
        <div className="absolute inset-x-8 inset-y-8 rounded-[2.5rem] opacity-[0.03] pointer-events-none border-2 border-dashed border-white" />

        {/* Central Tech Core */}
        <div className="relative z-10">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-44 h-44 rounded-full bg-gradient-to-tr from-tealer/20 to-tealer/5 border-2 border-tealer/30 flex items-center justify-center relative"
          >
            {/* Animated Rings */}
            <div className="absolute inset-[-15px] rounded-full border border-tealer/20 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-[-10px] rounded-full border-2 border-dashed border-tealer/10 animate-[spin_15s_linear_infinite_reverse]" />

            <div className="w-32 h-32 rounded-full border border-tealer/40 bg-tealer/10 flex items-center justify-center backdrop-blur-sm">
              <div className="w-16 h-16 bg-tealer rounded-3xl flex items-center justify-center shadow-[0_0_40px_#76ABAE] rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <Activity className="text-dark-900" size={32} />
              </div>
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <motion.h4
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-white font-black text-2xl tracking-tighter mb-1"
            >
              SYSTEM ONLINE
            </motion.h4>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tealer/10 border border-tealer/20 text-tealer font-mono text-[10px] uppercase font-black tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-tealer animate-pulse" />
              Core.PRO_v4.5
            </div>
          </div>
        </div>

        {/* Status Waveform at bottom */}
        <div className="absolute bottom-10 inset-x-12 opacity-30">
          <svg viewBox="0 0 200 30" className="w-full h-8 text-tealer">
            <motion.path
              d="M0 15 Q 10 5, 20 15 T 40 15 T 60 15 T 80 15 T 100 15 T 120 15 T 140 15 T 160 15 T 180 15 T 200 15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{
                d: "M0 15 Q 10 5, 20 15 T 40 15 T 60 15 T 80 15 T 100 15 T 120 15 T 140 15 T 160 15 T 180 15 T 200 15"
              }}
              animate={{
                d: [
                  "M0 15 Q 10 5, 20 15 T 40 15 T 60 15 T 80 15 T 100 15 T 120 15 T 140 15 T 160 15 T 180 15 T 200 15",
                  "M0 15 Q 10 25, 20 15 T 40 15 T 60 15 T 80 15 T 100 15 T 120 15 T 140 15 T 160 15 T 180 15 T 200 15",
                  "M0 15 Q 10 5, 20 15 T 40 15 T 60 15 T 80 15 T 100 15 T 120 15 T 140 15 T 160 15 T 180 15 T 200 15"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </div>

        {/* Floating Metric Cards */}
        <FloatingMetric
          label="Uptime"
          value="99.9%"
          icon={<Zap size={16} />}
          className="-top-2 -left-8 md:-left-12"
          delay={0}
        />
        <FloatingMetric
          label="Experience"
          value="4+ YRS"
          icon={<Award size={16} />}
          className="top-12 -right-8 md:-right-12"
          delay={1.2}
        />
        <FloatingMetric
          label="Stack Status"
          value="FULL CYCLE"
          icon={<Code2 size={16} />}
          className="bottom-20 -left-6 md:-left-8"
          delay={0.6}
        />
        <FloatingMetric
          label="Security"
          value="SHIELDED"
          icon={<ShieldCheck size={16} />}
          className="-bottom-4 right-4 md:right-8"
          delay={1.8}
        />
      </motion.div>
    </div>
  );
};

const GlassBlobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      animate={{
        x: [0, 100, 0],
        y: [0, 50, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-tealer/20 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{
        x: [0, -80, 0],
        y: [0, 120, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-tealer/10 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{
        x: [0, 50, 0],
        y: [0, -100, 0],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]"
    />
  </div>
);

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-bl from-tealer to-light pt-20 pb-12 md:pt-32 md:pb-20">
      {/* Layer 0: Animated Background Blobs */}
      <GlassBlobs />

      {/* Layer 1: Glass Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[100px] z-10 pointer-events-none" />

      {/* Layer 2: Tech Logo Watermark (repositioned over glass) */}
      <div className="absolute top-[10%] md:top-[15%] right-[5%] opacity-[0.3] md:opacity-[0.5] pointer-events-none select-none z-10 rotate-12 scale-50 md:scale-100">
        <svg width="500" height="500" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg" fill="#76ABAE">
          <circle cx="0" cy="0" r="2.05" />
          <g stroke="#76ABAE" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      </div>

      <div className="px-6 max-w-7xl w-full mx-auto relative z-20 flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* Left: Content */}
        <div className="flex-1 text-center md:text-left mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark-900/10 bg-dark-900/5 text-dark-900 font-mono text-xs md:text-sm mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-tealer animate-pulse" />
            Hi, I'm Murali K.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-dark-900 leading-[1.1] mb-6"
          >
            Full Stack <br />
            <span className="font-serif italic font-light text-[rgb(1_81_86_/_79%)]">
              <Typewriter text="Web Developer" delay={100} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-dark-800/80 max-w-lg mx-auto md:mx-0 mb-10 font-medium"
          >
            Specializing in <span className="font-semibold text-dark-900">React</span> & <span className="font-semibold text-dark-900">CMS Platforms</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <a href="#projects" className="px-8 py-4 bg-dark-900 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2 group">
              View Projects <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="/Resume/MuraliK-CV-2026.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-dark-900 text-dark-900 font-bold rounded-full hover:bg-dark-900 hover:text-white transition-all flex items-center gap-2">
              <Download size={20} /> Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right: Tech Pulse Dashboard Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 w-full max-w-lg relative"
        >
          <TechPulseDashboard />
        </motion.div>

      </div>
    </section>
  );
};
