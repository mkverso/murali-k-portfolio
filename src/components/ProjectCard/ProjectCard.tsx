import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ScrollWrapper } from '../ScrollWrapper/ScrollWrapper';

interface ProjectCardProps {
  project: any;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <ScrollWrapper delay={index * 0.1} variant="fade" className="h-full">
      <div className="group relative h-full bg-brand-card border border-white/5 rounded-2xl overflow-hidden hover:border-brand-primary/40 transition-all duration-500 flex flex-col">
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-0 group-hover:saturate-100"
          />
          <div className="absolute inset-0 bg-brand-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 backdrop-blur-sm">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-primary text-white rounded-full hover:bg-brand-primary/80 transition-colors shadow-xl transform hover:scale-110">
                <ExternalLink size={20} />
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-brand-bg rounded-full hover:bg-slate-200 transition-colors shadow-xl transform hover:scale-110">
                <Github size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="p-8 flex-1 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t: string) => (
              <span key={t} className="text-[10px] font-mono font-bold uppercase text-brand-text bg-brand-bg border border-white/5 px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
          <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-primary transition-colors">{project.title}</h4>
          <p className="text-slate-400 line-clamp-3 mb-6 leading-relaxed flex-1 text-sm">
            {project.description}
          </p>
        </div>
      </div>
    </ScrollWrapper>
  );
};
