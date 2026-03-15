"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/neon-button"
import { GlowingEffect } from "@/components/ui/glowing-effect"

const projects = [
  {
    title: "DAVNS Platform",
    description:
      "AI-driven platform for location-based recommendations and innovative software solutions. Complete startup ecosystem.",
    image: "/images/davns-platform.png",
    technologies: ["React", "Node.js", "AI Integration", "Cloud Computing"],
    live: "https://davns.in",
    featured: true,
  },
  {
    title: "Lost and Found Portal",
    description: "Comprehensive lost and found management system helping people recover their lost items efficiently.",
    image: "/images/lost-found-portal.png",
    technologies: ["React", "Node.js", "MySQL", "WordPress"],
    live: "https://lafdavns.site",
    featured: true,
  },
  {
    title: "Menstrualuna Tracker",
    description: "Menstrual tracking web app built with React and JavaScript featuring local data storage for privacy.",
    image: "/images/menstrualuna-tracker.png",
    technologies: ["React", "JavaScript", "Local Storage", "CSS3"],
    live: "https://davnspvtltd.github.io/menstrualuna-app/",
    featured: true,
  },
  {
    title: "ChessMate Pro",
    description: "Interactive chess game platform with AI-powered opponent and real-time multiplayer gameplay capabilities.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "React", "TypeScript", "Game AI"],
    live: "https://github.com/DEVASANJAY001/chessmate-pro",
    featured: false,
  },
  {
    title: "Algorithm Learning Platform",
    description: "Comprehensive platform for learning and practicing algorithms with visualizations and explanations.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Python", "JavaScript", "Algorithms"],
    live: "https://github.com/DEVASANJAY001/algo",
    featured: false,
  },
  {
    title: "Q1 Digital Attendance System",
    description: "Automated attendance tracking system with real-time updates and comprehensive reporting dashboard.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MySQL", "Real-time"],
    live: "https://github.com/DEVASANJAY001/q1digital-attendance",
    featured: false,
  },
  {
    title: "Parts Detection System",
    description: "Computer vision-based system for detecting and classifying industrial parts using machine learning.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "OpenCV", "Machine Learning", "TensorFlow"],
    live: "https://github.com/DEVASANJAY001/q1parts-detection",
    featured: false,
  },
  {
    title: "Maha College Records",
    description: "Educational records management system for colleges with student data and academic tracking features.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    live: "https://github.com/DEVASANJAY001/mahaclgrecords",
    featured: false,
  },
  {
    title: "Q1 QA Matrix V2",
    description: "Quality assurance testing matrix and tracking system with comprehensive test case management.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "TypeScript", "Node.js", "Testing"],
    live: "https://github.com/DEVASANJAY001/q1qamatrixv2",
    featured: false,
  },
  {
    title: "Q1 Horn Ingress",
    description: "Advanced ingress control system with signal processing and real-time monitoring capabilities.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "Signal Processing", "Real-time", "IoT"],
    live: "https://github.com/DEVASANJAY001/q1horn-ingress",
    featured: false,
  },
  {
    title: "Interactive Data Visualization",
    description: "Dynamic charting and visualization library for creating interactive, responsive data displays.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "D3.js", "Canvas", "TypeScript"],
    live: "https://github.com/DEVASANJAY001/chart",
    featured: false,
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 sm:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent uppercase tracking-tighter">
            Selected Works
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-8" />
          <p className="text-white/50 text-xl font-light max-w-2xl mx-auto px-4 tracking-tight">
            A collection of digital experiences crafted with precision and purpose.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16 sm:mb-24"
        >
          <div className="glass p-2 rounded-[2rem] flex gap-1 border-white/5">
            {["all", "featured", "others"].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-8 sm:px-12 py-3.5 rounded-[1.5rem] transition-all duration-500 capitalize text-sm sm:text-base font-bold tracking-tight ${filter === filterType
                  ? "bg-white text-black shadow-2xl"
                  : "text-white/40 hover:text-white hover:bg-white/5"
                  }`}
              >
                {filterType}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group list-none"
            >
              <div className="relative h-full rounded-[3rem] border border-white/5 p-2 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(255,255,255,0.05)]">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="relative h-full flex flex-col glass rounded-[2.5rem] overflow-hidden bg-background/50">
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                    {/* Project Links Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-6 bg-white text-black rounded-full shadow-2xl"
                      >
                        <ExternalLink size={24} />
                      </motion.a>
                    </div>

                    {project.featured && (
                      <div className="absolute top-6 right-6 bg-white text-black text-[10px] font-black px-4 py-2 rounded-full shadow-2xl tracking-widest uppercase">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-8 sm:p-10">
                    <h3 className="text-2xl sm:text-3xl font-black mb-4 text-white tracking-tighter">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-base mb-8 line-clamp-2 leading-relaxed font-light">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[10px] font-bold bg-white/5 text-white/40 px-4 py-2 rounded-xl border border-white/5 group-hover:text-white group-hover:border-white/20 transition-all uppercase tracking-widest">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-6 pt-4 border-t border-white/5">
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-2 p-0 h-auto hover:bg-transparent"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="uppercase tracking-widest text-[10px] sm:text-xs font-black text-white/40 hover:text-white transition-all group/link"
                        >
                          <ExternalLink size={14} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                          Launch Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
