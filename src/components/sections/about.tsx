'use client'

import { motion } from 'framer-motion'
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
  Trophy
} from 'lucide-react'
import Image from 'next/image'

const stats = [
  { label: 'Year of Study', value: '4th', icon: <GraduationCap className="h-5 w-5" /> },
  { label: 'Projects', value: '20+', icon: <Code className="h-5 w-5" /> },
  { label: 'Tech Stacks', value: '8+', icon: <Sparkles className="h-5 w-5" /> },
  { label: 'Learning Hours', value: '1000+', icon: <Brain className="h-5 w-5" /> },
]

const skills = [
  {
    icon: <Palette className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Frontend Development',
    description: 'Creating responsive and user-friendly web applications using HTML, CSS, and React. Bringing beautiful and functional interfaces to life.',
    tools: ['Next.jS', 'React', 'HTML', 'CSS', 'Javascript', 'TypeScript']
  },
  {
    icon: <Server className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Backend Development',
    description: 'Building scalable and reliable server-side applications using modern technologies and frameworks.',
    tools: ['Node.js', 'Express', 'Python', 'Java']
  },
  {
    icon: <Smartphone className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Android Development',
    description: 'Building robust and high-quality Android applications using modern mobile development frameworks.',
    tools: ['Flutter', 'React Native', 'Kotlin']
  },
  {
    icon: <Brain className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Problem Solving',
    description: 'Creative problem solver with analytical mindset. Finding innovative solutions that address complex challenges.',
    tools: ['Algorithms', 'Data Structures', 'Optimization']
  },
  {
    icon: <Database className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Programming Languages',
    description: 'Expertise in multiple programming languages with focus on clean, efficient code.',
    tools: ['Java', 'Python', 'JavaScript', 'Kotlin']
  },
  {
    icon: <Trophy className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Machine Learning',
    description: 'Currently learning machine learning and AI technologies to build intelligent solutions.',
    tools: ['TensorFlow', 'Python', 'Data Analysis', 'Neural Networks']
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-10 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative max-w-[2000px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-lg">
              <div className="absolute -left-1 -top-1 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-ping" />
              <div className="absolute -left-1 -top-1 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full" />
              <span className="text-xs sm:text-sm font-medium">BSc (Hons) Software Engineering Student</span>
            </div>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">
            Transforming Ideas Into
            <span className="text-gradient"> Digital Reality</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions that address real-world problems
            through clean code and modern technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-6 mb-10 sm:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/10 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative text-center p-2 sm:p-3 md:p-6 rounded-xl sm:rounded-2xl bg-primary/20 border border-primary/20 backdrop-blur-sm">
                <div className="flex justify-center mb-1 sm:mb-2 md:mb-3">
                  <div className="p-1 sm:p-2 md:p-3 rounded-full bg-foreground/10 text-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary/90 mb-0.5 sm:mb-1">{stat.value}</div>
                <div className="text-[10px] xs:text-xs sm:text-sm text-foreground/80">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
          {/* Image section - Optimized for mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[500px] sm:h-[650px] md:h-[700px] lg:h-[800px] mx-auto"
          >
  <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-background shadow-xl sm:shadow-2xl">
  <Image
    src="/banner4.jpg"
    alt="Saranga Siriwardhana"
    fill
    className="object-cover object-center"
    sizes="(max-width: 768px) 100vw, 50vw"
    priority
  />
  {/* This div creates the full black opacity overlay */}
  <div className="absolute inset-0 bg-black/50" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 backdrop-blur-lg bg-background/80 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-border/50">
                <h3 className="font-bold text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1">Sri Lanka Institute of Information Technology</h3>
                <p className="text-[10px] xs:text-xs sm:text-sm text-primary flex items-center gap-1 sm:gap-2">
                  <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4" />
                  BSc (Hons) Software Engineering - 4th Year
                </p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 sm:-top-10 -right-6 sm:-right-10 w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-primary/20 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-accent/20 blur-xl"
            />
          </motion.div>

          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                I am a passionate BSc (Hons) Software Engineering student at SLIIT with expertise
                in Java and Python programming languages. My focus is on developing innovative
                solutions that address real-world problems through clean, efficient code.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                With experience in web development, mobile applications, and server-side technologies,
                I consistently strive to stay at the forefront of software engineering practices.
                I believe in the power of technology to transform lives and am committed to making
                a meaningful impact through my work.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group p-2.5 sm:p-3 md:p-4 rounded-xl bg-primary/20 border border-primary/10 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <div className="p-1 sm:p-1.5 md:p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base text-foreground">{skill.title}</h3>
                  </div>
                  <p className="text-[10px] xs:text-xs sm:text-sm text-foreground/70 mb-1.5 sm:mb-2 md:mb-3">{skill.description}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                    {skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] xs:text-xs px-1.5 sm:px-2 py-0.5 rounded-full bg-primary/20 text-foreground/80"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group text-sm sm:text-base"
              onClick={() => {
                const skillsElement = document.getElementById('skills');
                if (skillsElement) {
                  window.scrollTo({ top: skillsElement.offsetTop - 80, behavior: 'smooth' });
                }
              }}
            >
              View My Skills
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}