import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin py-space-xl" id="writing">
{/*  Section Kicker Header  */}
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high font-label-caps text-label-caps text-primary-container mb-space-sm">
<span className="material-symbols-outlined text-[14px]">feed</span>
<span>// 05. ARTICLES</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-xs">Latest writing</h2>
<p className="font-body-md text-body-md text-text-muted">Thoughts, tutorials, and insights on tech, cybersecurity, and Linux.</p>
</div>
{/*  Article Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg mb-space-xl">
{/*  Article 1: Arch Linux  */}
<div className="group p-space-lg rounded-xl bg-surface-elevated/70 shadow-lg hover:shadow-xl hover:bg-surface-elevated transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="px-2.5 py-1 rounded-md bg-surface-container-highest font-label-code text-xs text-primary font-semibold">Linux</span>
<span className="material-symbols-outlined text-[20px] text-text-muted group-hover:text-primary transition-colors">menu_book</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-sm group-hover:text-primary-container transition-colors leading-snug">
            Mastering Linux Customization: A Guide to Arch Linux
          </h3>
<p className="font-body-md text-body-md text-text-muted mb-space-lg leading-relaxed">
            Dive into the world of dotfiles, window managers, and ricing to create the perfect development environment on Arch Linux.
          </p>
</div>
<div className="flex items-center justify-between pt-space-md border-t border-surface-border/40 font-label-code text-xs text-text-muted">
<span className="flex items-center gap-1 text-terminal-amber">
<span className="w-1.5 h-1.5 rounded-full bg-terminal-amber"></span>
<span>Coming Soon</span>
</span>
<span>5 min read</span>
</div>
</div>
{/*  Article 2: Network Protocols  */}
<div className="group p-space-lg rounded-xl bg-surface-elevated/70 shadow-lg hover:shadow-xl hover:bg-surface-elevated transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="px-2.5 py-1 rounded-md bg-surface-container-highest font-label-code text-xs text-secondary font-semibold">Cybersecurity</span>
<span className="material-symbols-outlined text-[20px] text-text-muted group-hover:text-secondary transition-colors">shield</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-sm group-hover:text-secondary transition-colors leading-snug">
            Understanding Network Protocols for Ethical Hacking
          </h3>
<p className="font-body-md text-body-md text-text-muted mb-space-lg leading-relaxed">
            A beginner-friendly breakdown of TCP/IP, DNS, and HTTP, and how attackers exploit misconfigurations in these protocols.
          </p>
</div>
<div className="flex items-center justify-between pt-space-md border-t border-surface-border/40 font-label-code text-xs text-text-muted">
<span className="flex items-center gap-1 text-terminal-amber">
<span className="w-1.5 h-1.5 rounded-full bg-terminal-amber"></span>
<span>Coming Soon</span>
</span>
<span>8 min read</span>
</div>
</div>
{/*  Article 3: Local LLMs with Ollama  */}
<div className="group p-space-lg rounded-xl bg-surface-elevated/70 shadow-lg hover:shadow-xl hover:bg-surface-elevated transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="px-2.5 py-1 rounded-md bg-surface-container-highest font-label-code text-xs text-tertiary-fixed font-semibold">AI</span>
<span className="material-symbols-outlined text-[20px] text-text-muted group-hover:text-primary transition-colors">psychology</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-sm group-hover:text-tertiary-fixed transition-colors leading-snug">
            Running Local LLMs with Ollama
          </h3>
<p className="font-body-md text-body-md text-text-muted mb-space-lg leading-relaxed">
            How to set up your own private, locally-hosted AI assistant using Ollama and Open WebUI without compromising data privacy.
          </p>
</div>
<div className="flex items-center justify-between pt-space-md border-t border-surface-border/40 font-label-code text-xs text-text-muted">
<span className="flex items-center gap-1 text-terminal-amber">
<span className="w-1.5 h-1.5 rounded-full bg-terminal-amber"></span>
<span>Coming Soon</span>
</span>
<span>6 min read</span>
</div>
</div>
</div>
{/*  All Articles Footer Link  */}
<div className="text-center">
<a className="inline-flex items-center gap-2 font-label-code text-label-code text-on-surface hover:text-primary-container transition-colors py-2 px-4 rounded-lg bg-surface-elevated hover:bg-surface-container-high" href="#writing">
<span>View all articles</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</section>
  );
}
