import { Navigate, Routes, Route } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ProjectJumpNav from '../components/ProjectJumpNav'
import { SimpleProjectCard } from '../components/ProjectCards'
import { fullStackProjects, fullStackCategoryMeta } from '../data/projects'

type FullStackCategory = keyof typeof fullStackCategoryMeta

function FullStackSection({ category }: { category: FullStackCategory }) {
  const meta = fullStackCategoryMeta[category]
  const projects = fullStackProjects.filter((p) => p.category === category)

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <PageHeader
        label="// full-stack"
        title={meta.title}
        highlight={meta.highlight}
        description={meta.description}
      />
      <ProjectJumpNav projects={projects.map((p) => ({ id: p.id, title: p.title }))} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <SimpleProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </div>
  )
}

export default function FullStackPage() {
  return (
    <Routes>
      <Route index element={<Navigate to="mobile" replace />} />
      <Route path="mobile" element={<FullStackSection category="mobile" />} />
      <Route path="web" element={<FullStackSection category="web" />} />
    </Routes>
  )
}
