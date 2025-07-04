"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Code2, Server, Database } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const floatingElements = [
  { icon: <Code2 className='h-4 w-4' />, delay: 0 },
  { icon: <Server className='h-4 w-4' />, delay: 0.5 },
  { icon: <Database className='h-4 w-4' />, delay: 1 },
];

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll-based transforms for disappearing effect
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mousePosition.x, springConfig);
  const y2 = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 60;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.section
      ref={containerRef}
      className='py-6 pb-12 md:pb-20 relative mt-8 md:mt-16 flex items-center overflow-hidden pt-[3vh] min-h-screen'
      id='home'
      style={{ opacity, scale, y }}
    >
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Floating Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className='absolute'
            style={{
              left: `${20 + index * 30}%`,
              top: `${30 + index * 20}%`,
              x,
              y: y2,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            <div className='p-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm'>
              {element.icon}
            </div>
          </motion.div>
        ))}

        {/* Background Gradients */}
        <motion.div
          className='absolute top-10 -left-10 w-40 md:w-64 h-40 md:h-64 rounded-full border border-blue-500/20 blur-2xl'
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 50,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            scale: {
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        />

        <motion.div
          className='absolute bottom-10 -right-10 w-40 md:w-64 h-40 md:h-64 rounded-full border border-cyan-400/20 blur-2xl'
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: {
              duration: 40,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            scale: {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      <div className='container mx-auto px-4 sm:px-6 relative max-w-7xl'>
        <motion.div
          className='flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-200px)]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
        >
          {/* Text Content - Always first on mobile */}
          <motion.div
            className='space-y-6 md:space-y-8 text-center lg:text-left order-1 lg:order-1'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className='inline-block'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className='relative px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-lg'>
                <motion.div
                  className='absolute -left-1 -top-1 w-2 h-2 bg-blue-500 rounded-full'
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className='absolute -left-1 -top-1 w-2 h-2 bg-blue-500 rounded-full animate-ping'
                  animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <span className='text-sm font-medium text-blue-400'>
                  Junior Full Stack Developer
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className='space-y-4'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <motion.h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                <motion.span
                  className='block text-white'
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Building
                </motion.span>
                <motion.span
                  className='block text-blue-400'
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Digital Dreams
                </motion.span>
                <motion.span
                  className='block text-white'
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Into Reality
                </motion.span>
              </motion.h1>

              <motion.p
                className='text-base sm:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Crafting exceptional digital experiences with cutting-edge
                technologies. Let&apos;s transform your vision into reality.
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size='lg'
                  className='group bg-blue-600 hover:bg-blue-700 text-white border-0 relative overflow-hidden w-full sm:w-auto'
                  onClick={() => scrollToSection("contact")}
                >
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700'
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className='relative z-10 flex items-center'>
                    Let&apos;s Work Together
                    <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size='lg'
                  variant='outline'
                  className='hover:bg-blue-500/10 border-blue-500/30 text-blue-400 hover:text-blue-300 bg-transparent w-full sm:w-auto'
                  onClick={() => scrollToSection("projects")}
                >
                  View Portfolio
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className='grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto lg:mx-0'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, staggerChildren: 0.1, delay: 0.3 }}
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "50+", label: "Projects Delivered" },
                { value: "30+", label: "Happy Clients" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 10,
                    transition: { duration: 0.3 },
                  }}
                  className='text-center p-3 rounded-lg bg-blue-500/5 border border-blue-500/20 backdrop-blur-sm'
                >
                  <motion.div
                    className='text-xl sm:text-2xl md:text-3xl font-bold text-blue-400'
                    animate={{
                      textShadow: [
                        "0 0 0px #60a5fa",
                        "0 0 10px #60a5fa",
                        "0 0 0px #60a5fa",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.2,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className='text-xs sm:text-sm text-gray-500'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section - Always second on mobile */}
          <motion.div
            className='relative w-full order-2 lg:order-2'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <motion.div
              className='relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-black/50 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-2xl overflow-hidden'
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src='/banner5.jpg'
                alt='Saranga Siriwardhana'
                fill
                className='object-cover object-center'
                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw'
                priority
                quality={85}
              />
              <motion.div
                className='absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70'
                animate={{
                  background: [
                    "linear-gradient(to bottom, transparent, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
                    "linear-gradient(to bottom, transparent, rgba(59,130,246,0.2), rgba(0,0,0,0.7))",
                    "linear-gradient(to bottom, transparent, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
                  ],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className='w-5 h-8 rounded-full border-2 border-blue-500 flex justify-center cursor-pointer'
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection("about")}
        >
          <motion.div
            className='w-1 h-1.5 bg-blue-500 rounded-full mt-1.5'
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
