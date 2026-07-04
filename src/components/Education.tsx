import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/profile'

export default function Education() {
  return (
    <section id="education" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-accent text-sm mb-4">// education</p>
          <h2 className="section-heading mb-16">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 hover:border-accent/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent2/10 text-accent2 shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text group-hover:text-accent transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="font-mono text-sm text-accent2 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-muted mt-1">{edu.location}</p>
                  {'period' in edu && edu.period && (
                    <p className="text-xs font-mono text-muted/70 mt-2">{edu.period}</p>
                  )}
                  {'detail' in edu && edu.detail && (
                    <p className="text-sm text-muted mt-4 leading-relaxed">{edu.detail}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
