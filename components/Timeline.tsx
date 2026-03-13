"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Award } from "lucide-react"

const timelineData = [
  {
    year: "Jan 2026",
    title: "AI and Computational Intelligence Engineer",
    company: "Stellantis",
    description:
      "Currently working as an AI and Computational Intelligence Engineer, developing AI-powered solutions and computational systems.",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2024",
    title: "Founder & CEO",
    company: "DAVNS INDUSTRIES",
    description:
      "Co-founded DAVNS, an AI-powered technology startup focused on innovative solutions. Led product strategy, prototyping, and early-stage UX/UI design.",
    icon: Briefcase,
    type: "work",
  },
  {
    year: "2024",
    title: "IBM Z Datathon - 2nd Place",
    company: "IBM Z Xplore",
    description:
      "Achieved 2nd place in IBM Z Datathon 2024, showcasing expertise in mainframe technologies and data analytics.",
    icon: Award,
    type: "achievement",
  },
  {
    year: "2023-2027",
    title: "Bachelor of Engineering - Computer Science",
    company: "Saveetha Engineering College",
    description:
      "Pursuing B.E. in Computer Science and Engineering with focus on AI/ML, web development, and modern technologies.",
    icon: GraduationCap,
    type: "education",
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-blue-400 font-bold text-lg mb-2">{item.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <div className="text-purple-400 font-medium mb-3">{item.company}</div>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              </div>

              {/* Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center border-4 border-slate-900">
                <item.icon size={20} className="text-white" />
              </div>

              {/* Spacer */}
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
