"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 150; // Reduced offset

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.substring(1));
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Navigation - Made smaller */}
      <motion.header
        className='fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-3 sm:px-4'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <motion.div
          className='bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3'
          style={{
            backgroundColor: useTransform(
              scrollY,
              [0, 100],
              ["rgba(0,0,0,0.2)", "rgba(0,0,0,0.8)"]
            ),
          }}
        >
          <div className='flex items-center justify-between'>
            {/* Logo - Made smaller */}
            <motion.div
              className='flex items-center gap-2'
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className='relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5'>
                <div className='w-full h-full rounded-lg overflow-hidden bg-black'>
                   
                  <Image
                    src='/favicon.png'
                    alt='SS'
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
              <span className='font-space-grotesk font-bold text-sm sm:text-base bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
                Saranga Siriwardhana
              </span>
            </motion.div>

            {/* Desktop Navigation - Made smaller */}
            <nav className='hidden md:flex items-center gap-1'>
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  className={`px-2 lg:px-3 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-300 relative ${
                    activeSection === item.href.substring(1)
                      ? "text-cyan-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0 + index * 0.1 }}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30'
                      layoutId='activeTab'
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* CTA Button - Made smaller */}
            <div className='hidden md:flex items-center gap-3'>
              <Link href='/Saranga Siriwardhana_CV.pdf' target='_blank'>
                <motion.button
                  className='px-3 lg:px-4 py-1.5 lg:py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-xs lg:text-sm font-medium text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300'
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.4 }}
                >
                  <Download className='w-3 h-3 mr-1.5 inline' />
                  Resume
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className='md:hidden'>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='text-white h-8 w-8'
                  >
                    <Menu className='h-4 w-4' />
                    <span className='sr-only'>Open navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side='right'
                  className='bg-black/95 backdrop-blur-2xl border-l border-white/10 w-72'
                >
                  <VisuallyHidden>
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </VisuallyHidden>

                  <div className='flex flex-col h-full'>
                    <div className='flex items-center justify-between mb-6'>
                      <div className='flex items-center gap-2'>
                        <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5'>
                          <div className='w-full h-full rounded-lg bg-black flex items-center justify-center'>
                            <Image
                              src='/placeholder.svg?height=24&width=24'
                              alt='SS'
                              width={24}
                              height={24}
                            />
                          </div>
                        </div>
                        <span className='font-space-grotesk font-bold text-sm text-white'>
                          Saranga
                        </span>
                      </div>
                      <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => setIsOpen(false)}
                        className='h-8 w-8'
                      >
                        <X className='h-4 w-4 text-white' />
                        <span className='sr-only'>Close navigation menu</span>
                      </Button>
                    </div>

                    <nav
                      className='flex flex-col gap-1 flex-1'
                      role='navigation'
                      aria-label='Main navigation'
                    >
                      {navItems.map((item) => (
                        <button
                          key={item.name}
                          className={`text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                            activeSection === item.href.substring(1)
                              ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                          onClick={() => scrollToSection(item.href)}
                          aria-current={
                            activeSection === item.href.substring(1)
                              ? "page"
                              : undefined
                          }
                        >
                          {item.name}
                        </button>
                      ))}
                    </nav>

                    <Link
                      href='/Saranga Siriwardhana_CV.pdf'
                      target='_blank'
                      className='mt-auto'
                    >
                      <Button className='w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 py-2.5 text-sm'>
                        <Download className='w-4 h-4 mr-2' />
                        Download Resume
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
}
