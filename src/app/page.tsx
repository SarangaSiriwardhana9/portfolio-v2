"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { AboutSection } from "@/components/sections/about";
import { SocialLinks } from "@/components/sections/social-links";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from "react";
import { ContactSection } from "@/components/sections/connect";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className='min-h-screen bg-black'></div>;
  }

  return (
    <>
      {/* Animated background */}
      <div className='fixed inset-0 z-[-1] bg-black' />

      <Navbar />
      <main className='max-w-6xl mx-auto px-2'>
        <div className='flex flex-col mt-4'>
          <HeroSection />
          <SocialLinks />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
