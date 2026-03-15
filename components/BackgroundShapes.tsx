"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function BackgroundShapes() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* High-Intensity RGB Blobs */}
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -100, 50, 0],
                    rotate: [0, 90, 180, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-cyan-500/15 blur-[120px] rounded-full will-change-transform"
            />

            <motion.div
                animate={{
                    x: [0, -100, 120, 0],
                    y: [0, 150, -50, 0],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-[-15%] right-[-10%] w-[80vw] h-[80vw] bg-purple-500/15 blur-[140px] rounded-full will-change-transform"
            />

            {/* 3D Wireframe Shapes */}
            <div className="absolute inset-0 perspective-[1500px]">
                <motion.div
                    animate={{
                        rotateX: [0, 360],
                        rotateY: [0, 360],
                        y: [-20, 20, -20],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-[20%] right-[15%] w-48 h-48 border border-white/10 rounded-xl flex items-center justify-center opacity-20 will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <div className="absolute inset-0 border border-white/10 rounded-xl" style={{ transform: "translateZ(100px)" }} />
                    <div className="absolute inset-0 border border-cyan-500/30 rounded-xl" style={{ transform: "translateZ(-100px)" }} />
                </motion.div>

                <motion.div
                    animate={{
                        rotateX: [360, 0],
                        rotateZ: [0, 360],
                        x: [0, 50, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute bottom-[30%] left-[10%] w-64 h-64 border border-white/5 rounded-full opacity-10 will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <div className="absolute inset-0 border border-purple-500/20 rounded-full" style={{ transform: "rotateY(90deg)" }} />
                </motion.div>
            </div>

            {/* Intense RGB Sparkles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        opacity: [0.1, 0.8, 0.1],
                        scale: [1, 2.5, 1],
                        z: [0, 100, 0]
                    }}
                    transition={{
                        duration: 3 + i % 5,
                        repeat: Infinity,
                        delay: i * 0.2,
                    }}
                    className={`absolute w-1.5 h-1.5 rounded-full ${i % 3 === 0 ? "bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" :
                        i % 3 === 1 ? "bg-purple-400 shadow-[0_0_20px_rgba(192,132,252,0.8)]" :
                            "bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                        } will-change-transform`}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                />
            ))}

            {/* Floating Light Beams - More visible */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={`beam-${i}`}
                    animate={{
                        x: [-200, 200],
                        opacity: [0, 0.4, 0],
                    }}
                    transition={{
                        duration: 12 + i * 4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 1.5,
                    }}
                    className={`absolute w-[60vw] h-px bg-gradient-to-r from-transparent ${i % 2 === 0 ? "via-cyan-500/40" : "via-purple-500/40"} to-transparent`}
                    style={{
                        top: `${i * 20}%`,
                        left: "-30%",
                        transform: "rotate(-35deg)",
                    }}
                />
            ))}

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

            {/* Defined RGB Circle Shapes */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={`circle-${i}`}
                    animate={{
                        x: [0, i % 2 === 0 ? 100 : -100, 0],
                        y: [0, i < 2 ? 100 : -100, 0],
                    }}
                    transition={{
                        duration: 25 + i * 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className={`absolute w-96 h-96 rounded-full blur-[100px] opacity-[0.15] ${i === 0 ? "bg-cyan-500 top-[10%] left-[10%]" :
                            i === 1 ? "bg-purple-500 top-[60%] right-[10%]" :
                                i === 2 ? "bg-blue-500 bottom-[10%] left-[20%]" :
                                    "bg-pink-500 top-[40%] left-[50%]"
                        }`}
                />
            ))}
        </div>
    )
}
