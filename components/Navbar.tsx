"use client";

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Menu, X, FileText, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white group">
            <span className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-600 to-blue-400 flex items-center justify-center text-white font-black text-lg shadow-md group-hover:scale-105 transition-transform">
              N
            </span>
            <span className="text-white">
              Noor<span className="text-brand-400 font-light">Ahmad</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-brand-600 hover:bg-brand-500 rounded-lg transition-all shadow-md shadow-brand-600/20 hover:shadow-brand-500/40"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800/60 hover:text-brand-400"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex space-x-4">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm font-medium text-white bg-brand-600 rounded-lg"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
