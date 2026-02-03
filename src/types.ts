
export interface Project {
  id: number;
  title: string;
  tech: string[];
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'CMS' | 'Backend';
}

export interface Hubspotconfig {
  portalId: string;
  formId: string;
  target: string;
}