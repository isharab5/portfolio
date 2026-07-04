import { motion } from 'framer-motion'
import { Briefcase, ChevronRight } from 'lucide-react'
import { experience } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/2 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-accent text-sm mb-4">// experience</p>
          <h2 className="section-heading mb-16">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent2/30 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-20"
              >
                <div className="absolute left-0 md:left-6 top-8 w-4 h-4 rounded-full border-2 border-accent bg-void hidden md:block">
                  <div className="absolute inset-1 rounded-full bg-accent animate-pulse" />
                </div>

                <div className="glass rounded-2xl p-8 hover:border-accent/20 transition-all duration-500 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10 text-accent hidden sm:block">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-text group-hover:text-accent transition-colors">
                          {job.role}
                        </h3>
                        <p className="text-accent2 font-mono text-sm">
                          {job.company} · {job.location}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-muted px-3 py-1 rounded-full border border-border/50 whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {job.highlights.map((item) => (
                      <li key={item.slice(0, 40)} className="flex gap-3 text-muted text-sm leading-relaxed">
                        <ChevronRight size={16} className="text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {job.contributions.length > 0 && (
                    <div className="mb-6 pl-4 border-l-2 border-accent3/30">
                      <p className="font-mono text-xs text-accent3 mb-3">NOTABLE CONTRIBUTIONS</p>
                      <ul className="space-y-2">
                        {job.contributions.map((c) => (
                          <li key={c.slice(0, 40)} className="text-sm text-muted/90 flex gap-2">
                            <span className="text-accent3">▸</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
