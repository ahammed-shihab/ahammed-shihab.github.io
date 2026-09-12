import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin py-space-xl lg:py-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
{/*  Left Column: Bio & Core Info  */}
<div className="lg:col-span-7 flex flex-col items-start">
{/*  System Boot Telemetry Pill  */}
<div className="inline-flex items-center gap-space-sm px-3.5 py-1 rounded-full bg-surface-elevated/90 shadow-md backdrop-blur-md mb-space-lg">
<span className="font-label-code text-label-code text-primary-container flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            sys.boot("shihab_ahammed")
          </span>
<span className="text-surface-border">|</span>
<span className="font-label-caps text-label-caps text-text-muted hidden sm:inline tracking-wider">SEC_KERNEL_v6.8_x86_64</span>
</div>
{/*  Headline  */}
<h1 className="font-display-xl text-display-xl-mobile sm:text-display-xl text-on-surface font-bold tracking-tight mb-space-md">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-primary to-secondary">Shihab Ahammed</span>
</h1>
{/*  Subtitle Tags  */}
<div className="flex flex-wrap items-center gap-2 mb-space-lg">
<span className="font-label-code text-label-code px-3 py-1 rounded-full bg-surface-container-high text-primary">CS Student</span>
<span className="text-surface-border font-label-code">·</span>
<span className="font-label-code text-label-code px-3 py-1 rounded-full bg-surface-container-high text-secondary">Cybersecurity Enthusiast</span>
<span className="text-surface-border font-label-code">·</span>
<span className="font-label-code text-label-code px-3 py-1 rounded-full bg-surface-container-high text-primary-fixed">Linux User</span>
<span className="text-surface-border font-label-code">·</span>
<span className="font-label-code text-label-code px-3 py-1 rounded-full bg-surface-container-high text-tertiary">AI Explorer</span>
</div>
{/*  Lead Paragraph  */}
<p className="font-body-lg text-body-lg text-text-muted max-w-2xl mb-space-xl leading-relaxed">
          Passionate about cybersecurity, Linux, AI, and building secure systems. Currently studying Computer Science while exploring ethical hacking, C++, networking, and modern software development.
        </p>
{/*  CTA Action Buttons  */}
<div className="flex flex-wrap items-center gap-space-md mb-space-xl">
<a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-xl bg-primary-container text-surface-obsidian font-label-code text-label-code font-bold shadow-lg shadow-primary-container/20 hover:shadow-primary-container/40 hover:-translate-y-0.5 transition-all" href="#projects">
<span>View Projects</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
<a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-xl bg-surface-elevated text-on-surface font-label-code text-label-code font-semibold shadow-md hover:bg-surface-container-high hover:text-primary transition-all" href="#contact">
<span className="text-secondary font-bold">&gt;</span>
<span>Contact Me</span>
</a>
</div>
{/*  Social Bar  */}
<div className="flex items-center gap-space-md pt-space-md">
<span className="font-label-caps text-label-caps text-text-muted">UPLINK //</span>
<a className="flex items-center gap-1.5 font-label-code text-label-code text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/ahammed-shihab" rel="noreferrer" target="_blank">
<span className="material-symbols-outlined text-[16px]">terminal</span>
<span>GitHub</span>
</a>
<span className="text-surface-border">/</span>
<a className="flex items-center gap-1.5 font-label-code text-label-code text-on-surface-variant hover:text-primary transition-colors" href="https://www.linkedin.com/in/shihab-ahammed/" rel="noreferrer" target="_blank">
<span className="material-symbols-outlined text-[16px]">link</span>
<span>LinkedIn</span>
</a>
<span className="text-surface-border">/</span>
<a className="flex items-center gap-1.5 font-label-code text-label-code text-on-surface-variant hover:text-primary transition-colors" href="https://www.instagram.com/_laz_yyyy__/" rel="noreferrer" target="_blank">
<span className="material-symbols-outlined text-[16px]">photo_camera</span>
<span>Instagram</span>
</a>
</div>
</div>
{/*  Right Column: Interactive Terminal Widget + Visual Profile Avatar  */}
<div className="lg:col-span-5 flex flex-col gap-space-md">
{/*  Terminal Window Card  */}
<div className="bg-surface-elevated/90 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl">
{/*  Terminal Header Bar  */}
<div className="bg-surface-container-highest px-space-md py-2.5 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-signal-crimson/80 inline-block"></span>
<span className="w-3 h-3 rounded-full bg-terminal-amber/80 inline-block"></span>
<span className="w-3 h-3 rounded-full bg-secondary/80 inline-block"></span>
</div>
<span className="font-label-code text-label-code text-text-muted text-xs">shihab@arch-station: ~</span>
<div className="flex items-center gap-1 text-text-muted">
<span className="material-symbols-outlined text-[14px]">lock</span>
<span className="font-label-caps text-[10px]">TLS 1.3</span>
</div>
</div>
{/*  Terminal Content Body  */}
<div className="p-space-lg font-label-code text-label-code space-y-3 bg-surface-obsidian/70">
<div className="flex items-center gap-2">
<span className="text-secondary">$</span>
<span className="text-primary-container">whoami</span>
</div>
<div className="text-on-surface pl-4 text-xs leading-relaxed">
<span className="text-text-muted">User:</span> Shihab Ahammed<br/>
<span className="text-text-muted">Role:</span> Computer Science Student &amp; Security Researcher<br/>
<span className="text-text-muted">Institute:</span> Southeast University, Dhaka<br/>
<span className="text-text-muted">OS:</span> Arch Linux x86_64 (Rolling)
            </div>
<div className="flex items-center gap-2 pt-1">
<span className="text-secondary">$</span>
<span className="text-primary-container">neofetch --telemetry</span>
</div>
<div className="bg-surface-container-lowest/90 p-space-sm rounded text-xs space-y-1 pl-4">
<div className="flex justify-between"><span className="text-text-muted">KERNEL:</span> <span className="text-secondary">Linux 6.8.9-zen1-1-zen</span></div>
<div className="flex justify-between"><span className="text-text-muted">UPTIME:</span> <span className="text-on-surface">14 days, 3 hours, 42 mins</span></div>
<div className="flex justify-between"><span className="text-text-muted">PRIMARY TOOLS:</span> <span className="text-primary-fixed">Wireshark, Burp Suite, Nmap</span></div>
<div className="flex justify-between"><span className="text-text-muted">AI ENGINE:</span> <span className="text-secondary">Ollama (Llama 3 / Mistral)</span></div>
</div>
<div className="flex items-center gap-2 pt-1">
<span className="text-secondary">$</span>
<span className="text-primary-container animate-pulse">ping -c 1 defensive_soc</span>
<span className="w-2 h-4 bg-primary-container animate-pulse inline-block"></span>
</div>
</div>
</div>
{/*  Profile Meta Badge with Portrait Placeholder  */}
<div className="p-space-md rounded-xl bg-surface-container/60 shadow-lg backdrop-blur-md flex items-center gap-space-md">
<div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-[0_0_16px_rgba(0,242,254,0.3)]">
<Image className="w-full h-full object-cover" alt="Shihab Ahammed" src="/profile.jpg" width={64} height={64} priority />
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">Shihab Ahammed</span>
<span className="font-label-caps text-label-caps px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary">ACTIVE</span>
</div>
<p className="font-label-code text-label-code text-text-muted truncate">Dhaka, Bangladesh · GMT +6</p>
<div className="mt-1 flex items-center gap-2 text-xs text-text-muted">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
<span className="font-label-caps text-[10px] text-primary">AVAILABLE FOR SECURITY INTERNSHIPS</span>
</div>
</div>
</div>
</div>
</div>
</section>
  );
}
