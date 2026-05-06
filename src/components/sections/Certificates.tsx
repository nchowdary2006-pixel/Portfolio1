"use client";

import { useState, useEffect } from "react";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "Wadhwani Foundations- Employabilty skills",
    issuer: "SWAYAM",
    date: "Issued Jun 2025",
  }
];

export default function Certificates() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="certificates" className="relative py-32 px-6 lg:px-12 bg-[#3D000D] overflow-hidden">
      {/* Intense Bokeh & Shimmer Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Shimmering streaks and base gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#50000C] via-[#3D000D] to-[#50000C]" />
        
        {mounted && (
          <>
            {/* Particle System */}
            {[...Array(100)].map((_, i) => (
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
            {[...Array(20)].map((_, i) => (
              <div
                key={`orb-${i}`}
                className="absolute bg-red-600/15 rounded-full blur-[80px] animate-drift"
                style={{
                  width: Math.random() * 250 + 100 + "px",
                  height: Math.random() * 250 + 100 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  animationDelay: Math.random() * 15 + "s",
                  opacity: 0.3,
                }}
              />
            ))}
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="text-5xl md:text-7xl font-headline font-bold mb-6 tracking-tight text-white glow-text">
            Certifications & Accolades
          </h2>
          <p className="text-white/60 text-xl font-medium max-w-2xl mx-auto">
            Validations of my expertise and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-1 max-w-4xl mx-auto gap-8">
          {certificates.map((cert, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-[3rem] p-10 md:p-14 border-white/10 hover:border-white/20 transition-all duration-700 group flex flex-col md:flex-row items-center md:items-start gap-8 animate-in fade-in slide-in-from-bottom duration-700 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className="shrink-0 h-20 w-20 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-white group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-inner">
                <Award size={48} strokeWidth={1.2} />
              </div>
              <div className="space-y-4 text-center md:text-left flex-1">
                <h4 className="text-2xl md:text-4xl font-headline font-bold leading-tight text-white glow-text">
                  {cert.title}
                </h4>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <p className="text-white/40 font-semibold text-lg tracking-wide uppercase">{cert.issuer}</p>
                  <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
                  <p className="text-primary font-bold text-lg">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
