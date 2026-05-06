"use client";

import { useState, useEffect } from "react";
import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const education = [
  {
    degree: "Computer Science and Business Systems",
    institution: "Panimalar Engineering College",
    year: "2024-2028",
    description: "Currently pursuing a degree that integrates technical computer science with business strategy.",
    side: "left"
  },
  {
    degree: "High School",
    institution: "Vetri Vikaas Public School",
    year: "2022 - 2024",
    description: "Completed higher secondary education with a focus on science and mathematics.",
    side: "right"
  }
];

export default function Education() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="education" className="relative py-32 px-6 lg:px-12 bg-[#3D000D] overflow-hidden">
      {/* High-Intensity Shimmering Starfield Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Shimmering streaks and base gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#50000C] via-[#3D000D] to-[#50000C]" />
        
        {mounted && (
          <>
            {/* Dense Starfield Particle System */}
            {[...Array(150)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-twinkle shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                style={{
                  width: Math.random() * 3 + 1 + "px",
                  height: Math.random() * 3 + 1 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  animationDelay: Math.random() * 8 + "s",
                  animationDuration: Math.random() * 4 + 2 + "s",
                  opacity: Math.random() * 0.7 + 0.3,
                }}
              />
            ))}

            {/* Floating Blurred Orbs for Depth */}
            {[...Array(15)].map((_, i) => (
              <div
                key={`orb-${i}`}
                className="absolute bg-red-600/10 rounded-full blur-[80px] animate-drift"
                style={{
                  width: Math.random() * 200 + 100 + "px",
                  height: Math.random() * 200 + 100 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  animationDelay: Math.random() * 10 + "s",
                  opacity: 0.3,
                }}
              />
            ))}
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-24 animate-in fade-in slide-in-from-top duration-1000">
          <h2 className="text-5xl md:text-7xl font-headline font-bold text-white glow-text tracking-tight">
            Education
          </h2>
          <p className="text-white/60 text-xl font-medium max-w-2xl mx-auto">
            My academic journey and qualifications.
          </p>
        </div>

        <div className="relative">
          {/* Glowing Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-red-500/50 to-transparent hidden md:block animate-in fade-in duration-[2000ms]"></div>

          <div className="space-y-20 md:space-y-0">
            {education.map((item, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "relative flex flex-col md:flex-row items-center justify-center md:min-h-[200px] animate-in fade-in duration-1000",
                  item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                )}
                style={{ animationDelay: `${idx * 400}ms` }}
              >
                {/* Content Area */}
                <div className={cn(
                  "w-full md:w-5/12 text-center",
                  item.side === "left" ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                )}>
                  <div className="space-y-3 group p-4 md:p-0">
                    <h4 className="text-3xl font-headline font-bold text-white glow-text transition-all duration-500">
                      {item.degree}
                    </h4>
                    <p className="text-xl font-medium text-white/80">
                      {item.institution}
                    </p>
                    <span className="inline-flex items-center gap-1 text-lg font-bold text-primary animate-pulse">
                      {item.year}
                    </span>
                    <p className="text-base text-white/50 mt-4 leading-relaxed max-w-md mx-auto md:ml-auto md:mr-0">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Central Glowing Icon Node */}
                <div className="relative z-10 my-8 md:my-0 flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#3D000D] shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all duration-500 hover:scale-125">
                  <GraduationCap size={24} strokeWidth={2} />
                  {/* Pulse Effect Around Node */}
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-ping -z-10" />
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
