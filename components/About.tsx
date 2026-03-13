"use client"

import { motion } from "framer-motion"
import { Code, Rocket, Heart } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative flex justify-center">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 overflow-hidden">
                <img
                  src="/images/devasanjay-profile.jpg"
                  alt="Devasanjay N"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm Devasanjay N, a passionate Computer Science student and startup founder driven by innovation. Currently working as an AI and Computational Intelligence Engineer at Stellantis, I've built a strong foundation in full-stack development, AI/ML engineering, and UI/UX design using modern technologies like React, Next.js, TypeScript, Tailwind CSS, Framer Motion, and Canvas APIs.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              My expertise spans designing interactive portfolio apps with hero animations and scroll progress indicators, building AI-integrated tools for visual generation and dashboards, and developing intuitive user interfaces with polished micro-interactions. I co-founded DAVNS INDUSTRIES to deliver AI-powered solutions, achieved 2nd place in IBM Z Datathon 2024, and led product strategy, prototyping, and early-stage UX/UI design. I'm passionate about creating scalable, elegant solutions that solve real-world problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 sm:mt-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-6 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
              >
                <Code className="mx-auto mb-3 text-blue-400" size={32} />
                <h3 className="font-bold text-base sm:text-lg mb-1">Clean Code</h3>
                <p className="text-xs sm:text-sm text-gray-400">Maintainable & Scalable</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-6 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
              >
                <Rocket className="mx-auto mb-3 text-purple-400" size={32} />
                <h3 className="font-bold text-base sm:text-lg mb-1">Innovation</h3>
                <p className="text-xs sm:text-sm text-gray-400">Future-Proof Solutions</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-6 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
              >
                <Heart className="mx-auto mb-3 text-pink-400" size={32} />
                <h3 className="font-bold text-base sm:text-lg mb-1">Passion</h3>
                <p className="text-xs sm:text-sm text-gray-400">Dedication to Craft</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
