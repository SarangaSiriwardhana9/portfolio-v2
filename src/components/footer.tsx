import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
    { icon: Mail, href: "mailto:saranga@example.com", label: "Email" },
  ]

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold flex items-center">
              <span className="text-primary">SS</span>
              <span className="ml-2">Saranga Siriwardhana</span>
            </h3>
            <p className="text-muted-foreground mt-2">
              BSc (Hons) Software Engineering Student | Full Stack Developer
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                asChild
                aria-label={link.label}
                className="hover:bg-primary/10 hover:text-primary rounded-full"
              >
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Saranga Siriwardhana. All rights reserved.
          </p>
          
          <nav className="flex gap-4 mt-4 md:mt-0">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
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