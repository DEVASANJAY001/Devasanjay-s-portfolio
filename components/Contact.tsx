"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, Code, Star } from "lucide-react"

export default function Contact() {

  return (
    <section id="contact" className="py-24 sm:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent uppercase tracking-tighter">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 sm:mb-24">
            {[
              { icon: Mail, title: "Email Me", value: "devasanjaynatarajan@gmail.com" },
              { icon: Phone, title: "Call Me", value: "+91 7200060295" },
              { icon: MapPin, title: "Find Me", value: "Chennai, Tamil Nadu, India" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="glass p-10 rounded-[2.5rem] flex flex-col items-center text-center border-white/5 transition-all duration-500 group hover:bg-white/5"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-1000">
                  <item.icon size={28} className="text-black" />
                </div>
                <h4 className="text-xl font-black mb-4 text-white uppercase tracking-tighter">{item.title}</h4>
                <p className="text-white/40 text-sm font-light leading-relaxed">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-12 sm:p-20 rounded-[3.5rem] text-center border-white/5 shadow-2xl relative overflow-hidden"
          >
            <h3 className="text-3xl sm:text-4xl font-black mb-16 text-white uppercase tracking-tighter">Connect Digitally</h3>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/devasanjay-natarajan/", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/DEVASANJAY001", label: "GitHub" },
                { icon: Code, href: "https://leetcode.com/u/devasanjay/", label: "LeetCode" },
                { icon: Star, href: "https://www.hackerrank.com/profile/devasanjaynatar1", label: "HackerRank" }
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="w-20 h-20 bg-white/5 hover:bg-white border border-white/5 rounded-[1.5rem] flex items-center justify-center transition-all duration-500 group"
                  title={social.label}
                >
                  <social.icon size={32} className="text-white group-hover:text-black transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
