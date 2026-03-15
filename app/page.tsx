"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Timeline from "@/components/Timeline"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Achievements from "@/components/Achievements"
import GitHub from "@/components/GitHub"
import Resume from "@/components/Resume"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import BackgroundShapes from "@/components/BackgroundShapes"
import { ThemeProvider } from "@/components/ThemeProvider"
import { useScroll, useTransform, motion, useSpring } from "framer-motion"
import { useRef } from "react"

function ThreeDAnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 35,
    restDelta: 0.0001
  })

  // 3D transformations - Optimized for better click accuracy
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [10, 0, -10])
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.96, 1, 0.96])
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0])
  const y = useTransform(smoothProgress, [0, 0.5, 1], [40, 0, -40])
  const z = useTransform(smoothProgress, [0, 0.5, 1], [-20, 0, -20])

  return (
    <div className="relative w-full group/section">
      {/* Dynamic Background Glow - Optimized for performance and clickability */}
      <motion.div
        style={{
          opacity: useTransform(smoothProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]),
          scale: useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]),
          background: useTransform(
            smoothProgress,
            [0, 0.5, 1],
            [
              "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)"
            ]
          )
        }}
        className="absolute inset-0 z-0 blur-[100px] pointer-events-none"
      />

      <motion.div
        ref={ref}
        style={{
          rotateX,
          scale,
          opacity,
          y,
          z,
          perspective: "2000px",
          transformStyle: "preserve-3d",
          willChange: "transform, opacity"
        }}
        className="w-full relative z-[1] pointer-events-auto"
      >
        {children}
      </motion.div>
    </div>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white transition-all duration-300 overflow-x-hidden">
        <Header />
        <main className="relative perspective">
          <BackgroundShapes />
          <div className="relative z-10 w-full">
            <ThreeDAnimatedSection><Hero /></ThreeDAnimatedSection>
            <ThreeDAnimatedSection><About /></ThreeDAnimatedSection>
            <ThreeDAnimatedSection><Timeline /></ThreeDAnimatedSection>
            <ThreeDAnimatedSection><Skills /></ThreeDAnimatedSection>
            <ThreeDAnimatedSection><Projects /></ThreeDAnimatedSection>
            <ThreeDAnimatedSection><Achievements /></ThreeDAnimatedSection>
            <ThreeDAnimatedSection><GitHub /></ThreeDAnimatedSection>
            <ThreeDAnimatedSection><Resume /></ThreeDAnimatedSection>
            <ThreeDAnimatedSection><Contact /></ThreeDAnimatedSection>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
