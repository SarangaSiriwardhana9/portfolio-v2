"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Smartphone,
  Zap,
} from "lucide-react";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className='h-4 w-4' />,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "Vue.js",
    ],
    gradient: "from-blue-500/15 via-blue-400/15 to-cyan-500/15",
    accentColor: "blue",
    progress: 90,
  },
  {
    title: "Backend Development",
    icon: <Server className='h-4 w-4' />,
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Java",
      "REST APIs",
      "Microservices",
    ],
    gradient: "from-cyan-500/15 via-cyan-400/15 to-blue-500/15",
    accentColor: "cyan",
    progress: 85,
  },
  {
    title: "Database & Storage",
    icon: <Database className='h-4 w-4' />,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "MySQL", "Supabase"],
    gradient: "from-blue-600/15 via-blue-500/15 to-cyan-600/15",
    accentColor: "blue",
    progress: 80,
  },
  {
    title: "DevOps & Tools",
    icon: <Code2 className='h-4 w-4' />,
    skills: ["Docker", "AWS", "Git", "CI/CD", "Kubernetes", "Linux"],
    gradient: "from-cyan-600/15 via-cyan-500/15 to-blue-600/15",
    accentColor: "cyan",
    progress: 75,
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className='h-4 w-4' />,
    skills: ["React Native", "Flutter", "Kotlin", "Expo"],
    gradient: "from-blue-500/15 via-blue-400/15 to-cyan-500/15",
    accentColor: "blue",
    progress: 80,
  },
  {
    title: "Cloud & Services",
    icon: <Globe className='h-4 w-4' />,
    skills: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Vercel",
      "Netlify",
      "Firebase",
      "Cloudflare",
    ],
    gradient: "from-cyan-500/15 via-cyan-400/15 to-blue-600/15",
    accentColor: "cyan",
    progress: 70,
  },
  {
    title: "Machine Learning",
    icon: <Brain className='h-4 w-4' />,
    skills: [
      "TensorFlow",
      "Python",
      "PyTorch",
      "Scikit-learn",
      "Neural Networks",
    ],
    gradient: "from-blue-600/15 via-blue-500/15 to-cyan-600/15",
    accentColor: "blue",
    progress: 60,
  },
  {
    title: "Problem Solving",
    icon: <Zap className='h-4 w-4' />,
    skills: [
      "Algorithms",
      "Data Structures",
      "System Design",
      "debugging",
      "Critical Thinking",
    ],
    gradient: "from-cyan-600/15 via-cyan-500/15 to-blue-600/15",
    accentColor: "cyan",
    progress: 95,
  },
];

const floatingSkills = [
  { icon: <Layout className='h-5 w-5' />, delay: 0 },
  { icon: <Server className='h-4 w-4' />, delay: 0.3 },
  { icon: <Database className='h-4 w-4' />, delay: 0.6 },
  { icon: <Globe className='h-5 w-5' />, delay: 0.9 },
  { icon: <Brain className='h-4 w-4' />, delay: 1.2 },
];

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.section
      ref={containerRef}
      id='skills'
      className='py-6 relative overflow-hidden'
      style={{ opacity, scale, y }}
    >
      {/* Animated Background */}
      <motion.div
        className='absolute inset-0 pointer-events-none'
        style={{ y: backgroundY }}
      >
        {/* Floating Skills Icons */}
        {floatingSkills.map((element, index) => (
          <motion.div
            key={index}
            className='absolute'
            style={{
              left: `${10 + index * 18}%`,
              top: `${15 + (index % 2) * 30}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8],
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
            <div className='p-3 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-400/10 border border-blue-500/20 backdrop-blur-sm text-blue-400/40'>
              {element.icon}
            </div>
          </motion.div>
        ))}

        {/* Background Gradients */}
        <motion.div
          className='absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className='absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-cyan-400/5 blur-3xl'
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
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
              My Expertise
            </span>
          </motion.div>

          <motion.h2
            className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Technical
            <motion.span
              className='text-blue-400'
              animate={{
                textShadow: [
                  "0 0 0px #22d3ee",
                  "0 0 20px #22d3ee",
                  "0 0 0px #22d3ee",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {" "}
              Skills
            </motion.span>
          </motion.h2>

          <motion.p
            className='text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            A comprehensive overview of my technical capabilities and expertise
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.08 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, rotateX: 45 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className='group relative'
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                z: 20,
              }}
            >
              <motion.div
                className='absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100'
                transition={{ duration: 0.3 }}
              />

              <div
                className={`relative h-full p-3 sm:p-4 rounded-xl border border-blue-500/20 bg-gradient-to-br ${category.gradient} backdrop-blur-sm bg-black/40 overflow-hidden`}
              >
                <motion.div
                  className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100'
                  transition={{ duration: 0.3 }}
                />

                <div className='relative z-10'>
                  <div className='flex items-center justify-between mb-3'>
                    <div className='flex items-center gap-2'>
                      <motion.div
                        className={`p-1.5 rounded-lg bg-${
                          category.accentColor === "blue" ? "blue" : "cyan"
                        }-500/20 text-${
                          category.accentColor === "blue" ? "blue" : "cyan"
                        }-400`}
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 10,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                          delay: index * 0.5,
                        }}
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className='text-sm font-semibold text-white'>
                        {category.title}
                      </h3>
                    </div>

                    <motion.div
                      className={`text-xs font-bold text-${
                        category.accentColor === "blue" ? "blue" : "cyan"
                      }-400`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {category.progress}%
                    </motion.div>
                  </div>

                  {/* Progress Bar */}
                  <motion.div
                    className='w-full h-1 bg-gray-700 rounded-full mb-3 overflow-hidden'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r from-${
                        category.accentColor === "blue" ? "blue" : "cyan"
                      }-500 to-${
                        category.accentColor === "blue" ? "cyan" : "blue"
                      }-400 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.progress}%` }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1 + 0.5,
                        ease: "easeOut",
                      }}
                    />
                  </motion.div>

                  <motion.div
                    className='flex flex-wrap gap-1'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className={`px-2 py-0.5 text-xs rounded-full bg-black/30 backdrop-blur-sm border border-blue-500/30 
                          hover:border-${
                            category.accentColor === "blue" ? "blue" : "cyan"
                          }-500/50 hover:bg-${
                          category.accentColor === "blue" ? "blue" : "cyan"
                        }-500/20 transition-all cursor-default text-gray-300`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: skillIndex * 0.1 + 0.8,
                          duration: 0.3,
                        }}
                        whileHover={{
                          scale: 1.1,
                          y: -2,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Floating particles */}
                <motion.div
                  className='absolute top-2 right-2 w-2 h-2 bg-blue-400/30 rounded-full'
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.2,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Indicator */}
        <motion.div
          className='mt-10 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className='inline-flex items-center gap-2'
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className='w-2 h-2 bg-blue-400/40 rounded-full'
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
