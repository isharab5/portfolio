export const profile = {
  name: 'Ishara Bandara (PhD)',
  title: 'Senior AI/ML Engineer | Data Scientist | Lead Developer',
  tagline:
    'PhD in AI/ML. 9+ years industry experience. Production GenAI, ML, MLOps/LLMOps. Full-stack development.',
  summary:
    'Senior AI/ML practitioner with 9+ years of industry experience and a Dual PhD in AI/ML, Data Science, and Applied Mathematics. Experienced in designing, building, and improving production LLM systems, LLM fine-tuning, multi-agent workflows, RAG, AI governance, transformers, MLOps/LLMOps, and AI/ML solutions.',
  links: {
    linkedin: 'https://www.linkedin.com/in/isharabnd/',
    scholar: 'https://scholar.google.com/citations?user=4NYNa9MAAAAJ&hl=en',
    email: 'mailto:ishara.bandara106@gmail.com',
  },
}

export const experience = [
  {
    role: 'Senior AI/ML Engineer',
    company: 'Lab N70 (UNE)',
    location: 'Australia',
    period: 'Jun 2025 — Present',
    highlights: [
      'Developed AI/ML-assisted multi-agent learning management system delivering personalized learning experiences using production-grade GenAI/ML architectures across AWS.',
      'Architected enterprise conversational AI on AWS Bedrock with LangGraph, PydanticAI, RAG, GraphRAG, MCP integration, and AI guardrails.',
      'Built LLMOps/MLOps practices: prompt management, evaluation pipelines, observability, LLM-as-a-Judge, and Langfuse monitoring.',
    ],
    contributions: [
      'Data-driven statistical LLM test framework for selecting the optimal LLM per lesson context — improved response quality & latency by 20–30%',
      'Parallelized multi-agent framework with race-condition management — reduced TTFT by 30–40%',
      'OpenSearch RAG query optimization with Amazon Bedrock re-ranking, metadata filtering, and intelligent caching — reduced infrastructure costs',
      'Time-series student analytics framework for early at-risk student identification',
    ],
    tech: ['AWS Bedrock', 'LangGraph', 'SageMaker', 'OpenSearch', 'LiteLLM', 'Mem0', 'Terraform', 'PydanticAI', 'Langfuse'],
  },
  {
    role: 'Founding Lead Engineer',
    company: 'Backin5',
    location: 'Australia / USA',
    period: 'Jun 2024 — Present',
    highlights: [
      'Leading offshore engineering for Google for Startups-supported AI travel platform with itinerary generation, flight & accommodation booking.',
      'Architected LangGraph multi-agent workflows with tool-calling and state-driven orchestration on GCP (GKE, ArgoCD, Terraform).',
      'Built MLOps pipelines, MCP servers, recommendation engines, and mobile apps (iOS/Android) with GDPR compliance.',
    ],
    contributions: [
      'End-to-end AI platform: mobile apps, recommendation engines, multi-agent services, MCP servers, admin dashboards',
      'Engineering recruitment, team leadership, investor engagement, and fundraising contributions',
    ],
    tech: ['LangGraph', 'GCP', 'GKE', 'ArgoCD', 'Terraform', 'MCP', 'React Native'],
  },
  {
    role: 'Research Fellow',
    company: 'Deakin University & Coventry University',
    location: 'Australia / UK',
    period: 'Sep 2022 — Sep 2025',
    highlights: [
      'R&D in ML, Deep Learning, Computer Vision, Information Geometry, and Generative AI for sports analytics (football, AFL).',
      'LLM fine-tuning, Transformer architectures, GPU-accelerated training with PyTorch, TensorFlow, CUDA.',
      'LLM-based cybersecurity solutions for threat detection and anomaly analysis using BERT, LLaMA, Hugging Face.',
    ],
    contributions: [
      'Multi-event time-series xG modeling — statistically significant higher accuracy (p < 0.05)',
      'Chaos-based metrics forecasting framework for team performance evaluation',
      'Real-time match outcome model outperforming football betting benchmarks (RPS)',
      'Fine-tuned LLMs + VAE latent representations for enhanced predictive capabilities',
    ],
    tech: ['PyTorch', 'TensorFlow', 'CUDA', 'OpenCV', 'Hugging Face', 'BERT', 'LLaMA'],
  },
  {
    role: 'Senior Full-Stack Engineer',
    company: 'WSO2 · Virtusa · Axiata Labs',
    location: 'Global',
    period: 'Jul 2017 — Sep 2022',
    highlights: [
      'Full-stack development across enterprise, digital health, and fintech — WSO2 Choreo, New York Life Insurance, Axiata mobile payments.',
      'Led cross-functional teams, managed delivery, conducted code reviews with secure PII data handling.',
      'Built web/mobile applications with Java, Python, Node.js, Angular, React, React Native, REST/GraphQL APIs.',
    ],
    contributions: [
      'Led full-stack development, recruitment, client engagement, and architecture design',
      'Enterprise platform integrations with secure PII/PHI data handling',
    ],
    tech: ['React', 'Angular', 'Node.js', 'Java', 'React Native', 'GraphQL'],
  },
]

export const education = [
  {
    degree: 'Doctor of Philosophy (Data Science)',
    institution: 'School of IT, Deakin University',
    location: 'Australia',
  },
  {
    degree: 'Doctor of Philosophy (Applied Mathematics)',
    institution: 'Centre for Fluid and Complex Systems, Coventry University',
    location: 'UK',
  },
  {
    degree: 'Master of Science (Big Data Analytics)',
    institution: 'Robert Gordon University',
    location: 'UK',
    period: 'Jan 2020 — Sep 2021',
    detail: 'Completed with Distinction. Deep learning computer vision for player tracking in tennis and cricket.',
  },
]

export const awards = [
  {
    title: 'Deakin School of IT Higher Degree by Research Award 2025',
    detail: 'Outstanding research performance in 2025',
  },
  {
    title: 'Most Distinguished Research Paper — ISACE 2025',
    detail: 'Fractal Analysis of Ball Movement Maps for Team Performance Evaluation in Football',
  },
  {
    title: 'Deakin HDR Scholarship 2022–2025',
    detail: 'Prestigious competitive scholarship covering tuition and living expenses',
  },
  {
    title: 'Best Paper Award — ISIS 2017',
    detail: 'Dynamic Ontology for Medical Domain Using Web Data',
  },
]

export const certificates = [
  'Microsoft Certified: Azure AI Fundamentals (AI-900)',
]

export const research = {
  summary:
    'Conducted research in ML, Deep Learning, Time-Series Analysis, LLMs, Computer Vision, Knowledge-Based Systems, and Statistical Analysis across sports analytics, medical, cybersecurity, and aviation domains.',
  highlights: [
    '15+ first-author ML research publications in reputed journals and conferences',
    '2 best paper awards at international conferences',
    'Research spanning sports analytics, medical AI, cybersecurity, and aviation',
  ],
}

export const skillCategories = [
  {
    name: 'AI/ML Engineering',
    skills: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Reinforcement Learning',
      'Generative AI',
      'Agentic AI',
      'NLP',
      'Computer Vision',
      'Time-Series Forecasting',
      'Recommendation Systems',
      'Semantic Search',
      'Vector Search',
    ],
  },
  {
    name: 'Generative AI & LLMs',
    skills: [
      'OpenAI SDK',
      'Anthropic SDK',
      'Google GenAI',
      'Vertex AI',
      'LLaMA',
      'BERT',
      'Hugging Face',
      'vLLM',
      'LiteLLM',
      'LangChain',
      'LangGraph',
      'PydanticAI',
      'RAG',
      'GraphRAG',
      'MCP',
      'Multi-Agent Systems',
      'ReAct',
      'Tool Calling',
      'Structured Outputs',
      'Prompt Engineering',
      'LLM Fine-tuning',
      'Langfuse',
      'LangSmith',
      'Mem0',
    ],
  },
  {
    name: 'Practices',
    skills: [
      'Responsible AI',
      'AI Governance',
      'AI Safety',
      'LLMOps',
      'MLOps',
      'Observability',
      'Human-in-the-Loop',
      'PII/PHI Protection',
      'GDPR Compliance',
      'A/B Testing',
      'Production Monitoring',
    ],
  },
  {
    name: 'Full Stack',
    skills: [
      'React',
      'Node.js',
      'TypeScript',
      'Angular',
      'React Native',
      'FastAPI',
      'REST APIs',
      'WebSockets',
      'Dashboards',
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      'AWS',
      'AWS Bedrock',
      'OpenSearch',
      'Lambda',
      'ECS/EKS',
      'GCP',
      'Azure AI',
      'Terraform',
      'Docker',
      'Kubernetes',
      'GKE',
      'ArgoCD',
      'GitOps',
      'CI/CD',
      'Microservices',
      'Serverless',
    ],
  },
  {
    name: 'Data & ML Platforms',
    skills: [
      'Databricks',
      'Snowflake',
      'PostgreSQL',
      'MongoDB',
      'Neo4j',
      'Redis',
      'Pinecone',
      'ChromaDB',
      'Feature Pipelines',
      'Inference Pipelines',
    ],
  },
  {
    name: 'Languages & Libraries',
    skills: [
      'Python',
      'Java',
      'R',
      'PyTorch',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'OpenCV',
      'NumPy',
      'Pandas',
      'Plotly',
    ],
  },
]
