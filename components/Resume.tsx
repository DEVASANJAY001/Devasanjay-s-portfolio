"use client"

import { motion } from "framer-motion"
import { Download, Eye, Mail, Phone, MapPin } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-12 sm:py-16 lg:py-20 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            View my resume or get in touch to discuss opportunities.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Resume Preview */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Resume Preview</h3>

              {/* Mock Resume Content */}
              <div className="space-y-4 sm:space-y-6 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">DEVASANJAY NATARAJAN</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">Full Stack Developer | Startup Founder</p>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-400 mb-2 text-sm">CONTACT</h4>
                  <div className="space-y-1 text-gray-300 text-xs">
                    <div className="flex items-center gap-2">
                      <Mail size={12} />
                      <span>devasanjaynatarajan@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={12} />
                      <span>+91 7200060295</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} />
                      <span>Chennai, Tamil Nadu, India</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-400 mb-2 text-sm">EXPERIENCE</h4>
                  <div className="space-y-2 text-gray-300 text-xs">
                    <div>
                      <p className="font-medium">Founder at DAVNS-INDUSTRIES</p>
                      <p className="text-gray-400">2023 - Present</p>
                      <p className="text-gray-400 text-xs mt-1">AI-powered startup focused on innovative web services and real-world problem solving.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-400 mb-2 text-sm">EDUCATION</h4>
                  <div className="space-y-2 text-gray-300 text-xs">
                    <div>
                      <p className="font-medium">B-Tech Computer Science Engineering</p>
                      <p className="text-gray-400">Saveetha Engineering College</p>
                      <p className="text-gray-400">2023 - 2027</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-400 mb-2 text-sm">SKILLS</h4>
                  <div className="flex flex-wrap gap-1">
                    {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "AI/ML", "Python"].map((skill) => (
                      <span key={skill} className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Download Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Get My Resume</h3>

                <div className="space-y-3 sm:space-y-4">
                  <motion.a
                    href="https://drive.google.com/file/d/1hSaidr_c8uo-nfdnB_OAEZqlzxxIot7u/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg px-4 sm:px-6 py-3 sm:py-4 font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base text-white"
                  >
                    <Eye size={18} />
                    View PDF Resume
                  </motion.a>
                </div>

                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg border border-purple-500/20">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Highlights</h4>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-300">
                    <p><span className="text-cyan-400">2nd Place</span> - IBM Z Datathon 2024</p>
                    <p><span className="text-purple-400">1st Place</span> - AlgoInception Nov 2024</p>
                    <p><span className="text-purple-400">6 Certifications</span> in AI, Cloud & DevOps</p>
                  </div>
                </div>
              </div>

              {/* Hire Me Section */}
              <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Let's Connect</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  Full Stack Developer | Founder | AI Enthusiast - Ready to discuss opportunities.
                </p>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg px-4 sm:px-6 py-2 sm:py-3 font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base text-white"
                >
                  <Mail size={18} />
                  Get in Touch
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
