"use client";

import { Mail, Phone } from "lucide-react";

// Replace Lucide Linkedin with standard SVG for accuracy
const LinkedinIcon = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  return (
    <footer className="w-full border-t border-foreground/10 py-12 px-6 mt-12 bg-background/50 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold tracking-tight mb-2">Sai Chaitanya Maddula</span>
          <span className="text-sm text-foreground/60">Power Platform Solution Architect & AI Governance Admin</span>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="mailto:saicm0805@gmail.com" 
            className="text-foreground/60 hover:text-[var(--copilot-blue)] transition-colors flex items-center gap-2 text-sm"
          >
            <Mail size={18} />
            <span className="hidden sm:inline">saicm0805@gmail.com</span>
          </a>
          
          <a 
            href="tel:469-423-7326" 
            className="text-foreground/60 hover:text-[var(--copilot-cyan)] transition-colors flex items-center gap-2 text-sm"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">(469) 423-7326</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/saicm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-[#0077B5] transition-colors flex items-center gap-2 text-sm"
          >
            <LinkedinIcon size={18} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-foreground/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-foreground/40">
        <p>© {new Date().getFullYear()} Sai Chaitanya Maddula. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
