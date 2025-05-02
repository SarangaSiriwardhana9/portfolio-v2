'use client'

import { Button } from '@/components/ui/button'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Code2, Cpu, GitBranch, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const floatingElements = [
  { icon: Code2, delay: 0, x: -20, y: -30 },
  { icon: Cpu, delay: 0.2, x: 30, y: -40 },
  { icon: GitBranch, delay: 0.4, x: -40, y: 20 },
  { icon: Sparkles, delay: 0.6, x: 40, y: 30 },
]

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
 
  // Interactive mouse effect
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
  

   // Scroll to sections function
const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
 
    const targetPosition = section.getBoundingClientRect().top + window.pageYOffset
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 2000  
    let startTime: number | null = null
    
 
    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      
      // Easing function for smoother scrolling
      const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
      
      window.scrollTo(0, startPosition + distance * ease(progress))
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }
    
    // Start the animation
    requestAnimationFrame(animation)
  }
}

  return (
    <section ref={containerRef} className="bg-background py-10 relative mt-24 flex items-center overflow-hidden pt-[5vh]">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 opacity-70"
        style={{ 
          background: `radial-gradient(circle at ${x}px ${y2}px, 
            rgba(59, 130, 246, 0.15) 0%, 
            rgba(139, 92, 246, 0.1) 30%, 
            transparent 70%)`
        }}
      />

      {/* Geometric shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute top-20 -left-20 w-96 h-96 rounded-full border border-primary/30 blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
          className="absolute bottom-20 -right-20 w-96 h-96 rounded-full border border-accent/30 blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Animated badge */}
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

            {/* Main title with split text animation */}
            <div className="space-y-4">
              <motion.h1 
                className="text-6xl md:text-7xl font-bold leading-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.span 
                  className="block overflow-hidden"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  Building
                </motion.span>
                <motion.span 
                  className="block overflow-hidden"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
                    Digital Dreams
                  </span>
                </motion.span>
                <motion.span 
                  className="block overflow-hidden"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  Into Reality
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                Crafting exceptional digital experiences with cutting-edge technologies.
                Let&apos;s transform your vision into reality.
              </motion.p>
            </div>

            {/* CTA buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
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
                onClick={() => scrollToSection('projects')}
              >
                View Portfolio
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <div>
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Interactive 3D-like display */}
          <div className="relative h-[600px] hidden lg:block">
            <motion.div 
              className="absolute inset-0"
              style={{
                transform: `translate(${x}px, ${y2}px)`,
                transition: "transform 0.1s ease-out"
              }}
            >
              {/* Main display screen */}
              <motion.div
                className="relative w-full h-full bg-background/50 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Code-like animation in the background */}
                <div className="absolute inset-0 overflow-hidden">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-1 bg-primary/10 rounded-full"
                      style={{ 
                        top: `${i * 10}%`,
                        left: 0,
                        right: 0
                      }}
                      animate={{
                        width: ['0%', '100%', '0%'],
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatType: 'reverse'
                      }}
                    />
                  ))}
                </div>

                {/* Floating elements */}
                {floatingElements.map((Element, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${
                      index === 0 ? 'top-20 left-20' :
                      index === 1 ? 'top-32 right-24' :
                      index === 2 ? 'bottom-24 left-16' :
                      'bottom-32 right-20'
                    }`}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{
                      duration: 3,
                      delay: Element.delay,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="p-4 bg-primary/10 backdrop-blur-sm rounded-2xl border border-primary/20">
                      <Element.icon className="h-8 w-8 text-primary" />
                    </div>
                  </motion.div>
                ))}

                {/* Center image with glassmorphism effect */}
                <div className="absolute inset-16 rounded-2xl overflow-hidden">
                  <div className="relative h-full w-full bg-background/80 backdrop-blur-md rounded-2xl border border-border/50 overflow-hidden">
                    <Image
                      src="/banner5.jpg"
                      alt="Saranga Siriwardhana"
                      fill
                      className="object-cover opacity-90"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/80" />
                  </div>
                </div>

                {/* Terminal-like footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-background/90 backdrop-blur-md border-t border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <motion.div
                    className="font-mono text-sm text-primary"
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                  >
                    <span className="text-muted-foreground">$</span> npm run create-amazing-things
                  </motion.div>
                </div>
              </motion.div>

              {/* Surrounding particles */}
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary/30"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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