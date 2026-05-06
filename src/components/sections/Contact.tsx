
"use client";

import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="flex justify-center">
            <a 
              href="mailto:nchowdary2006@gmail.com" 
              className="group inline-flex items-center gap-6 p-8 md:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Mail size={32} />
              </div>
              <span className="text-xl md:text-3xl font-headline font-bold text-slate-900 group-hover:text-primary transition-colors">
                nchowdary2006@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
