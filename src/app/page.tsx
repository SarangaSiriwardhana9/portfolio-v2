'use client'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { AboutSection } from '@/components/sections/about'
import { SocialLinks } from '@/components/sections/social-links'
import { ExperienceSection } from '@/components/sections/experience'
import { HeroSection } from '@/components/sections/hero'
import { ProjectsSection } from '@/components/sections/projects'
import { SkillsSection } from '@/components/sections/skills'
import { ThemeProvider } from '@/components/theme-provider'
import { useEffect, useState } from 'react'
import { ContactSection } from '@/components/sections/connect'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-background"></div>
  }

  return (
    <>
      {/* Animated background */}
      <div className="fixed inset-0 z-[-1] bg-background" />
      <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-background/80 via-background/40 to-background/80" />
      <div className="fixed inset-0 z-[-1] grid-pattern opacity-10" />
      
      {/* Animated gradient orbs */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        {/* Main floating orbs */}
        <div className="absolute top-20 -left-20 w-64 md:w-96 h-64 md:h-96 rounded-full bg-primary/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 -right-20 w-64 md:w-96 h-64 md:h-96 rounded-full bg-accent/10 blur-3xl animate-float-slow-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
        
        {/* Additional moving elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-primary/5 blur-2xl animate-float-fast" />
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full bg-accent/5 blur-2xl animate-float-fast-delayed" />
        
        {/* Moving lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-slide-right" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-slide-left" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-slide-down" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-slide-up" />
        </div>
      </div>

      <Navbar />
      <main className="max-w-[2000px] mx-auto px-2">
        <div className="flex flex-col">
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
  )
}