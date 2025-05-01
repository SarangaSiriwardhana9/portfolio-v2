"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { Download, Menu } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Determine active section
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 200
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section)
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.substring(1))
    element?.scrollIntoView({ behavior: "smooth" })
  }

  // Prevent hydration mismatch by rendering a simpler version initially
  if (!isMounted) {
    return (
      <header className="fixed top-0 w-full z-50 py-4 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">
              <span className="text-primary">SS</span>
              <span className="hidden sm:inline-block">Saranga Siriwardhana</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8" />
              <div className="h-8 w-8 md:hidden" />
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass border-b border-white/10 py-2" 
          : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#home" className="flex items-center gap-2">
              <div className="flex items-center justify-center size-10 bg-primary rounded-full text-primary-foreground font-bold relative">
                <span>SS</span>
                <motion.div 
                  className="absolute inset-0 rounded-full border border-primary/80"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <span className="hidden sm:inline-block">Saranga Siriwardhana</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {navItems.map((item, i) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                className={`text-sm font-medium relative ${activeSection === item.href.substring(1) ? 'text-primary' : ''}`}
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    layoutId="activeSection"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </Button>
            ))}
            <Button size="sm" variant="outline" className="ml-2 flex items-center gap-2 border-primary/30">
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </Button>
            <ModeToggle />
          </motion.nav>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-2 md:hidden">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-primary/20 bg-background/90 backdrop-blur-xl">
                <SheetHeader>
                  <SheetTitle className="text-gradient">Saranga Siriwardhana</SheetTitle>
                  <SheetDescription>
                    BSc (Hons) Software Engineering Student | Full Stack Developer
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className={`justify-start ${activeSection === item.href.substring(1) ? 'text-primary' : ''}`}
                      onClick={() => {
                        scrollToSection(item.href)
                        document.querySelector('[data-state="open"]')?.dispatchEvent(
                          new KeyboardEvent("keydown", {
                            key: "Escape",
                            bubbles: true
                          })
                        )
                      }}
                    >
                      {item.name}
                    </Button>
                  ))}
                  <Button variant="outline" className="justify-start gap-2 mt-4 bg-primary/10 border-primary/20">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}