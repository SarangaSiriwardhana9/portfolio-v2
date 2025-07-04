"use client";

import { motion } from "framer-motion";
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
      "Creating responsive and user-friendly web applications using HTML, CSS, and React.",
    tools: ["Next.js", "React", "HTML", "CSS", "Javascript", "TypeScript"],
  },
  {
    icon: <Server className='h-4 w-4' />,
    title: "Backend Development",
    description:
      "Building scalable and reliable server-side applications using modern technologies.",
    tools: ["Node.js", "Express", "Python", "Java"],
  },
  {
    icon: <Smartphone className='h-4 w-4' />,
    title: "Android Development",
    description:
      "Building robust and high-quality Android applications using modern frameworks.",
    tools: ["Flutter", "React Native", "Kotlin"],
  },
  {
    icon: <Brain className='h-4 w-4' />,
    title: "Problem Solving",
    description:
      "Creative problem solver with analytical mindset and innovative solutions.",
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

export function AboutSection() {
  return (
    <section id='about' className='relative py-8 overflow-hidden'>
      <div className='container mx-auto px-3 relative max-w-7xl'>
        {/* Header */}
        <div className='text-center mb-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-block mb-3'
          >
            <div className='relative px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-lg'>
              <span className='text-xs font-medium text-blue-400'>
                BSc (Hons) Software Engineering Student
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white'
          >
            Transforming Ideas Into{" "}
            <span className='text-blue-400'>Digital Reality</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-sm text-gray-400 max-w-2xl mx-auto'
          >
            Passionate about creating innovative solutions that address
            real-world problems through clean code and modern technologies.
          </motion.p>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mb-8'>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='text-center p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm'
            >
              <div className='flex justify-center mb-2'>
                <div className='p-1.5 rounded-full bg-black/20 text-blue-400'>
                  {stat.icon}
                </div>
              </div>
              <div className='text-xl font-bold text-blue-400 mb-1'>
                {stat.value}
              </div>
              <div className='text-xs text-gray-400'>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='relative w-full h-[400px] md:h-[450px]'
          >
            <div className='relative w-full h-full rounded-2xl overflow-hidden border-2 border-blue-500/20 shadow-xl'>
              <Image
                src='/banner4.jpg'
                alt='Saranga Siriwardhana'
                fill
                className='object-cover object-center'
                sizes='(max-width: 768px) 100vw, 50vw'
                priority
              />
              <div className='absolute inset-0 bg-black/40' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

              <div className='absolute bottom-4 left-4 right-4 backdrop-blur-lg bg-black/80 p-3 rounded-lg border border-blue-500/30'>
                <h3 className='font-bold text-sm text-white mb-1'>
                  Sri Lanka Institute of Information Technology
                </h3>
                <p className='text-xs text-blue-400 flex items-center gap-1'>
                  <GraduationCap className='h-3 w-3' />
                  BSc (Hons) Software Engineering - 4th Year
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='space-y-5'
          >
            <div className='space-y-4'>
              <p className='text-sm text-gray-400'>
                I am a passionate BSc (Hons) Software Engineering student at
                SLIIT with expertise in Java and Python programming languages.
                My focus is on developing innovative solutions that address
                real-world problems through clean, efficient code.
              </p>

              <p className='text-sm text-gray-400'>
                With experience in web development, mobile applications, and
                server-side technologies, I consistently strive to stay at the
                forefront of software engineering practices. I believe in the
                power of technology to transform lives and am committed to
                making a meaningful impact through my work.
              </p>
            </div>

            {/* Skills Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/30 transition-colors duration-300'
                >
                  <div className='flex items-center gap-2 mb-2'>
                    <div className='p-1 rounded-md bg-blue-500/20 text-blue-400'>
                      {skill.icon}
                    </div>
                    <h3 className='font-semibold text-sm text-white'>
                      {skill.title}
                    </h3>
                  </div>

                  <p className='text-xs text-gray-400 mb-2'>
                    {skill.description}
                  </p>

                  <div className='flex flex-wrap gap-1'>
                    {skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className='text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300'
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              className='flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm'
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
              <span>View My Skills</span>
              <ArrowRight className='h-4 w-4' />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
