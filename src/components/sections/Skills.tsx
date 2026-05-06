"use client";

import { useState, useEffect } from "react";
import { 
  Code2, 
  Bot, 
  Database, 
  Cloud, 
  GitGraph, 
  Briefcase 
} from "lucide-react";

const skillProficiencies = [
  {
    title: "Frontend Development",
    proficiency: 40,
    icon: <Code2 className="text-white" size={24} />,
  },
  {
    title: "AI/ML Integration",
    proficiency: 45,
    icon: <Bot className="text-white" size={24} />,
  },
  {
    title: "Backend Services",
    proficiency: 55,
    icon: <Database className="text-white" size={24} />,
  },
  {
    title: "Cloud & DevOps",
    proficiency: 37,
    icon: <Cloud className="text-white" size={24} />,
  },
  {
    title: "Version Control",
    proficiency: 65,
    icon: <GitGraph className="text-white" size={24} />,
  },
  {
    title: "Project Management",
    proficiency: 53,
    icon: <Briefcase className="text-white" size={24} />,
  }
];

export default function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="relative py-32 px-6 lg:px-12 bg-[#3D000D] overflow-hidden">
      {/* Intense Bokeh Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {mounted && [...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle shadow-[0_0_15px_white]"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: Math.random() * 10 + "s",
              animationDuration: Math.random() * 5 + 3 + "s",
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-transparent via-red-900/40 to-transparent blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-20 animate-in fade-in slide-in-from-top duration-1000">
          <h2 className="text-5xl md:text-6xl font-headline font-bold text-white glow-text tracking-tight">
            Technical Proficiency
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A snapshot of my core competencies and tools I love to work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillProficiencies.map((skill, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-[2rem] p-10 border-white/10 hover:border-white/20 transition-all duration-500 group animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex justify-between items-start mb-10">
                <h4 className="text-2xl font-bold text-white group-hover:glow-text transition-all">
                  {skill.title}
                </h4>
                <div className="text-white/80 group-hover:scale-125 transition-transform duration-300">
                  {skill.icon}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="relative h-2.5 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_15px_rgba(239,68,68,0.6)] transition-all duration-1000 ease-out"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
                <p className="text-sm font-semibold text-white/50 tracking-wide">
                  {skill.proficiency}% Mastery
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
