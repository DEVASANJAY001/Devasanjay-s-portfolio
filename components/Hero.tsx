"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full Stack Developer | AI Engineer @ Stellantis"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 80) // Slightly faster for better feel

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Galaxy background with nebula */}
      <div className="absolute inset-0 nebula-glow opacity-60"></div>

      {/* Cosmic gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10 max-w-4xl pt-20">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-8 leading-tight tracking-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Deva Sanjay
            </span>{" "}
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
              className="inline-block origin-bottom-right"
            >
              👋
            </motion.span>
          </motion.h1>

          <motion.div
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8 sm:mb-12 font-medium min-h-[1.5em] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {text}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block w-0.5 h-[1.1em] bg-cyan-400 ml-1 align-middle"
            />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1hSaidr_c8uo-nfdnB_OAEZqlzxxIot7u/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 15px 30px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-2xl transition-all duration-300 text-base text-white"
            >
              View Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(168, 85, 247, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 border-2 border-white/10 rounded-2xl font-bold hover:border-purple-500/50 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-3 text-base text-white"
            >
              Hire Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ArrowDown className="text-white/60" size={20} />
        </motion.div>
      </div>
    </section>
  )
}
