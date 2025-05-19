import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, Facebook, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/SarangaSiriwardhana9", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/saranga-siriwardhana-409494218/", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/_.l_sara_?igshid=NTc4MTIwNjQ2YQ==", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/saranga.siriwardana.1?mibextid=LQQJ4d", label: "Facebook" },
    { icon: Mail, href: "mailto:lasindusaranga99@gmail.com", label: "Email" }
  ]

  return (
    <footer className="py-8 sm:py-10 md:py-12 border-t border-border/30">
      <div className="container mx-auto px-4 max-w-[2000px]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold flex items-center justify-center md:justify-start">
              {/* Fixed image container with proper sizing */}
              <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden mr-2">
                <Image
                  src="/bannerImg1.png"
                  alt="Saranga Siriwardhana"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="32px"
                />
              </div>
              <span className="ml-2">Saranga Siriwardhana</span>
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-md">
              BSc (Hons) Software Engineering Student | Full Stack Developer
            </p>
          </div>

          <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                asChild
                aria-label={link.label}
                className="h-8 w-8 sm:h-10 sm:w-10 hover:bg-primary/10 hover:text-primary rounded-full"
              >
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {currentYear} Saranga Siriwardhana. All rights reserved.
          </p>

          <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 md:mt-0">
            {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}