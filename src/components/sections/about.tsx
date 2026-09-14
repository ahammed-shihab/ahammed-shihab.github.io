import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin py-space-xl" id="about">

      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto mb-space-xl">
        <p className="font-label-code text-label-code text-primary-container mb-space-sm">01 — About</p>
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-xs">About me</h2>
        <p className="font-body-md text-body-md text-text-muted">Get to know me better and see what drives my passion for technology.</p>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

        {/* Bio card */}
        <div className="lg:col-span-6 p-space-xl rounded-xl bg-surface-elevated/70 shadow-lg flex flex-col gap-space-md leading-relaxed">
          <div className="flex flex-col sm:flex-row gap-space-lg items-start">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 border border-surface-border">
              <Image className="w-full h-full object-cover" alt="Shihab Ahammed" src="/profile.png" width={144} height={144} priority />
            </div>
            <div className="flex-1">
              <p className="font-body-lg text-body-lg text-on-surface">
                Hello — I&apos;m <strong className="text-primary-container font-semibold">Shihab Ahammed</strong>, a Computer Science student based in Dhaka, Bangladesh, studying at Southeast University.
              </p>
            </div>
          </div>
          <p className="font-body-md text-body-md text-text-muted">
            My journey into tech started with a deep curiosity about how systems work — which led me into Linux, dual-boot setups, and eventually Arch Linux as my daily driver.
          </p>
          <p className="font-body-md text-body-md text-text-muted">
            I have a strong passion for <strong className="text-secondary font-semibold">Cybersecurity</strong> — exploring networking protocols, ethical hacking, and solving CTF challenges in my spare time.
          </p>
          <p className="font-body-md text-body-md text-text-muted">
            Outside of that, I enjoy gaming, experimenting with AI tools, and tutoring others in ICT.
          </p>
          <div className="pt-space-sm flex flex-wrap gap-2">
            <span className="px-2.5 py-1 rounded bg-surface-container font-label-code text-xs text-on-surface-variant">Southeast University</span>
            <span className="px-2.5 py-1 rounded bg-surface-container font-label-code text-xs text-on-surface-variant">Dhaka, Bangladesh</span>
            <span className="px-2.5 py-1 rounded bg-surface-container font-label-code text-xs text-on-surface-variant">Arch / Kali / Fedora</span>
          </div>
        </div>

        {/* Feature cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-space-md">

          <div className="p-space-lg rounded-xl bg-surface-container/60 hover:bg-surface-elevated border border-surface-border/30 shadow-sm transition-all flex flex-col gap-space-sm">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container mb-1">
              <span className="material-symbols-outlined text-[22px]">terminal</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Linux</h3>
            <p className="font-body-md text-body-md text-text-muted">Arch, Fedora, and Kali Linux — heavily customized to fit my workflow.</p>
          </div>

          <div className="p-space-lg rounded-xl bg-surface-container/60 hover:bg-surface-elevated border border-surface-border/30 shadow-sm transition-all flex flex-col gap-space-sm">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary mb-1">
              <span className="material-symbols-outlined text-[22px]">shield</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Cybersecurity</h3>
            <p className="font-body-md text-body-md text-text-muted">Ethical hacking, networking, and CTF challenges to sharpen my skills.</p>
          </div>

          <div className="p-space-lg rounded-xl bg-surface-container/60 hover:bg-surface-elevated border border-surface-border/30 shadow-sm transition-all flex flex-col gap-space-sm">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary mb-1">
              <span className="material-symbols-outlined text-[22px]">code</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Software Dev</h3>
            <p className="font-body-md text-body-md text-text-muted">Writing code in C++, Python, and building full-stack applications.</p>
          </div>

          <div className="p-space-lg rounded-xl bg-surface-container/60 hover:bg-surface-elevated border border-surface-border/30 shadow-sm transition-all flex flex-col gap-space-sm">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary mb-1">
              <span className="material-symbols-outlined text-[22px]">psychology</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">AI</h3>
            <p className="font-body-md text-body-md text-text-muted">Local LLMs with Ollama and Open WebUI integrated into daily workflows.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
