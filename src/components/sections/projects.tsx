import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Bus Reservation System",
    description: "A console-based reservation system built in C++ to manage bookings, track seat availability, and handle passenger records.",
    tags: ["C++", "File I/O", "Data Structures"],
    color: "text-primary-container",
    icon: "folder_open",
    github: "https://github.com/ahammed-shihab",
  },
  {
    title: "Linux Customization Lab",
    description: "A collection of scripts and configs for customizing Arch Linux, Fedora, and Kali Linux — includes automated dotfiles setup and ricing.",
    tags: ["Bash", "Linux", "Dotfiles"],
    color: "text-secondary",
    icon: "tune",
    github: "https://github.com/ahammed-shihab",
  },
  {
    title: "Cybersecurity CTF Toolkit",
    description: "A curated set of scripts and tools for solving CTF challenges, focused on network analysis and cryptography.",
    tags: ["Python", "Networking", "Cryptography"],
    color: "text-primary",
    icon: "terminal",
    github: "https://github.com/ahammed-shihab",
  },
  {
    title: "AI Assistant Experiments",
    description: "Local LLM integrations using Ollama and Open WebUI to build a privacy-first AI assistant for coding and daily tasks.",
    tags: ["Ollama", "Python", "API"],
    color: "text-tertiary",
    icon: "neurology",
    github: "https://github.com/ahammed-shihab",
  },
];

export default function Projects() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin py-space-xl" id="projects">

      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto mb-space-xl">
        <p className="font-label-code text-label-code text-primary-container mb-space-sm">03 — Projects</p>
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-xs">Featured projects</h2>
        <p className="font-body-md text-body-md text-text-muted">Some of the things I&apos;ve built to apply my skills and solve problems.</p>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {projects.map((project) => (
          <div key={project.title} className="group p-space-xl rounded-xl bg-surface-elevated/70 border border-surface-border/20 shadow-sm hover:shadow-lg hover:bg-surface-elevated transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-md">
                <div className={`w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center ${project.color}`}>
                  <span className="material-symbols-outlined text-[22px]">{project.icon}</span>
                </div>
                <a aria-label={`${project.title} on GitHub`} className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors text-sm font-label-code" href={project.github} rel="noreferrer" target="_blank">
                  <FaGithub size={16} />
                  <span>View</span>
                </a>
              </div>
              <h3 className={`font-headline-md text-headline-md text-on-surface font-bold mb-space-xs group-hover:${project.color} transition-colors`}>
                {project.title}
              </h3>
              <p className="font-body-md text-body-md text-text-muted leading-relaxed mb-space-lg">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-md bg-surface-container-high font-label-code text-label-code text-on-surface-variant">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
