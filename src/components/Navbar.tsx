"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl px-4",
        scrolled ? "top-4 scale-95" : "top-8"
      )}
    >
      <div className="glass-pill rounded-full px-6 py-4 flex items-center justify-between border-white/10">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="flex items-center gap-3">
              <Menu size={20} className="text-white/80" />
              <span className="font-headline font-bold text-xl tracking-tight text-white glow-text">
                P | Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 ml-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-all hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <button
            className="text-white/80 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-4 w-full glass-pill rounded-[2rem] transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col p-6 gap-2 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium py-3 px-6 text-white/60 hover:text-white w-full text-center rounded-2xl transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}