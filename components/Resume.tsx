"use client"

import { motion } from "framer-motion"
import { Download, Eye, Mail, Phone, MapPin } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-24 sm:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent uppercase tracking-tighter">
            Curriculum
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Resume Preview */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass p-10 sm:p-12 rounded-[3rem] border-white/5 shadow-2xl"
            >
              <h3 className="text-2xl font-black mb-10 text-white uppercase tracking-tighter">Curriculum Vitae</h3>

              {/* Mock Resume Content */}
              <div className="space-y-10">
                <div>
                  <h4 className="font-black text-white mb-2 uppercase tracking-widest">DEVASANJAY NATARAJAN</h4>
                  <p className="text-white/40 text-xs sm:text-sm uppercase tracking-widest font-bold">Founder | Engineer | Innovator</p>
                </div>

                <div>
                  <h4 className="font-black text-white/40 mb-4 text-[10px] uppercase tracking-[0.2em]">Contact Information</h4>
                  <div className="space-y-4 text-white/60 text-xs font-medium uppercase tracking-widest">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <Mail size={14} className="text-white" />
                      </div>
                      <span>devasanjaynatarajan@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <Phone size={14} className="text-white" />
                      </div>
                      <span>+91 7200060295</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <MapPin size={14} className="text-white" />
                      </div>
                      <span>Chennai, India</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-black text-white/40 mb-4 text-[10px] uppercase tracking-[0.2em]">Key Experience</h4>
                  <div className="space-y-6">
                    <div className="glass p-6 rounded-2xl border-white/5">
                      <p className="font-black text-white text-sm uppercase tracking-tight">Founder & CEO</p>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2 font-bold">DAVNS INDUSTRIES | 2023 - Present</p>
                      <p className="text-white/40 text-[10px] leading-relaxed font-light">Leading deep-tech innovations and AI-driven systems.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-black text-white/40 mb-4 text-[10px] uppercase tracking-[0.2em]">Technical Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "TypeScript", "AI/ML", "Python"].map((skill) => (
                      <span key={skill} className="text-[10px] font-black bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-white/40 uppercase tracking-widest">
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
              className="flex flex-col gap-8"
            >
              <div className="glass p-10 sm:p-12 rounded-[3rem] border-white/5 shadow-2xl flex-1 flex flex-col">
                <h3 className="text-2xl font-black mb-10 text-white uppercase tracking-tighter">Acquire Full PDF</h3>

                <div className="flex-1">
                  <motion.a
                    href="https://drive.google.com/file/d/1hSaidr_c8uo-nfdnB_OAEZqlzxxIot7u/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="w-full flex items-center justify-center gap-4 bg-white text-black rounded-2xl px-8 py-5 font-black uppercase tracking-widest shadow-2xl transition-all duration-500"
                  >
                    <Eye size={20} />
                    View Professional CV
                  </motion.a>

                  <div className="mt-12 space-y-6">
                    <h4 className="font-black text-white/40 text-[10px] uppercase tracking-[0.2em]">Key Highlights</h4>
                    <div className="space-y-6">
                      {[
                        { label: "Winner", value: "IBM Z Datathon 2024", color: "text-white" },
                        { label: "Elite", value: "AlgoInception Winner", color: "text-white" },
                        { label: "Expert", value: "6x Specialized Certifications", color: "text-white" }
                      ].map((item, i) => (
                        <div key={i} className="flex flex-col gap-1">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">{item.label}</span>
                          <span className={`${item.color} font-bold uppercase tracking-tight text-sm`}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hire Me Section */}
              <div className="glass p-10 sm:p-12 rounded-[3.5rem] border-white/5 border-2 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-tighter">Let's Collaborate</h3>
                  <p className="text-white/40 mb-10 text-sm font-light leading-relaxed uppercase tracking-widest">
                    Available for high-impact projects and engineering roles.
                  </p>

                  <motion.a
                    href="#contact"
                    whileHover={{ x: 10 }}
                    className="inline-flex items-center gap-4 text-white font-black uppercase tracking-[0.3em] text-sm group/btn"
                  >
                    <Mail size={20} className="group-hover/btn:text-white" />
                    Engage Now
                    <div className="w-12 h-px bg-white/20 group-hover:w-24 transition-all duration-500" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
