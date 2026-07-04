import { motion } from 'framer-motion'
import { BookOpen, Award, FileText, GraduationCap, ArrowUpRight } from 'lucide-react'
import { profile, research, awards, certificates } from '../data/profile'

export default function Research() {
  return (
    <section id="research" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent2/2 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-accent text-sm mb-4">// research</p>
          <h2 className="section-heading mb-16">
            Research & <span className="gradient-text">Publications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen size={20} className="text-accent" />
              <h3 className="font-semibold text-lg">Research Summary</h3>
            </div>
            <p className="text-muted leading-relaxed mb-6">{research.summary}</p>
            <ul className="space-y-3 mb-8">
              {research.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-muted">
                  <FileText size={16} className="text-accent2 shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>
            <a
              href={profile.links.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent/20 to-accent2/20
                border border-accent/30 text-accent font-mono text-sm hover:from-accent/30 hover:to-accent2/30
                transition-all duration-300 group"
            >
              <GraduationCap size={18} />
              Google Scholar Profile
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award size={20} className="text-accent3" />
                <h3 className="font-semibold">Awards</h3>
              </div>
              <div className="space-y-4">
                {awards.map((award) => (
                  <div key={award.title} className="border-l-2 border-accent3/40 pl-4">
                    <p className="text-sm font-medium text-text">{award.title}</p>
                    <p className="text-xs text-muted mt-1">{award.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-4 font-mono text-sm text-accent">CERTIFICATIONS</h3>
              {certificates.map((cert) => (
                <p key={cert} className="text-sm text-muted">
                  {cert}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
