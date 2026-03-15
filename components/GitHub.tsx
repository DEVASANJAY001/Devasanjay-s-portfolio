"use client"

import { motion } from "framer-motion"
import { Github, Star, GitFork, ExternalLink } from "lucide-react"

const repositories = [
  {
    name: "chessmate-pro",
    description: "Interactive chess game with AI opponent and multiplayer gameplay",
    language: "TypeScript",
    stars: 24,
    forks: 8,
    url: "https://github.com/DEVASANJAY001/chessmate-pro",
  },
  {
    name: "q1parts-detection",
    description: "Computer vision system for detecting and classifying industrial parts",
    language: "Python",
    stars: 18,
    forks: 5,
    url: "https://github.com/DEVASANJAY001/q1parts-detection",
  },
  {
    name: "algo",
    description: "Algorithm learning platform with visualizations and explanations",
    language: "JavaScript",
    stars: 15,
    forks: 4,
    url: "https://github.com/DEVASANJAY001/algo",
  },
  {
    name: "q1digital-attendance",
    description: "Automated attendance tracking system with reporting dashboard",
    language: "JavaScript",
    stars: 12,
    forks: 3,
    url: "https://github.com/DEVASANJAY001/q1digital-attendance",
  },
  {
    name: "mahaclgrecords",
    description: "Educational records management system for colleges",
    language: "JavaScript",
    stars: 20,
    forks: 6,
    url: "https://github.com/DEVASANJAY001/mahaclgrecords",
  },
  {
    name: "chart",
    description: "Interactive data visualization and charting library",
    language: "TypeScript",
    stars: 16,
    forks: 7,
    url: "https://github.com/DEVASANJAY001/chart",
  },
]

const githubStats = [
  { label: "Public Repositories", value: "225+" },
  { label: "Total Contributions", value: "65%" },
  { label: "Active Projects", value: "10+" },
  { label: "Development Focus", value: "Full Stack" },
]

// Generate realistic contribution data with bright colors and gaps
const generateRealisticContributionData = () => {
  const data = []
  const today = new Date()
  const startDate = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())

  // Create a seed for consistent "random" data based on date
  const createSeed = (date: Date) => {
    return date.getFullYear() * 10000 + date.getMonth() * 100 + date.getDate()
  }

  // Seeded random function for consistent results
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000
    return x - Math.floor(x)
  }

  for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
    const currentDate = new Date(d)
    const seed = createSeed(currentDate)

    // 70% chance of having contributions (30% will be empty)
    const random = seededRandom(seed)
    let contributions = 0

    if (random < 0.7) {
      // Distribution for contribution counts
      const contribRandom = seededRandom(seed + 1)
      if (contribRandom < 0.3) contributions = 1
      else if (contribRandom < 0.5) contributions = 2
      else if (contribRandom < 0.7) contributions = 3
      else if (contribRandom < 0.85) contributions = 4
      else contributions = Math.floor(seededRandom(seed + 2) * 6) + 5 // 5-10 contributions
    }

    const level = contributions === 0 ? 0 : contributions <= 1 ? 1 : contributions <= 3 ? 2 : contributions <= 6 ? 3 : 4

    data.push({
      date: new Date(currentDate),
      contributions,
      level,
    })
  }

  return data
}

const getContributionColor = (level: number) => {
  switch (level) {
    case 0:
      return "bg-gray-800"
    case 1:
      return "bg-green-600"
    case 2:
      return "bg-green-500"
    case 3:
      return "bg-green-400"
    case 4:
      return "bg-green-300"
    default:
      return "bg-gray-800"
  }
}

export default function GitHub() {
  const contributionData = generateRealisticContributionData()

  // Calculate total contributions
  const totalContributions = contributionData.reduce((sum, day) => sum + day.contributions, 0)

  // Group contributions by week (starting from Sunday)
  const weeks = []
  const startDate = contributionData[0].date
  const startSunday = new Date(startDate)
  startSunday.setDate(startDate.getDate() - startDate.getDay())

  // Create 53 weeks of data
  for (let weekIndex = 0; weekIndex < 53; weekIndex++) {
    const week = []
    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      const currentDate = new Date(startSunday)
      currentDate.setDate(startSunday.getDate() + weekIndex * 7 + dayIndex)

      const dayData = contributionData.find((d) => d.date.toDateString() === currentDate.toDateString())

      week.push(
        dayData || {
          date: currentDate,
          contributions: 0,
          level: 0,
        },
      )
    }
    weeks.push(week)
  }

  return (
    <section id="github" className="py-24 sm:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent uppercase tracking-tighter">
            Open Source
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24"
        >
          {githubStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="glass p-8 rounded-[2rem] text-center border-white/5 transition-all duration-500 hover:bg-white/5 shadow-2xl"
            >
              <div className="text-3xl sm:text-4xl font-black mb-2 text-white tracking-tighter">{stat.value}</div>
              <div className="text-white/40 text-[10px] font-black uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16 sm:mb-24"
        >
          <motion.a
            href="https://github.com/DEVASANJAY001"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="glass flex items-center justify-center gap-4 rounded-2xl px-8 py-4 border-white/5 hover:border-white/20 transition-all group"
          >
            <Github size={20} className="text-white/60 group-hover:text-white transition-colors" />
            <span className="text-sm font-black text-white/60 uppercase tracking-widest group-hover:text-white">@DEVASANJAY001</span>
            <ExternalLink size={14} className="text-white/20 group-hover:text-white" />
          </motion.a>
        </motion.div>

        {/* Pinned Repositories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mb-16 sm:mb-24">
          {repositories.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group glass p-8 rounded-[2.5rem] border-white/5 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(255,255,255,0.05)] shadow-black shadow-none"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    <Github size={24} className="text-black" />
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tighter group-hover:text-white transition-colors">
                    {repo.name}
                  </h3>
                </div>
                <motion.a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white/20 hover:text-white transition-colors p-2"
                >
                  <ExternalLink size={18} />
                </motion.a>
              </div>

              <p className="text-white/40 text-sm mb-6 line-clamp-2 font-light leading-relaxed">{repo.description}</p>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/40">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star size={12} className="group-hover:text-white transition-colors" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GitFork size={12} className="group-hover:text-white transition-colors" />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass p-12 sm:p-16 rounded-[3.5rem] border-white/5 shadow-2xl"
        >
          <h3 className="text-2xl sm:text-3xl font-black mb-12 text-center text-white uppercase tracking-tighter">Contribution Activity</h3>

          {/* Contribution Calendar */}
          <div className="overflow-x-auto pb-4">
            <div className="min-w-[800px] mx-auto">
              <div className="flex justify-center">
                <div className="flex gap-1.5">
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1.5">
                      {week.map((day, dayIndex) => (
                        <motion.div
                          key={`${weekIndex}-${dayIndex}`}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: weekIndex * 0.002 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.4, zIndex: 10 }}
                          className={`w-[13px] h-[13px] rounded-[3px] cursor-pointer transition-all duration-300 ${day.level === 0 ? "bg-white/5" :
                            day.level === 1 ? "bg-white/20" :
                              day.level === 2 ? "bg-white/40" :
                                day.level === 3 ? "bg-white/70" : "bg-white"
                            }`}
                          title={`${day.contributions} contributions on ${day.date.toLocaleDateString()}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Legend and Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-8 border-t border-white/5 pt-10">
            <p className="text-white font-black uppercase tracking-widest text-sm">
              <span className="text-white/40">Total activity:</span> <span className="text-white">1,500+</span> <span className="text-white/40">Units</span>
            </p>

            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/40">
              <span>Less</span>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-white/5 rounded-[2px]"></div>
                <div className="w-3 h-3 bg-white/20 rounded-[2px]"></div>
                <div className="w-3 h-3 bg-white/40 rounded-[2px]"></div>
                <div className="w-3 h-3 bg-white/70 rounded-[2px]"></div>
                <div className="w-3 h-3 bg-white rounded-[2px]"></div>
              </div>
              <span>More</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
