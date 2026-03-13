"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useState } from "react"

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
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10 sm:mb-16"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 flex gap-1">
            {["all", "featured", "others"].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-5 sm:px-8 py-2.5 rounded-xl transition-all duration-500 capitalize text-sm sm:text-base font-semibold ${filter === filterType
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {filterType}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                {/* Project Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-white/20 transition-colors text-white shadow-xl"
                  >
                    <ExternalLink size={22} />
                  </motion.a>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/10 tracking-wider">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-6 line-clamp-2 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] sm:text-xs font-medium bg-white/5 text-gray-300 px-3 py-1.5 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] sm:text-xs font-medium bg-white/5 text-gray-400 px-3 py-1.5 rounded-lg">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-6 pt-2 border-t border-white/5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-cyan-400 transition-colors group/link"
                  >
                    <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    Visit Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
