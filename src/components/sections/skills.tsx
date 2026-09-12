import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Skills() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin py-space-xl" id="skills">
{/*  Section Kicker Header  */}
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high font-label-caps text-label-caps text-primary-container mb-space-sm">
<span className="material-symbols-outlined text-[14px]">memory</span>
<span>// 02. STACK &amp; SKILLS</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-xs">Technical skills</h2>
<p className="font-body-md text-body-md text-text-muted">Technologies and tools I use to build secure systems and modern applications.</p>
</div>
{/*  Skills 3 Column Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/*  Category 01: Programming & Dev  */}
<div className="p-space-lg rounded-xl bg-surface-elevated/80 shadow-lg flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-md mb-space-md bg-surface-container-lowest/60 p-space-sm rounded-lg">
<span className="font-label-caps text-label-caps text-primary-container">01</span>
<span className="font-label-caps text-label-caps text-text-muted">LANGUAGES &amp; FRONTEND</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-md">Programming &amp; Development</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-on-surface hover:bg-surface-container-high transition-colors">C++</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-on-surface hover:bg-surface-container-high transition-colors">Python</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-on-surface hover:bg-surface-container-high transition-colors">Java</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-on-surface hover:bg-surface-container-high transition-colors">SQL</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-on-surface hover:bg-surface-container-high transition-colors">HTML</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-on-surface hover:bg-surface-container-high transition-colors">CSS</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-on-surface hover:bg-surface-container-high transition-colors">JavaScript</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-on-surface hover:bg-surface-container-high transition-colors">React</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-on-surface hover:bg-surface-container-high transition-colors">TypeScript</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-on-surface hover:bg-surface-container-high transition-colors">Tailwind CSS</span>
</div>
</div>
<div className="mt-space-lg pt-space-md">
<div className="flex justify-between font-label-caps text-label-caps text-text-muted mb-1">
<span>DEV PROFICIENCY</span>
<span className="text-primary-container">EXPANDING</span>
</div>
<div className="w-full h-1.5 bg-surface-container-lowest rounded-full overflow-hidden">
<div className="h-full bg-primary-container w-[88%] rounded-full"></div>
</div>
</div>
</div>
{/*  Category 02: Cybersecurity  */}
<div className="p-space-lg rounded-xl bg-surface-elevated/80 shadow-lg flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-md mb-space-md bg-surface-container-lowest/60 p-space-sm rounded-lg">
<span className="font-label-caps text-label-caps text-secondary">02</span>
<span className="font-label-caps text-label-caps text-text-muted">INFOSEC &amp; PROTOCOLS</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-md">Cybersecurity</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-secondary hover:bg-surface-container-high transition-colors">Networking</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-secondary hover:bg-surface-container-high transition-colors">Linux</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-secondary hover:bg-surface-container-high transition-colors">Wireshark</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-secondary hover:bg-surface-container-high transition-colors">Nmap</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-secondary hover:bg-surface-container-high transition-colors">Burp Suite</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-secondary hover:bg-surface-container-high transition-colors">OWASP</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-secondary hover:bg-surface-container-high transition-colors">Ethical Hacking</span>
</div>
</div>
<div className="mt-space-lg pt-space-md">
<div className="flex justify-between font-label-caps text-label-caps text-text-muted mb-1">
<span>SECURITY AUDITING</span>
<span className="text-secondary">ACTIVE PRACTICE</span>
</div>
<div className="w-full h-1.5 bg-surface-container-lowest rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[92%] rounded-full"></div>
</div>
</div>
</div>
{/*  Category 03: Tools & Platforms  */}
<div className="p-space-lg rounded-xl bg-surface-elevated/80 shadow-lg flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-md mb-space-md bg-surface-container-lowest/60 p-space-sm rounded-lg">
<span className="font-label-caps text-label-caps text-primary-fixed">03</span>
<span className="font-label-caps text-label-caps text-text-muted">ENVIRONMENT &amp; DISTROS</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-md">Tools &amp; Platforms</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-on-surface hover:bg-surface-container-high transition-colors">Git</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-on-surface hover:bg-surface-container-high transition-colors">GitHub</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-on-surface hover:bg-surface-container-high transition-colors">Docker</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-on-surface hover:bg-surface-container-high transition-colors">VS Code</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-primary-fixed hover:bg-surface-container-high transition-colors">Arch Linux</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-primary-fixed hover:bg-surface-container-high transition-colors">Fedora</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-primary-fixed hover:bg-surface-container-high transition-colors">Kali Linux</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-tertiary hover:bg-surface-container-high transition-colors">Ollama</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-tertiary hover:bg-surface-container-high transition-colors">Open WebUI</span>
</div>
</div>
<div className="mt-space-lg pt-space-md">
<div className="flex justify-between font-label-caps text-label-caps text-text-muted mb-1">
<span>INFRA &amp; LINUX DEPLOY</span>
<span className="text-primary-fixed">OPTIMIZED</span>
</div>
<div className="w-full h-1.5 bg-surface-container-lowest rounded-full overflow-hidden">
<div className="h-full bg-primary-fixed w-[95%] rounded-full"></div>
</div>
</div>
</div>
</div>
</section>
  );
}
