"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Texas Education Agency",
    location: "Austin, Texas",
    role: "Power Platform Lead | AI & Governance Strategist",
    period: "Jun 2024 – Present",
    achievements: [
      "Led statewide M365 Copilot and Power Platform Copilot rollout, implementing AI governance frameworks; drove 30% increase in AI-assisted productivity.",
      "Spearheaded TRAIGA compliance strategy by expanding Power Platform CoE CRM into an AI Governance Hub.",
      "Designed & deployed HR offboarding chatbot in Copilot Studio, integrated with SharePoint SOP libraries, reducing offboarding email traffic by 30%.",
      "Implemented Microsoft Purview DSPM AI module with role-based data masking, preventing unauthorized AI data exposure.",
      "Developed AI Business Case Review workflow, reducing unvetted AI deployments by 65%.",
    ]
  },
  {
    company: "Mitsubishi Power America",
    location: "Orlando, Florida",
    role: "Power Platform Developer",
    period: "May 2023 – Mar 2024",
    achievements: [
      "Digitized end-to-end production planning process with Power Apps + Power Automate integrated with SAP, replacing 12+ macro-heavy Excel sheets; cut monthly planner effort by 46%.",
      "Built dynamic Power BI dashboards for shop-floor touchscreen monitors to display real-time schedules and throughput.",
      "Automated shop-floor decisions via Power Automate adaptive card approvals in Microsoft Teams, reducing schedule variance by 18%.",
      "Leveraged AI Builder OCR to digitize handwritten VOICE Program safety/process improvement cards.",
    ]
  },
  {
    company: "Kenvue",
    location: "New Brunswick, NJ",
    role: "Power Platform Developer/Admin",
    period: "Jan 2023 – May 2023",
    achievements: [
      "Engineered PowerShell-based automation to audit and replicate license SKUs and security roles for 30,000+ users during tenant transition.",
      "Initiated PAD governance and RPA remediation initiative to assess risk and classify legacy bots.",
      "Automated Power Apps and SharePoint administrative tasks, reducing manual setup overhead.",
    ]
  },
  {
    company: "Delhivery Logistics",
    location: "India",
    role: "SharePoint/Power Automate Developer",
    period: "Apr 2021 – Nov 2021",
    achievements: [
      "Led development of a Transport Management Tool using Power Apps, enhancing mid-mile logistics efficiency.",
      "Integrated Power Apps with Dynamics 365, enhancing ERP system functionalities.",
      "Developed custom .Net APIs using RESTful services and JSON for real-time integration with third-party platforms.",
      "Developed insightful Power BI dashboards showcasing mid-mile operations.",
    ]
  },
  {
    company: "International Paper (APPM)",
    location: "India",
    role: "Power BI/SharePoint Developer",
    period: "Oct 2016 – Apr 2021",
    achievements: [
      "Built Power Apps solution for 5-Why root cause analysis based on SAP production orders, reducing downtime investigation cycles by 25%.",
      "Integrated SAP Production Module data into Power BI, utilizing DAX for dynamic visualizations.",
      "Designed and implemented web applications using ASP.NET MVC and RESTful services with ASP.NET Web API.",
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 w-full max-w-5xl mx-auto relative z-10">
      <div className="flex flex-col items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-[var(--copilot-blue)] border border-[var(--copilot-blue)]/20 mb-4 shadow-sm"
        >
          <Briefcase size={16} />
          Career Journey
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-center tracking-tight"
        >
          Professional Experience
        </motion.h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--copilot-blue)]/30 to-transparent transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline node */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-background border-[3px] border-[var(--copilot-blue)] shadow-[0_0_15px_rgba(0,120,212,0.5)] z-10 mt-6 md:mt-8" />
              
              <div className="w-16 md:hidden" /> {/* Mobile spacer for timeline */}

              <div className={`flex-1 w-full pl-16 md:pl-0 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                <div className={`glass p-8 rounded-2xl hover:shadow-float transition-shadow duration-300 border border-transparent hover:border-[var(--copilot-blue)]/20 text-left ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <div className="text-lg font-medium text-gradient mb-4 inline-block">{exp.company}</div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60 mb-6 font-medium">
                    <span className="flex items-center gap-1.5 bg-background/50 px-3 py-1 rounded-full"><Calendar size={14} /> {exp.period}</span>
                    <span className="flex items-center gap-1.5 bg-background/50 px-3 py-1 rounded-full"><MapPin size={14} /> {exp.location}</span>
                  </div>

                  <ul className="space-y-3 text-foreground/80">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--copilot-cyan)] mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden md:block flex-1" /> {/* Desktop spacer */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
