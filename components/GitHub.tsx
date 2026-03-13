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
    <section id="github" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            GitHub Showcase
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Explore my open source contributions and projects on GitHub.
          </p>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {githubStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-green-400">{stat.value}</div>
              <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          <motion.a
            href="https://github.com/DEVASANJAY001"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 bg-gray-800/50 border border-gray-700 rounded-lg px-4 sm:px-6 py-3 hover:bg-gray-700/50 transition-all duration-300"
          >
            <Github size={18} />
            <span className="text-sm sm:text-base">@DEVASANJAY001 (225+ repos)</span>
            <ExternalLink size={14} className="text-gray-400" />
          </motion.a>

          <motion.a
            href="https://leetcode.com/u/devasanjay/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 bg-orange-800/50 border border-orange-700 rounded-lg px-4 sm:px-6 py-3 hover:bg-orange-700/50 transition-all duration-300"
          >
            <span className="text-base">⚡</span>
            <span className="text-sm sm:text-base">LeetCode Profile</span>
            <ExternalLink size={14} className="text-gray-400" />
          </motion.a>
        </motion.div>

        {/* Pinned Repositories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {repositories.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <Github size={18} className="text-gray-400" />
                  <h3 className="font-semibold group-hover:text-blue-400 transition-colors text-sm sm:text-base">
                    {repo.name}
                  </h3>
                </div>
                <motion.a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={14} />
                </motion.a>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{repo.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={12} />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={12} />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">Contribution Activity</h3>

          {/* Contribution Calendar */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px] mx-auto">
              {/* Calendar Grid - No labels */}
              <div className="flex justify-center">
                {/* Contribution squares */}
                <div className="flex gap-1">
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {week.map((day, dayIndex) => (
                        <motion.div
                          key={`${weekIndex}-${dayIndex}`}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: weekIndex * 0.005 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.2 }}
                          className={`w-[11px] h-[11px] rounded-sm cursor-pointer transition-all duration-200 ${getContributionColor(day.level)}`}
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
          <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
            <p className="text-gray-400 text-sm">
              <span className="font-semibold text-green-400">150+</span> contributions
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
              </div>
              <span>More</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
