"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Expense Tracker",
    desc: "Track daily expenses and visualize spending. Features: Add income/expenses, Category-wise tracking.",
    tech: ["React", "Recharts", "TypeScript"],
    image: "https://picsum.photos/seed/expense-tracker/800/600",
    github: "#",
    demo: "#"
  },
  {
    title: "Chatbot (AI Assistant)",
    desc: "An intelligent conversational agent designed to provide automated responses and smart replies.",
    tech: ["JavaScript", "OpenAI API", "Dialogflow"],
    image: "https://picsum.photos/seed/chatbot/800/600",
    github: "#",
    demo: "#"
  },
  {
    title: "Fitness Flow",
    desc: "Mobile-first web app designed for fitness enthusiasts to track workouts and set goals.",
    tech: ["React Native", "Firebase", "Redux"],
    image: "https://picsum.photos/seed/project3/800/600",
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="projects" className="relative py-32 px-6 lg:px-12 bg-[#3D000D] overflow-hidden">
      {/* Intense Bokeh & Shimmer Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Shimmering streaks and base gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#50000C] via-[#3D000D] to-[#50000C]" />
        
        {mounted && (
          <>
            {/* Particle System */}
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-twinkle shadow-[0_0_15px_white]"
                style={{
                  width: Math.random() * 5 + 1 + "px",
                  height: Math.random() * 5 + 1 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  animationDelay: Math.random() * 10 + "s",
                  animationDuration: Math.random() * 5 + 3 + "s",
                  opacity: Math.random() * 0.5 + 0.2,
                }}
              />
            ))}

            {/* Floating Blurred Orbs */}
            {[...Array(15)].map((_, i) => (
              <div
                key={`orb-${i}`}
                className="absolute bg-red-600/15 rounded-full blur-[80px] animate-drift"
                style={{
                  width: Math.random() * 200 + 100 + "px",
                  height: Math.random() * 200 + 100 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  animationDelay: Math.random() * 15 + "s",
                  opacity: 0.4,
                }}
              />
            ))}
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 animate-in fade-in slide-in-from-left duration-1000">
          <div className="space-y-4">
            <h2 className="text-white/60 font-headline font-semibold tracking-[0.2em] text-sm uppercase">Selected Work</h2>
            <h3 className="text-5xl md:text-6xl font-headline font-bold text-white glow-text tracking-tight">Featured Projects</h3>
          </div>
          <Button 
            className="rounded-full bg-black/80 hover:bg-black text-white px-8 py-6 h-auto text-lg border-white/10 group transition-all hover:scale-105"
          >
            View All Projects <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative glass-card rounded-[2.5rem] overflow-hidden border-white/10 hover:border-white/20 transition-all duration-700 animate-in fade-in slide-in-from-bottom duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className="p-4">
                <div className="aspect-[4/3] overflow-hidden rounded-[1.8rem]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
                    data-ai-hint="app screenshot"
                  />
                </div>
              </div>
              
              <div className="p-8 pt-2 space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-white/10 text-white/90 border-transparent px-4 py-1.5 text-xs font-medium rounded-full backdrop-blur-md"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <h4 className="text-3xl font-headline font-bold text-white transition-colors leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                
                <div className="flex gap-4 pt-6 border-t border-white/5">
                  <Button variant="ghost" size="sm" asChild className="rounded-full text-white/60 hover:text-white hover:bg-white/5">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={18} className="mr-2" /> Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white shadow-lg backdrop-blur-sm group/btn">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} className="mr-2" /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
