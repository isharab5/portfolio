import { Navigate, Routes, Route } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { SimpleProjectCard, NLPResearchCard, LLMProjectCard } from '../components/ProjectCards'
import { mlProjects, mlCategoryMeta, nlpProjects, llmFineTuningProjects } from '../data/projects'

type MLCategory = keyof typeof mlCategoryMeta

const cvProjectOrder = [
  'tennis-broadcast-tracking',
  'cloud-cover-forecasting',
  'cricket-batting-strokes',
]

const tsProjectOrder = [
  'xg-modeling',
  'chaos-forecasting',
  'bcos-open-space',
  'edranic-consistency',
  'fractal-ball-complexity',
  'renyi-edran-optimization',
  'realtime-match-outcome',
]

function MLSection({ category }: { category: MLCategory }) {
  const meta = mlCategoryMeta[category]
  let projects = mlProjects.filter((p) =>
    'categories' in p && p.categories
      ? p.categories.includes(category)
      : p.category === category,
  )

  if (category === 'computer-vision') {
    projects = [...projects].sort(
      (a, b) => cvProjectOrder.indexOf(a.id) - cvProjectOrder.indexOf(b.id),
    )
  }

  if (category === 'time-series-forecasting') {
    projects = [...projects].sort(
      (a, b) => tsProjectOrder.indexOf(a.id) - tsProjectOrder.indexOf(b.id),
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <PageHeader
        label="// machine-learning"
        title={meta.title}
        highlight={meta.highlight}
        description={meta.description}
      />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <SimpleProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </div>
  )
}

function NLPSection() {
  const meta = mlCategoryMeta.nlp
  const cyberLlmProject = llmFineTuningProjects.find((p) => p.id === 'cyber-llm')

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <PageHeader
        label="// machine-learning"
        title={meta.title}
        highlight={meta.highlight}
        description={meta.description}
      />
      {nlpProjects.map((project, index) => (
        <NLPResearchCard key={project.id} {...project} index={index} />
      ))}
      {cyberLlmProject && <LLMProjectCard {...cyberLlmProject} />}
    </div>
  )
}

export default function MachineLearningPage() {
  return (
    <Routes>
      <Route index element={<Navigate to="time-series-forecasting" replace />} />
      <Route path="time-series-forecasting" element={<MLSection category="time-series-forecasting" />} />
      <Route path="computer-vision" element={<MLSection category="computer-vision" />} />
      <Route path="nlp" element={<NLPSection />} />
    </Routes>
  )
}
