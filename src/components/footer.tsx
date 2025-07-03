import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Facebook, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/SarangaSiriwardhana9",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/saranga-siriwardhana-409494218/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/_.l_sara_?igshid=NTc4MTIwNjQ2YQ==",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/saranga.siriwardana.1?mibextid=LQQJ4d",
      label: "Facebook",
    },
    { icon: Mail, href: "mailto:lasindusaranga99@gmail.com", label: "Email" },
  ];

  return (
    <footer className='py-6 sm:py-8 md:py-10 border-t border-blue-500/20'>
      <div className='container mx-auto px-3 max-w-6xl'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0 text-center md:text-left'>
            <h3 className='text-base sm:text-lg font-bold flex items-center justify-center md:justify-start text-white'>
              <div className='relative w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden mr-2'>
                <Image
                  src='/bannerImg1.png'
                  alt='Saranga Siriwardhana'
                  fill
                  className='object-cover hover:scale-110 transition-transform duration-500'
                  sizes='24px'
                />
              </div>
              <span className='ml-2'>Saranga Siriwardhana</span>
            </h3>
            <p className='text-xs text-gray-400 mt-1 max-w-md'>
              BSc (Hons) Software Engineering Student | Full Stack Developer
            </p>
          </div>

          <div className='flex space-x-2 sm:space-x-3'>
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant='ghost'
                size='icon'
                asChild
                aria-label={link.label}
                className='h-7 w-7 sm:h-8 sm:w-8 hover:bg-blue-500/10 hover:text-blue-400 rounded-full'
              >
                <Link
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <link.icon className='h-3 w-3 sm:h-4 sm:w-4' />
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <div className='mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-blue-500/20 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-xs text-gray-400'>
            © {currentYear} Saranga Siriwardhana. All rights reserved.
          </p>

          <nav className='flex flex-wrap justify-center gap-2 sm:gap-3 mt-3 md:mt-0'>
            {[
              "Home",
              "About",
              "Skills",
              "Experience",
              "Projects",
              "Contact",
            ].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className='text-xs text-gray-400 hover:text-blue-400 transition-colors'
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
