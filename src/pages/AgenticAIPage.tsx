import { Navigate, Routes, Route } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ProjectJumpNav from '../components/ProjectJumpNav'
import { AgentProjectCard, LLMProjectCard } from '../components/ProjectCards'
import {
  multiAgentProjects,
  llmFineTuningProjects,
  agenticCategoryMeta,
} from '../data/projects'

function MultiAgentSection() {
  const meta = agenticCategoryMeta['multi-agent']
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <PageHeader
        label="// gen-ai"
        title={meta.title}
        highlight={meta.highlight}
        description={meta.description}
      />
      <ProjectJumpNav
        projects={multiAgentProjects.map((p) => ({ id: p.id, title: p.title }))}
      />
      {multiAgentProjects.map((project, index) => (
        <AgentProjectCard key={project.id} {...project} index={index} />
      ))}
    </div>
  )
}

function LLMFineTuningSection() {
  const meta = agenticCategoryMeta['llm-finetuning']
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <PageHeader
        label="// gen-ai"
        title={meta.title}
        highlight={meta.highlight}
        description={meta.description}
      />
      <ProjectJumpNav
        projects={llmFineTuningProjects.map((p) => ({ id: p.id, title: p.title }))}
      />
      {llmFineTuningProjects.map((project) => (
        <LLMProjectCard key={project.id} {...project} />
      ))}
    </div>
  )
}

export default function AgenticAIPage() {
  return (
    <Routes>
      <Route index element={<Navigate to="multi-agent" replace />} />
      <Route path="multi-agent" element={<MultiAgentSection />} />
      <Route path="llm-finetuning" element={<LLMFineTuningSection />} />
    </Routes>
  )
}
