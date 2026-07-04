import { motion } from 'framer-motion'
import { ArrowDown, Linkedin, GraduationCap, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-30" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent2/5 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono text-accent mb-8">
            <span className="w-2 h-2 rounded-full bg-accent3 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="gradient-text glow-text">{profile.name}</span>
          </h1>

          <p className="text-lg md:text-xl text-text max-w-3xl mx-auto mb-4 font-mono">
            {profile.title}
          </p>

          <p className="text-sm md:text-base text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            {profile.tagline}
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass hover:border-accent/40 transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-muted group-hover:text-accent transition-colors" />
            </a>
            <a
              href={profile.links.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass hover:border-accent/40 transition-all group"
              aria-label="Google Scholar"
            >
              <GraduationCap size={20} className="text-muted group-hover:text-accent transition-colors" />
            </a>
            <a
              href={profile.links.email}
              className="p-3 rounded-lg glass hover:border-accent/40 transition-all group"
              aria-label="Email"
            >
              <Mail size={20} className="text-muted group-hover:text-accent transition-colors" />
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors"
        >
          <ArrowDown size={24} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  )
}
