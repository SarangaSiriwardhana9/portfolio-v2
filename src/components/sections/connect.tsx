'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Send, 
  User, 
  Mail, 
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  MapPin
} from 'lucide-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import emailjs from '@emailjs/browser'

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters",
  }),
})

type FormValues = z.infer<typeof formSchema>

 
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const formRef = useRef<HTMLFormElement>(null)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setFormStatus('submitting')
    
    try {
      // Create EmailJS template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: "lasindusaranga99@gmail.com" // Your email
      }
      
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )
      
      console.log('Email sent successfully:', response)
      setFormStatus('success')
      form.reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      setFormStatus('error')
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  // Social media links
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com/SarangaSiriwardhana9', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/saranga-siriwardhana-409494218/', label: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com/_.l_sara_?igshid=NTc4MTIwNjQ2YQ==', label: 'Instagram' },
    { icon: <Facebook className="h-5 w-5" />, href: 'https://www.facebook.com/saranga.siriwardana.1?mibextid=LQQJ4d', label: 'Facebook' }
  ]

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, rgba(250, 204, 21, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <div className="container mx-auto px-4 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Send me a message!
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2"
            >
              <div className="bg-muted/50 p-8 rounded-2xl border border-border/50 h-full shadow-lg backdrop-blur-sm">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                    <p className="text-muted-foreground">
                      Feel free to reach out through the form or directly via my contact details below.
                    </p>
                  </div>
                  
                  <div className="space-y-6 mt-10">
                    <div className="flex items-center gap-4">
                      <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center shadow-inner">
                        <Mail className="size-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-semibold text-lg">lasindusaranga99@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center shadow-inner">
                        <MapPin className="size-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-semibold text-lg">Colombo, Sri Lanka</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-8 mt-10 border-t border-border/30">
                    <p className="text-lg font-medium mb-4">Find me on</p>
                    <div className="flex gap-4">
                      {socialLinks.map((link, index) => (
                        <a 
                          key={index}
                          href={link.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="size-12 rounded-full bg-background/80 border border-border/50 flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-colors shadow-sm"
                          aria-label={link.label}
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3"
            >
              <div className="bg-background/70 rounded-2xl border border-border/50 p-8 shadow-xl backdrop-blur-sm">
                <Form {...form}>
                  <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base">Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input 
                                  placeholder="Your name" 
                                  className="pl-12 h-14 text-base" 
                                  {...field} 
                                  disabled={formStatus === 'submitting'}
                                />
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base">Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input 
                                  placeholder="Your email" 
                                  type="email" 
                                  className="pl-12 h-14 text-base" 
                                  {...field} 
                                  disabled={formStatus === 'submitting'}
                                />
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Subject</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                placeholder="Subject of your message" 
                                className="pl-12 h-14 text-base" 
                                {...field} 
                                disabled={formStatus === 'submitting'}
                              />
                              <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Write your message here..." 
                              className="min-h-40 resize-none p-4 text-base" 
                              {...field} 
                              disabled={formStatus === 'submitting'}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div>
                      <Button 
                        type="submit" 
                        className="w-full sm:w-auto gap-2 h-14 px-8 text-base"
                        size="lg" 
                        disabled={formStatus === 'submitting'}
                      >
                        {formStatus === 'idle' && (
                          <>
                            <Send className="size-5" />
                            Send Message
                          </>
                        )}
                        
                        {formStatus === 'submitting' && (
                          <>
                            <Loader2 className="size-5 animate-spin" />
                            Sending...
                          </>
                        )}
                        
                        {formStatus === 'success' && (
                          <>
                            <CheckCircle className="size-5" />
                            Message Sent!
                          </>
                        )}
                        
                        {formStatus === 'error' && (
                          <>
                            <AlertCircle className="size-5" />
                            Error Sending
                          </>
                        )}
                      </Button>
                    </div>
                    
                    {/* Status messages */}
                    {formStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-500 text-base"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle className="size-5" />
                          <span>Your message has been sent successfully! I'll get back to you soon.</span>
                        </div>
                      </motion.div>
                    )}
                    
                    {formStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-base"
                      >
                        <div className="flex items-center gap-2">
                          <AlertCircle className="size-5" />
                          <span>There was an error sending your message. Please try again later.</span>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}