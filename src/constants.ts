import { Database, Layout, Terminal, Layers } from 'lucide-react';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERIENCES = [
  {
    company: "ZOOZOO | OUNCECOUNTS TECHNOLOGIES",
    role: "Web Developer",
    period: "Sep 2022 – Aug 2025",
    description: "Developing and supporting responsive web interfaces, CMS platforms, and custom UI solutions.",
    technories: ["React", "PHP", "HubSpot CMS", "WordPress", "HUBL"],
    achievements: [
      "Developed and customized HubSpot and WordPress interfaces, ensuring accurate functional requirements, usability, and visual standards.",
      "Built multiple web applications using React, PHP, HUBL improving responsiveness and user engagement.",
      "Delivered UI components compliant with accessibility principles and cross-browser compatibility.",
      "Maintained interface updates, layout changes, and backend data integration."
    ]
  },
  {
    company: "INBOUNDSYS",
    role: "Associate Web Developer",
    period: "Aug 2021 – Sep 2022",
    description: "Focused on responsive web pages and accessibility.",
    technories: ["HTML", "CSS", "JavaScript", "jQuery", "HubSpot"],
    achievements: [
      "Developed responsive web pages using HTML, CSS, JavaScript, and jQuery focused on accessibility and usability.",
      "Created custom HubSpot and WordPress modules for client requirements.",
      "Supported UI design, layout improvements, and ongoing upgrades."
    ]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "LiteGPT AI Chat Interface",
    description: "A premium multi-modal AI interface with vision support and real-time markdown rendering. Features robust client-side session management and persistent storage.",
    tech: ["React", "TypeScript", "Vite", "Puter.js"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://promptgpt-alpha.vercel.app/",
    githubUrl: "https://github.com/mkverso"
  },
  {
    id: 2,
    title: "Kiosk Systems Platform",
    description: "Touch-optimized interfaces for retail and hospitality sectors with integrated payment gateways and inventory systems using React Context.",
    tech: ["React", "Tailwind", "APIs", "Context API"],
    image: "/images/Kiosk-Systems-Platform.jpg",
    liveUrl: "https://8mcl54-5173.csb.app/",
    githubUrl: "https://github.com/mkverso"
  },
  {
    id: 3,
    title: "Food Ordering Suite",
    description: "Designed responsive ordering flows and real-time tracking, focusing on improving customer experience and ordering usability.",
    tech: ["React", "Redux", "Tailwind", "APIs"],
    image: "/images/Food-Ordering-Suite.png",
    liveUrl: "#",
    githubUrl: "https://github.com/mkverso"
  },
  {
    id: 4,
    title: "Multi-Industry Portfolio",
    description: "Delivered responsive and accessible websites on HubSpot CMS and WordPress, improving CMS usability and performance.",
    tech: ["HubSpot CMS", "WordPress", "PHP"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    liveUrl: "#",
    githubUrl: "https://github.com/mkverso"
  }
];

export const SKILLS = [
  {
    category: "Frontend",
    icon: Layout,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Angular", "jQuery", "Tailwind CSS"]
  },
  {
    category: "CMS & Tools",
    icon: Layers,
    skills: ["HubSpot CMS", "WordPress", "VS Code", "Git"]
  },
  {
    category: "Backend & Programming",
    icon: Terminal,
    skills: ["Node.js", "PHP", "Python", "Java", "C", "C++"]
  },
  {
    category: "Databases & API",
    icon: Database,
    skills: ["MySQL", "JSON", "API Integration", "REST"]
  }
];

export const CORE_COMPETENCIES = [
  {
    name: "Web Interface Programming",
    description: "Building responsive, accessible, and high-performance user interfaces using modern React ecosystem and Tailwind CSS."
  },
  {
    name: "Performance Optimization",
    description: "Enhancing application speed through code splitting, lazy loading, image optimization, and efficient state management."
  },
  {
    name: "Project Architecture",
    description: "Designing scalable frontend architectures with clean code principles, reusable components, and robust state management patterns."
  },
  {
    name: "Deadline Management",
    description: "Delivering high-quality software solutions within strict timelines through effective prioritization and agile methodologies."
  },
  {
    name: "AI Driven Development",
    description: "Integrating LLMs and AI visualization tools to create intelligent, multi-modal user experiences."
  },
  {
    name: "Cross-Browser Compatibility",
    description: "Ensuring consistent functionality and design across all major browsers and device types."
  }
];

// export const SOCIAL_LINKS = {
//   github: "https://github.com/mkverso",
//   linkedin: "https://www.linkedin.com/in/murali-k-dev",
//   email: "muralikshetty5@gmail.com",
//   portfolio: "#"
// };

export const WEB3FORMS_ACCESS_KEY = "13db9687-f044-4798-bb4c-28ca4004971f";

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Science",
    school: "University of Mysore, Mysore",
    details: [
      "Focused on Data Structures and Algorithms",
      "Core subjects: foundational IT skills, programming, and system design, typically covering Computer Fundamentals, C/C++/Java/Python programming, Data Structures, Database Management Systems (DBMS), Operating Systems, and Software Engineering",
      "Final Project: Web-based Management System"
    ]
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    school: "DTE Board, Bangalore",
    year: "2014–2017",
    details: [
      "Foundation in Computer Hardware and Networking",
      "Hands-on experience with C, C++, Java, HTML, CSS, JavaScript",
      "Project on Android Application using Java"
    ]
  }
];

export const CERTIFICATIONS = [
  { name: "JavaScript Practical’s Crash Course", date: "Dec 2025", status: "Completed", id: "JS-01" },
  { name: "The Modern JavaScript Course", date: "Dec 2025", status: "Completed", id: "JS-02" },
  { name: "ReactJs - The Complete ReactJs Course", date: "2026", status: "Completed", id: "RT-01" },
  { name: "Frontend Developer (React) Certificate - HackerRank", date: "2026", status: "Completed", id: "HR-03" },
];