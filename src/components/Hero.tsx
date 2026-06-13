"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const LinkedinIcon = ({ size, className }: { size: number, className?: string }) => (
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
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden px-6 pt-20" id="about">
      {/* Abstract floating shapes for background depth */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0], 
          x: [0, 10, 0],
          rotate: [0, 5, 0] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--copilot-blue)]/10 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0], 
          x: [0, -15, 0],
          rotate: [0, -5, 0] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--copilot-violet)]/10 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-4xl mx-auto w-full text-center space-y-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-[var(--copilot-blue)] dark:text-[var(--copilot-cyan)] border border-[var(--copilot-blue)]/20 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--copilot-blue)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--copilot-blue)]"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
        >
          Hi, I&apos;m <span className="text-gradient block mt-2">Sai Chaitanya Maddula</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed"
        >
          Power Platform Solution Architect & AI Governance Admin. 
          I design secure, scalable solutions using Canvas/Model-Driven Apps, Dataverse, 
          and AI to accelerate business outcomes.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <a href="mailto:saicm0805@gmail.com" 
             className="flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:scale-105 transition-transform duration-200 shadow-soft">
            <Mail size={18} />
            Contact Me
          </a>
          
          <a href="https://www.linkedin.com/in/saicm" 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200 font-medium">
            <LinkedinIcon size={18} className="text-[#0077B5]" />
            LinkedIn
          </a>
          
          <a href="#experience"
             className="flex items-center gap-2 px-6 py-3 rounded-xl hover:text-[var(--copilot-blue)] transition-colors duration-200 font-medium group">
            View Experience
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-foreground/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
