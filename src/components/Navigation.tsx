"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-center",
        scrolled ? "py-2" : "py-6"
      )}
    >
      <nav className={cn(
        "glass flex items-center gap-1 md:gap-2 px-4 py-2 rounded-full transition-all duration-300",
        scrolled ? "shadow-float bg-background/80" : "bg-transparent border-transparent"
      )}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors"
          >
            {item.name}
          </a>
        ))}
        <a 
          href="mailto:saicm0805@gmail.com"
          className="ml-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:scale-105 transition-transform hidden sm:block"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}
