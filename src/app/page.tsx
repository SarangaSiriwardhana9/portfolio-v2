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
    return <div className="min-h-screen bg-background"></div>
  }

  return (
    <ThemeProvider>
      <Navbar />
      <main> {/* Remove any padding/margin from main */}
        <div className="flex flex-col"> {/* No spacing classes here */}
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
        </div>
      </main>
      <Footer />
    </ThemeProvider>
  )
}