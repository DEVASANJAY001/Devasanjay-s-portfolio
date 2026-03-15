"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/neon-button"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full Stack Developer | AI Engineer Intern @ Stellantis"

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 bg-transparent">
      <div className="container mx-auto text-center relative z-10 max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="glass p-8 sm:p-16 rounded-[2.5rem] border-white/5 shadow-2xl"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-8 leading-tight tracking-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm{" "}
            <span className="bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
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
              className="inline-block w-0.5 h-[1.1em] bg-white ml-1 align-middle"
            />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Button
              asChild
              variant="solid"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a
                href="https://drive.google.com/file/d/1hSaidr_c8uo-nfdnB_OAEZqlzxxIot7u/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </Button>

            <HoverBorderGradient
              as="a"
              href="#contact"
              className="w-full sm:w-auto"
            >
              Hire Me
            </HoverBorderGradient>
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
