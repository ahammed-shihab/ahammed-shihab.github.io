import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin py-space-xl" id="about">
{/*  Section Kicker Header  */}
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high font-label-caps text-label-caps text-primary-container mb-space-sm">
<span className="material-symbols-outlined text-[14px]">terminal</span>
<span>// 01. ABOUT</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-xs">About me</h2>
<p className="font-body-md text-body-md text-text-muted">Get to know me better and see what drives my passion for technology.</p>
</div>
{/*  Main About Content: Grid Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  Bio Longform Narrative Card  */}
<div className="lg:col-span-6 p-space-xl rounded-xl bg-surface-elevated/70 shadow-xl backdrop-blur-md flex flex-col gap-space-md leading-relaxed">
<div className="flex items-center gap-2 font-label-code text-label-code text-secondary mb-1">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span>ROOT_NARRATIVE</span>
</div>
<p className="font-body-lg text-body-lg text-on-surface">
          Hello — I'm <strong className="text-primary-container font-semibold">Shihab Ahammed</strong>, a motivated Computer Science student based in Dhaka, Bangladesh, currently studying at Southeast University.
        </p>
<p className="font-body-md text-body-md text-text-muted">
          My journey into technology began with a deep curiosity about how systems work. This led me to explore Linux, transitioning from standard desktop environments to advanced dual-boot setups and customizing Arch Linux to fit my workflow perfectly.
        </p>
<p className="font-body-md text-body-md text-text-muted">
          I have a strong passion for <strong className="text-secondary font-semibold">Cybersecurity</strong>. I spend my time understanding networking protocols, learning ethical hacking fundamentals, and solving Capture The Flag (CTF) challenges to hone my skills.
        </p>
<p className="font-body-md text-body-md text-text-muted">
          When I'm not studying or hacking away in the terminal, I enjoy playing video games, exploring new AI tools, and tutoring others in ICT.
        </p>
<div className="pt-space-sm flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded bg-surface-container font-label-code text-xs text-on-surface-variant">Southeast University</span>
<span className="px-2.5 py-1 rounded bg-surface-container font-label-code text-xs text-on-surface-variant">Dhaka, Bangladesh</span>
<span className="px-2.5 py-1 rounded bg-surface-container font-label-code text-xs text-on-surface-variant">Arch / Kali / Fedora</span>
</div>
</div>
{/*  4 Pillars Feature Cards Grid  */}
<div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
{/*  Feature 1: Linux Enthusiast  */}
<div className="p-space-lg rounded-xl bg-surface-container/60 hover:bg-surface-elevated shadow-md transition-all group flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform mb-space-md">
<span className="material-symbols-outlined text-[24px]">terminal</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">Linux enthusiast</h3>
<p className="font-body-md text-body-md text-text-muted">Customizing and working heavily within Linux environments — Arch, Fedora, Kali.</p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1 font-label-caps text-label-caps text-primary-fixed-dim">
<span>KERNEL ARCHITECTURE</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
</div>
</div>
{/*  Feature 2: Cybersecurity  */}
<div className="p-space-lg rounded-xl bg-surface-container/60 hover:bg-surface-elevated shadow-md transition-all group flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary group-hover:scale-110 transition-transform mb-space-md">
<span className="material-symbols-outlined text-[24px]">shield</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">Cybersecurity</h3>
<p className="font-body-md text-body-md text-text-muted">Learning ethical hacking, networking, and participating in CTF challenges.</p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1 font-label-caps text-label-caps text-secondary">
<span>OFFENSIVE &amp; DEFENSIVE</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
</div>
</div>
{/*  Feature 3: Software Dev  */}
<div className="p-space-lg rounded-xl bg-surface-container/60 hover:bg-surface-elevated shadow-md transition-all group flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-space-md">
<span className="material-symbols-outlined text-[24px]">code</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">Software dev</h3>
<p className="font-body-md text-body-md text-text-muted">Writing code in C++, Python, and building full-stack applications.</p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1 font-label-caps text-label-caps text-primary">
<span>FULL STACK SYSTEMS</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
</div>
</div>
{/*  Feature 4: AI Explorer  */}
<div className="p-space-lg rounded-xl bg-surface-container/60 hover:bg-surface-elevated shadow-md transition-all group flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary-fixed-dim group-hover:scale-110 transition-transform mb-space-md">
<span className="material-symbols-outlined text-[24px]">psychology</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">AI explorer</h3>
<p className="font-body-md text-body-md text-text-muted">Fascinated by LLMs, Ollama, and integrating AI into daily workflows.</p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1 font-label-caps text-label-caps text-tertiary-fixed-dim">
<span>LOCAL LLMS &amp; AGENTS</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
</div>
</div>
</div>
</div>
</section>
  );
}
