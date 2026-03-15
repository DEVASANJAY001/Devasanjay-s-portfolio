"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Star, Target, Code, Rocket } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

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
    <section id="achievements" className="py-24 sm:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent uppercase tracking-tighter">
            Milestones
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24 sm:mb-32"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="glass p-8 rounded-[2.5rem] text-center border-white/5 shadow-2xl transition-all duration-500 hover:bg-white/5"
            >
              <div className="text-4xl sm:text-5xl font-black mb-4 text-white tracking-tighter">{stat.value}</div>
              <div className="text-white/40 text-xs font-black uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
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
                <div className="relative h-full flex flex-col glass p-10 rounded-[2.5rem] overflow-hidden bg-background/50">
                  {/* Year Badge */}
                  <div className="absolute top-6 right-6 text-[10px] font-black bg-white/5 text-white/40 px-4 py-2 rounded-full border border-white/5 uppercase tracking-widest group-hover:text-white group-hover:border-white/20 transition-all">
                    {achievement.year}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  >
                    <achievement.icon size={28} className="text-black" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl sm:text-3xl font-black mb-4 text-white tracking-tighter leading-tight">
                    {achievement.title}
                  </h3>
                  <p className="text-white/40 text-base leading-relaxed font-light">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 sm:mt-32 text-center"
        >
          <h3 className="text-2xl font-black mb-10 text-white uppercase tracking-tighter">Coding Profiles</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.a
              href="https://leetcode.com/u/devasanjay/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="glass flex items-center justify-center gap-4 rounded-2xl px-8 py-4 border-white/5 hover:border-white/20 transition-all group"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code size={20} className="text-black" />
              </div>
              <span className="text-sm font-black text-white/60 uppercase tracking-widest group-hover:text-white transition-colors">LeetCode</span>
            </motion.a>

            <motion.a
              href="https://www.hackerrank.com/profile/devasanjaynatar1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="glass flex items-center justify-center gap-4 rounded-2xl px-8 py-4 border-white/5 hover:border-white/20 transition-all group"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Star size={20} className="text-black" />
              </div>
              <span className="text-sm font-black text-white/60 uppercase tracking-widest group-hover:text-white transition-colors">HackerRank</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
