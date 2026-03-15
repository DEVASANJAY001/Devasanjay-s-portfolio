import { motion, AnimatePresence } from "framer-motion"
import { Heart, Code, Coffee, ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-24 sm:py-32 bg-transparent border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 mb-24 text-center sm:text-left">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-black bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-6 uppercase tracking-tighter">
              DAVNS
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0 font-light uppercase tracking-widest">
              Engineering the future through precision and innovative digital architectural systems.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-black mb-8 text-[10px] uppercase tracking-[0.3em] text-white">Navigation</h3>
            <div className="grid grid-cols-2 gap-4 text-[10px] font-black uppercase tracking-widest max-w-[250px] mx-auto sm:mx-0">
              <a href="#home" className="text-white/40 hover:text-white transition-all">Home</a>
              <a href="#about" className="text-white/40 hover:text-white transition-all">About</a>
              <a href="#projects" className="text-white/40 hover:text-white transition-all">Projects</a>
              <a href="#skills" className="text-white/40 hover:text-white transition-all">Skills</a>
              <a href="#achievements" className="text-white/40 hover:text-white transition-all">Milestones</a>
              <a href="#contact" className="text-white/40 hover:text-white transition-all">Contact</a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-black mb-8 text-[10px] uppercase tracking-[0.3em] text-white">Inquiries</h3>
            <div className="space-y-4 text-[10px] font-black uppercase tracking-widest text-white/40">
              <p className="hover:text-white transition-all cursor-pointer">devasanjaynatarajan@gmail.com</p>
              <p>+91 7200060295</p>
              <p>Chennai, India</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
            <span>Architected by</span>
            <span className="text-white/60">Devasanjay N</span>
          </div>

          <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.5em] text-white/10 px-8 py-3 rounded-full border border-white/5 glass">
            <span>© 2024 ALL RIGHTS RESERVED</span>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-12 right-12 w-16 h-16 glass text-white rounded-full shadow-2xl z-40 flex items-center justify-center border-white/10 hover:bg-white hover:text-black transition-all duration-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
