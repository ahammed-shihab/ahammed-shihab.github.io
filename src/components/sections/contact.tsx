"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin py-space-xl mb-12" id="contact">

      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto mb-space-xl">
        <p className="font-label-code text-label-code text-primary-container mb-space-sm">06 — Contact</p>
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-xs">Get in touch</h2>
        <p className="font-body-md text-body-md text-text-muted">Have a question or want to work together? Reach out!</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-stretch">

        {/* Left: Contact info */}
        <div className="lg:col-span-5 p-space-xl rounded-xl bg-surface-elevated/80 border border-surface-border/20 shadow-sm flex flex-col gap-space-md">
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Contact Information</h3>

          <a className="p-space-md rounded-lg bg-surface-container/60 hover:bg-surface-container-high flex items-center gap-space-md transition-colors" href="mailto:ahammedshihab15@gmail.com">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </div>
            <div>
              <div className="font-label-caps text-label-caps text-text-muted text-xs">Email</div>
              <div className="font-label-code text-label-code text-on-surface">ahammedshihab15@gmail.com</div>
            </div>
          </a>

          <a className="p-space-md rounded-lg bg-surface-container/60 hover:bg-surface-container-high flex items-center gap-space-md transition-colors" href="https://www.linkedin.com/in/shihab-ahammed/" rel="noreferrer" target="_blank">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary shrink-0">
              <FaLinkedin size={20} />
            </div>
            <div>
              <div className="font-label-caps text-label-caps text-text-muted text-xs">LinkedIn</div>
              <div className="font-label-code text-label-code text-on-surface">shihab-ahammed</div>
            </div>
          </a>

          <a className="p-space-md rounded-lg bg-surface-container/60 hover:bg-surface-container-high flex items-center gap-space-md transition-colors" href="https://www.instagram.com/_laz_yyyy__/" rel="noreferrer" target="_blank">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-fixed shrink-0">
              <FaInstagram size={20} />
            </div>
            <div>
              <div className="font-label-caps text-label-caps text-text-muted text-xs">Instagram</div>
              <div className="font-label-code text-label-code text-on-surface">@_laz_yyyy__</div>
            </div>
          </a>

          <a className="p-space-md rounded-lg bg-surface-container/60 hover:bg-surface-container-high flex items-center gap-space-md transition-colors" href="https://github.com/ahammed-shihab" rel="noreferrer" target="_blank">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
              <FaGithub size={20} />
            </div>
            <div>
              <div className="font-label-caps text-label-caps text-text-muted text-xs">GitHub</div>
              <div className="font-label-code text-label-code text-on-surface">ahammed-shihab</div>
            </div>
          </a>

          <div className="p-space-md rounded-lg bg-surface-container/60 flex items-center gap-space-md">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant shrink-0">
              <span className="material-symbols-outlined text-[20px]">location_on</span>
            </div>
            <div>
              <div className="font-label-caps text-label-caps text-text-muted text-xs">Location</div>
              <div className="font-label-code text-label-code text-on-surface">Dhaka, Bangladesh</div>
            </div>
          </div>

          <p className="font-label-code text-label-code text-text-muted text-xs mt-auto pt-space-sm border-t border-surface-border/30">
            I typically respond within 24 hours.
          </p>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-7 p-space-xl rounded-xl bg-surface-elevated/80 border border-surface-border/20 shadow-sm">
          <form
            className="flex flex-col gap-space-md"
            id="contactForm"
            onSubmit={(e) => {
              e.preventDefault();
              document.getElementById("submitStatus")?.classList.remove("hidden");
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="flex flex-col gap-1.5">
                <label className="font-label-code text-label-code text-text-muted text-xs" htmlFor="contact-name">Name</label>
                <input
                  className="w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-primary-container"
                  id="contact-name" placeholder="John Doe" required type="text"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-label-code text-label-code text-text-muted text-xs" htmlFor="contact-email">Email</label>
                <input
                  className="w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-primary-container"
                  id="contact-email" placeholder="john@example.com" required type="email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-label-code text-label-code text-text-muted text-xs" htmlFor="contact-msg">Message</label>
              <textarea
                className="w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-primary-container resize-none"
                id="contact-msg" placeholder="Hello, I'd like to talk about..." required rows={5}
              />
            </div>
            <button
              className="w-full py-3.5 px-space-md rounded-xl bg-primary text-on-primary font-label-code text-label-code font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer"
              type="submit"
            >
              <span>Send Message</span>
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
            <div className="hidden p-space-sm rounded-lg bg-secondary-container/20 text-secondary font-label-code text-label-code text-center" id="submitStatus">
              Message sent! Thank you for reaching out.
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
