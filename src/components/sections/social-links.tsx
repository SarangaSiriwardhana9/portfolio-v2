"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { JSX, useRef } from "react";

interface SocialLinkProps {
  href: string;
  icon: JSX.Element;
  label: string;
  color: string;
  index: number;
}

const SocialLink = ({ href, icon, label, color, index }: SocialLinkProps) => (
  <motion.a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className={`flex items-center justify-center size-10 sm:size-11 rounded-full bg-black/80 backdrop-blur-sm border border-blue-500/20 
    hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group relative overflow-hidden`}
    initial={{ opacity: 0, y: 50, rotateX: 90 }}
    whileInView={{
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: "backOut",
      },
    }}
    whileHover={{
      y: -8,
      scale: 1.1,
      rotateY: 10,
      transition: { duration: 0.3 },
    }}
    whileTap={{ scale: 0.9 }}
    viewport={{ once: true }}
    aria-label={label}
  >
    {/* Animated background */}
    <motion.div
      className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-full'
      initial={{ scale: 0 }}
      whileHover={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    />

    {/* Tooltip */}
    <motion.span
      className='absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap 
      opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-black/90 
      backdrop-blur-sm px-2 py-1 rounded-md border border-blue-500/30 text-blue-400 z-10'
      initial={{ y: 10, opacity: 0 }}
      whileHover={{ y: 0, opacity: 1 }}
    >
      {label}
      <motion.div className='absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 border-l border-t border-blue-500/30 rotate-45' />
    </motion.span>

    {/* Icon */}
    <motion.span
      className={`relative z-10 ${
        color === "gray"
          ? "text-gray-400"
          : color === "blue"
          ? "text-blue-400"
          : "text-pink-400"
      } group-hover:text-blue-300 transition-colors duration-300`}
      animate={{
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: index * 0.3,
        ease: "easeInOut",
      }}
      whileHover={{ rotate: 360 }}
    >
      {icon}
    </motion.span>

    {/* Ripple effect */}
    <motion.div
      className='absolute inset-0 rounded-full border-2 border-blue-400/0'
      whileHover={{
        scale: [1, 1.5, 2],
        borderColor: [
          "rgba(96, 165, 250, 0)",
          "rgba(96, 165, 250, 0.5)",
          "rgba(96, 165, 250, 0)",
        ],
      }}
      transition={{ duration: 0.6 }}
    />
  </motion.a>
);

export function SocialLinks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll-based transforms
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  const links = [
    {
      href: "https://github.com/SarangaSiriwardhana9",
      icon: <Github className='h-4 w-4' />,
      label: "GitHub",
      color: "gray",
    },
    {
      href: "https://www.linkedin.com/in/saranga-siriwardhana-409494218/",
      icon: <Linkedin className='h-4 w-4' />,
      label: "LinkedIn",
      color: "blue",
    },
    {
      href: "https://instagram.com/_.l_sara_?igshid=NTc4MTIwNjQ2YQ==",
      icon: <Instagram className='h-4 w-4' />,
      label: "Instagram",
      color: "pink",
    },
    {
      href: "https://www.facebook.com/saranga.siriwardana.1?mibextid=LQQJ4d",
      icon: <Facebook className='h-4 w-4' />,
      label: "Facebook",
      color: "blue",
    },
  ];

  return (
    <motion.div
      ref={containerRef}
      className='w-full py-4 md:py-6 relative overflow-hidden'
      style={{ opacity, y, scale }}
    >
      {/* Animated Background */}
      <motion.div
        className='absolute inset-0 pointer-events-none'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className='absolute left-1/4 top-1/2 w-32 h-32 rounded-full bg-blue-500/5 blur-2xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className='absolute right-1/4 top-1/2 w-32 h-32 rounded-full bg-cyan-400/5 blur-2xl'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      <div className='container mx-auto px-3 max-w-6xl relative'>
        <motion.div
          className='flex flex-col items-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div
            className='flex items-center gap-2 mb-2.5'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className='h-[1px] bg-blue-500/50'
              initial={{ width: 0 }}
              whileInView={{ width: "1rem" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.p
              className='text-xs text-gray-500'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Connect with me
            </motion.p>
            <motion.div
              className='h-[1px] bg-blue-500/50'
              initial={{ width: 0 }}
              whileInView={{ width: "1rem" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Social Links */}
          <motion.div
            className='flex items-center gap-3 sm:gap-4 relative'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Connection lines */}
            <motion.div
              className='absolute inset-0 flex items-center justify-center pointer-events-none'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            >
              {links.map(
                (_, index) =>
                  index < links.length - 1 && (
                    <motion.div
                      key={index}
                      className='flex-1 h-[1px] bg-gradient-to-r from-blue-500/30 to-cyan-400/30 mx-2'
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  )
              )}
            </motion.div>

            {/* Social Icons */}
            {links.map((link, index) => (
              <SocialLink
                key={link.label}
                href={link.href}
                icon={link.icon}
                label={link.label}
                color={link.color}
                index={index}
              />
            ))}
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className='mt-4 flex items-center gap-2'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            viewport={{ once: true }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className='w-1 h-1 bg-blue-400/60 rounded-full'
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
