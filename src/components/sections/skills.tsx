"use client";

import { motion, useInView } from "framer-motion";
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

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id='skills' className='py-16 md:py-24 relative overflow-hidden'>
      {/* Simple Background Gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none' />

      <div className='container mx-auto px-4 sm:px-6 relative max-w-7xl'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <motion.div
            className='inline-block mb-4'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className='px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold border border-blue-500/30'>
              My Expertise
            </span>
          </motion.div>

          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white'>
            Technical <span className='text-blue-400'>Skills</span>
          </h2>

          <p className='text-base sm:text-lg text-gray-400 max-w-2xl mx-auto'>
            A comprehensive overview of my technical capabilities and expertise
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className='group relative'
            >
              <div
                className={`relative h-full p-4 sm:p-5 rounded-xl border border-blue-500/20 bg-gradient-to-br ${category.gradient} backdrop-blur-sm bg-black/40 hover:border-blue-500/40 transition-colors duration-300`}
              >
                {/* Header */}
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center gap-3'>
                    <div
                      className={`p-2 rounded-lg bg-${
                        category.accentColor === "blue" ? "blue" : "cyan"
                      }-500/20 text-${
                        category.accentColor === "blue" ? "blue" : "cyan"
                      }-400`}
                    >
                      {category.icon}
                    </div>
                    <h3 className='text-sm font-semibold text-white'>
                      {category.title}
                    </h3>
                  </div>
                  <span
                    className={`text-sm font-bold text-${
                      category.accentColor === "blue" ? "blue" : "cyan"
                    }-400`}
                  >
                    {category.progress}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className='w-full h-2 bg-gray-700 rounded-full mb-4 overflow-hidden'>
                  <motion.div
                    className={`h-full bg-gradient-to-r from-${
                      category.accentColor === "blue" ? "blue" : "cyan"
                    }-500 to-${
                      category.accentColor === "blue" ? "cyan" : "blue"
                    }-400 rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${category.progress}%` } : {}}
                    transition={{
                      duration: 1,
                      delay: index * 0.1 + 0.3,
                      ease: "easeOut",
                    }}
                  />
                </div>

                {/* Skills Tags */}
                <div className='flex flex-wrap gap-2'>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className='px-2 py-1 text-xs rounded-md bg-black/30 backdrop-blur-sm border border-blue-500/30 text-gray-300 hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors duration-200'
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: skillIndex * 0.05 + index * 0.1 + 0.5,
                        duration: 0.3,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className='mt-16 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className='flex justify-center items-center gap-2'>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className='w-2 h-2 bg-blue-400/50 rounded-full'
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
