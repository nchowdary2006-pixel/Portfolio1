"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 lg:px-12 overflow-hidden bg-[#2D0008]">
      {/* High-Intensity Bokeh Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Shimmering streaks */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#50000C] via-[#3D000D] to-[#50000C]" />
        
        {/* Particle System */}
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle shadow-[0_0_12px_white]"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: Math.random() * 10 + "s",
              animationDuration: Math.random() * 5 + 3 + "s",
              opacity: Math.random() * 0.7 + 0.1,
            }}
          />
        ))}

        {/* Larger Blurred Bokeh Orbs */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute bg-red-500/10 rounded-full blur-[60px] animate-drift"
            style={{
              width: Math.random() * 150 + 50 + "px",
              height: Math.random() * 150 + 50 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: Math.random() * 15 + "s",
              animationDuration: Math.random() * 15 + 10 + "s",
              opacity: 0.3,
            }}
          />
        ))}

        {/* Floating Blurred Glass Icons/Shapes */}
        <div className="absolute top-[20%] left-[10%] w-40 h-40 bg-white/5 backdrop-blur-3xl rounded-[3rem] rotate-12 animate-float border border-white/10" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-white/5 backdrop-blur-3xl rounded-[2rem] -rotate-12 animate-float border border-white/10" style={{ animationDelay: '1.5s' }} />
        
        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-red-600/20 via-transparent to-transparent blur-[150px] animate-pulse-slow" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <h1 className="text-6xl md:text-8xl font-headline font-bold text-primary tracking-tighter glow-text leading-none">
            Narasimha V C
          </h1>
          <p className="text-2xl md:text-3xl text-white/70 max-w-3xl mx-auto leading-relaxed font-medium">
            Building elegant, high-performance web solutions with a focus on immersive user experiences.
          </p>
        </div>

        <div className="flex justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          <Button 
            asChild 
            size="lg" 
            className="rounded-full px-12 py-8 text-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-110 group shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <Link href="#projects" className="flex items-center gap-3">
              Explore Work <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
