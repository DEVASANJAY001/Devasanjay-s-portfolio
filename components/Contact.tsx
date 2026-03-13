"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, Code, Star } from "lucide-react"

export default function Contact() {

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 shadow-xl group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Mail size={28} className="text-white" />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-lg mb-2">Email Me</h4>
                <p className="text-gray-400 text-sm break-all font-medium">devasanjaynatarajan@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 shadow-xl group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Phone size={28} className="text-white" />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-lg mb-2">Call Me</h4>
                <p className="text-gray-400 text-sm font-medium">+91 7200060295</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all duration-500 shadow-xl group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <MapPin size={28} className="text-white" />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-lg mb-2">Find Me</h4>
                <p className="text-gray-400 text-sm font-medium">Chennai, Tamil Nadu, India</p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center py-12 px-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
            <h3 className="text-2xl sm:text-3xl font-black mb-10 tracking-tight">Connect with the Digital World</h3>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/devasanjay-natarajan/", color: "bg-[#0077b5]", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/DEVASANJAY001", color: "bg-[#333]", label: "GitHub" },
                { icon: Code, href: "https://leetcode.com/u/devasanjay/", color: "bg-[#ffa116]", label: "LeetCode" },
                { icon: Star, href: "https://www.hackerrank.com/profile/devasanjaynatar1", color: "bg-[#2ec866]", label: "HackerRank" }
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${social.color} p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative group`}
                  title={social.label}
                >
                  <social.icon size={26} className="text-white group-hover:scale-110 transition-transform" />
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity text-white uppercase tracking-widest">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
