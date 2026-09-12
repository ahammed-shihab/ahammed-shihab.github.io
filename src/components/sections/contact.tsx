"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin py-space-xl mb-12" id="contact">
{/*  Section Kicker Header  */}
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high font-label-caps text-label-caps text-primary-container mb-space-sm">
<span className="material-symbols-outlined text-[14px]">satellite_alt</span>
<span>// 06. CONNECT</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-xs">Get in touch</h2>
<p className="font-body-md text-body-md text-text-muted">Have a question or want to work together? Reach out!</p>
</div>
{/*  Split Grid: Contact Channels vs Form  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-stretch">
{/*  Left Column: Contact Cards  */}
<div className="lg:col-span-5 p-space-xl rounded-xl bg-surface-elevated/80 shadow-xl flex flex-col justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-lg">Contact Information</h3>
<div className="flex flex-col gap-space-md">
{/*  Email  */}
<a className="p-space-md rounded-lg bg-surface-container/60 hover:bg-surface-container-high flex items-center gap-space-md transition-colors group" href="mailto:ahammedshihab15@gmail.com">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[20px]">mail</span>
</div>
<div className="min-w-0">
<div className="font-label-caps text-label-caps text-text-muted">EMAIL</div>
<div className="font-label-code text-label-code text-on-surface truncate">ahammedshihab15@gmail.com</div>
</div>
</a>
{/*  LinkedIn  */}
<a className="p-space-md rounded-lg bg-surface-container/60 hover:bg-surface-container-high flex items-center gap-space-md transition-colors group" href="https://www.linkedin.com/in/shihab-ahammed/" rel="noreferrer" target="_blank">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[20px]">connect_without_contact</span>
</div>
<div className="min-w-0">
<div className="font-label-caps text-label-caps text-text-muted">LINKEDIN</div>
<div className="font-label-code text-label-code text-on-surface truncate">shihab-ahammed</div>
</div>
</a>
{/*  Instagram  */}
<a className="p-space-md rounded-lg bg-surface-container/60 hover:bg-surface-container-high flex items-center gap-space-md transition-colors group" href="https://www.instagram.com/_laz_yyyy__/" rel="noreferrer" target="_blank">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-fixed group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[20px]">camera_alt</span>
</div>
<div className="min-w-0">
<div className="font-label-caps text-label-caps text-text-muted">INSTAGRAM</div>
<div className="font-label-code text-label-code text-on-surface truncate">@_laz_yyyy__</div>
</div>
</a>
{/*  GitHub  */}
<a className="p-space-md rounded-lg bg-surface-container/60 hover:bg-surface-container-high flex items-center gap-space-md transition-colors group" href="https://github.com/ahammed-shihab" rel="noreferrer" target="_blank">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[20px]">code</span>
</div>
<div className="min-w-0">
<div className="font-label-caps text-label-caps text-text-muted">GITHUB</div>
<div className="font-label-code text-label-code text-on-surface truncate">ahammed-shihab</div>
</div>
</a>
{/*  Location  */}
<div className="p-space-md rounded-lg bg-surface-container/60 flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-signal-crimson">
<span className="material-symbols-outlined text-[20px]">location_on</span>
</div>
<div className="min-w-0">
<div className="font-label-caps text-label-caps text-text-muted">LOCATION</div>
<div className="font-label-code text-label-code text-on-surface truncate">Dhaka, Bangladesh</div>
</div>
</div>
</div>
</div>
<div className="mt-space-lg pt-space-md border-t border-surface-border/40 font-label-caps text-label-caps text-text-muted flex items-center justify-between">
<span>RESPONSE PROTOCOL</span>
<span className="text-secondary">&lt; 24 HOURS</span>
</div>
</div>
{/*  Right Column: Interactive Dispatch Message Form  */}
<div className="lg:col-span-7 p-space-xl rounded-xl bg-surface-elevated/80 shadow-xl flex flex-col justify-between">
<form className="flex flex-col gap-space-md" id="contactForm" onSubmit={(e) => { e.preventDefault(); document.getElementById('submitStatus')?.classList.remove('hidden'); }}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
{/*  Name Input  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-code text-label-code text-text-muted" htmlFor="contact-name">NAME</label>
<input className="w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-primary-container shadow-inner" id="contact-name" placeholder="John Doe" required type="text"/>
</div>
{/*  Email Input  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-code text-label-code text-text-muted" htmlFor="contact-email">EMAIL</label>
<input className="w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-primary-container shadow-inner" id="contact-email" placeholder="john@example.com" required type="email"/>
</div>
</div>
{/*  Message Textarea  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-code text-label-code text-text-muted" htmlFor="contact-msg">MESSAGE</label>
<textarea className="w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-primary-container shadow-inner resize-none" id="contact-msg" placeholder="Hello, I'd like to talk about..." required rows={5}></textarea>
</div>
{/*  Submit Button  */}
<button className="w-full py-3.5 px-space-md rounded-xl bg-primary-container text-surface-obsidian font-label-code text-label-code font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all cursor-pointer" type="submit">
<span>Send Message</span>
<span className="material-symbols-outlined text-[18px]">send</span>
</button>
{/*  Feedback notification element  */}
<div className="hidden p-space-sm rounded-lg bg-secondary-container/20 text-secondary font-label-code text-label-code text-center" id="submitStatus">
            Packet dispatched successfully. Thank you for connecting!
          </div>
</form>
<div className="mt-space-lg pt-space-md border-t border-surface-border/40 font-label-caps text-label-caps text-text-muted flex items-center justify-between">
<span>ENCRYPTION: 256-BIT END-TO-END</span>
<span>PGP KEY AVAILABLE ON REQUEST</span>
</div>
</div>
</div>
</section>
  );
}
