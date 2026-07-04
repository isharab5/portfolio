import {
  profile,
  experience,
  education,
  awards,
  certificates,
  research,
  skillCategories,
} from './profile'
import {
  mainNav,
  multiAgentProjects,
  nlpProjects,
  llmFineTuningProjects,
  mlProjects,
  fullStackProjects,
  mlCategoryMeta,
  fullStackCategoryMeta,
  agenticCategoryMeta,
} from './projects'
import { collectText, type SearchDocument } from '../lib/search'

const ABOUT_EXTRA =
  'Strong experience across machine learning, deep learning, NLP, computer vision, recommender systems, predictive modelling, and deployment of scalable ML solutions. Proven ability to translate ambiguous product problems into rigorous experiments, reusable evaluation frameworks, and measurable model-quality improvements.'

const KNOWLEDGE_GRAPH =
  'Ishara Bandara AI ML Full-Stack Development PhD in AI/ML PhD in Applied Mathematics 9+ years development experience Lead Developer 15+ Research Publications in AI/ML knowledge graph'

function doc(
  partial: Omit<SearchDocument, 'searchText'> & { body: unknown },
): SearchDocument {
  return {
    id: partial.id,
    title: partial.title,
    subtitle: partial.subtitle,
    category: partial.category,
    path: partial.path,
    searchText: collectText(partial.body),
  }
}

function mlProjectPath(project: (typeof mlProjects)[number]) {
  const categories =
    'categories' in project && project.categories
      ? project.categories
      : 'category' in project && project.category
        ? [project.category]
        : []

  if (categories.includes('computer-vision')) return '/machine-learning/computer-vision'
  if (categories.includes('nlp')) return '/machine-learning/nlp'
  return '/machine-learning/time-series-forecasting'
}

export const searchIndex: SearchDocument[] = [
  doc({
    id: 'profile-intro',
    title: profile.name,
    subtitle: profile.title,
    category: 'Profile',
    path: '/#about',
    body: { ...profile, extra: ABOUT_EXTRA, graph: KNOWLEDGE_GRAPH },
  }),
  doc({
    id: 'about-summary',
    title: 'Building Intelligent Systems',
    subtitle: 'About',
    category: 'Profile',
    path: '/#about',
    body: { summary: profile.summary, extra: ABOUT_EXTRA },
  }),
  ...experience.map((item, index) =>
    doc({
      id: `experience-${index}`,
      title: `${item.role} — ${item.company}`,
      subtitle: item.period,
      category: 'Experience',
      path: '/#experience',
      body: item,
    }),
  ),
  ...education.map((item, index) =>
    doc({
      id: `education-${index}`,
      title: item.degree,
      subtitle: item.institution,
      category: 'Education',
      path: '/#education',
      body: item,
    }),
  ),
  doc({
    id: 'research-summary',
    title: 'Research & Publications',
    category: 'Research',
    path: '/#research',
    body: { research, awards, certificates },
  }),
  ...awards.map((item, index) =>
    doc({
      id: `award-${index}`,
      title: item.title,
      subtitle: 'Award',
      category: 'Research',
      path: '/#research',
      body: item,
    }),
  ),
  ...skillCategories.flatMap((category) =>
    category.skills.map((skill) =>
      doc({
        id: `skill-${category.name}-${skill}`,
        title: skill,
        subtitle: category.name,
        category: 'Skills',
        path: '/#skills',
        body: { category: category.name, skill },
      }),
    ),
  ),
  doc({
    id: 'contact',
    title: 'Contact',
    subtitle: "Let's Build Something Intelligent",
    category: 'Contact',
    path: '/#contact',
    body: profile.links,
  }),
  ...multiAgentProjects.map((project) =>
    doc({
      id: `agent-${project.id}`,
      title: project.title,
      subtitle: `${project.org} · ${project.role}`,
      category: 'Gen-AI',
      path: '/agentic-ai/multi-agent',
      body: project,
    }),
  ),
  ...llmFineTuningProjects.map((project) =>
    doc({
      id: `llm-${project.id}`,
      title: project.title,
      subtitle: `${project.org} · ${project.role}`,
      category: 'LLM Fine-Tuning',
      path: '/agentic-ai/llm-finetuning',
      body: project,
    }),
  ),
  ...nlpProjects.map((project) =>
    doc({
      id: `nlp-${project.id}`,
      title: project.title,
      subtitle: project.org,
      category: 'Natural Language Processing',
      path: '/machine-learning/nlp',
      body: project,
    }),
  ),
  ...llmFineTuningProjects.map((project) =>
    doc({
      id: `nlp-llm-${project.id}`,
      title: project.title,
      subtitle: `${project.org} · NLP`,
      category: 'Natural Language Processing',
      path: '/machine-learning/nlp',
      body: project,
    }),
  ),
  ...mlProjects.map((project) =>
    doc({
      id: `ml-${project.id}`,
      title: project.title,
      subtitle: 'categories' in project && project.categories
        ? project.categories.map((c) => mlCategoryMeta[c].title).join(' · ')
        : mlCategoryMeta[project.category!].title,
      category: 'Machine Learning',
      path: mlProjectPath(project),
      body: project,
    }),
  ),
  ...fullStackProjects.map((project) =>
    doc({
      id: `fs-${project.id}`,
      title: project.title,
      subtitle: project.org,
      category: fullStackCategoryMeta[project.category].title,
      path: `/full-stack/${project.category}`,
      body: project,
    }),
  ),
  ...mainNav.flatMap((item) => {
    if ('children' in item && item.children) {
      return item.children.map((child) =>
        doc({
          id: `nav-${child.path}`,
          title: child.label,
          subtitle: item.label,
          category: 'Pages',
          path: child.path,
          body: child,
        }),
      )
    }
    return [
      doc({
        id: `nav-${item.path}`,
        title: item.label,
        category: 'Pages',
        path: item.path,
        body: item,
      }),
    ]
  }),
  ...Object.entries(agenticCategoryMeta).map(([key, meta]) =>
    doc({
      id: `meta-agentic-${key}`,
      title: `${meta.title} ${meta.highlight}`,
      category: 'Gen-AI',
      path: `/agentic-ai/${key}`,
      body: meta,
    }),
  ),
  ...Object.entries(mlCategoryMeta).map(([key, meta]) =>
    doc({
      id: `meta-ml-${key}`,
      title: `${meta.title} ${meta.highlight}`,
      category: 'Machine Learning',
      path: `/machine-learning/${key}`,
      body: meta,
    }),
  ),
  ...Object.entries(fullStackCategoryMeta).map(([key, meta]) =>
    doc({
      id: `meta-fs-${key}`,
      title: `${meta.title} ${meta.highlight}`,
      category: 'Full-Stack Development',
      path: `/full-stack/${key}`,
      body: meta,
    }),
  ),
]
