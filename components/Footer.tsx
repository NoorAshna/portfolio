"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Github, Linkedin, Mail, Terminal, Command } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-[#070709] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-sm font-bold text-white">
                Noor Ahmad
              </div>
              <div className="text-xs font-mono text-zinc-500">
                Full Stack Engineer · FAST NUCES Islamabad Graduate
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono text-zinc-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              01.about
            </a>
            <a
              href="#projects"
              className="hover:text-emerald-400 transition-colors"
            >
              02.projects
            </a>
            <a
              href="#experience"
              className="hover:text-emerald-400 transition-colors"
            >
              03.experience
            </a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">
              04.stack
            </a>
            <a
              href="#contact"
              className="hover:text-emerald-400 transition-colors"
            >
              05.contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-cmd-modal"))
              }
              className="px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 hover:text-white flex items-center gap-1.5"
            >
              <Command className="w-3 h-3 text-emerald-400" />
              <span>⌘K</span>
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900/90 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-zinc-500">
          <span>
            © {new Date().getFullYear()} Noor Ahmad. Crafted with Next.js,
            TypeScript & Tailwind CSS.
          </span>
          <span>Islamabad / Lahore, Pakistan · UTC+5</span>
        </div>
      </div>
    </footer>
  );
}
