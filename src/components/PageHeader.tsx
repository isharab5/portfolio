import { motion } from 'framer-motion'

interface PageHeaderProps {
  label: string
  title: string
  highlight: string
  description?: string
}

export default function PageHeader({ label, title, highlight, description }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <p className="font-mono text-accent text-sm mb-4">{label}</p>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {title} <span className="gradient-text">{highlight}</span>
      </h1>
      {description && <p className="text-muted text-lg max-w-3xl">{description}</p>}
    </motion.div>
  )
}
