import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin py-space-xl" id="projects">
{/*  Section Kicker Header  */}
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high font-label-caps text-label-caps text-primary-container mb-space-sm">
<span className="material-symbols-outlined text-[14px]">folder_special</span>
<span>// 03. ARTIFACTS &amp; BUILDS</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-xs">Featured projects</h2>
<p className="font-body-md text-body-md text-text-muted">Some of the things I've built to apply my skills and solve problems.</p>
</div>
{/*  2x2 Projects Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
{/*  Project 1: Bus Reservation System  */}
<div className="group p-space-xl rounded-xl bg-surface-elevated/70 shadow-lg hover:shadow-2xl hover:bg-surface-elevated transition-all flex flex-col justify-between">
<div>
{/*  Header metadata  */}
<div className="flex items-center justify-between mb-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary-container group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[28px]">folder_open</span>
</div>
<a aria-label="Bus Reservation System GitHub" className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/shihab-ahammed" rel="noreferrer" target="_blank">
<span className="material-symbols-outlined text-[20px]">code</span>
</a>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs group-hover:text-primary-container transition-colors">
            Bus Reservation System
          </h3>
<p className="font-body-md text-body-md text-text-muted leading-relaxed mb-space-lg">
            A comprehensive console-based reservation system built in C++ to manage bookings, track seat availability, and handle passenger records.
          </p>
</div>
<div className="pt-space-md flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-md bg-surface-container-high font-label-code text-label-code text-primary">C++</span>
<span className="px-3 py-1 rounded-md bg-surface-container-high font-label-code text-label-code text-on-surface-variant">File I/O</span>
<span className="px-3 py-1 rounded-md bg-surface-container-high font-label-code text-label-code text-on-surface-variant">Data Structures</span>
</div>
</div>
{/*  Project 2: Linux Customization Lab  */}
<div className="group p-space-xl rounded-xl bg-surface-elevated/70 shadow-lg hover:shadow-2xl hover:bg-surface-elevated transition-all flex flex-col justify-between">
<div>
{/*  Header metadata  */}
<div className="flex items-center justify-between mb-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[28px]">tune</span>
</div>
<a aria-label="Linux Customization Lab GitHub" className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors" href="https://github.com/shihab-ahammed" rel="noreferrer" target="_blank">
<span className="material-symbols-outlined text-[20px]">code</span>
</a>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs group-hover:text-secondary transition-colors">
            Linux Customization Lab
          </h3>
<p className="font-body-md text-body-md text-text-muted leading-relaxed mb-space-lg">
            A repository of scripts and configurations for customizing Arch Linux, Fedora, and Kali Linux. Includes automated dotfiles setup and ricing.
          </p>
</div>
<div className="pt-space-md flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-md bg-surface-container-high font-label-code text-label-code text-secondary">Bash</span>
<span className="px-3 py-1 rounded-md bg-surface-container-high font-label-code text-label-code text-on-surface-variant">Linux</span>
<span className="px-3 py-1 rounded-md bg-surface-container-high font-label-code text-label-code text-on-surface-variant">Dotfiles</span>
</div>
</div>
{/*  Project 3: Cybersecurity CTF Toolkit  */}
<div className="group p-space-xl rounded-xl bg-surface-elevated/70 shadow-lg hover:shadow-2xl hover:bg-surface-elevated transition-all flex flex-col justify-between">
<div>
{/*  Header metadata  */}
<div className="flex items-center justify-between mb-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[28px]">terminal</span>
</div>
<a aria-label="Cybersecurity CTF Toolkit GitHub" className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/shihab-ahammed" rel="noreferrer" target="_blank">
<span className="material-symbols-outlined text-[20px]">code</span>
</a>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs group-hover:text-primary transition-colors">
            Cybersecurity CTF Toolkit
          </h3>
<p className="font-body-md text-body-md text-text-muted leading-relaxed mb-space-lg">
            A curated collection of scripts and tools for solving Capture The Flag challenges, focusing on network analysis and cryptography.
          </p>
</div>
<div className="pt-space-md flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-md bg-surface-container-high font-label-code text-label-code text-primary-fixed-dim">Python</span>
<span className="px-3 py-1 rounded-md bg-surface-container-high font-label-code text-label-code text-on-surface-variant">Networking</span>
<span className="px-3 py-1 rounded-md bg-surface-container-high font-label-code text-label-code text-on-surface-variant">Cryptography</span>
</div>
</div>
{/*  Project 4: AI Assistant Experiments  */}
<div className="group p-space-xl rounded-xl bg-surface-elevated/70 shadow-lg hover:shadow-2xl hover:bg-surface-elevated transition-all flex flex-col justify-between">
<div>
{/*  Header metadata  */}
<div className="flex items-center justify-between mb-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-tertiary-fixed group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[28px]">neurology</span>
</div>
<a aria-label="AI Assistant Experiments GitHub" className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/shihab-ahammed" rel="noreferrer" target="_blank">
<span className="material-symbols-outlined text-[20px]">code</span>
</a>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs group-hover:text-tertiary-fixed transition-colors">
            AI Assistant Experiments
          </h3>
<p className="font-body-md text-body-md text-text-muted leading-relaxed mb-space-lg">
            Local LLM integrations using Ollama and Open WebUI to create a privacy-first AI assistant for coding and daily tasks.
          </p>
</div>
<div className="pt-space-md flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-md bg-surface-container-high font-label-code text-label-code text-tertiary">Ollama</span>
<span className="px-3 py-1 rounded-md bg-surface-container-high font-label-code text-label-code text-on-surface-variant">Python</span>
<span className="px-3 py-1 rounded-md bg-surface-container-high font-label-code text-label-code text-on-surface-variant">API</span>
</div>
</div>
</div>
</section>
  );
}
