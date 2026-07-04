import { motion } from 'framer-motion'

type NodeKind = 'center' | 'hub' | 'satellite'

type GraphNode = {
  id: string
  label: string
  x: number
  y: number
  kind: NodeKind
}

type GraphEdge = {
  from: string
  to: string
  primary?: boolean
}

const nodes: GraphNode[] = [
  { id: 'center', label: 'Ishara Bandara', x: 320, y: 230, kind: 'center' },
  { id: 'ai', label: 'AI', x: 320, y: 72, kind: 'hub' },
  { id: 'ml', label: 'ML', x: 510, y: 230, kind: 'hub' },
  { id: 'fullstack', label: 'Full-Stack Development', x: 130, y: 230, kind: 'hub' },
  { id: 'phd-ai-ml', label: 'PhD in AI/ML', x: 430, y: 58, kind: 'satellite' },
  { id: 'phd-math', label: 'PhD in Applied Mathematics', x: 520, y: 118, kind: 'satellite' },
  { id: 'publications', label: '15+ Research Publications in AI/ML', x: 548, y: 318, kind: 'satellite' },
  { id: 'years', label: '9+ years development experience', x: 52, y: 318, kind: 'satellite' },
  { id: 'lead', label: 'Lead Developer', x: 130, y: 400, kind: 'satellite' },
]

const edges: GraphEdge[] = [
  { from: 'center', to: 'ai', primary: true },
  { from: 'center', to: 'ml', primary: true },
  { from: 'center', to: 'fullstack', primary: true },
  { from: 'phd-ai-ml', to: 'ai' },
  { from: 'phd-ai-ml', to: 'ml' },
  { from: 'phd-math', to: 'ai' },
  { from: 'phd-math', to: 'ml' },
  { from: 'years', to: 'fullstack' },
  { from: 'years', to: 'ai' },
  { from: 'years', to: 'ml' },
  { from: 'lead', to: 'fullstack' },
  { from: 'lead', to: 'ai' },
  { from: 'lead', to: 'ml' },
  { from: 'publications', to: 'ai' },
  { from: 'publications', to: 'ml' },
]

const nodeById = Object.fromEntries(nodes.map((n) => [n.id, n])) as Record<string, GraphNode>

function edgeEndpoints(from: GraphNode, to: GraphNode) {
  const rFrom = nodeRadius(from.kind)
  const rTo = nodeRadius(to.kind)
  const dx = to.x - from.x
  const dy = to.y - from.y
  const dist = Math.hypot(dx, dy)
  if (dist === 0) return { x1: from.x, y1: from.y, x2: to.x, y2: to.y }

  return {
    x1: from.x + (dx / dist) * rFrom,
    y1: from.y + (dy / dist) * rFrom,
    x2: to.x - (dx / dist) * rTo,
    y2: to.y - (dy / dist) * rTo,
  }
}

function nodeRadius(kind: NodeKind) {
  if (kind === 'center') return 52
  if (kind === 'hub') return 42
  return 34
}

function nodeColors(kind: NodeKind) {
  if (kind === 'center') {
    return {
      fill: 'rgba(0, 240, 255, 0.12)',
      stroke: 'rgba(0, 240, 255, 0.85)',
      glow: 'rgba(0, 240, 255, 0.35)',
      text: '#e2e8f0',
    }
  }
  if (kind === 'hub') {
    return {
      fill: 'rgba(168, 85, 247, 0.12)',
      stroke: 'rgba(168, 85, 247, 0.7)',
      glow: 'rgba(168, 85, 247, 0.25)',
      text: '#c4b5fd',
    }
  }
  return {
    fill: 'rgba(15, 23, 42, 0.85)',
    stroke: 'rgba(0, 240, 255, 0.35)',
    glow: 'rgba(0, 240, 255, 0.08)',
    text: '#94a3b8',
  }
}

function wrapLabel(label: string, maxChars: number) {
  const words = label.split(' ')
  const lines: string[] = []
  let current = ''

  for (const word of words) {
    const next = current ? `${current} ${word}` : word
    if (next.length <= maxChars) {
      current = next
    } else {
      if (current) lines.push(current)
      current = word
    }
  }
  if (current) lines.push(current)
  return lines
}

export default function ProfileKnowledgeGraph() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass rounded-2xl p-4 md:p-6 overflow-hidden"
    >
      <p className="font-mono text-xs text-accent mb-3 px-2">// knowledge graph</p>
      <svg
        viewBox="0 0 640 460"
        className="w-full h-auto"
        role="img"
        aria-label="Knowledge graph connecting Ishara Bandara to AI, ML, and Full-Stack Development expertise"
      >
        <defs>
          <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 240, 255, 0.05)" />
            <stop offset="50%" stopColor="rgba(0, 240, 255, 0.45)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.35)" />
          </linearGradient>
          <linearGradient id="edge-gradient-primary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 240, 255, 0.7)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.65)" />
          </linearGradient>
        </defs>

        {edges
          .filter((edge) => edge.primary)
          .map((edge, i) => {
            const from = nodeById[edge.from]
            const to = nodeById[edge.to]
            const { x1, y1, x2, y2 } = edgeEndpoints(from, to)
            return (
              <motion.line
                key={`primary-${edge.from}-${edge.to}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#edge-gradient-primary)"
                strokeWidth={3}
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 + i * 0.08 }}
              />
            )
          })}

        {edges
          .filter((edge) => !edge.primary)
          .map((edge, i) => {
            const from = nodeById[edge.from]
            const to = nodeById[edge.to]
            const { x1, y1, x2, y2 } = edgeEndpoints(from, to)
            return (
              <motion.line
                key={`${edge.from}-${edge.to}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#edge-gradient)"
                strokeWidth={1.5}
                strokeDasharray="6 4"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.04 }}
              />
            )
          })}

        {nodes.map((node, i) => {
          const r = nodeRadius(node.kind)
          const colors = nodeColors(node.kind)
          const lines = wrapLabel(node.label, node.kind === 'satellite' ? 14 : 18)
          const lineHeight = node.kind === 'center' ? 15 : 12
          const fontSize = node.kind === 'center' ? 12 : node.kind === 'hub' ? 11 : 9
          const startY = node.y - ((lines.length - 1) * lineHeight) / 2

          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.06 }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={r + 6}
                fill={colors.glow}
                filter="url(#node-glow)"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={r}
                fill={colors.fill}
                stroke={colors.stroke}
                strokeWidth={node.kind === 'center' ? 2 : 1.5}
              />
              {lines.map((line, li) => (
                <text
                  key={line}
                  x={node.x}
                  y={startY + li * lineHeight}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={colors.text}
                  fontSize={fontSize}
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight={node.kind === 'center' ? 600 : 500}
                >
                  {line}
                </text>
              ))}
            </motion.g>
          )
        })}
      </svg>
    </motion.div>
  )
}
