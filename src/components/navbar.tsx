"use client"

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
import Image from "next/image"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
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

  const resumeURL = "/Saranga Siriwardhana_CV.pdf"
 
  if (!isMounted) {
    return (
      <header className="fixed top-0 w-full z-50  py-4 sm:py-6 bg-transparent">
        <div className="container mx-auto px-4 max-w-[2000px]">
          <div className="flex items-center justify-between">
            <div className="text-lg sm:text-xl font-bold">
              <div className="h-12 w-40 bg-muted/30 rounded-md"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10" />
              <div className="h-10 w-10 md:hidden" />
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
          ? "glass border-b border-white/10 py-3 sm:py-4" 
          : "bg-transparent py-5 sm:py-7"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 max-w-[2000px]">
        <div className="flex items-center justify-between">
          <motion.div 
            className="font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#home" className="flex items-center gap-3">
              <div className="relative overflow-hidden  size-10 sm:size-14 ">
                <Image 
                  src="/favicon.png" 
                  alt="Saranga Siriwardhana" 
                  fill 
                  className="  rounded-4xl hover:scale-110 transition-transform duration-500"
                />
                <motion.div 
                  className="absolute inset-0  "
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 0.3, 0.7]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <span className="hidden sm:inline-block text-base sm:text-lg">Saranga Siriwardhana</span>
            </a>
          </motion.div>

          <motion.nav 
            className="hidden md:flex items-center space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                className={`hover:bg-primary/10 hover:text-primary/90 text-sm font-medium relative px-4 py-2 h-auto ${activeSection === item.href.substring(1) ? 'text-primary' : ''}`}
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
            <Link href={resumeURL} download="Saranga_Siriwardhana_CV.pdf" target="_blank" rel="noopener noreferrer">
              <Button 
                size="sm" 
                variant="outline" 
                className="ml-2 flex items-center gap-2 border-primary/30 h-auto px-4 py-2 hover:bg-primary/10"
              >
                <Download className="h-4 w-4" />
                <span className="hidden lg:inline">Resume</span>
              </Button>
            </Link>
          </motion.nav>

          <div className="flex items-center space-x-2 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="border-primary/20 bg-background/95 backdrop-blur-xl"
                style={{
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)'
                }}
              >
                <SheetHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative overflow-hidden rounded-lg size-12 border border-primary/20">
                      <Image 
                        src="/favicon.png" 
                        alt="Saranga Siriwardhana" 
                        fill 
                        className=""
                        priority
                      />
                    </div>
                    <SheetTitle className="text-gradient">Saranga Siriwardhana</SheetTitle>
                  </div>
                  <SheetDescription>
                    BSc (Hons) Software Engineering Student | Full Stack Developer
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className={`justify-start text-base py-6 ${activeSection === item.href.substring(1) ? 'text-primary' : ''}`}
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
                  <Link 
                    href={resumeURL} 
                    download="Saranga_Siriwardhana_CV.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                    onClick={() => {
                      document.querySelector('[data-state="open"]')?.dispatchEvent(
                        new KeyboardEvent("keydown", {
                          key: "Escape",
                          bubbles: true
                        })
                      )
                    }}
                  >
                    <div className="px-2">
                      <Button 
                        variant="outline" 
                        className="justify-start px-8 gap-2 mt-4 bg-primary/10 border-primary/20 py-6 text-base w-full"
                      >
                        <Download className="h-5 w-5" />
                        Download Resume
                      </Button>
                    </div>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}