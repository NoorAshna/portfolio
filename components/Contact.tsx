"use client";

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Send } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-semibold text-brand-400 uppercase tracking-widest">Let&apos;s Connect</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h3>
          <p className="text-slate-400 text-base">
            Have a project in mind, interested in hiring, or want to discuss full-stack opportunity?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase">Email</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-bold text-white hover:text-brand-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase">Phone / WhatsApp</div>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-bold text-white hover:text-blue-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Socials */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium">{PERSONAL_INFO.location}</span>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center space-x-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-brand-400" /> LinkedIn
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form Mockup */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h4 className="text-xl font-bold text-white mb-6">Send Me a Message</h4>

              {submitted ? (
                <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h5 className="text-lg font-bold text-white">Message Sent!</h5>
                  <p className="text-sm text-slate-300">Thank you for reaching out. I will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Stack Developer Role / Project Proposal"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Noor, I would like to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-brand-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
