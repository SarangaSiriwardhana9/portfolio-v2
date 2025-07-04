"use client";

import { motion, useInView } from "framer-motion";
import {
  Building,
  CalendarDays,
  CheckCircle2,
  Medal,
  Sparkles,
  TrendingUp,
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

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id='experience'
      className='py-16 md:py-24 relative overflow-hidden'
    >
      {/* Simple Background Gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none' />

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
              My Journey
            </span>
          </motion.div>

          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white'>
            Professional <span className='text-blue-400'>Experience</span>
          </h2>

          <p className='text-base sm:text-lg text-gray-400 max-w-2xl mx-auto'>
            Building impactful solutions through continuous learning and growth
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className='max-w-4xl mx-auto'>
          <div className='relative'>
            {/* Static Timeline Line */}
            <div className='absolute left-4 md:left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500/50 via-cyan-400/50 to-blue-500/50' />

            <motion.div
              ref={ref}
              className='space-y-12'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ staggerChildren: 0.2 }}
            >
              {experiences.map((exp, expIndex) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: expIndex * 0.2 }}
                  className='relative'
                >
                  {/* Timeline Node */}
                  <motion.div
                    className={`absolute left-4 md:left-8 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 ${
                      exp.color === "blue"
                        ? "border-blue-500"
                        : "border-cyan-400"
                    } flex items-center justify-center shadow-lg z-20`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: expIndex * 0.2 + 0.3, duration: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div
                      className={`p-1.5 rounded-full ${
                        exp.color === "blue"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-cyan-400/20 text-cyan-400"
                      }`}
                    >
                      {exp.icon}
                    </div>
                  </motion.div>

                  {/* Experience Card */}
                  <div className='ml-12 md:ml-20'>
                    <motion.div
                      className={`rounded-xl border p-5 md:p-6 bg-gradient-to-br ${
                        exp.color === "blue"
                          ? "from-blue-500/5 to-blue-500/10 border-blue-500/20 hover:border-blue-500/40"
                          : "from-cyan-400/5 to-cyan-400/10 border-cyan-400/20 hover:border-cyan-400/40"
                      } backdrop-blur-sm relative transition-all duration-300`}
                      whileHover={{ y: -2, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Header */}
                      <div className='flex flex-wrap items-start justify-between gap-4 mb-4'>
                        <div>
                          <h3 className='text-xl md:text-2xl font-bold mb-2 text-white'>
                            {exp.title}
                          </h3>
                          <div className='flex flex-wrap items-center gap-4 text-gray-400 text-sm'>
                            <div className='flex items-center gap-2'>
                              <Building className='h-4 w-4' />
                              <span>{exp.company}</span>
                            </div>
                            <div className='flex items-center gap-2'>
                              <CalendarDays className='h-4 w-4' />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>

                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            exp.type === "Full-time"
                              ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                              : "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                          }`}
                        >
                          {exp.type}
                        </span>
                      </div>

                      {/* Description */}
                      <p className='text-gray-400 mb-6'>{exp.description}</p>

                      {/* Technologies */}
                      <div className='flex flex-wrap gap-2 mb-6'>
                        {exp.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                              exp.color === "blue"
                                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20"
                                : "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 hover:bg-cyan-400/20"
                            }`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className='grid sm:grid-cols-2 gap-3 mb-6'>
                        {exp.highlights.map((highlight, i) => (
                          <div key={i} className='flex items-start gap-3'>
                            <CheckCircle2
                              className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                                exp.color === "blue"
                                  ? "text-blue-400"
                                  : "text-cyan-400"
                              }`}
                            />
                            <span className='text-sm text-gray-300'>
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className='grid grid-cols-3 gap-3'>
                        {exp.achievements.map((achievement) => (
                          <motion.div
                            key={achievement.label}
                            className={`text-center p-3 rounded-lg transition-all ${
                              exp.color === "blue"
                                ? "bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/15"
                                : "bg-cyan-400/10 border border-cyan-400/20 hover:bg-cyan-400/15"
                            }`}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div
                              className={`text-lg font-bold ${
                                exp.color === "blue"
                                  ? "text-blue-400"
                                  : "text-cyan-400"
                              }`}
                            >
                              {achievement.value}
                            </div>
                            <div className='text-xs text-gray-400'>
                              {achievement.label}
                            </div>
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

        {/* Bottom Section */}
        <motion.div
          className='mt-16 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            className='inline-block mb-3'
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <TrendingUp className='h-6 w-6 text-blue-400/60' />
          </motion.div>
          <p className='text-gray-400'>Continuously evolving and growing</p>
        </motion.div>
      </div>
    </section>
  );
}
