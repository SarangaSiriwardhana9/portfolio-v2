"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building,
  CalendarDays,
  CheckCircle2,
  Medal,
  Sparkles,
  TrendingUp,
  Zap,
  Code,
  Globe,
} from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    title: "Junior Full Stack Developer",
    company: "Unwir Pvt. Ltd.",
    period: "Dec 2024 - Present",
    type: "Full-time",
    description:
      "Leading development of modern web applications with focus on performance and user experience.",
    technologies: [
      "TypeScript",
      "Shadcn",
      "Next.js",
      "MongoDB",
      "Express",
      "Tailwind",
    ],
    highlights: [
      "Contributed to 5+ client projects with cross-functional teams",
      "Worked on Salance, a Shopify-like e-commerce platform",
      "Built advanced UI with Shadcn and improved performance",
      "Engaged in code reviews and team discussions",
    ],
    achievements: [
      { label: "Projects Delivered", value: "5+" },
      { label: "Code Quality", value: "98%" },
      { label: "Client Satisfaction", value: "4.9/5" },
    ],
    icon: <Sparkles className='h-4 w-4' />,
    color: "blue",
  },
  {
    title: "Intern Full Stack Developer",
    company: "Unwir Pvt. Ltd.",
    period: "Jun 2024 - Dec 2024",
    type: "Internship",
    description:
      "Gained hands-on experience in full-stack development, working on real-world projects.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Tailwind",
      "Drizzle",
      "Prisma",
      "TypeScript",
      "Shadcn",
      "MongoDB",
      "Express",
    ],
    highlights: [
      "Developed responsive mobile-first applications",
      "Improved application performance and SEO",
      "Enhanced user engagement by 30%",
      "Collaborated with senior developers on code reviews",
    ],
    achievements: [
      { label: "Features Built", value: "25+" },
      { label: "Bug Fixes", value: "100+" },
      { label: "Performance Gain", value: "+30%" },
    ],
    icon: <Medal className='h-4 w-4' />,
    color: "cyan",
  },
];

const floatingElements = [
  { icon: <Code className='h-4 w-4' />, delay: 0 },
  { icon: <Globe className='h-5 w-5' />, delay: 0.5 },
  { icon: <Zap className='h-4 w-4' />, delay: 1 },
];

export function ExperienceSection() {
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
  const timelineY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.section
      ref={containerRef}
      id='experience'
      className='py-6 relative overflow-hidden'
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
              left: `${20 + index * 25}%`,
              top: `${25 + index * 20}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.3, 0.8],
              rotate: [0, 360],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 6,
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
          className='absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-blue-500/5 blur-3xl'
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
          className='absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-cyan-400/5 blur-3xl'
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>

      <div className='container mx-auto px-3 relative max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-10'
        >
          <motion.div
            className='inline-block mb-3'
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <span className='px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/30'>
              My Journey
            </span>
          </motion.div>

          <motion.h2
            className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Professional
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
              {" "}
              Experience
            </motion.span>
          </motion.h2>

          <motion.p
            className='text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Building impactful solutions through continuous learning and growth
          </motion.p>
        </motion.div>

        <div className='max-w-4xl mx-auto'>
          <div className='relative'>
            {/* Animated Timeline */}
            <motion.div
              className='absolute left-3 md:left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/50 via-cyan-400/50 to-blue-500/50'
              style={{ y: timelineY }}
            >
              <motion.div
                className='absolute inset-0 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 rounded-full'
                animate={{
                  scaleY: [0, 1, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.div
              className='space-y-8'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15 }}
            >
              {experiences.map((exp, expIndex) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 50, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: expIndex * 0.15 }}
                  className='relative'
                  whileHover={{ scale: 1.02, z: 10 }}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className={`absolute left-3 md:left-6 -translate-x-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-black border-2 ${
                      exp.color === "blue"
                        ? "border-blue-500"
                        : "border-cyan-400"
                    } flex items-center justify-center shadow-lg z-20`}
                    whileHover={{ scale: 1.3 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: expIndex * 0.2 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className={`p-1 rounded-full ${
                        exp.color === "blue"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-cyan-400/20 text-cyan-400"
                      }`}
                    >
                      {exp.icon}
                    </motion.div>
                  </motion.div>

                  {/* Experience Card */}
                  <div className='ml-8 sm:ml-12 md:ml-16'>
                    <motion.div
                      className={`rounded-xl border-2 p-3 sm:p-4 bg-gradient-to-br ${
                        exp.color === "blue"
                          ? "from-blue-500/5 to-blue-500/10 border-blue-500/20"
                          : "from-cyan-400/5 to-cyan-400/10 border-cyan-400/20"
                      } backdrop-blur-sm relative overflow-hidden`}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Background Animation */}
                      <motion.div
                        className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 opacity-0'
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Floating Particles */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 bg-${
                            exp.color === "blue" ? "blue" : "cyan"
                          }-400/30 rounded-full`}
                          style={{
                            top: `${20 + i * 30}%`,
                            right: `${10 + i * 20}%`,
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.8, 0.3],
                            y: [0, -15, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.3,
                          }}
                        />
                      ))}

                      <div className='relative z-10'>
                        <div className='flex flex-wrap items-start justify-between gap-3 mb-3'>
                          <div>
                            <motion.h3
                              className='text-lg sm:text-xl font-bold mb-1 text-white'
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              {exp.title}
                            </motion.h3>
                            <div className='flex flex-wrap items-center gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm'>
                              <motion.div
                                className='flex items-center gap-1.5'
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                              >
                                <Building className='h-3 w-3' />
                                <span>{exp.company}</span>
                              </motion.div>
                              <motion.div
                                className='flex items-center gap-1.5'
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                              >
                                <CalendarDays className='h-3 w-3' />
                                <span>{exp.period}</span>
                              </motion.div>
                            </div>
                          </div>

                          <motion.span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              exp.type === "Full-time"
                                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                : "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                            }`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {exp.type}
                          </motion.span>
                        </div>

                        <motion.p
                          className='text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4'
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          {exp.description}
                        </motion.p>

                        <motion.div
                          className='flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4'
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.7 }}
                        >
                          {exp.technologies.map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.8 + i * 0.05 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className={`px-2 py-0.5 text-xs rounded-lg ${
                                exp.color === "blue"
                                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                  : "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                              }`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>

                        <motion.div
                          className='grid sm:grid-cols-2 gap-2 mb-3 sm:mb-4'
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.9 }}
                        >
                          {exp.highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1 + i * 0.1 }}
                              className='flex items-start gap-1.5'
                            >
                              <CheckCircle2
                                className={`h-3 w-3 mt-0.5 ${
                                  exp.color === "blue"
                                    ? "text-blue-400"
                                    : "text-cyan-400"
                                }`}
                              />
                              <span className='text-xs text-gray-300'>
                                {highlight}
                              </span>
                            </motion.div>
                          ))}
                        </motion.div>

                        <motion.div
                          className='grid grid-cols-3 gap-2'
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 1.3 }}
                        >
                          {exp.achievements.map((achievement, i) => (
                            <motion.div
                              key={achievement.label}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.4 + i * 0.1 }}
                              className={`text-center p-2 rounded-lg ${
                                exp.color === "blue"
                                  ? "bg-blue-500/10 border border-blue-500/20"
                                  : "bg-cyan-400/10 border border-cyan-400/20"
                              } relative overflow-hidden`}
                              whileHover={{ scale: 1.05 }}
                            >
                              <motion.div
                                className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 opacity-0'
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                              <div className='relative z-10'>
                                <motion.div
                                  className={`text-sm sm:text-base font-bold ${
                                    exp.color === "blue"
                                      ? "text-blue-400"
                                      : "text-cyan-400"
                                  }`}
                                  animate={{
                                    scale: [1, 1.1, 1],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.3,
                                  }}
                                >
                                  {achievement.value}
                                </motion.div>
                                <div className='text-xs text-gray-400'>
                                  {achievement.label}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className='mt-10 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className='inline-block'
          >
            <TrendingUp className='h-5 w-5 text-blue-400/50' />
          </motion.div>
          <motion.p
            className='text-xs sm:text-sm text-gray-400 mt-2'
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Continuously evolving and growing
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
