"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
  MapPin,
  Phone,
  Globe,
  Heart,
} from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

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
});

type FormValues = z.infer<typeof formSchema>;

const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_wnhvepb";
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_jpsupa5";
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "IeDqvVNJmNW8PAXvm";

const floatingElements = [
  { icon: <Mail className='h-4 w-4' />, delay: 0 },
  { icon: <Phone className='h-5 w-5' />, delay: 0.4 },
  { icon: <Globe className='h-4 w-4' />, delay: 0.8 },
  { icon: <Heart className='h-4 w-4' />, delay: 1.2 },
];

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll-based transforms
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.8, 1, 1, 0.8]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [100, 0, 0, -100]
  );

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setFormStatus("submitting");
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: "lasindusaranga99@gmail.com",
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log("Email sent successfully:", response);
      setFormStatus("success");
      form.reset();
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus("error");
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }
  };

  const socialLinks = [
    {
      icon: <Github className='h-4 w-4' />,
      href: "https://github.com/SarangaSiriwardhana9",
      label: "GitHub",
      color: "gray",
    },
    {
      icon: <Linkedin className='h-4 w-4' />,
      href: "https://www.linkedin.com/in/saranga-siriwardhana-409494218/",
      label: "LinkedIn",
      color: "blue",
    },
    {
      icon: <Instagram className='h-4 w-4' />,
      href: "https://instagram.com/_.l_sara_?igshid=NTc4MTIwNjQ2YQ==",
      label: "Instagram",
      color: "pink",
    },
    {
      icon: <Facebook className='h-4 w-4' />,
      href: "https://www.facebook.com/saranga.siriwardana.1?mibextid=LQQJ4d",
      label: "Facebook",
      color: "blue",
    },
  ];

  return (
    <motion.section
      ref={containerRef}
      id='contact'
      className='py-6 sm:py-12 md:py-16 relative overflow-hidden'
      style={{ opacity, scale, y }}
    >
      {/* Animated Background */}
      <motion.div
        className='absolute inset-0 pointer-events-none'
        style={{ y: backgroundY }}
      >
        {/* Floating Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className='absolute'
            style={{
              left: `${20 + index * 20}%`,
              top: `${25 + (index % 2) * 30}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.4, 0.8],
              rotate: [0, 360],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            <div className='p-3 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-400/10 border border-blue-500/20 backdrop-blur-sm text-blue-400/50'>
              {element.icon}
            </div>
          </motion.div>
        ))}

        {/* Background Gradients */}
        <motion.div
          className='absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl'
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className='absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-cyan-400/5 blur-3xl'
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </motion.div>

      <div className='container mx-auto px-3 relative max-w-6xl' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-8 md:mb-12'
        >
          <motion.div
            className='inline-block mb-3'
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <span className='px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/30'>
              Let's Connect
            </span>
          </motion.div>

          <motion.h2
            className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Get In{" "}
            <motion.span
              className='text-blue-400'
              animate={{
                textShadow: [
                  "0 0 0px #60a5fa",
                  "0 0 25px #60a5fa",
                  "0 0 0px #60a5fa",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Touch
            </motion.span>
          </motion.h2>

          <motion.p
            className='text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Have a project in mind or want to discuss opportunities? Send me a
            message!
          </motion.p>
        </motion.div>

        <motion.div
          className='max-w-5xl mx-auto'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.1 }}
        >
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6'>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className='lg:col-span-2'
            >
              <div className='bg-blue-500/5 p-3 sm:p-4 md:p-6 rounded-xl border border-blue-500/20 h-full shadow-lg backdrop-blur-sm relative overflow-hidden'>
                <motion.div
                  className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 opacity-0'
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />

                <div className='space-y-4 sm:space-y-6 relative z-10'>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className='text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white'>
                      Contact Information
                    </h3>
                    <p className='text-xs sm:text-sm text-gray-400'>
                      Feel free to reach out through the form or directly via my
                      contact details below.
                    </p>
                  </motion.div>

                  <div className='space-y-3 sm:space-y-4 mt-4 sm:mt-6'>
                    <motion.div
                      className='flex items-center gap-2 sm:gap-3'
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <motion.div
                        className='size-8 sm:size-10 rounded-full bg-blue-500/10 flex items-center justify-center shadow-inner'
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <Mail className='size-3 sm:size-4 text-blue-400' />
                      </motion.div>
                      <div>
                        <p className='text-xs text-gray-500'>Email</p>
                        <p className='font-semibold text-xs sm:text-sm text-white'>
                          lasindusaranga99@gmail.com
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className='flex items-center gap-2 sm:gap-3'
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <motion.div
                        className='size-8 sm:size-10 rounded-full bg-blue-500/10 flex items-center justify-center shadow-inner'
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 10,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <MapPin className='size-3 sm:size-4 text-blue-400' />
                      </motion.div>
                      <div>
                        <p className='text-xs text-gray-500'>Location</p>
                        <p className='font-semibold text-xs sm:text-sm text-white'>
                          408 2/3B Wadduwa, Sri Lanka
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className='pt-3 sm:pt-4 mt-4 sm:mt-6 border-t border-blue-500/20'
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2 }}
                  >
                    <p className='text-sm sm:text-base font-medium mb-2 sm:mb-3 text-white'>
                      Find me on
                    </p>
                    <div className='flex gap-2 sm:gap-3'>
                      {socialLinks.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.href}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='size-8 sm:size-10 rounded-full bg-black/80 border border-blue-500/20 flex items-center justify-center hover:border-blue-500/40 hover:bg-blue-500/10 transition-colors shadow-sm relative overflow-hidden'
                          aria-label={link.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 1.4 + index * 0.1 }}
                          whileHover={{
                            scale: 1.15,
                            y: -3,
                            rotate: 5,
                          }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <motion.div
                            className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-full opacity-0'
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className='relative z-10 text-blue-400'>
                            {link.icon}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='lg:col-span-3'
            >
              <div className='bg-black/70 rounded-xl border border-blue-500/20 p-3 sm:p-4 md:p-6 shadow-xl backdrop-blur-sm relative overflow-hidden'>
                <motion.div
                  className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 opacity-0'
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
                />

                <div className='relative z-10'>
                  <Form {...form}>
                    <form
                      ref={formRef}
                      onSubmit={form.handleSubmit(onSubmit)}
                      className='space-y-3 sm:space-y-4 md:space-y-5'
                    >
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
                        <FormField
                          control={form.control}
                          name='name'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className='text-xs sm:text-sm text-white'>
                                Name
                              </FormLabel>
                              <FormControl>
                                <motion.div
                                  className='relative'
                                  whileHover={{ scale: 1.02 }}
                                  whileFocus={{ scale: 1.02 }}
                                >
                                  <Input
                                    placeholder='Your name'
                                    className='pl-8 sm:pl-10 h-8 sm:h-10 text-xs sm:text-sm bg-black/50 border-blue-500/30 text-white focus:border-blue-500/50 transition-all duration-300'
                                    {...field}
                                    disabled={formStatus === "submitting"}
                                  />
                                  <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{
                                      duration: 6,
                                      repeat: Number.POSITIVE_INFINITY,
                                      ease: "linear",
                                    }}
                                  >
                                    <User className='absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 size-3 sm:size-4 text-blue-400' />
                                  </motion.div>
                                </motion.div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name='email'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className='text-xs sm:text-sm text-white'>
                                Email
                              </FormLabel>
                              <FormControl>
                                <motion.div
                                  className='relative'
                                  whileHover={{ scale: 1.02 }}
                                  whileFocus={{ scale: 1.02 }}
                                >
                                  <Input
                                    placeholder='Your email'
                                    type='email'
                                    className='pl-8 sm:pl-10 h-8 sm:h-10 text-xs sm:text-sm bg-black/50 border-blue-500/30 text-white focus:border-blue-500/50 transition-all duration-300'
                                    {...field}
                                    disabled={formStatus === "submitting"}
                                  />
                                  <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{
                                      duration: 8,
                                      repeat: Number.POSITIVE_INFINITY,
                                      ease: "linear",
                                    }}
                                  >
                                    <Mail className='absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 size-3 sm:size-4 text-blue-400' />
                                  </motion.div>
                                </motion.div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name='subject'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className='text-xs sm:text-sm text-white'>
                              Subject
                            </FormLabel>
                            <FormControl>
                              <motion.div
                                className='relative'
                                whileHover={{ scale: 1.02 }}
                                whileFocus={{ scale: 1.02 }}
                              >
                                <Input
                                  placeholder='Subject of your message'
                                  className='pl-8 sm:pl-10 h-8 sm:h-10 text-xs sm:text-sm bg-black/50 border-blue-500/30 text-white focus:border-blue-500/50 transition-all duration-300'
                                  {...field}
                                  disabled={formStatus === "submitting"}
                                />
                                <motion.div
                                  animate={{ rotate: [0, 360] }}
                                  transition={{
                                    duration: 10,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                  }}
                                >
                                  <MessageSquare className='absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 size-3 sm:size-4 text-blue-400' />
                                </motion.div>
                              </motion.div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name='message'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className='text-xs sm:text-sm text-white'>
                              Message
                            </FormLabel>
                            <FormControl>
                              <motion.div
                                whileHover={{ scale: 1.01 }}
                                whileFocus={{ scale: 1.01 }}
                              >
                                <Textarea
                                  placeholder='Write your message here...'
                                  className='min-h-[80px] sm:min-h-[100px] md:min-h-[120px] resize-none p-2 sm:p-3 text-xs sm:text-sm bg-black/50 border-blue-500/30 text-white focus:border-blue-500/50 transition-all duration-300'
                                  {...field}
                                  disabled={formStatus === "submitting"}
                                />
                              </motion.div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type='submit'
                            className='w-full sm:w-auto gap-2 h-8 sm:h-10 px-3 sm:px-4 text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 relative overflow-hidden'
                            size='sm'
                            disabled={formStatus === "submitting"}
                          >
                            <motion.div
                              className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700'
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            />
                            <span className='relative z-10 flex items-center'>
                              {formStatus === "idle" && (
                                <>
                                  <Send className='size-3 sm:size-4' />
                                  <span className='ml-2'>Send Message</span>
                                </>
                              )}
                              {formStatus === "submitting" && (
                                <>
                                  <Loader2 className='size-3 sm:size-4 animate-spin' />
                                  <span className='ml-2'>Sending...</span>
                                </>
                              )}
                              {formStatus === "success" && (
                                <>
                                  <CheckCircle className='size-3 sm:size-4' />
                                  <span className='ml-2'>Message Sent!</span>
                                </>
                              )}
                              {formStatus === "error" && (
                                <>
                                  <AlertCircle className='size-3 sm:size-4' />
                                  <span className='ml-2'>Error Sending</span>
                                </>
                              )}
                            </span>
                          </Button>
                        </motion.div>
                      </div>

                      {formStatus === "success" && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className='p-2 sm:p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-xs sm:text-sm'
                        >
                          <div className='flex items-center gap-2'>
                            <CheckCircle className='size-3 sm:size-4' />
                            <span>
                              Your message has been sent successfully! I'll get
                              back to you soon.
                            </span>
                          </div>
                        </motion.div>
                      )}

                      {formStatus === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className='p-2 sm:p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm'
                        >
                          <div className='flex items-center gap-2'>
                            <AlertCircle className='size-3 sm:size-4' />
                            <span>
                              There was an error sending your message. Please
                              try again later.
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </form>
                  </Form>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Animation */}
        <motion.div
          className='mt-10 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className='inline-flex items-center gap-2'
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Heart className='h-4 w-4 text-red-400/60' />
            </motion.div>
            <span className='text-xs text-gray-500'>Made with love</span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: 1,
              }}
            >
              <Heart className='h-4 w-4 text-red-400/60' />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
