"use client";

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-[#080B11] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          <div>
            <div className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-7 h-7 rounded bg-brand-600 flex items-center justify-center text-xs font-black">N</span>
              <span>Noor Ahmad</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Full Stack MERN & .NET Core Developer • FAST NUCES Graduate
            </p>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-slate-400 hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="p-2 text-slate-400 hover:text-white">
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900/80 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Noor Ahmad. Built with Next.js, Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
