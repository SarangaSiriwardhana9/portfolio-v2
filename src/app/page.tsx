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

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    let mouseX = width / 2
    let mouseY = height / 2
    let animationFrameId: number

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    setCanvasDimensions()
    window.addEventListener('resize', setCanvasDimensions)

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = width < 768 ? 80 : 150
    const connectDistance = width < 768 ? 120 : 160

    class Particle {
      x: number
      y: number
      size: number
      baseX: number
      baseY: number
      density: number
      color: string

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 3 + 1
        this.baseX = this.x
        this.baseY = this.y
        this.density = (Math.random() * 30) + 1

        // Color with slight random variation
        const hue = 220 + Math.random() * 30 // Blue-ish
        const saturation = 70 + Math.random() * 20
        const lightness = 50 + Math.random() * 10
        const alpha = 0.6 + Math.random() * 0.2
        this.color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      update() {
        // Calculate distance between mouse and particle
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Move particles slightly toward mouse
        if (distance < 200) {
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const maxDistance = 200
          const force = (maxDistance - distance) / maxDistance
          const directionX = forceDirectionX * force * this.density * 0.6
          const directionY = forceDirectionY * force * this.density * 0.6

          this.x += directionX
          this.y += directionY
        }

        // Return particles slowly to original position
        const dx2 = this.baseX - this.x
        const dy2 = this.baseY - this.y
        this.x += dx2 * 0.02
        this.y += dy2 * 0.02

        // Draw the particle
        this.draw()
      }
    }

    // Create particles
    const createParticles = () => {
      particlesArray.length = 0
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    createParticles()

    // Connect nearby particles with lines
    const connectParticles = () => {
      if (!ctx) return

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectDistance) {
            const opacity = 1 - (distance / connectDistance)
            ctx.strokeStyle = `rgba(153, 153, 255, ${opacity * 0.4})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation
    const animate = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, width, height)

      for (const particle of particlesArray) {
        particle.update()
      }

      connectParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [mounted])

  if (!mounted) {
    return <div className="min-h-screen bg-background"></div>
  }

  return (
    <>
      {/* Interactive dots background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[-1] w-full h-full pointer-events-none bg-background"
      />

      {/* Subtle overlay for better text contrast */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-background/80 via-background/40 to-background/80 pointer-events-none" />

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