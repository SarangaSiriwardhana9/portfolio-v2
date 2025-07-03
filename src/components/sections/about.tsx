"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import {
  ArrowRight,
  Brain,
  Code,
  Database,
  GraduationCap,
  Palette,
  Server,
  Smartphone,
  Sparkles,
  Trophy,
} from "lucide-react";

import Image from "next/image";
import { useRef } from "react";

const stats = [
  {
    label: "Year of Study",
    value: "4th",
    icon: <GraduationCap className='h-4 w-4' />,
  },
  { label: "Projects", value: "20+", icon: <Code className='h-4 w-4' /> },
  { label: "Tech Stacks", value: "8+", icon: <Sparkles className='h-4 w-4' /> },
  {
    label: "Learning Hours",
    value: "1000+",
    icon: <Brain className='h-4 w-4' />,
  },
];

const skills = [
  {
    icon: <Palette className='h-4 w-4' />,
    title: "Frontend Development",
    description:
      "Creating responsive and user-friendly web applications using HTML, CSS, and React. Bringing beautiful and functional interfaces to life.",
    tools: ["Next.jS", "React", "HTML", "CSS", "Javascript", "TypeScript"],
  },
  {
    icon: <Server className='h-4 w-4' />,
    title: "Backend Development",
    description:
      "Building scalable and reliable server-side applications using modern technologies and frameworks.",
    tools: ["Node.js", "Express", "Python", "Java"],
  },
  {
    icon: <Smartphone className='h-4 w-4' />,
    title: "Android Development",
    description:
      "Building robust and high-quality Android applications using modern mobile development frameworks.",
    tools: ["Flutter", "React Native", "Kotlin"],
  },
  {
    icon: <Brain className='h-4 w-4' />,
    title: "Problem Solving",
    description:
      "Creative problem solver with analytical mindset. Finding innovative solutions that address complex challenges.",
    tools: ["Algorithms", "Data Structures", "Optimization"],
  },
  {
    icon: <Database className='h-4 w-4' />,
    title: "Programming Languages",
    description:
      "Expertise in multiple programming languages with focus on clean, efficient code.",
    tools: ["Java", "Python", "JavaScript", "Kotlin"],
  },
  {
    icon: <Trophy className='h-4 w-4' />,
    title: "Machine Learning",
    description:
      "Currently learning machine learning and AI technologies to build intelligent solutions.",
    tools: ["TensorFlow", "Python", "Data Analysis", "Neural Networks"],
  },
];

const floatingIcons = [
  { icon: <Code className='h-5 w-5' />, delay: 0 },
  { icon: <Database className='h-4 w-4' />, delay: 0.5 },
  { icon: <Server className='h-4 w-4' />, delay: 1 },
  { icon: <Brain className='h-5 w-5' />, delay: 1.5 },
];

export function AboutSection() {
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

  // Parallax effects for background elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.3, 0.8, 0.3]
  );

  return (
    <motion.section
      ref={containerRef}
      id='about'
      className='relative py-6 sm:py-12 overflow-hidden'
      style={{ opacity, scale, y }}
    >
      {/* Animated Background */}
      <motion.div
        className='absolute inset-0 pointer-events-none'
        style={{ y: backgroundY, opacity: backgroundOpacity }}
      >
        {/* Floating Icons */}
        {floatingIcons.map((element, index) => (
          <motion.div
            key={index}
            className='absolute'
            style={{
              left: `${15 + index * 20}%`,
              top: `${20 + index * 15}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            <div className='p-3 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm text-blue-400/60'>
              {element.icon}
            </div>
          </motion.div>
        ))}

        {/* Background Gradients */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className='absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-400/5 blur-3xl'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>

      <div className='container mx-auto px-3 relative max-w-6xl'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.1,
            delayChildren: 0.2,
          }}
          className='text-center mb-8 sm:mb-12'
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='inline-block mb-3'
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div className='relative px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-lg'>
              <motion.div
                className='absolute -left-1 -top-1 w-2 h-2 bg-blue-500 rounded-full'
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className='absolute -left-1 -top-1 w-2 h-2 bg-blue-500 rounded-full animate-ping'
                animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <span className='text-xs font-medium text-blue-400'>
                BSc (Hons) Software Engineering Student
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white'
          >
            Transforming Ideas Into{" "}
            <motion.span
              className='text-blue-400'
              animate={{
                textShadow: [
                  "0 0 0px #60a5fa",
                  "0 0 20px #60a5fa",
                  "0 0 0px #60a5fa",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Digital Reality
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto'
          >
            Passionate about creating innovative solutions that address
            real-world problems through clean code and modern technologies.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.1,
            delayChildren: 0.2,
          }}
          className='grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-8 sm:mb-12'
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='relative group'
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                z: 10,
              }}
            >
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100'
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.5,
                }}
              />
              <div className='relative text-center p-2 sm:p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm overflow-hidden'>
                <motion.div
                  className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100'
                  transition={{ duration: 0.3 }}
                />
                <div className='relative z-10'>
                  <motion.div
                    className='flex justify-center mb-1 sm:mb-2'
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                  >
                    <div className='p-1 sm:p-1.5 rounded-full bg-black/20 text-blue-400'>
                      {stat.icon}
                    </div>
                  </motion.div>

                  <motion.div
                    className='text-lg sm:text-xl md:text-2xl font-bold text-blue-400 mb-0.5'
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.2,
                    }}
                  >
                    {stat.value}
                  </motion.div>

                  <div className='text-[10px] xs:text-xs text-gray-400'>
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start lg:items-center'>
          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] mx-auto'
          >
            <motion.div
              className='relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden border-2 border-blue-500/20 shadow-xl'
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                rotateX: 2,
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src='/banner4.jpg'
                alt='Saranga Siriwardhana'
                fill
                className='object-cover object-center'
                sizes='(max-width: 768px) 100vw, 50vw'
                priority
              />
              <div className='absolute inset-0 bg-black/50' />
              <motion.div
                className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'
                animate={{
                  background: [
                    "linear-gradient(to top, rgba(0,0,0,0.6), transparent, transparent)",
                    "linear-gradient(to top, rgba(0,0,0,0.6), rgba(59,130,246,0.1), transparent)",
                    "linear-gradient(to top, rgba(0,0,0,0.6), transparent, transparent)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className='absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 backdrop-blur-lg bg-black/80 p-2 sm:p-3 rounded-lg border border-blue-500/30'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className='font-bold text-xs sm:text-sm text-white mb-0.5'>
                  Sri Lanka Institute of Information Technology
                </h3>
                <p className='text-[10px] xs:text-xs text-blue-400 flex items-center gap-1'>
                  <GraduationCap className='h-3 w-3' />
                  BSc (Hons) Software Engineering - 4th Year
                </p>
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className='absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 blur-xl'
            />

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className='absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-cyan-400/20 blur-xl'
            />
          </motion.div>

          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='space-y-4 sm:space-y-5'
          >
            <motion.div
              className='prose prose-neutral max-w-none'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                staggerChildren: 0.1,
                delayChildren: 0.2,
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='text-xs sm:text-sm text-gray-400'
              >
                I am a passionate BSc (Hons) Software Engineering student at
                SLIIT with expertise in Java and Python programming languages.
                My focus is on developing innovative solutions that address
                real-world problems through clean, efficient code.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='text-xs sm:text-sm text-gray-400'
              >
                With experience in web development, mobile applications, and
                server-side technologies, I consistently strive to stay at the
                forefront of software engineering practices. I believe in the
                power of technology to transform lives and am committed to
                making a meaningful impact through my work.
              </motion.p>
            </motion.div>

            <motion.div
              className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                staggerChildren: 0.1,
                delayChildren: 0.2,
              }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='group p-2 sm:p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden'
                  whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                    z: 10,
                  }}
                >
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100'
                    transition={{ duration: 0.3 }}
                  />
                  <div className='relative z-10'>
                    <div className='flex items-center gap-2 mb-1 sm:mb-1.5'>
                      <motion.div
                        className='p-1 rounded-md bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors'
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                          delay: index * 0.3,
                        }}
                      >
                        {skill.icon}
                      </motion.div>
                      <h3 className='font-semibold text-xs sm:text-sm text-white'>
                        {skill.title}
                      </h3>
                    </div>

                    <p className='text-[10px] xs:text-xs text-gray-400 mb-1 sm:mb-2'>
                      {skill.description}
                    </p>

                    <div className='flex flex-wrap gap-1'>
                      {skill.tools.map((tool, toolIndex) => (
                        <motion.span
                          key={tool}
                          className='text-[10px] xs:text-xs px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300'
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: toolIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group text-xs sm:text-sm relative'
              onClick={() => {
                const skillsElement = document.getElementById("skills");
                if (skillsElement) {
                  window.scrollTo({
                    top: skillsElement.offsetTop - 60,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <motion.div
                className='absolute -inset-2 bg-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100'
                transition={{ duration: 0.3 }}
              />
              <span className='relative z-10'>View My Skills</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <ArrowRight className='h-3 w-3 group-hover:translate-x-1 transition-transform' />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
