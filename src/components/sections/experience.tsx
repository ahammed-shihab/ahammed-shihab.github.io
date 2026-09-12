import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Experience() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin py-space-xl" id="experience">
{/*  Section Kicker Header  */}
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high font-label-caps text-label-caps text-primary-container mb-space-sm">
<span className="material-symbols-outlined text-[14px]">history_edu</span>
<span>// 04. EXPERIENCE &amp; JOURNEY</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-xs">Education &amp; Experience</h2>
<p className="font-body-md text-body-md text-text-muted">My academic background and professional journey so far.</p>
</div>
{/*  Timeline Grid: Main Tracks vs Learning Milestones  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
{/*  Left Track: Academic & Teaching Experience  */}
<div className="lg:col-span-7 flex flex-col gap-space-lg relative">
{/*  Experience Card 1: Degree  */}
<div className="relative pl-8 sm:pl-10">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[14px]">school</span>
</div>
<div className="p-space-lg rounded-xl bg-surface-elevated/70 shadow-lg">
<div className="flex flex-wrap items-center justify-between gap-2 mb-1">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                B.Sc. in Computer Science &amp; Engineering
              </h3>
<span className="font-label-caps text-label-caps px-2 py-0.5 rounded bg-primary-container/20 text-primary-container">CURRENT</span>
</div>
<div className="font-label-code text-label-code text-primary-fixed mb-space-sm">Southeast University</div>
<div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-label-caps text-label-caps text-text-muted mb-space-md">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">calendar_month</span>
<span>Expected Graduation: Present</span>
</span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">location_on</span>
<span>Dhaka, Bangladesh</span>
</span>
</div>
<p className="font-body-md text-body-md text-text-muted leading-relaxed">
              Building a strong foundation in computer science principles, data structures, algorithms, and software engineering. Exploring cybersecurity and Linux as specialized interests.
            </p>
</div>
</div>
{/*  Experience Card 2: ICT Tutor  */}
<div className="relative pl-8 sm:pl-10">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[14px]">cast_for_education</span>
</div>
<div className="p-space-lg rounded-xl bg-surface-elevated/70 shadow-lg">
<div className="flex flex-wrap items-center justify-between gap-2 mb-1">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                ICT Tutor
              </h3>
<span className="font-label-caps text-label-caps px-2 py-0.5 rounded bg-surface-container text-text-muted">PART-TIME</span>
</div>
<div className="font-label-code text-label-code text-secondary mb-space-sm">Freelance</div>
<div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-label-caps text-label-caps text-text-muted mb-space-md">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span>
<span>Part-time</span>
</span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">location_on</span>
<span>Dhaka, Bangladesh</span>
</span>
</div>
<p className="font-body-md text-body-md text-text-muted leading-relaxed">
              Provided part-time ICT tutoring, helping students understand computer science fundamentals and basic programming concepts.
            </p>
</div>
</div>
</div>
{/*  Right Track: Learning Journey Chronology (Steps 01-06)  */}
<div className="lg:col-span-5 p-space-xl rounded-xl bg-surface-container/40 shadow-lg">
<div className="flex items-center justify-between mb-space-lg">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Learning Journey</h3>
<span className="font-label-caps text-label-caps text-text-muted">EVOLUTION</span>
</div>
<div className="flex flex-col gap-space-md">
{/*  Step 01  */}
<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-elevated/50 hover:bg-surface-elevated transition-colors">
<span className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center font-label-code text-label-code text-primary-container font-bold shrink-0">01</span>
<div className="min-w-0">
<div className="font-label-code text-label-code text-on-surface font-medium">Started Programming</div>
<div className="font-label-caps text-[10px] text-text-muted">C++ &amp; CORE FOUNDATIONS</div>
</div>
</div>
{/*  Step 02  */}
<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-elevated/50 hover:bg-surface-elevated transition-colors">
<span className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center font-label-code text-label-code text-primary-container font-bold shrink-0">02</span>
<div className="min-w-0">
<div className="font-label-code text-label-code text-on-surface font-medium">Learned Linux</div>
<div className="font-label-caps text-[10px] text-text-muted">BASH SCRIPTING &amp; SYSADMIN</div>
</div>
</div>
{/*  Step 03  */}
<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-elevated/50 hover:bg-surface-elevated transition-colors">
<span className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center font-label-code text-label-code text-secondary font-bold shrink-0">03</span>
<div className="min-w-0">
<div className="font-label-code text-label-code text-on-surface font-medium">Switched to Arch Linux</div>
<div className="font-label-caps text-[10px] text-text-muted">CUSTOM ENVIRONMENT &amp; RICING</div>
</div>
</div>
{/*  Step 04  */}
<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-elevated/50 hover:bg-surface-elevated transition-colors">
<span className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center font-label-code text-label-code text-secondary font-bold shrink-0">04</span>
<div className="min-w-0">
<div className="font-label-code text-label-code text-on-surface font-medium">Started Cybersecurity</div>
<div className="font-label-caps text-[10px] text-text-muted">CTFS, WIRESHARK &amp; OWASP</div>
</div>
</div>
{/*  Step 05  */}
<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-elevated/50 hover:bg-surface-elevated transition-colors">
<span className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center font-label-code text-label-code text-primary-fixed font-bold shrink-0">05</span>
<div className="min-w-0">
<div className="font-label-code text-label-code text-on-surface font-medium">Learning AI</div>
<div className="font-label-caps text-[10px] text-text-muted">LOCAL LLMS WITH OLLAMA</div>
</div>
</div>
{/*  Step 06  */}
<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-elevated/50 hover:bg-surface-elevated transition-colors">
<span className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center font-label-code text-label-code text-primary-container font-bold shrink-0">06</span>
<div className="min-w-0">
<div className="font-label-code text-label-code text-on-surface font-medium">Building Real-world Projects</div>
<div className="font-label-caps text-[10px] text-text-muted">END-TO-END SECURE APPLICATIONS</div>
</div>
</div>
</div>
</div>
</div>
</section>
  );
}
