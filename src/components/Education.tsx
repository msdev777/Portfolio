"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

const education = [
  {
    degree: "Master's in Business Administration (Operation Management)",
    institution: "GITAM University, India",
    period: "2018 – 2020",
  },
  {
    degree: "Bachelor of Engineering",
    institution: "Andhra University, India",
    period: "2012 – 2016",
    details: "Leadership: Institute of Engineer-INDIA (President), Robotics Club (Founder)",
  },
  {
    degree: "Southern Arkansas University",
    institution: "Arkansas",
    period: "2022 – 2023",
  }
];

const certifications = [
  "Agentic AI Business Solutions Architect AB100",
  "Power Platform Developer Associate PL400",
  "Power Automate RPA Developer Associate PL500"
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6 w-full max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Education Column */}
        <div>
          <div className="flex flex-col items-start mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-[var(--copilot-violet)] border border-[var(--copilot-violet)]/20 mb-4 shadow-sm"
            >
              <GraduationCap size={16} />
              Academic Background
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Education
            </motion.h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl border border-transparent hover:border-[var(--copilot-violet)]/20 hover:shadow-soft transition-all duration-300"
              >
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                  <span className="text-sm font-medium bg-background/50 px-3 py-1 rounded-full text-foreground/60">{edu.period}</span>
                </div>
                <div className="text-lg text-[var(--copilot-violet)] font-medium mb-2">{edu.institution}</div>
                {edu.details && (
                  <p className="text-sm text-foreground/80 leading-relaxed mt-3 pt-3 border-t border-foreground/10">
                    {edu.details}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <div className="flex flex-col items-start mb-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-[var(--copilot-cyan)] border border-[var(--copilot-cyan)]/20 mb-4 shadow-sm"
            >
              <Award size={16} />
              Professional Recognition
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Certifications
            </motion.h2>
          </div>

          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-5 rounded-2xl flex items-center gap-4 border border-transparent hover:border-[var(--copilot-cyan)]/30 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="p-2 rounded-full bg-[var(--copilot-cyan)]/10 text-[var(--copilot-cyan)] group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={24} />
                </div>
                <span className="text-lg font-medium text-foreground/90">{cert}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Decorative element */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[var(--copilot-blue)]/5 to-[var(--copilot-violet)]/5 border border-foreground/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10"><Award size={120} /></div>
            <h3 className="text-xl font-bold mb-2 relative z-10">Continuous Learning</h3>
            <p className="text-sm text-foreground/70 relative z-10 max-w-sm">
              Passionate about staying at the forefront of AI governance, Power Platform architecture, and enterprise digital transformation.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
