'use client'

import { Button } from '@/components/ui/button'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Code2, Cpu, GitBranch, Sparkles, Server, Database } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const floatingElements = [
  { icon: <Code2 className="h-6 w-6" />, delay: 0 },
  { icon: <Server className="h-6 w-6" />, delay: 0.5 },
  { icon: <Database className="h-6 w-6" />, delay: 1 }
]

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  const springConfig = { damping: 25, stiffness: 700 }
  const x = useSpring(mousePosition.x, springConfig)
  const y2 = useSpring(mousePosition.y, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section 
      ref={containerRef} 
      className="py-10 pb-20 md:pb-36 relative mt-10 md:mt-24 flex items-center overflow-hidden pt-[5vh]"
      id="home"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute top-20 -left-20 w-64 md:w-96 h-64 md:h-96 rounded-full border border-primary/30 blur-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
          className="absolute bottom-20 -right-20 w-64 md:w-96 h-64 md:h-96 rounded-full border border-accent/30 blur-2xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative max-w-[2000px]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block"
            >
              <div className="relative px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-lg">
                <div className="absolute -left-1 -top-1 w-3 h-3 bg-primary rounded-full animate-ping" />
                <div className="absolute -left-1 -top-1 w-3 h-3 bg-primary rounded-full" />
                <span className="text-sm font-medium">Junior Full Stack Developer</span>
              </div>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="block">Building</span>
                <span className="block text-primary">Digital Dreams</span>
                <span className="block">Into Reality</span>
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Crafting exceptional digital experiences with cutting-edge technologies.
                Let&apos;s transform your vision into reality.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                className="group"
                onClick={() => scrollToSection('contact')}
              >
                Let&apos;s Work Together
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className='hover:bg-primary/10'
                onClick={() => scrollToSection('projects')}
              >
                View Portfolio
              </Button>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 pt-4 md:pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-primary">5+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-primary">50+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-primary">30+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile Image Section */}
          <motion.div 
            className="block lg:hidden mt-8 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden border border-border/50 shadow-lg">
              <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
              <Image
                src="/banner5.jpg"
                alt="Saranga Siriwardhana"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/70" />
            </div>
          </motion.div>

          {/* Desktop Image Section */}
          <motion.div 
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="relative w-full h-[600px] bg-background/50 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl overflow-hidden">
              <Image
                src="/banner5.jpg"
                alt="Saranga Siriwardhana"
                fill
                className="object-cover opacity-90"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/80" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 md:bottom-22 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary flex justify-center">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}