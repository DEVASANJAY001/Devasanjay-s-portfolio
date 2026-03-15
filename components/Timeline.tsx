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
    <section id="timeline" className="py-24 sm:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent uppercase tracking-tighter">
            Journey
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-20 md:mb-32 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Content */}
              <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass p-8 sm:p-10 rounded-[2.5rem] border-white/5 transition-all duration-500 hover:shadow-2xl shadow-black shadow-none group"
                >
                  <div className="text-white/40 font-black text-xs sm:text-sm mb-4 uppercase tracking-widest">{item.year}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white tracking-tight group-hover:text-white transition-colors">{item.title}</h3>
                  <div className="text-white/60 font-bold mb-4 uppercase tracking-tighter text-sm">{item.company}</div>
                  <p className="text-white/40 text-sm leading-relaxed font-light">{item.description}</p>
                </motion.div>
              </div>

              {/* Icon */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-2xl flex items-center justify-center border-4 border-black shadow-2xl z-10">
                <item.icon size={28} className="text-black" />
              </div>

              {/* Spacer for desktop */}
              <div className="hidden md:block md:w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
