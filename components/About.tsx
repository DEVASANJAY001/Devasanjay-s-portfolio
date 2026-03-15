"use client"

import { motion } from "framer-motion"
import { Code, Rocket, Heart } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent uppercase tracking-tighter">
            About Me
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/devasanjay-profile.jpg"
                  alt="Devasanjay N"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-light">
              I'm Devasanjay N, a passionate Computer Science student and startup founder driven by innovation. Currently working as an AI and Computational Intelligence Engineer at Stellantis, I've built a strong foundation in full-stack development, AI/ML engineering, and UI/UX design.
            </p>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-light">
              My expertise spans designing interactive apps with premium animations, building AI-integrated tools, and developing intuitive user interfaces. Co-founded DAVNS INDUSTRIES to deliver AI-powered solutions. Achieving 2nd place in IBM Z Datathon 2024.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <motion.div
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl text-center transition-all duration-300 group"
              >
                <Code className="mx-auto mb-4 text-white group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-bold text-lg mb-2 text-white">Clean Code</h3>
                <p className="text-sm text-white/40 font-medium uppercase tracking-widest">Scalable</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl text-center transition-all duration-300 group"
              >
                <Rocket className="mx-auto mb-4 text-white group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-bold text-lg mb-2 text-white">Innovation</h3>
                <p className="text-sm text-white/40 font-medium uppercase tracking-widest">Future-Proof</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl text-center transition-all duration-300 group"
              >
                <Heart className="mx-auto mb-4 text-white group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-bold text-lg mb-2 text-white">Passion</h3>
                <p className="text-sm text-white/40 font-medium uppercase tracking-widest">Dedication</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
