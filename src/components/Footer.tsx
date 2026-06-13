import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-ink/60">
          © {new Date().getFullYear()} {profile.name}. Built with React, Docker & GitLab CI/CD.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer" className="text-ink/60 hover:text-primary">
            <Github size={20} />
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="text-ink/60 hover:text-primary">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink/60 hover:text-primary">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
