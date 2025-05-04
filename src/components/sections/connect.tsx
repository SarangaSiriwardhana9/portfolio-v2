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

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    setFormStatus('submitting')

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: "lasindusaranga99@gmail.com"
      }

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      console.log('Email sent successfully:', response)
      setFormStatus('success')
      form.reset()
      setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      setFormStatus('error')

      setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com/SarangaSiriwardhana9', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/saranga-siriwardhana-409494218/', label: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com/_.l_sara_?igshid=NTc4MTIwNjQ2YQ==', label: 'Instagram' },
    { icon: <Facebook className="h-5 w-5" />, href: 'https://www.facebook.com/saranga.siriwardana.1?mibextid=LQQJ4d', label: 'Facebook' }
  ]

  return (
    <section id="contact" className="py-10 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative max-w-[2000px]" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            Get In{' '}
            <span className="text-primary sm:bg-clip-text sm:text-transparent sm:bg-gradient-to-r sm:from-primary sm:via-accent sm:to-primary">
              Touch
            </span>
          </h2>
          <p className="text-base sm:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? Send me a message!
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-10">
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2"
            >
              <div className="bg-muted/50 p-4 sm:p-6 md:p-8 rounded-2xl border border-border/50 h-full shadow-lg backdrop-blur-sm">
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Contact Information</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Feel free to reach out through the form or directly via my contact details below.
                    </p>
                  </div>

                  <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-10">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="size-10 sm:size-14 rounded-full bg-primary/10 flex items-center justify-center shadow-inner">
                        <Mail className="size-4 sm:size-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                        <p className="font-semibold text-sm sm:text-base md:text-lg">lasindusaranga99@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="size-10 sm:size-14 rounded-full bg-primary/10 flex items-center justify-center shadow-inner">
                        <MapPin className="size-4 sm:size-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                        <p className="font-semibold text-sm sm:text-base md:text-lg">Colombo, Sri Lanka</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-8 mt-6 sm:mt-10 border-t border-border/30">
                    <p className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Find me on</p>
                    <div className="flex gap-3 sm:gap-4">
                      {socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="size-10 sm:size-12 rounded-full bg-background/80 border border-border/50 flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-colors shadow-sm"
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

            <motion.div
              variants={itemVariants}
              className="lg:col-span-3"
            >
              <div className="bg-background/70 rounded-2xl border border-border/50 p-4 sm:p-6 md:p-8 shadow-xl backdrop-blur-sm">
                <Form {...form}>
                  <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6 md:space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm sm:text-base">Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  placeholder="Your name"
                                  className="pl-10 sm:pl-12 h-10 sm:h-14 text-sm sm:text-base"
                                  {...field}
                                  disabled={formStatus === 'submitting'}
                                />
                                <User className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 size-4 sm:size-5 text-muted-foreground" />
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
                            <FormLabel className="text-sm sm:text-base">Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  placeholder="Your email"
                                  type="email"
                                  className="pl-10 sm:pl-12 h-10 sm:h-14 text-sm sm:text-base"
                                  {...field}
                                  disabled={formStatus === 'submitting'}
                                />
                                <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 size-4 sm:size-5 text-muted-foreground" />
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
                          <FormLabel className="text-sm sm:text-base">Subject</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                placeholder="Subject of your message"
                                className="pl-10 sm:pl-12 h-10 sm:h-14 text-sm sm:text-base"
                                {...field}
                                disabled={formStatus === 'submitting'}
                              />
                              <MessageSquare className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 size-4 sm:size-5 text-muted-foreground" />
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
                          <FormLabel className="text-sm sm:text-base">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Write your message here..."
                              className="min-h-[120px] sm:min-h-[160px] md:min-h-[200px] resize-none p-3 sm:p-4 text-sm sm:text-base"
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
                        className="w-full sm:w-auto gap-2 h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 text-sm sm:text-base"
                        size="lg"
                        disabled={formStatus === 'submitting'}
                      >
                        {formStatus === 'idle' && (
                          <>
                            <Send className="size-4 sm:size-5" />
                            Send Message
                          </>
                        )}

                        {formStatus === 'submitting' && (
                          <>
                            <Loader2 className="size-4 sm:size-5 animate-spin" />
                            Sending...
                          </>
                        )}

                        {formStatus === 'success' && (
                          <>
                            <CheckCircle className="size-4 sm:size-5" />
                            Message Sent!
                          </>
                        )}

                        {formStatus === 'error' && (
                          <>
                            <AlertCircle className="size-4 sm:size-5" />
                            Error Sending
                          </>
                        )}
                      </Button>
                    </div>

                    {formStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 sm:p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-500 text-xs sm:text-sm md:text-base"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle className="size-4 sm:size-5" />
                          <span>Your message has been sent successfully! I'll get back to you soon.</span>
                        </div>
                      </motion.div>
                    )}

                    {formStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 sm:p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-xs sm:text-sm md:text-base"
                      >
                        <div className="flex items-center gap-2">
                          <AlertCircle className="size-4 sm:size-5" />
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