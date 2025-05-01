// app/page.tsx
'use client'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { AboutSection } from '@/components/sections/about'
import { ExperienceSection } from '@/components/sections/experience'
import { HeroSection } from '@/components/sections/hero'
import { SkillsSection } from '@/components/sections/skills'
import { ThemeProvider } from '@/components/theme-provider'
import { useEffect, useState } from 'react'
 

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a minimal loading state when not mounted
    return <div className="min-h-screen bg-background"></div>
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      <main className="min-h-screen">
        <div className="flex flex-col">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          {/* Add these components when you have them */}
          {/* <ProjectsSection /> */}
          {/* <ContactSection /> */}
          <ExperienceSection  />
        </div>
      </main>
      <Footer />
    </ThemeProvider>
  )
}