export const profile = {
  name: 'Pragati Ravi Gangoji',
  headline: 'Cloud Engineer • Software Developer • Systems Builder',
  subheadline:
    'Building scalable cloud solutions, intelligent systems, and real-world products through software engineering, automation, cybersecurity, and AI.',
  email: 'pragatiravi45@gmail.com',
  github: 'https://github.com/pragatiravi',
  linkedin: 'https://www.linkedin.com/in/pragati-gangoji/',
};

export const about = {
  lead: 'Computer Science undergraduate focused on building reliable, scalable systems and shipping products end to end.',
  body: [
    'I work at the intersection of cloud engineering and software development, with a practical bias toward automation, security, and clean system design. My interests span Cloud Engineering, Software Development, Cybersecurity, Artificial Intelligence, Product Engineering, System Design, and Automation.',
    'My goal is to become a Cloud Engineer and Systems Builder capable of designing scalable, secure, and intelligent technology products that solve real-world problems — from infrastructure and CI/CD pipelines to the application layer.',
  ],
};

export interface SkillGroup { title: string; items: string[]; }
export const skills: SkillGroup[] = [
  { title: 'Cloud & DevOps', items: ['AWS', 'Linux', 'Git', 'GitLab', 'Docker', 'CI/CD', 'Render'] },
  { title: 'Programming', items: ['Python', 'JavaScript', 'C++', 'SQL', 'C'] },
  { title: 'Backend', items: ['Node.js', 'Flask', 'Django', 'REST APIs'] },
  { title: 'Frontend', items: ['ReactJS', 'TypeScript'] },
  { title: 'Databases', items: ['MongoDB', 'MySQL', 'SQLite'] },
  { title: 'Other', items: ['System Design', 'Automation', 'API Integration', 'Problem Solving', 'Product Development'] },
];

export interface Experience {
  company: string; role: string; period: string; highlights: string[]; tech: string[];
}
export const experience: Experience[] = [
  {
    company: 'Theta Dynamics Pvt. Ltd.',
    role: 'Developer Intern',
    period: 'October 2025 – April 2026',
    highlights: [
      'Contributed to Theta OS development on Linux-based systems',
      'Built Python automation for internal workflows',
      'Gained hands-on AWS and DevOps workflow exposure',
      'Collaborated through Git-based version control',
    ],
    tech: ['Python', 'Linux', 'AWS', 'Git', 'DevOps'],
  },
  {
    company: 'Ei Systems Technologies',
    role: 'Full Stack Development Intern',
    period: 'January 2025 – April 2025',
    highlights: [
      'Developed frontend and backend features end to end',
      'Designed and consumed REST APIs',
      'Implemented authentication systems and database integration',
      'Owned deployment workflows for shipped features',
    ],
    tech: ['ReactJS', 'Node.js', 'MongoDB'],
  },
];

export interface Leadership { org: string; role: string; }
export const leadership: Leadership[] = [
  { org: 'ACM AITM', role: 'Vice Chair' },
  { org: 'Regional Coordinator', role: 'Karnataka' },
  { org: 'ACM AITM', role: 'President' },
];

export interface Project {
  name: string; summary: string; tech: string[]; achievements: string; status: string; featured?: boolean;
}
export const projects: Project[] = [
  {
    name: 'Securo',
    summary: 'Flagship security platform unifying scanning, monitoring, and intelligent threat insights into a single cloud-native product.',
    tech: ['Python', 'React', 'Docker', 'AWS', 'REST APIs'],
    achievements: 'Designed as a modular, cloud-deployable security suite with automation at its core.',
    status: 'Active',
    featured: true,
  },
  {
    name: 'Law For All',
    summary: 'Accessible legal-help platform connecting people to legal information and resources.',
    tech: ['React', 'Node.js', 'MongoDB'],
    achievements: '1st Runner-Up at a National Level 24-Hour Hackathon.',
    status: 'Completed',
  },
  {
    name: 'Resume Reviewer AI',
    summary: 'AI-assisted resume analysis tool giving structured, actionable feedback to candidates.',
    tech: ['Python', 'Flask', 'AI/NLP'],
    achievements: 'Automated resume scoring and improvement suggestions.',
    status: 'Completed',
  },
  {
    name: 'Blood Bank Management System',
    summary: 'End-to-end system for managing donors, inventory, and blood requests.',
    tech: ['Python', 'Django', 'MySQL'],
    achievements: 'Streamlined donor and inventory operations with role-based access.',
    status: 'Completed',
  },
  {
    name: 'AI Security Suite',
    summary: 'A toolkit applying AI techniques to detect and surface security risks.',
    tech: ['Python', 'AI/ML', 'REST APIs'],
    achievements: 'Combined AI models with security tooling for automated analysis.',
    status: 'Prototype',
  },
  {
    name: 'Finance Dashboard UI',
    summary: 'Clean, responsive dashboard for visualizing financial data and KPIs.',
    tech: ['React', 'TypeScript', 'Charts'],
    achievements: 'Delivered a polished, data-dense UI with strong UX.',
    status: 'Completed',
  },
];

export interface Achievement { title: string; detail: string; project?: string; }
export const achievements: Achievement[] = [
  { title: '1st Runner-Up', detail: 'National Level 24-Hour Hackathon', project: 'Law For All' },
  { title: '2nd Place', detail: 'ACM AITM Ideathon 2025' },
];
