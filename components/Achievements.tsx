"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Star, Target, Code, Rocket } from "lucide-react"

const achievements = [
  {
    title: "IBM Z Datathon - 2nd Place",
    description: "Achieved 2nd place in IBM Z Datathon 2024, demonstrating expertise in mainframe technologies and data analytics",
    icon: Trophy,
    color: "from-yellow-500 to-orange-600",
    year: "2024",
  },
  {
    title: "Scrum Master Certification",
    description: "Scrum Master Certification: Scrum Methodologies by LearnQuest - Agile project management",
    icon: Award,
    color: "from-blue-500 to-blue-600",
    year: "2025",
  },
  {
    title: "Cloud Computing Certified",
    description: "Introduction to Cloud Computing certification from Coursera - Cloud infrastructure and services",
    icon: Award,
    color: "from-green-500 to-emerald-600",
    year: "2025",
  },
  {
    title: "DevOps & Agile Training",
    description: "Introduction to DevOps and Agile Development & Scrum certifications from IBM",
    icon: Award,
    color: "from-purple-500 to-violet-600",
    year: "2025",
  },
  {
    title: "Cybersecurity Fundamentals",
    description: "Introduction to Cybersecurity Careers certification - Security best practices and threat prevention",
    icon: Award,
    color: "from-red-500 to-pink-600",
    year: "2025",
  },
  {
    title: "IBM Z Xplore Certified",
    description: "IBM Z Xplore - Concepts certification - Mainframe technologies and platforms",
    icon: Award,
    color: "from-indigo-500 to-blue-600",
    year: "2024",
  },
]

const stats = [
  { label: "Projects Completed", value: "8+", color: "text-blue-400" },
  { label: "Certifications", value: "6+", color: "text-orange-400" },
  { label: "GitHub Repositories", value: "225+", color: "text-green-400" },
  { label: "Years of Experience", value: "1.5+", color: "text-purple-400" },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-12 sm:py-16 lg:py-20 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Recognition and milestones that mark my journey in technology and development.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 transition-all duration-500 shadow-xl"
            >
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-3 ${stat.color} tracking-tight`}>{stat.value}</div>
              <div className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 relative overflow-hidden shadow-2xl"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Year Badge */}
              <div className="absolute top-4 right-4 text-[10px] font-bold bg-white/10 text-gray-300 px-3 py-1.5 rounded-full border border-white/5 uppercase tracking-tighter">
                {achievement.year}
              </div>

              {/* Icon */}
              <div
                className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500`}
              >
                <achievement.icon size={26} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Coding Profiles</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <motion.a
              href="https://leetcode.com/u/devasanjay/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-orange-500/10 border border-orange-500/20 rounded-lg px-4 sm:px-6 py-3 hover:bg-orange-500/20 transition-all duration-300"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Code size={14} className="text-white" />
              </div>
              <span className="text-sm sm:text-base">LeetCode Profile</span>
            </motion.a>

            <motion.a
              href="https://www.hackerrank.com/profile/devasanjaynatar1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-green-500/10 border border-green-500/20 rounded-lg px-4 sm:px-6 py-3 hover:bg-green-500/20 transition-all duration-300"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Star size={14} className="text-white" />
              </div>
              <span className="text-sm sm:text-base">HackerRank Profile</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
