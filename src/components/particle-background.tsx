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
import { useEffect, useState, useRef } from 'react'
import { ContactSection } from '@/components/sections/connect'
import dynamic from 'next/dynamic'

// Dynamically import Three.js components to avoid SSR issues
const ParticleBackground = dynamic(() => import('@/components/particle-background'), { ssr: false })

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
      {/* 3D Particle Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <ParticleBackground />
      </div>

      <Navbar />
      <main>
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