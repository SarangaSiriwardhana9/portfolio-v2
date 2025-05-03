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
    icon: <Palette className="h-6 w-6" />,
    title: 'Frontend Development',
    description: 'Creating responsive and user-friendly web applications using HTML, CSS, and React. Bringing beautiful and functional interfaces to life.',
    tools: ['Next.jS','React', 'HTML', 'CSS', 'Javascript','TypeScript']
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: 'Backend Development',
    description: 'Building scalable and reliable server-side applications using modern technologies and frameworks.',
    tools: ['Node.js', 'Express', 'Python', 'Java']
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Android Development',
    description: 'Building robust and high-quality Android applications using modern mobile development frameworks.',
    tools: ['Flutter', 'React Native', 'Kotlin']
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Problem Solving',
    description: 'Creative problem solver with analytical mindset. Finding innovative solutions that address complex challenges.',
    tools: ['Algorithms', 'Data Structures', 'Optimization']
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Programming Languages',
    description: 'Expertise in multiple programming languages with focus on clean, efficient code.',
    tools: ['Java', 'Python', 'JavaScript', 'Kotlin']
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: 'Machine Learning',
    description: 'Currently learning machine learning and AI technologies to build intelligent solutions.',
    tools: ['TensorFlow', 'Python', 'Data Analysis', 'Neural Networks']
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
 

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-lg">
              <div className="absolute -left-1 -top-1 w-3 h-3 bg-primary rounded-full animate-ping" />
              <div className="absolute -left-1 -top-1 w-3 h-3 bg-primary rounded-full" />
              <span className="text-sm font-medium">BSc (Hons) Software Engineering Student</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transforming Ideas Into
            <span className="text-gradient"> Digital Reality</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions that address real-world problems
            through clean code and modern technologies.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative text-center p-6 rounded-2xl bg-primary/20 border border-primary/20 backdrop-blur-sm">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-foreground/10 text-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary/90 mb-1">{stat.value}</div>
                <div className="text-sm text-foreground/80">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-4 border-background shadow-2xl">
              <Image
                src="/banner10.jpg"
                alt="Saranga Siriwardhana"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Student Info Badge */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-lg bg-background/80 p-4 rounded-xl border border-border/50">
                <h3 className="font-bold text-lg mb-1">Sri Lanka Institute of Information Technology</h3>
                <p className="text-sm text-primary flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  BSc (Hons) Software Engineering - 4th Year
                </p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-primary/20 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-accent/20 blur-xl"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground">
                I am a passionate BSc (Hons) Software Engineering student at SLIIT with expertise 
                in Java and Python programming languages. My focus is on developing innovative 
                solutions that address real-world problems through clean, efficient code.
              </p>
              
              <p className="text-lg text-muted-foreground">
                With experience in web development, mobile applications, and server-side technologies, 
                I consistently strive to stay at the forefront of software engineering practices. 
                I believe in the power of technology to transform lives and am committed to making 
                a meaningful impact through my work.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group p-4 rounded-xl bg-primary/20 border border-primary/10 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-foreground">{skill.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/70 mb-3">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-1 rounded-full bg-primary/20 text-foreground/80"
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
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
              onClick={() => window.scrollTo({ top: document.getElementById('skills')?.offsetTop, behavior: 'smooth' })}
            >
              View My Skills
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}