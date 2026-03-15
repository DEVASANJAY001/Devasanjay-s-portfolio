"use client"

import { motion } from "framer-motion"
import { Globe, Server, Terminal, Code } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

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
    <section id="skills" className="py-24 sm:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent uppercase tracking-tighter">
            Skills & Stack
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-24 sm:mb-32">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group list-none"
            >
              <div className="relative h-full rounded-[2.5rem] border border-white/5 p-1 transition-all duration-500">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="relative h-full glass p-8 rounded-[2.25rem] transition-all duration-500 group-hover:bg-white/5 bg-background/50">
                  <div
                    className={`w-16 h-16 bg-white rounded-[1.25rem] flex items-center justify-center mb-8 shadow-2xl shadow-white/10 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <category.icon size={32} className="text-black" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white tracking-tight">{category.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)", color: "#fff" }}
                        className="text-white/40 text-[10px] sm:text-xs bg-white/5 border border-white/5 rounded-xl px-4 py-2 hover:border-white/20 transition-all cursor-default font-black uppercase tracking-widest shadow-lg shadow-black/20"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Programming Languages Progress */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass p-8 sm:p-16 rounded-[3.5rem] max-w-5xl mx-auto shadow-2xl border-white/5"
        >
          <h3 className="text-3xl sm:text-4xl font-black mb-16 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent uppercase tracking-tighter">
            Technical Proficiency
          </h3>

          <div className="space-y-10 sm:space-y-12">
            {programmingLanguages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-white tracking-tight text-lg sm:text-xl uppercase">{lang.name}</span>
                  <span className="text-sm font-black text-white/40 tracking-widest">{lang.level}%</span>
                </div>

                <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden border border-white/5 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-white rounded-full relative"
                  >
                    <motion.div
                      animate={{
                        opacity: [0.1, 0.4, 0.1],
                        x: ["-100%", "200%"]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent w-32"
                    />
                    <div className="absolute inset-0 shadow-[0_0_20px_rgba(255,255,255,0.3)] rounded-full" />
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
