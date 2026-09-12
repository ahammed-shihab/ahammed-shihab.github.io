import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      {/* Subtle cyber glow backdrop layers */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-primary-container/10 via-secondary/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-[1200px] -left-48 w-[500px] h-[500px] bg-primary-fixed-dim/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-[2400px] -right-48 w-[500px] h-[500px] bg-secondary-container/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blog />
      <Contact />
    </div>
  );
}
