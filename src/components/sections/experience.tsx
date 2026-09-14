import React from "react";

const steps = [
  { num: "01", title: "Started Programming", sub: "C++ & core foundations", color: "text-primary-container" },
  { num: "02", title: "Learned Linux", sub: "Bash scripting & sysadmin", color: "text-primary-container" },
  { num: "03", title: "Switched to Arch Linux", sub: "Custom environment & ricing", color: "text-secondary" },
  { num: "04", title: "Started Cybersecurity", sub: "CTFs, Wireshark & OWASP", color: "text-secondary" },
  { num: "05", title: "Exploring AI", sub: "Local LLMs with Ollama", color: "text-primary-fixed" },
  { num: "06", title: "Building real-world projects", sub: "Full-stack & secure apps", color: "text-primary-container" },
];

export default function Experience() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin py-space-xl" id="experience">

      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto mb-space-xl">
        <p className="font-label-code text-label-code text-primary-container mb-space-sm">04 — Experience</p>
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-xs">Education &amp; Experience</h2>
        <p className="font-body-md text-body-md text-text-muted">My academic background and professional journey so far.</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

        {/* Left: Timeline */}
        <div className="lg:col-span-7 flex flex-col gap-space-lg">

          {/* Card: Degree */}
          <div className="relative pl-8 sm:pl-10">
            <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined text-[14px]">school</span>
            </div>
            <div className="p-space-lg rounded-xl bg-surface-elevated/70 border border-surface-border/20 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">B.Sc. in Computer Science &amp; Engineering</h3>
                <span className="font-label-caps text-label-caps px-2 py-0.5 rounded bg-primary-container/20 text-primary-container text-xs">Current</span>
              </div>
              <div className="font-label-code text-label-code text-primary-fixed mb-space-sm">Southeast University</div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-text-muted text-xs mb-space-md font-label-caps">
                <span>Dhaka, Bangladesh</span>
              </div>
              <p className="font-body-md text-body-md text-text-muted leading-relaxed">
                Building a strong foundation in computer science, data structures, algorithms, and software engineering. Exploring cybersecurity and Linux as specialized interests.
              </p>
            </div>
          </div>

          {/* Card: ICT Tutor */}
          <div className="relative pl-8 sm:pl-10">
            <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[14px]">cast_for_education</span>
            </div>
            <div className="p-space-lg rounded-xl bg-surface-elevated/70 border border-surface-border/20 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">ICT Tutor</h3>
                <span className="font-label-caps text-label-caps px-2 py-0.5 rounded bg-surface-container text-text-muted text-xs">Part-time</span>
              </div>
              <div className="font-label-code text-label-code text-secondary mb-space-sm">Freelance</div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-text-muted text-xs mb-space-md font-label-caps">
                <span>Dhaka, Bangladesh</span>
              </div>
              <p className="font-body-md text-body-md text-text-muted leading-relaxed">
                Provided part-time ICT tutoring, helping students understand computer science fundamentals and basic programming concepts.
              </p>
            </div>
          </div>

        </div>

        {/* Right: Learning journey */}
        <div className="lg:col-span-5 p-space-xl rounded-xl bg-surface-container/40 border border-surface-border/20 shadow-sm">
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-lg">Learning Journey</h3>
          <div className="flex flex-col gap-space-md">
            {steps.map((step) => (
              <div key={step.num} className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-elevated/50 hover:bg-surface-elevated transition-colors">
                <span className={`w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center font-label-code text-label-code ${step.color} font-bold shrink-0 text-sm`}>
                  {step.num}
                </span>
                <div>
                  <div className="font-label-code text-label-code text-on-surface font-medium">{step.title}</div>
                  <div className="text-text-muted text-xs mt-0.5">{step.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
