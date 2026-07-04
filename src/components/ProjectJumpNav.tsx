interface ProjectJumpNavProps {
  projects: { id: string; title: string }[]
}

export default function ProjectJumpNav({ projects }: ProjectJumpNavProps) {
  if (projects.length === 0) return null

  return (
    <nav className="mb-12" aria-label="Projects on this page">
      <p className="font-mono text-xs text-accent mb-4">// projects on this page</p>
      <ul className="flex flex-col gap-2">
        {projects.map((project) => (
          <li key={project.id}>
            <a
              href={`#${project.id}`}
              className="group inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
            >
              <span className="font-mono text-accent/50 group-hover:text-accent">→</span>
              <span>{project.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
