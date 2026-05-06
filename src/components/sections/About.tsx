"use client";

import { useState, useEffect } from "react";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="relative py-32 px-6 lg:px-12 overflow-hidden bg-[#2D0008]">
      {/* High-Intensity Bokeh & Shimmer Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Shimmering streaks and base gradient - tuned to rose-pink */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#50000C] via-[#3D000D] to-[#50000C]" />
        
        {/* Diagonal Glowing Streaks */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent rotate-12" />
        </div>

        {mounted && (
          <>
            {/* Dense Particle System (Stars/Bokeh) */}
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-twinkle shadow-[0_0_10px_white]"
                style={{
                  width: Math.random() * 4 + 1 + "px",
                  height: Math.random() * 4 + 1 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  animationDelay: Math.random() * 10 + "s",
                  animationDuration: Math.random() * 5 + 3 + "s",
                  opacity: Math.random() * 0.7 + 0.2,
                }}
              />
            ))}

            {/* Floating Blurred Orbs */}
            {[...Array(15)].map((_, i) => (
              <div
                key={`orb-${i}`}
                className="absolute bg-primary/10 rounded-full blur-[80px] animate-drift"
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
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Main About Card */}
          <div className="relative animate-in fade-in slide-in-from-left duration-1000">
             <div className="glass-card rounded-[3rem] p-10 lg:p-14 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <h2 className="text-4xl font-headline font-bold mb-8 text-primary glow-text">About Me</h2>
                <div className="space-y-6 text-white/70 leading-relaxed text-lg">
                  <p>
                    I am currently pursuing my undergraduate degree in Computer Science and Business Systems at Panimalar Engineering College, Chennai, where I am developing a strong foundation in both technical and business-oriented subjects.
                  </p>
                  <p>
                    I completed my schooling at Vetri Vikaas Public School, Namakkal District, under the CBSE. During my academic journey, I consistently maintained good academic performance and secured strong grades.
                  </p>
                  <p>
                    I am a motivated individual with a keen interest in technology and innovation. I enjoy exploring new ideas, improving my technical skills, and staying updated with emerging trends.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-white/5">
                  <div>
                    <span className="block text-4xl font-headline font-bold text-primary glow-text">Active</span>
                    <span className="text-sm text-white/40 uppercase tracking-widest font-semibold">Undergraduate</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-headline font-bold text-primary glow-text">Focused</span>
                    <span className="text-sm text-white/40 uppercase tracking-widest font-semibold">Tech & Business</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Values Section */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-1000">
            <h3 className="text-3xl font-headline font-bold text-primary glow-text px-4">My Core Values</h3>
            <div className="grid gap-6">
              {[
                {
                  title: "Continuous Learning",
                  desc: "Staying ahead of the curve by constantly adopting the latest industry standards and emerging trends."
                },
                {
                  title: "Technical Excellence",
                  desc: "Focusing on strong foundations in programming, data structures, and problem-solving."
                },
                {
                  title: "Business Acumen",
                  desc: "Understanding the synergy between technical implementation and business strategy."
                }
              ].map((value, idx) => (
                <div 
                  key={idx} 
                  className="glass-card flex gap-6 p-8 rounded-[2rem] border-white/5 hover:border-white/10 transition-all duration-500 group animate-in fade-in slide-in-from-bottom duration-700"
                  style={{ animationDelay: `${(idx + 1) * 200}ms` }}
                >
                  <div className="h-12 w-12 shrink-0 bg-primary/20 rounded-2xl flex items-center justify-center text-primary font-bold text-xl group-hover:scale-110 transition-transform border border-primary/20">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{value.title}</h4>
                    <p className="text-base text-white/50 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
