import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin py-space-xl lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start">

          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-surface-border mb-space-lg">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-code text-label-code text-secondary text-xs">Available for opportunities</span>
          </div>

          {/* Headline */}
          <h1 className="font-display-xl text-display-xl-mobile sm:text-display-xl text-on-surface font-bold tracking-tight mb-space-md">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-primary to-secondary">Shihab Ahammed</span>
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-space-lg">
            <span className="font-label-code text-label-code px-3 py-1 rounded-full bg-surface-container-high text-primary">CS Student</span>
            <span className="text-surface-border">·</span>
            <span className="font-label-code text-label-code px-3 py-1 rounded-full bg-surface-container-high text-secondary">Cybersecurity</span>
            <span className="text-surface-border">·</span>
            <span className="font-label-code text-label-code px-3 py-1 rounded-full bg-surface-container-high text-primary-fixed">Linux</span>
            <span className="text-surface-border">·</span>
            <span className="font-label-code text-label-code px-3 py-1 rounded-full bg-surface-container-high text-tertiary">AI</span>
          </div>

          {/* Description */}
          <p className="font-body-lg text-body-lg text-text-muted max-w-2xl mb-space-xl leading-relaxed">
            Passionate about cybersecurity, Linux, AI, and building secure systems. Currently studying Computer Science while exploring ethical hacking, C++, networking, and modern software development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-space-md mb-space-xl">
            <a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-xl bg-primary-container text-surface-obsidian font-label-code text-label-code font-bold hover:opacity-90 transition-all" href="#projects">
              View Projects
            </a>
            <a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-xl border border-surface-border text-on-surface font-label-code text-label-code hover:bg-surface-container-high transition-all" href="#contact">
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-space-md pt-space-md border-t border-surface-border/40 w-full">
            <a className="flex items-center gap-1.5 font-label-code text-label-code text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/ahammed-shihab" rel="noreferrer" target="_blank">
              <FaGithub size={16} />
              <span>GitHub</span>
            </a>
            <span className="text-surface-border">/</span>
            <a className="flex items-center gap-1.5 font-label-code text-label-code text-on-surface-variant hover:text-primary transition-colors" href="https://www.linkedin.com/in/shihab-ahammed/" rel="noreferrer" target="_blank">
              <FaLinkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <span className="text-surface-border">/</span>
            <a className="flex items-center gap-1.5 font-label-code text-label-code text-on-surface-variant hover:text-primary transition-colors" href="https://www.instagram.com/_laz_yyyy__/" rel="noreferrer" target="_blank">
              <FaInstagram size={16} />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 flex flex-col items-center gap-space-lg">

          {/* Large profile photo */}
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden ring-4 ring-primary-container/20 shadow-2xl">
            <Image
              className="w-full h-full object-cover"
              alt="Shihab Ahammed"
              src="/profile.png"
              width={256}
              height={256}
              priority
            />
          </div>

          {/* Name + location badge below photo */}
          <div className="text-center">
            <p className="font-headline-sm text-headline-sm text-on-surface font-semibold">Shihab Ahammed</p>
            <p className="font-label-code text-label-code text-text-muted text-xs mt-1">Dhaka, Bangladesh · GMT +6</p>
            <span className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-label-code text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
              Open to opportunities
            </span>
          </div>

          {/* Terminal card */}
          <div className="w-full bg-surface-elevated/90 rounded-xl shadow-xl overflow-hidden">
            {/* Terminal header */}
            <div className="bg-surface-container-highest px-space-md py-2.5 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400/80"></span>
              <span className="w-3 h-3 rounded-full bg-secondary/80"></span>
              <span className="font-label-code text-label-code text-text-muted text-xs ml-2">shihab@arch: ~</span>
            </div>

            {/* Terminal body */}
            <div className="p-space-lg font-label-code text-label-code space-y-3 bg-surface-obsidian/70">
              <div className="flex items-center gap-2">
                <span className="text-secondary">$</span>
                <span className="text-primary-container">cat skills.txt</span>
              </div>
              <div className="bg-surface-container-lowest/90 p-space-sm rounded text-xs space-y-1 pl-4">
                <div><span className="text-text-muted">Tools:   </span><span className="text-secondary">Wireshark, Burp Suite, Nmap</span></div>
                <div><span className="text-text-muted">Code:    </span><span className="text-primary-container">C++, Python, JavaScript</span></div>
                <div><span className="text-text-muted">AI:      </span><span className="text-tertiary">Ollama, Llama 3, Mistral</span></div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-secondary">$</span>
                <span className="text-primary-container animate-pulse">▊</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
