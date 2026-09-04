"use client";

import React from 'react';
import { EDUCATION, LANGUAGES, PERSONAL_INFO } from '@/data/portfolioData';
import { GraduationCap, Languages, Award, User, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-semibold text-brand-400 uppercase tracking-widest">About Me</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Passionate Software Engineer & Problem Solver
          </h3>
          <p className="text-slate-400 text-base">
            Detailed overview of my background, academic degree, and multilingual capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Bio & Core Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 text-brand-400 mb-2">
                <User className="w-6 h-6" />
                <h4 className="text-xl font-bold text-white">Professional Summary</h4>
              </div>

              <p className="text-slate-300 leading-relaxed text-base">
                {PERSONAL_INFO.bio}
              </p>

              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Microservices & REST API Architecture</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Stripe Webhooks & Payment Workflows</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Redis Caching & Data Layer Optimization</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Agile / Scrum Team Collaboration</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 text-indigo-400">
                <Languages className="w-6 h-6" />
                <h4 className="text-xl font-bold text-white">Spoken Languages</h4>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 text-center">
                    <div className="text-white font-semibold text-sm">{lang.name}</div>
                    <div className="text-xs text-brand-400 mt-0.5">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 h-full">
              <div className="flex items-center gap-3 text-emerald-400 mb-2">
                <GraduationCap className="w-6 h-6" />
                <h4 className="text-xl font-bold text-white">Education</h4>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-slate-800">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 space-y-1">
                    <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-brand-500 border-4 border-slate-900 -translate-x-1/2" />
                    <div className="text-xs font-semibold text-brand-400 uppercase tracking-wider">{edu.period}</div>
                    <h5 className="text-base font-bold text-white">{edu.degree}</h5>
                    <div className="text-sm font-medium text-slate-300">{edu.institution}</div>
                    <p className="text-xs text-slate-400 pt-1 leading-normal">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
