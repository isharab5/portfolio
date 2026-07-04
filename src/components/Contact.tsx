import { motion } from 'framer-motion'
import { Linkedin, GraduationCap, Mail, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-accent text-sm mb-4">// contact</p>
          <h2 className="section-heading mb-12">
            Let's Build Something <span className="gradient-text">Intelligent</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={profile.links.email}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent/20 to-accent2/20
                border border-accent/30 text-accent font-mono text-sm hover:from-accent/30 hover:to-accent2/30
                transition-all duration-300 group"
            >
              <Mail size={18} />
              Get in Touch
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass font-mono text-sm
                text-muted hover:text-accent transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href={profile.links.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass font-mono text-sm
                text-muted hover:text-accent transition-colors"
            >
              <GraduationCap size={18} />
              Google Scholar
            </a>
          </div>
        </motion.div>
      </div>

      <footer className="border-t border-border/50 py-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <p className="font-mono text-xs text-muted">
            <span className="text-accent">&lt;</span>
            {profile.name}
            <span className="text-accent"> /&gt;</span>
          </p>
        </div>
      </footer>
    </section>
  )
}
