import { motion } from 'framer-motion'
import { ChevronRight, ExternalLink } from 'lucide-react'

interface Contribution {
  title: string
  detail: string
}

interface AgentProjectProps {
  id: string
  title: string
  org: string
  role: string
  period: string
  tagline: string
  overview: string
  architecture: string[]
  contributions: Contribution[]
  ops: string[]
  tech: string[]
  index: number
}

export function AgentProjectCard({
  id,
  title,
  org,
  role,
  period,
  tagline,
  overview,
  architecture,
  contributions,
  ops,
  tech,
  index,
}: AgentProjectProps) {
  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-8 md:p-10 mb-10 hover:border-accent/20 transition-all duration-500 scroll-mt-28"
    >
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
        <div>
          <p className="font-mono text-xs text-accent mb-2">{org} · {role}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-2">{title}</h2>
          <p className="text-accent2 font-mono text-sm">{tagline}</p>
        </div>
        <span className="font-mono text-xs text-muted px-4 py-2 rounded-full border border-border/50 whitespace-nowrap self-start">
          {period}
        </span>
      </div>

      <p className="text-muted leading-relaxed mb-8">{overview}</p>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-mono text-sm text-accent mb-4">ARCHITECTURE</h3>
          <ul className="space-y-3">
            {architecture.map((item) => (
              <li key={item.slice(0, 50)} className="flex gap-3 text-sm text-muted">
                <ChevronRight size={16} className="text-accent shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-sm text-accent3 mb-4">OPS & GOVERNANCE</h3>
          <ul className="space-y-3">
            {ops.map((item) => (
              <li key={item.slice(0, 50)} className="flex gap-3 text-sm text-muted">
                <span className="text-accent3">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-mono text-sm text-accent2 mb-4">NOTABLE CONTRIBUTIONS</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {contributions.map((c) => (
            <div key={c.title} className="p-4 rounded-xl bg-surface/60 border border-border/40">
              <p className="font-medium text-text text-sm mb-2">{c.title}</p>
              <p className="text-xs text-muted leading-relaxed">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </motion.article>
  )
}

interface LLMProjectProps {
  id: string
  title: string
  org: string
  role: string
  period: string
  tagline: string
  abstract: string
  problem: string[]
  methodology: string[]
  figures: {
    framework: string
    tsneEmbeddings?: string
    tsneCaption?: string
    tsneFused?: string
    tsneFusedCaption?: string
  }
  tech: string[]
}

export function LLMProjectCard({
  id,
  title,
  org,
  role,
  period,
  tagline,
  abstract,
  problem,
  methodology,
  figures,
  tech,
}: LLMProjectProps) {
  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-8 md:p-10 mb-10 hover:border-accent/20 transition-all duration-500 scroll-mt-28"
    >
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
        <div>
          <p className="font-mono text-xs text-accent mb-2">{org} · {role}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-2">{title}</h2>
          <p className="text-accent2 font-mono text-sm">{tagline}</p>
        </div>
        <span className="font-mono text-xs text-muted px-4 py-2 rounded-full border border-border/50 whitespace-nowrap self-start">
          {period}
        </span>
      </div>

      <div className="p-6 rounded-xl bg-surface/60 border border-border/40 mb-8">
        <p className="text-muted leading-relaxed text-sm">{abstract}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="font-mono text-sm text-accent mb-4">PROBLEM STATEMENT</h3>
          <ul className="space-y-3">
            {problem.map((p) => (
              <li key={p.slice(0, 50)} className="text-sm text-muted flex gap-2">
                <span className="text-accent">•</span>{p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-sm text-accent3 mb-4">METHODOLOGY</h3>
          <ol className="space-y-3">
            {methodology.map((m, i) => (
              <li key={m.slice(0, 50)} className="text-sm text-muted flex gap-3">
                <span className="font-mono text-accent3 text-xs shrink-0">{String(i + 1).padStart(2, '0')}</span>
                {m}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="font-mono text-sm text-accent mb-6">FRAMEWORK ARCHITECTURE</h3>
        <div className="rounded-xl overflow-hidden border border-border/50 bg-surface/40 p-4">
          <img
            src={figures.framework}
            alt="Semi-supervised LLM cybersecurity detection framework"
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-muted/60 mt-2 font-mono">
          Figure 1: Semi-supervised LLM + VAE fusion framework with 1-SVM anomaly detection
        </p>
      </div>

      {figures.tsneEmbeddings && (
        <div className="mb-10">
          <h3 className="font-mono text-sm text-accent mb-4">t-SNE EMBEDDING VISUALIZATION</h3>
          <div className="rounded-xl overflow-hidden border border-border/50 bg-white p-4">
            <img
              src={figures.tsneEmbeddings}
              alt="t-SNE plots of VAE, BERT, Llama3 and OpenAI TE3S embeddings on CICIDS 2017 and UNSW-NB15"
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-muted/60 mt-2 font-mono">
            Figure 2: {figures.tsneCaption}
          </p>
          <p className="text-xs text-muted/50 mt-1 font-mono">
            Evaluated on CICIDS 2017 and UNSW-NB15 datasets across VAE, BERT, Llama3, and OpenAI TE3S embedding models
          </p>
        </div>
      )}

      {figures.tsneFused && (
        <div className="mb-10">
          <h3 className="font-mono text-sm text-accent mb-4">FUSED EMBEDDING t-SNE VISUALIZATION</h3>
          <div className="rounded-xl overflow-hidden border border-border/50 bg-white p-4">
            <img
              src={figures.tsneFused}
              alt="t-SNE plots of fused text embeddings via concatenation, attention, and gated attention on CICIDS 2017 and UNSW-NB15"
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-muted/60 mt-2 font-mono">
            Fig. 3. {figures.tsneFusedCaption}
          </p>
          <p className="text-xs text-muted/50 mt-1 font-mono">
            Fusion methods: Concatenation, Attention, and Gated Attention — e.g. OpenAI TE3S + VAE, Llama3 + VAE, BERT + VAE
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </motion.article>
  )
}

interface NLPResearchProjectProps {
  id: string
  title: string
  org: string
  role: string
  period: string
  journal?: string
  tagline: string
  abstract: string
  problem: string[]
  methodology: string[]
  paperUrl: string
  doi?: string
  tech: string[]
  index: number
}

export function NLPResearchCard({
  id,
  title,
  org,
  role,
  period,
  journal,
  tagline,
  abstract,
  problem,
  methodology,
  paperUrl,
  doi,
  tech,
  index,
}: NLPResearchProjectProps) {
  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-8 md:p-10 mb-10 hover:border-accent/20 transition-all duration-500 scroll-mt-28"
    >
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
        <div>
          <p className="font-mono text-xs text-accent mb-2">{org} · {role}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-2">{title}</h2>
          <p className="text-accent2 font-mono text-sm">{tagline}</p>
          {journal && (
            <p className="text-xs text-muted/70 font-mono mt-2">{journal}</p>
          )}
        </div>
        <span className="font-mono text-xs text-muted px-4 py-2 rounded-full border border-border/50 whitespace-nowrap self-start">
          {period}
        </span>
      </div>

      <div className="p-6 rounded-xl bg-surface/60 border border-border/40 mb-8">
        <h3 className="font-mono text-sm text-accent mb-3">ABSTRACT</h3>
        <p className="text-muted leading-relaxed text-sm">{abstract}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-mono text-sm text-accent mb-4">PROBLEM STATEMENT</h3>
          <ul className="space-y-3">
            {problem.map((p) => (
              <li key={p.slice(0, 50)} className="text-sm text-muted flex gap-2">
                <span className="text-accent">•</span>{p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-sm text-accent3 mb-4">METHODOLOGY</h3>
          <ol className="space-y-3">
            {methodology.map((m, i) => (
              <li key={m.slice(0, 50)} className="text-sm text-muted flex gap-3">
                <span className="font-mono text-accent3 text-xs shrink-0">{String(i + 1).padStart(2, '0')}</span>
                {m}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <a
          href={paperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent/20 to-accent2/20
            border border-accent/30 text-accent font-mono text-sm hover:from-accent/30 hover:to-accent2/30
            transition-all duration-300 group"
        >
          View Publication
          <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
        {doi && (
          <a
            href={doi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-mono text-sm
              text-muted hover:text-accent transition-colors"
          >
            DOI
            <ExternalLink size={14} />
          </a>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </motion.article>
  )
}

interface SimpleProjectProps {
  id: string
  title: string
  org?: string
  period?: string
  detail: string
  tech: string[]
  index: number
  role?: string
  image?: string
  video?: string
  imageCaption?: string
}

export function SimpleProjectCard({
  id,
  title,
  org,
  period,
  detail,
  tech,
  index,
  role,
  image,
  video,
  imageCaption,
}: SimpleProjectProps) {
  const hasMedia = Boolean(image || video)

  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`glass rounded-2xl overflow-hidden hover:border-accent/20 transition-all duration-300 scroll-mt-28 ${
        hasMedia ? 'md:col-span-2' : ''
      }`}
    >
      {hasMedia && (
        <div className="border-b border-border/50 p-4 space-y-4">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-lg"
            />
          )}
          {video && (
            <video
              src={video}
              controls
              playsInline
              muted
              loop
              className="w-full h-auto rounded-lg border border-border/40"
            >
              Your browser does not support the video tag.
            </video>
          )}
          {imageCaption && (
            <p className="text-xs text-muted/60 font-mono">{imageCaption}</p>
          )}
        </div>
      )}
      <div className="p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            {(org || role) && (
              <p className="font-mono text-xs text-accent mb-1">
                {org}{org && role ? ' · ' : ''}{role}
              </p>
            )}
            <h2 className="text-xl font-semibold text-text">{title}</h2>
          </div>
          {period && (
            <span className="font-mono text-xs text-muted whitespace-nowrap">{period}</span>
          )}
        </div>
        <p className="text-sm text-muted leading-relaxed mb-6">{detail}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
