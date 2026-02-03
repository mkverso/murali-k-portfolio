import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, GraduationCap, Calendar, Terminal, FileCode, CheckCircle2, Circle } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../../constants';

export const Certifications: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'education' | 'certifications'>('education');

    return (
        <section className="py-24 bg-dark-900 relative overflow-hidden">
            {/* Background blur effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tealer/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="px-6 max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Credentials</h2>
                    <p className="text-white/40 font-mono text-sm tracking-widest uppercase">Verified expertise and academic foundation</p>
                </motion.div>

                {/* Terminal Card */}
                <div className="rounded-3xl bg-[#0F172A]/80 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
                    {/* Terminal Header */}
                    <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex items-center justify-between">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="flex items-center gap-2 text-white/40 font-mono text-xs">
                            <Terminal size={14} />
                            <span>credentials.sh — {activeTab === 'education' ? 'edu_path' : 'cert_list'}</span>
                        </div>
                        <div className="w-12" /> {/* Spacer */}
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex p-2 bg-black/20 gap-2">
                        <button
                            onClick={() => setActiveTab('education')}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === 'education' ? 'bg-tealer text-dark-900' : 'text-white/40 hover:text-white bg-white/5'}`}
                        >
                            <GraduationCap size={18} />
                            Education
                        </button>
                        <button
                            onClick={() => setActiveTab('certifications')}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === 'certifications' ? 'bg-tealer text-dark-900' : 'text-white/40 hover:text-white bg-white/5'}`}
                        >
                            <Award size={18} />
                            Certifications
                        </button>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 md:p-10 min-h-[450px]">
                        <AnimatePresence mode="wait">
                            {activeTab === 'education' ? (
                                <motion.div
                                    key="education"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="space-y-10"
                                >
                                    {EDUCATION.map((edu, idx) => (
                                        <div key={idx} className="relative pl-8 border-l border-tealer/30">
                                            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-tealer shadow-[0_0_10px_#76ABAE]" />
                                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                                <div>
                                                    <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-tealer transition-colors">
                                                        {edu.degree}
                                                    </h4>
                                                    <p className="text-tealer/80 font-medium">{edu.school}</p>
                                                </div>
                                                {edu?.year && (
                                                    <span className="font-mono text-sm text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                                        {edu.year}
                                                    </span>
                                                )}
                                            </div>
                                            <ul className="space-y-2 mt-4">
                                                {edu.details.map((detail, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                                                        <FileCode size={14} className="mt-1 text-tealer/40 flex-shrink-0" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="certifications"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="grid gap-4"
                                >
                                    {CERTIFICATIONS.map((cert, idx) => (
                                        <motion.div
                                            key={cert.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-center p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-tealer/20 transition-all group"
                                        >
                                            <div className="mr-5 p-3 rounded-xl bg-dark-900 border border-white/5 text-tealer group-hover:bg-tealer group-hover:text-dark-900 transition-colors">
                                                <Award size={20} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="font-bold text-white truncate">{cert.name}</h4>
                                                    {cert.status === 'Completed' && (
                                                        <CheckCircle2 size={14} className="text-tealer flex-shrink-0" />
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="font-mono text-[10px] text-white/30 uppercase">{cert.id}</span>
                                                    <span className="w-1 h-1 rounded-full bg-white/10" />
                                                    <span className="font-mono text-[10px] text-tealer font-bold tracking-widest">{cert.date}</span>
                                                </div>
                                            </div>
                                            <div className="hidden sm:block">
                                                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${cert.status === 'Completed' ? 'text-tealer border-tealer/20 bg-tealer/5' : 'text-white/20 border-white/5 bg-white/5'}`}>
                                                    {cert.status}
                                                </span>
                                            </div>
                                            <div className="sm:hidden ml-3">
                                                {cert.status === 'Completed' ? <CheckCircle2 size={16} className="text-tealer" /> : <Circle size={16} className="text-white/10" />}
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Footer Status Bar */}
                    <div className="bg-black/40 border-t border-white/10 px-6 py-3 flex items-center gap-6 overflow-hidden whitespace-nowrap">
                        <div className="flex items-center gap-2 text-[10px] font-mono font-bold">
                            <span className="text-tealer uppercase select-none">Branch:</span>
                            <span className="text-white/60">main*</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-mono font-bold">
                            <span className="text-purple-400 uppercase select-none">Status:</span>
                            <span className="text-white/60">Ready to Deploy</span>
                        </div>
                        <div className="flex-1" />
                        <div className="text-[10px] font-mono text-white/20 select-none">UTF-8</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
