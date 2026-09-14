"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-surface-border bg-surface pt-16 pb-8 overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          {/* Brand & Mission */}
          <div className="text-center md:text-left max-w-sm">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight inline-block mb-4 text-on-surface"
            >
              Shihab<span className="text-primary">.</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Building secure systems and exploring the boundaries of Linux, cybersecurity, and software development.
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <p className="font-label-caps text-xs tracking-widest text-text-muted">
              Connect
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/shihab-ahammed"
                target="_blank"
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/shihab-ahammed/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-[#0a66c2]/10 hover:text-[#0a66c2] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </Link>
              <Link
                href="https://www.instagram.com/_laz_yyyy__/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-[#E1306C]/10 hover:text-[#E1306C] transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </Link>
              <Link
                href="mailto:ahammedshihab15@gmail.com"
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-surface-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-label-code text-text-muted">
          <p>© {year} Shihab Ahammed. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Root access to knowledge, one shell at a time.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
