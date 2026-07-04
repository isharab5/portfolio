import { motion } from 'framer-motion'
import { skillCategories } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-accent text-sm mb-4">// skills</p>
          <h2 className="section-heading mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted mb-16 max-w-2xl">
            End-to-end expertise spanning AI/ML engineering, generative AI, cloud infrastructure,
            and production system design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-accent/20 transition-all duration-300 group"
            >
              <h3 className="font-mono text-sm text-accent mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:animate-pulse" />
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-md bg-surface/80 text-muted border border-border/40
                      hover:text-accent hover:border-accent/30 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
