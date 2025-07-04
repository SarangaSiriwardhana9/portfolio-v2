"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";

export function SocialLinks() {
  const links = [
    {
      href: "https://github.com/SarangaSiriwardhana9",
      icon: <Github className='h-4 w-4' />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/saranga-siriwardhana-409494218/",
      icon: <Linkedin className='h-4 w-4' />,
      label: "LinkedIn",
    },
    {
      href: "https://instagram.com/_.l_sara_?igshid=NTc4MTIwNjQ2YQ==",
      icon: <Instagram className='h-4 w-4' />,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/saranga.siriwardana.1?mibextid=LQQJ4d",
      icon: <Facebook className='h-4 w-4' />,
      label: "Facebook",
    },
  ];

  return (
    <div className='w-full py-3 relative'>
      <div className='container mx-auto px-3 max-w-7xl'>
        <div className='flex flex-col items-center'>
          {/* Header */}
          <div className='flex items-center gap-2 mb-3'>
            <div className='h-[1px] w-4 bg-blue-500/50' />
            <p className='text-xs text-gray-500'>Connect with me</p>
            <div className='h-[1px] w-4 bg-blue-500/50' />
          </div>

          {/* Social Links */}
          <div className='flex items-center gap-4'>
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center w-10 h-10 rounded-full bg-black/80 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.05 }}
                viewport={{ once: true }}
                aria-label={link.label}
              >
                <span className='text-gray-400 group-hover:text-blue-300 transition-colors duration-300'>
                  {link.icon}
                </span>

                {/* Tooltip */}
                <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/90 backdrop-blur-sm px-2 py-1 rounded-md border border-blue-500/30 text-blue-400 whitespace-nowrap'>
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
