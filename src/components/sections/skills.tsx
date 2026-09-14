import React from "react";

export default function Skills() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin py-space-xl" id="skills">

      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto mb-space-xl">
        <p className="font-label-code text-label-code text-primary-container mb-space-sm">02 — Skills</p>
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-xs">Technical skills</h2>
        <p className="font-body-md text-body-md text-text-muted">Technologies and tools I use to build secure systems and modern applications.</p>
      </div>

      {/* 3 column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

        {/* Programming & Dev */}
        <div className="p-space-lg rounded-xl bg-surface-elevated/80 shadow-sm border border-surface-border/20 flex flex-col gap-space-md">
          <div>
            <p className="font-label-caps text-label-caps text-primary-container mb-1">Languages &amp; Frontend</p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Programming &amp; Dev</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["C++", "Python", "Java", "SQL", "HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-on-surface hover:bg-surface-container-high transition-colors">{skill}</span>
            ))}
          </div>
        </div>

        {/* Cybersecurity */}
        <div className="p-space-lg rounded-xl bg-surface-elevated/80 shadow-sm border border-surface-border/20 flex flex-col gap-space-md">
          <div>
            <p className="font-label-caps text-label-caps text-secondary mb-1">InfoSec &amp; Networking</p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Cybersecurity</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Networking", "Linux", "Wireshark", "Nmap", "Burp Suite", "OWASP", "Ethical Hacking"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-secondary hover:bg-surface-container-high transition-colors">{skill}</span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="p-space-lg rounded-xl bg-surface-elevated/80 shadow-sm border border-surface-border/20 flex flex-col gap-space-md">
          <div>
            <p className="font-label-caps text-label-caps text-primary-fixed mb-1">Environment &amp; Distros</p>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Tools &amp; Platforms</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Git", "GitHub", "Docker", "VS Code", "Arch Linux", "Fedora", "Kali Linux", "Ollama", "Open WebUI"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code text-on-surface hover:bg-surface-container-high transition-colors">{skill}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
