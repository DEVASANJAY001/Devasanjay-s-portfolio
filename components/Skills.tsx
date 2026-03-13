"use client"

import { motion } from "framer-motion"
import { Globe, Server, Terminal, Code } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend & Deployment",
    icon: Server,
    skills: ["Node.js", "Server-side Rendering", "API Design", "Vercel", "Supabase"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "AI & Data",
    icon: Terminal,
    skills: ["AI Chatbots", "Machine Learning", "Data Dashboards", "Python", "Canvas APIs"],
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Design & DevOps",
    icon: Globe,
    skills: ["UI/UX Design", "Cloud Computing", "CI/CD Pipelines", "Responsive Design", "Git"],
    color: "from-orange-500 to-red-500",
  },
]

const programmingLanguages = [
  { name: "React & Next.js", level: 90, color: "bg-blue-500" },
  { name: "TypeScript & JavaScript", level: 88, color: "bg-yellow-500" },
  { name: "AI/ML Engineering", level: 85, color: "bg-purple-500" },
  { name: "Full Stack Development", level: 85, color: "bg-green-500" },
  { name: "UI/UX Design", level: 80, color: "bg-pink-500" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/5 group"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500`}
              >
                <category.icon size={28} className="text-white" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white group-hover:text-cyan-400 transition-colors">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="text-gray-400 text-xs sm:text-sm bg-white/5 border border-white/5 rounded-xl px-4 py-2 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Programming Languages Progress */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12 max-w-4xl mx-auto shadow-2xl overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>

          <h3 className="text-2xl sm:text-3xl font-black mb-10 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Technical Proficiency
          </h3>

          <div className="space-y-6 sm:space-y-8 relative z-10">
            {programmingLanguages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-gray-200 tracking-wide text-sm sm:text-base">{lang.name}</span>
                  <span className="text-sm font-black text-cyan-400">{lang.level}%</span>
                </div>

                <div className="w-full bg-slate-900 border border-white/5 rounded-full h-3 sm:h-4 overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    transition={{ duration: 1.5, ease: "circOut", delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-full ${lang.color} rounded-full relative shadow-lg shadow-black/20`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
