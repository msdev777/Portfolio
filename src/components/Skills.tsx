"use client";

import { motion } from "framer-motion";
import { Database, Cloud, Code, ShieldCheck, Box, Cpu, Workflow, BarChart } from "lucide-react";

const skillCategories = [
  {
    title: "Microsoft Power Platform",
    icon: <Box className="w-6 h-6 text-[var(--copilot-blue)]" />,
    skills: ["Power Apps (Canvas & Model-Driven)", "Power Automate (Cloud & Desktop)", "Power Pages", "Dataverse", "Power BI", "Power Query", "Power Fx"],
  },
  {
    title: "AI & Copilot Technologies",
    icon: <Cpu className="w-6 h-6 text-[var(--copilot-violet)]" />,
    skills: ["M365 Copilot", "Copilot Studio", "Azure OpenAI (GPT Models)", "RAG", "Agent Lifecycle Management", "Prompt Engineering", "AI Governance"],
  },
  {
    title: "Azure Services",
    icon: <Cloud className="w-6 h-6 text-[var(--copilot-cyan)]" />,
    skills: ["Azure Functions", "Azure Logic Apps", "Azure Blob Storage", "Azure App Insights", "Azure API Management", "Azure Cognitive Search"],
  },
  {
    title: "Governance & Administration",
    icon: <ShieldCheck className="w-6 h-6 text-[var(--copilot-teal)]" />,
    skills: ["CoE Starter Kit", "DLP Policies", "Environment Strategy", "ALM Strategy", "PAC CLI", "Power Platform Pipelines", "License Governance"],
  },
  {
    title: "Integration Technologies",
    icon: <Workflow className="w-6 h-6 text-[var(--copilot-magenta)]" />,
    skills: ["REST APIs", "Microsoft Graph API", "Custom Connectors", "JSON / XML", "OData", "Webhooks", "API Management"],
  },
  {
    title: "Data & Reporting",
    icon: <BarChart className="w-6 h-6 text-[var(--copilot-blue)]" />,
    skills: ["SQL Server", "SSRS / SSIS / SSAS", "Dataverse", "DAX", "Paginated Reports", "Power BI Service / Gateway"],
  },
  {
    title: "Development & DevOps",
    icon: <Code className="w-6 h-6 text-[var(--copilot-violet)]" />,
    skills: ["C# / .NET", "JavaScript / TypeScript", "Python", "PowerShell", "Azure DevOps", "GitHub Actions", "CI/CD Pipelines"],
  },
  {
    title: "Enterprise Applications",
    icon: <Database className="w-6 h-6 text-[var(--copilot-cyan)]" />,
    skills: ["SAP", "SAP PM Module", "Dynamics 365 Customer Service", "ServiceNow", "Microsoft Entra ID (Azure AD)", "Microsoft Purview"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 w-full max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-[var(--copilot-magenta)] border border-[var(--copilot-magenta)]/20 mb-4 shadow-sm"
        >
          <Cpu size={16} />
          Technical Expertise
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-center tracking-tight"
        >
          Core Capabilities
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-2xl p-6 hover:shadow-float transition-all duration-300 group border border-transparent hover:border-[var(--copilot-blue)]/30"
          >
            <div className="mb-4 p-3 rounded-xl bg-background/50 inline-block group-hover:scale-110 transition-transform duration-300">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/5 text-foreground/80 border border-foreground/10 group-hover:bg-background/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
