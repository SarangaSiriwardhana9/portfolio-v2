 
'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Facebook, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { JSX } from 'react'

interface SocialLinkProps {
  href: string
  icon: JSX.Element
  label: string
  color: string
}

const SocialLink = ({ href, icon, label, color }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center size-12 sm:size-14 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 
      hover:border-${color}-500/50 hover:bg-${color}-500/10 transition-all duration-300 group relative`}
      whileHover={{ y: -5 }}
      aria-label={label}
    >
      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap 
        opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-background/80 
        backdrop-blur-sm px-2 py-1 rounded-md border border-border/50">
        {label}
      </span>
      <span className={`text-${color}-500`}>{icon}</span>
    </motion.a>
  )
}

export function SocialLinks() {
  const links = [
    {
      href: 'https://github.com/SarangaSiriwardhana9',
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      color: 'gray'
    },
    {
      href: 'https://www.linkedin.com/in/saranga-siriwardhana-409494218/',
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      color: 'blue'
    },
    {
      href: 'https://instagram.com/_.l_sara_?igshid=NTc4MTIwNjQ2YQ==',
      icon: <Instagram className="h-6 w-6" />,
      label: 'Instagram',
      color: 'pink'
    },
    {
      href: 'https://www.facebook.com/saranga.siriwardana.1?mibextid=LQQJ4d',
      icon: <Facebook className="h-6 w-6" />,
      label: 'Facebook',
      color: 'blue'
    }
  ]

  return (
    <div className="w-full py-6 md:py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="h-[1px] w-5 sm:w-10 bg-primary/50"></div>
            <p className="text-sm text-muted-foreground">Connect with me</p>
            <div className="h-[1px] w-5 sm:w-10 bg-primary/50"></div>
          </div>
          
          <motion.div 
            className="flex items-center gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.5,
              staggerChildren: 0.1,
              delayChildren: 0.3
            }}
          >
            {links.map((link) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SocialLink
                  href={link.href}
                  icon={link.icon}
                  label={link.label}
                  color={link.color}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}