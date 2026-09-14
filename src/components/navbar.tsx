import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-obsidian/90 backdrop-blur-xl border-b border-surface-border">
      <div className="h-16 max-w-[1280px] mx-auto px-margin-sm md:px-margin flex items-center justify-between gap-space-md">

        {/* Logo */}
        <a className="font-label-code text-label-code text-on-surface font-semibold hover:text-primary transition-colors" href="#">
          <span className="text-primary-container">shihab</span><span className="text-text-muted">.dev</span>
        </a>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          <a className="font-label-code text-label-code text-on-surface-variant hover:text-on-surface transition-colors" href="#about">About</a>
          <a className="font-label-code text-label-code text-on-surface-variant hover:text-on-surface transition-colors" href="#skills">Skills</a>
          <a className="font-label-code text-label-code text-on-surface-variant hover:text-on-surface transition-colors" href="#projects">Projects</a>
          <a className="font-label-code text-label-code text-on-surface-variant hover:text-on-surface transition-colors" href="#experience">Experience</a>
          <a className="font-label-code text-label-code text-on-surface-variant hover:text-on-surface transition-colors" href="#contact">Contact</a>
        </nav>

        {/* Social + CTA */}
        <div className="flex items-center gap-space-sm">
          <a aria-label="GitHub" className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" href="https://github.com/ahammed-shihab" rel="noreferrer" target="_blank">
            <FaGithub size={18} />
          </a>
          <a aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" href="https://www.linkedin.com/in/shihab-ahammed/" rel="noreferrer" target="_blank">
            <FaLinkedin size={18} />
          </a>
          <a className="hidden md:inline-flex items-center px-space-md py-1.5 rounded-lg bg-primary-container text-surface-obsidian font-label-code text-label-code font-bold hover:opacity-90 transition-all" href="#contact">
            Hire Me
          </a>
        </div>

      </div>
    </header>
  );
}
