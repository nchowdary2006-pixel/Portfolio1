"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Code2, Instagram } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-12 px-6 lg:px-12 border-t bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-1.5 rounded-lg text-primary-foreground">
              <Code2 size={20} />
            </div>
            <span className="font-headline font-bold text-xl tracking-tight text-primary">
              Narasimha V C
            </span>
          </Link>
          <p className="text-muted-foreground text-sm">
            © {year || '...'} Narasimha V C. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {[
            { icon: <Github size={20} />, href: "https://github.com/nchowdary2006-pixel", label: "GitHub" },
            { 
              icon: <Linkedin size={20} />, 
              href: "https://www.linkedin.com/in/narasimha-chowdary-847628392?utm_source=share_via&utm_content=profile&utm_medium=member_android", 
              label: "LinkedIn" 
            },
            { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
            { icon: <Instagram size={20} />, href: "https://www.instagram.com/chenchu_vuppalapati/", label: "Instagram" },
            { icon: <Mail size={20} />, href: "mailto:nchowdary2006@gmail.com", label: "Email" }
          ].map((social, idx) => (
            <Link 
              key={idx} 
              href={social.href}
              target={social.href.startsWith('http') ? "_blank" : undefined}
              rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className="h-10 w-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        <nav className="flex items-center gap-8">
          <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
          <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Work</Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
