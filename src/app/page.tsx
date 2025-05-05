'use client'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { AboutSection } from '@/components/sections/about'
import { SocialLinks } from '@/components/sections/social-links'
import { ExperienceSection } from '@/components/sections/experience'
import { HeroSection } from '@/components/sections/hero'
import { ProjectsSection } from '@/components/sections/projects'
import { SkillsSection } from '@/components/sections/skills'
import { ContactSection } from '@/components/sections/connect'
import { useEffect, useState, useRef } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [highPerformanceMode, setHighPerformanceMode] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const shouldUseHighPerformance = (): boolean => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      const isLowEnd = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4
      return isMobile || isLowEnd
    }
    
    setHighPerformanceMode(shouldUseHighPerformance())
    let width = window.innerWidth
    let height = window.innerHeight
    let mouseX = width / 2
    let mouseY = height / 2
    let animationFrameId: number
    let frameCount = 0
    let isAnimating = true

    const setCanvasDimensions = () => {
      width = window.innerWidth
      height = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx?.scale(dpr, dpr)
    }

    setCanvasDimensions()
    window.addEventListener('resize', setCanvasDimensions)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    const numberOfParticles = width < 480 ? 30 : width < 768 ? 50 : width < 1024 ? 80 : 120
    const connectDistance = width < 480 ? 80 : width < 768 ? 100 : width < 1024 ? 130 : 160

    if (width < 480 && highPerformanceMode) {
      ctx.clearRect(0, 0, width, height)
      
      const numberOfDots = 60
      for (let i = 0; i < numberOfDots; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const size = Math.random() * 2 + 1
        
        const hue = 220 + Math.random() * 30
        const saturation = 70 + Math.random() * 20
        const lightness = 50 + Math.random() * 10
        const alpha = 0.6 + Math.random() * 0.2
        
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
        ctx.fill()
      }
      
      for (let i = 0; i < 30; i++) {
        const x1 = Math.random() * width
        const y1 = Math.random() * height
        const x2 = x1 + (Math.random() - 0.5) * 100
        const y2 = y1 + (Math.random() - 0.5) * 100
        
        ctx.strokeStyle = `rgba(153, 153, 255, ${Math.random() * 0.3})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }
      
      return () => {
        window.removeEventListener('resize', setCanvasDimensions)
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }

    const particlesArray: Particle[] = []

    class Particle {
      x: number
      y: number
      size: number
      baseX: number
      baseY: number
      density: number
      color: string
      private lastDrawX: number = 0
      private lastDrawY: number = 0
      private needsRedraw: boolean = true

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 3 + 1
        this.baseX = this.x
        this.baseY = this.y
        this.density = (Math.random() * 30) + 1
        this.lastDrawX = this.x
        this.lastDrawY = this.y

        const hue = 220 + Math.random() * 30
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
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

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

        const dx2 = this.baseX - this.x
        const dy2 = this.baseY - this.y
        this.x += dx2 * 0.02
        this.y += dy2 * 0.02

        this.needsRedraw = 
          Math.abs(this.x - this.lastDrawX) > 0.1 || 
          Math.abs(this.y - this.lastDrawY) > 0.1
        
        if (this.needsRedraw) {
          this.lastDrawX = this.x
          this.lastDrawY = this.y
          this.draw()
        }
      }
    }

    const createParticles = () => {
      particlesArray.length = 0
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    createParticles()

    const connectParticles = () => {
      if (!ctx) return
      
      if (highPerformanceMode) {
        const checkEvery = 2
        
        for (let a = 0; a < particlesArray.length; a += checkEvery) {
          for (let b = a + checkEvery; b < particlesArray.length; b += checkEvery) {
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
        return
      }
      
      const cellSize = connectDistance
      const grid: Record<string, Particle[]> = {}
      
      for (const particle of particlesArray) {
        const cellX = Math.floor(particle.x / cellSize)
        const cellY = Math.floor(particle.y / cellSize)
        const cellKey = `${cellX},${cellY}`
        
        if (!grid[cellKey]) grid[cellKey] = []
        grid[cellKey].push(particle)
      }
      
      for (const particle of particlesArray) {
        const cellX = Math.floor(particle.x / cellSize)
        const cellY = Math.floor(particle.y / cellSize)
        
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const checkCellKey = `${cellX + i},${cellY + j}`
            const cellParticles = grid[checkCellKey] || []
            
            for (const otherParticle of cellParticles) {
              if (particle === otherParticle) continue
              
              const dx = particle.x - otherParticle.x
              const dy = particle.y - otherParticle.y
              const distance = Math.sqrt(dx * dx + dy * dy)
              
              if (distance < connectDistance) {
                const opacity = 1 - (distance / connectDistance)
                ctx.strokeStyle = `rgba(153, 153, 255, ${opacity * 0.4})`
                ctx.lineWidth = 1
                ctx.beginPath()
                ctx.moveTo(particle.x, particle.y)
                ctx.lineTo(otherParticle.x, otherParticle.y)
                ctx.stroke()
              }
            }
          }
        }
      }
    }

    const animate = () => {
      if (!ctx || !isAnimating) return

      ctx.clearRect(0, 0, width, height)
      
      const frameSkip = highPerformanceMode ? 2 : 1
      
      if (frameCount % frameSkip === 0) {
        for (const particle of particlesArray) {
          particle.update()
        }
        
        connectParticles()
      }
      
      frameCount++
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isAnimating = false
        cancelAnimationFrame(animationFrameId)
      } else {
        isAnimating = true
        animationFrameId = requestAnimationFrame(animate)
      }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)
    animate()

    return () => {
      isAnimating = false
      window.removeEventListener('resize', setCanvasDimensions)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      cancelAnimationFrame(animationFrameId)
    }
  }, [mounted])

  if (!mounted) {
    return <div className="min-h-screen bg-background"></div>
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[-1] w-full h-full pointer-events-none bg-background"
      />
      <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-background/80 via-background/40 to-background/80 pointer-events-none" />

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