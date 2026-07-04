import { motion } from 'framer-motion'
import { Linkedin, GraduationCap, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import ProfileKnowledgeGraph from './ProfileKnowledgeGraph'

export default function About() {
  return (
    <section id="about" className="relative pt-2 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
            <span className="gradient-text glow-text">{profile.name}</span>
          </h1>

          <p className="text-lg md:text-xl text-text max-w-3xl mx-auto mb-2 font-mono">
            {profile.title}
          </p>

          <p className="text-sm md:text-base text-muted max-w-2xl mx-auto mb-4 leading-relaxed">
            {profile.tagline}
          </p>

          <div className="flex items-center justify-center gap-4">
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

        <div className="mb-10">
          <ProfileKnowledgeGraph />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="font-mono text-accent text-sm mb-4">// about</p>
          <h2 className="section-heading mb-8">
            Building <span className="gradient-text">Intelligent Systems</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 max-w-4xl"
        >
          <p className="text-muted leading-relaxed text-lg mb-6">{profile.summary}</p>
          <p className="text-muted/80 leading-relaxed">
            Strong experience across machine learning, deep learning, NLP, computer vision,
            recommender systems, predictive modelling, and deployment of scalable ML solutions.
            Proven ability to translate ambiguous product problems into rigorous experiments,
            reusable evaluation frameworks, and measurable model-quality improvements.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
