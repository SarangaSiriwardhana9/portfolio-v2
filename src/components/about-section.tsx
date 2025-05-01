'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Calendar, GraduationCap, MapPin, Trophy, User } from 'lucide-react'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get to know more about my journey, education, and professional experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Image Column */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                <div className="aspect-[4/5]">
                  <Image
                    src="/bannerImg.png"
                    alt="Saranga Siriwardhana"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="font-bold text-xl">Saranga Siriwardhana</h3>
                  <p className="text-white/80 flex items-center gap-1 text-sm mt-1">
                    <MapPin className="h-3 w-3" /> Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-6 glass border-primary/10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    <span>Bio</span>
                  </h3>
                  <p className="text-muted-foreground">
                    I'm a final year Software Engineering student at SLIIT with a passion for creating responsive, user-friendly applications. My expertise spans both frontend and backend development, with a particular interest in React, Next.js, and Node.js.
                  </p>
                  <p className="text-muted-foreground mt-3">
                    I enjoy solving complex problems and continuously learning new technologies to enhance my skill set. My goal is to develop innovative solutions that make a meaningful impact.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span>Education</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="relative pl-6 border-l-2 border-primary/30">
                      <div className="absolute left-[-8px] top-1 h-3 w-3 rounded-full bg-primary" />
                      <h4 className="font-semibold">BSc (Hons) in Software Engineering</h4>
                      <p className="text-muted-foreground">Sri Lanka Institute of Information Technology (SLIIT)</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <Calendar className="h-3 w-3" /> 2021 - Present
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <span>Achievements</span>
                  </h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-muted-foreground">Dean's List for Academic Excellence (2022-2023)</li>
                    <li className="text-muted-foreground">Winner, University Hackathon 2023</li>
                    <li className="text-muted-foreground">Published research paper on Modern Web Development Techniques</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}