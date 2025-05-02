 
'use client'

import { motion } from 'framer-motion'
import { Building, CalendarDays, CheckCircle2, Medal, Sparkles, TrendingUp } from 'lucide-react'

const experiences = [
  {
    title: 'Junior Full Stack Developer',
    company: 'Unwir Pvt. Ltd.',
    period: 'Dec 2024 - Present',
    type: 'Full-time',
    description: 'Leading development of modern web applications with focus on performance and user experience.',
    technologies: ['TypeScript', 'Shadcn', 'Next.js', 'MongoDB', 'Express', 'Tailwind'],
    highlights: [
      'Led development of 5+ client projects',
      'Implemented advanced UI/UX features using Shadcn',
      'Optimized application performance by 40%',
      'Mentored 2 junior developers'
    ],
    achievements: [
      { label: 'Projects Delivered', value: '5+' },
      { label: 'Code Quality', value: '98%' },
      { label: 'Client Satisfaction', value: '4.9/5' }
    ],
    icon: <Sparkles className="h-5 w-5" />,
    color: 'blue'
  },
  {
    title: 'Intern Full Stack Developer',
    company: 'Unwir Pvt. Ltd.',
    period: 'Jun 2024 - Dec 2024',
    type: 'Internship',
    description: 'Gained hands-on experience in full-stack development, working on real-world projects.',
    technologies: ['Next.js', 'PostgreSQL', 'Tailwind', 'Drizzle', 'Prisma', 'TypeScript', 'Shadcn', 'MongoDB', 'Express'],
    highlights: [
      'Developed responsive mobile-first applications',
      'Improved application performance and SEO',
      'Enhanced user engagement by 30%',
      'Collaborated with senior developers on code reviews'
    ],
    achievements: [
      { label: 'Features Built', value: '25+' },
      { label: 'Bug Fixes', value: '100+' },
      { label: 'Performance Gain', value: '+30%' }
    ],
    icon: <Medal className="h-5 w-5" />,
    color: 'purple'
  }
]

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse delay-1000" />
      </div>

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
            whileHover={{ scale: 1.05 }}
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              My Journey
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Professional
            <span className="text-gradient"> Experience</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions through continuous learning and growth
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Enhanced timeline line */}
            <div className="absolute left-4 md:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50" />
            
            <motion.div 
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {experiences.map((exp) => (
                <motion.div
                  key={exp.title}
                  variants={cardVariants}
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Enhanced timeline node */}
                  <motion.div 
                    className={`absolute left-4 md:left-8 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 ${
                      exp.color === 'blue' ? 'border-blue-500' : 'border-purple-500'
                    } flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className={`p-2 rounded-full ${
                        exp.color === 'blue' ? 'bg-blue-500/20 text-blue-500' : 'bg-purple-500/20 text-purple-500'
                      }`}
                    >
                      {exp.icon}
                    </motion.div>
                  </motion.div>
                  
                  <div className="ml-16 md:ml-24">
                    <motion.div 
                      className={`rounded-2xl border-2 p-6 bg-gradient-to-br ${
                        exp.color === 'blue' 
                          ? 'from-blue-500/5 to-blue-500/10 border-blue-500/20' 
                          : 'from-purple-500/5 to-purple-500/10 border-purple-500/20'
                      } backdrop-blur-sm`}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                          <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Building className="h-4 w-4" />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CalendarDays className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          exp.type === 'Full-time' 
                            ? 'bg-blue-500/10 text-blue-500' 
                            : 'bg-purple-500/10 text-purple-500'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">{exp.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className={`px-3 py-1 text-sm rounded-lg ${
                              exp.color === 'blue'
                                ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                                : 'bg-purple-500/10 text-purple-500 border border-purple-500/20'
                            }`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      
                      {/* Highlights Grid */}
                      <div className="grid md:grid-cols-2 gap-3 mb-6">
                        {exp.highlights.map((highlight, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle2 className={`h-5 w-5 mt-0.5 ${
                              exp.color === 'blue' ? 'text-blue-500' : 'text-purple-500'
                            }`} />
                            <span className="text-sm">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Achievements */}
                      <div className="grid grid-cols-3 gap-4">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={achievement.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`text-center p-3 rounded-xl ${
                              exp.color === 'blue'
                                ? 'bg-blue-500/10 border border-blue-500/20'
                                : 'bg-purple-500/10 border border-purple-500/20'
                            }`}
                          >
                            <div className={`text-xl font-bold ${
                              exp.color === 'blue' ? 'text-blue-500' : 'text-purple-500'
                            }`}>
                              {achievement.value}
                            </div>
                            <div className="text-xs text-muted-foreground">{achievement.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            className="inline-block"
          >
            <TrendingUp className="h-8 w-8 text-primary/50" />
          </motion.div>
          <p className="text-lg text-muted-foreground mt-2">
            Continuously evolving and growing
          </p>
        </motion.div>
      </div>
    </section>
  )
}