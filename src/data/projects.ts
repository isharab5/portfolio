export type NavItem =
  | { label: string; path: string }
  | {
      label: string
      path: string
      children: { label: string; path: string }[]
    }

export const mainNav: NavItem[] = [
  { label: 'Profile', path: '/' },
  {
    label: 'Gen-AI',
    path: '/agentic-ai',
    children: [
      { label: 'Multi-Agentic Workflow Projects', path: '/agentic-ai/multi-agent' },
      { label: 'LLM Fine-Tuning Projects', path: '/agentic-ai/llm-finetuning' },
    ],
  },
  {
    label: 'Machine Learning',
    path: '/machine-learning',
    children: [
      { label: 'Time-Series Forecasting', path: '/machine-learning/time-series-forecasting' },
      { label: 'Computer Vision', path: '/machine-learning/computer-vision' },
      { label: 'Natural Language Processing', path: '/machine-learning/nlp' },
    ],
  },
  {
    label: 'Full-Stack Development',
    path: '/full-stack',
    children: [
      { label: 'Mobile App Projects', path: '/full-stack/mobile' },
      { label: 'Web App Projects', path: '/full-stack/web' },
    ],
  },
]

export const multiAgentProjects = [
  {
    id: 'lab-n70-lms',
    title: 'Multi-Agentic LMS System',
    org: 'Lab N70 (UNE)',
    role: 'Senior AI/ML Engineer',
    period: 'Jun 2025 — Present',
    tagline: 'Enterprise multi-agent learning management system with personalized GenAI experiences',
    overview:
      'Developed an AI/ML-assisted multi-agent learning management system delivering personalized learning experiences using production-grade GenAI/ML architectures across AWS AI/ML environments. Collaborated with academic, business, and technical stakeholders to conduct solution discovery workshops and translate business objectives into scalable AI solutions.',
    architecture: [
      'LangGraph orchestration for multi-agent workflows with collaborative reasoning and tool use',
      'AWS Bedrock LLM applications with SageMaker, Lambda, ECS/EKS, LiteLLM multi-model routing, and OpenSearch',
      'RAG and GraphRAG pipelines with shared OpenSearch knowledge base infrastructure across departments',
      'PydanticAI for structured output validation, MCP integration, and Mem0 for contextual memory',
      'Langfuse observability, prompt caching, AI guardrails, and per-lesson LLM selection statistical test framework',
    ],
    contributions: [
      {
        title: 'Per-Lesson LLM Selection Framework',
        detail:
          'Proposed and developed a data-driven statistical LLM test framework for selecting the optimal LLM per lesson context, improving AI response quality and latency by 20–30%.',
      },
      {
        title: 'Parallelized Multi-Agent Framework',
        detail:
          'Implemented parallelized multi-agent orchestration with race-condition management and prompt caching, reducing Time-to-First-Token (TTFT) latency by 30–40%.',
      },
      {
        title: 'RAG Retrieval Optimization',
        detail:
          'Improved OpenSearch RAG retrieval quality through query optimization, Amazon Bedrock re-ranking, and metadata filtering — reducing infrastructure costs via intelligent caching and shared knowledge base infrastructure.',
      },
      {
        title: 'Student Analytics & Forecasting',
        detail:
          'Developed a time-series student analytics and forecasting framework using statistical modeling to identify underperforming and at-risk students early for timely interventions.',
      },
    ],
    ops: [
      'LLMOps/MLOps: prompt management, model versioning, evaluation pipelines',
      'Observability with Langfuse and LLM-as-a-Judge evaluation',
      'AI governance, data sovereignty, responsible AI, and A/B testing',
      'Terraform-based cloud infrastructure automation and CI/CD',
    ],
    tech: [
      'AWS Bedrock',
      'LangGraph',
      'SageMaker',
      'OpenSearch',
      'Amazon Bedrock Knowledge Bases',
      'Lambda',
      'ECS/EKS',
      'Terraform',
      'PydanticAI',
      'MCP',
      'GraphRAG',
      'Langfuse',
      'LiteLLM',
      'Mem0',
    ],
  },
  {
    id: 'backin5-travel',
    title: 'Agentic Travel Planner',
    org: 'Backin5',
    role: 'Founding Lead Engineer',
    period: 'Jun 2024 — Present',
    tagline: 'AI-driven travel itinerary generation, flight & accommodation booking platform',
    overview:
      'Serving as Founding Lead Engineer at a Google for Startups-supported and RMIT LaunchHUB award-winning Delaware startup, leading offshore engineering to deliver an AI-driven travel platform. The system generates personalized itineraries, searches flights and accommodations in real time, and completes bookings through agentic workflows.',
    architecture: [
      'LangGraph-based multi-agent workflows with tool-calling and state-driven orchestration',
      'Personalized travel planning agents coordinating search, recommendation, and booking',
      'MCP servers for real-time flight API integration and itinerary workflow optimization',
      'Recommendation engines with production ML training, deployment, and monitoring',
      'Mobile applications (iOS, Android) with administrative dashboards and GDPR compliance',
    ],
    contributions: [
      {
        title: 'End-to-End AI Platform',
        detail:
          'Architected and led development of the full platform — mobile apps, recommendation engines, multi-agent services, GenAI pipelines, MCP servers, cloud infrastructure, and admin dashboards.',
      },
      {
        title: 'Cloud & MLOps on GCP',
        detail:
          'Led the cloud and AI lifecycle on GCP using Terraform, GKE, and ArgoCD with MLOps/LLMOps model CI/CD pipelines for automated experimentation, validation, and deployment.',
      },
      {
        title: 'Leadership & Fundraising',
        detail:
          'Contributed to engineering recruitment, team leadership, investor engagement, fundraising, and AI research initiatives.',
      },
    ],
    ops: [
      'GitOps deployment with ArgoCD on GKE',
      'Model CI/CD pipelines for experimentation and production rollout',
      'GDPR-compliant data privacy and secure PII handling',
      'Real-time API integration for flights, accommodations, and itinerary workflows',
    ],
    tech: [
      'LangGraph',
      'GCP',
      'GKE',
      'ArgoCD',
      'Terraform',
      'MCP',
      'React Native',
      'FastAPI',
      'Recommendation Systems',
    ],
  },
]

export const nlpProjects = [
  {
    id: 'medical-disease-ontology',
    title: 'Self-evolving Disease Ontology for Medical Domain Based on Web',
    org: 'University of Moratuwa',
    role: 'First Author',
    period: 'Dec 2017',
    journal: 'Int. J. Fuzzy Logic and Intelligent Systems · 17(4): 307–314',
    tagline:
      'Dynamically evolving biomedical ontology with NER, relationship extraction, and probabilistic SPARQL query retrieval',
    abstract:
      'Proposes a mechanism to generate a dynamically evolving ontology for the biomedical domain that learns from web articles and patient history records. The system extracts disease–symptom relationships from PubMed, CDC, and MedicineNet sources, annotates each relationship with probabilistic occurrence values updated on every entry, and answers natural-language user queries via dynamically generated SPARQL queries.',
    problem: [
      'Medical knowledge evolves rapidly as new diseases, symptoms, and biomedical entities are discovered',
      'Static dictionary-based entity recognition lacks accuracy as new terms emerge over time',
      'Existing medical ontologies require manual updates and cannot self-learn from patient records or web data',
    ],
    methodology: [
      'Train a biomedical Named Entity Tagger on a 10,000+ word corpus using IOB encoding and bigram tagging (81.8% accuracy)',
      'Extract relationship triples from web articles using POS tagging, regular expressions, and coreference resolution',
      'Build and expand an OWL ontology dynamically — updating probabilistic annotations on every patient or web entry',
      'Classify user questions with a Naïve Bayes question classifier and retrieve answers via dynamic SPARQL queries',
      'Apply threshold-based filtering to surface stable, high-probability disease–symptom relationships over time',
    ],
    paperUrl: 'https://www.ijfis.org/journal/view.html?volume=17&number=4&spage=307',
    doi: 'https://doi.org/10.5391/IJFIS.2017.17.4.307',
    tech: [
      'Named Entity Recognition',
      'IOB Tagging',
      'Relationship Extraction',
      'OWL',
      'SPARQL',
      'Naïve Bayes',
      'Text Mining',
      'PubMed',
    ],
  },
]

export const llmFineTuningProjects = [
  {
    id: 'cyber-llm',
    title: 'Semi-Supervised LLM for Cybersecurity Attack Detection',
    org: 'Deakin University',
    role: 'Research Fellow (Cyber Security Data)',
    period: 'Sep 2022 — Sep 2025',
    tagline: 'LLM + VAE fusion framework with 1-SVM anomaly detection for cyber threat identification',
    abstract:
      'A semi-supervised cybersecurity detection framework that combines fine-tuned Large Language Models with a Variational Autoencoder (VAE) to detect anomalies in network and system telemetry. Input data is processed in parallel through an LLM branch producing text embeddings and a VAE branch learning latent representations. Fused embeddings G[z;e] are fed into a One-Class SVM (1-SVM) for intelligent attack detection with limited labeled data.',
    problem: [
      'Cyber-physical systems and industrial IoT networks face growing attack surfaces with limited labeled intrusion data',
      'Traditional signature-based detection fails against novel and zero-day attacks',
      'Isolated feature representations from single-model approaches miss complementary semantic and structural patterns in security logs',
    ],
    methodology: [
      'Fine-tune LLaMA and DistilBERT models for cyber attack classification on network and security telemetry',
      'Feed input security telemetry (x) in parallel to a fine-tuned LLM and a Variational Autoencoder (VAE)',
      'LLM branch: generate contextual text embeddings (e) from tokenized network logs and security event sequences',
      'VAE branch: encoder q(z|x) → reparameterization (z = μ + σ ⊙ ε) → decoder p(x|z) to learn latent vector (z) and reconstructed output (X′)',
      'Fuse LLM text embeddings and VAE latent vectors via concatenation into unified representation G[z;e]',
      'Apply One-Class SVM (1-SVM) on fused embeddings for semi-supervised anomaly detection and attack classification',
      'Visualize embedding distributions with t-SNE across LLM, VAE, and fused feature spaces for interpretability',
    ],
    figures: {
      framework: '/projects/cyber-framework.png',
      tsneEmbeddings: '/projects/cyber-tsne-embeddings.png',
      tsneCaption:
        't-SNE plot results with text embeddings extracted from VAE, BERT, Llama3 and OpenAI TE3S. Benigns are marked in purple and attacks are marked in yellow.',
      tsneFused: '/projects/cyber-tsne-fused.png',
      tsneFusedCaption:
        't-SNE plots of fused text embeddings: Benign in purple and attacks in yellow.',
    },
    tech: ['LLM', 'VAE', 'LLaMA', 'DistilBERT', 'BERT', 'Llama3', 'OpenAI TE3S', '1-SVM', 'Hugging Face', 'PyTorch', 't-SNE', 'CICIDS 2017', 'UNSW-NB15'],
  },
]

export const mlProjects = [
  {
    id: 'cloud-cover-forecasting',
    categories: ['time-series-forecasting', 'computer-vision'] as ('time-series-forecasting' | 'computer-vision' | 'nlp')[],
    title: 'Deep Learning Based Cloud Cover Forecasting',
    detail:
      'Deep learning pipeline for short-term Total Cloud Cover (TCC) forecasting using satellite imagery. A region-based Otsu\'s segmentation method extracts cloud cover from satellite image sequences, which are converted into a time-series dataset. LSTM, bi-directional LSTM, and CNN-LSTM models are trained and evaluated for accurate short-term TCC prediction — bridging computer vision segmentation with deep learning time-series forecasting.',
    image: '/projects/cloud-cover-forecasting.gif',
    imageCaption: 'Satellite imagery + time series forecasting — from cloud segmentation to TCC prediction',
    tech: ['LSTM', 'Bi-LSTM', 'CNN-LSTM', 'Otsu Segmentation', 'Satellite Imagery', 'Time-Series', 'Deep Learning'],
  },
  {
    id: 'xg-modeling',
    category: 'time-series-forecasting' as const,
    title: 'Multi-Event Time-Series xG Modeling',
    detail:
      'Built a multi-event expected goals (xG) pipeline that uses event sequences preceding each shot to improve goal-scoring probability prediction. Engineered time-series features including advancement factor and player position column, and trained random forest models on multi-event sequences from top-tier European and international competition data. Including up to three preceding events significantly improved performance over single-event xG baselines (p < 0.05), reaching ROC-AUC up to 0.872 on validation. Identified high-xG patterns include build-up from the sides of the 18-yard box, shots from in front of goal, and successful passes to the far post.',
    image: '/projects/xg-probability-scoring.png',
    imageCaption:
      'Spatial probability of scoring across the attacking third for preceding event sequences n = 0, 1, and 2 — showing how multi-event context shifts xG distribution across the penalty area',
    tech: ['Random Forest', 'Python', 'Time-Series Analysis', 'xG Modeling', 'Event Sequences', 'Sports Analytics'],
  },
  {
    id: 'chaos-forecasting',
    category: 'time-series-forecasting' as const,
    title: 'Chaos-Based Spatiotemporal Performance Forecasting',
    detail:
      'Built an entropy-based time-series pipeline for team performance evaluation through spatial randomness in ball movement. Developed EDRan (relative spatial Event Distribution Randomness per unit time) — measuring unpredictable event distribution across 30 pitch regions at ten intervals per match using region-based cumulative possession matrices and Shannon entropy differences. Analysis of 552 men\'s and 365 women\'s matches showed winning teams with more dispersed, highly random event distribution in early phases, shifting to compact play late. A generalized linear model on EDRan temporal features reached ~80% match outcome classification accuracy with statistically significant coefficients, independent of player positions and goal locations.',
    image: '/projects/chaos-edran-regions.png',
    imageCaption:
      'Region-based cumulative possession heatmaps across ten time intervals (t₁–t₁₀) for Juventus vs Barcelona — tracking spatial event distribution and regions utilized per interval for EDRan analysis',
    tech: ['Shannon Entropy', 'EDRan', 'GLM', 'Python', 'Time-Series', 'Spatiotemporal Analysis', 'Sports Analytics'],
  },
  {
    id: 'bcos-open-space',
    category: 'time-series-forecasting' as const,
    title: 'Ball Carrier Open-Space (BCOS) Time-Series Analysis',
    detail:
      'Built Ball Carrier Open Space (BCOS) — a time-series metric for open space available to the ball carrier across defensive, central, and attacking thirds. Developed a pipeline to quantify ball-carrier space from player tracking data, evaluated temporal patterns with correlation analysis, and trained classification models for match-winner prediction. BCOS in the central and attacking thirds drove the strongest outcomes; first-half performance was more decisive than second-half. Baseline models reached 80.7% accuracy; the weighted BCOS (wBCOS) variant — weighting pitch thirds by contribution to positive outcomes — achieved 82.5% accuracy, outperforming published match-winner prediction benchmarks.',
    image: '/projects/bcos-open-space.png',
    imageCaption:
      'From broadcast frame to pitch coordinates — visible area mapping, player localization, and open-space quantification for the ball carrier relative to opposition positioning',
    tech: ['BCOS', 'wBCOS', 'Random Forest', 'Python', 'Time-Series', 'Open Space', 'Sports Analytics'],
  },
  {
    id: 'edranic-consistency',
    category: 'time-series-forecasting' as const,
    title: 'EDRanIc: Event Distribution Consistency Analysis',
    detail:
      'Developed EDRanIc (EDRan Inconsistency) — a time-series metric measuring how spatial event distribution randomness shifts across successive in-match intervals. Built region-based cumulative possession matrices and applied relative entropy to compare team randomness between time periods. Match-winning performances showed a negative correlation with randomness inconsistency; models trained on EDRanIc temporal features reached 79% match-winner prediction accuracy. Winning teams maintained more consistent EDRan in early phases, with consistency dropping late as leading teams consolidated defensively.',
    tech: ['EDRanIc', 'Relative Entropy', 'Random Forest', 'Python', 'Time-Series', 'Sports Analytics'],
  },
  {
    id: 'fractal-ball-complexity',
    category: 'time-series-forecasting' as const,
    title: 'Fractal Ball Movement Complexity Forecasting',
    detail:
      'Built a time-series pipeline to quantify spatial complexity of team ball movement as an offensive performance signal. Generated two-dimensional ball movement maps per team across ten in-match windows using Bresenham line rasterization, then estimated fractal dimension via box-counting on a 120×80 pitch grid. Higher spatial complexity aligned with match success, especially early in games. Multi-scale analysis at coarse, mid, and fine resolutions showed broader-scale complexity tracked winning outcomes while fine-scale complexity inversely related to success. A Random Forest classifier using only fractal temporal features achieved AUC–ROC 0.818, F1 0.74, and 74.4% accuracy across 2,336 elite men\'s matches.',
    image: '/projects/fractal-ball-movement.png',
    imageCaption:
      'Two-dimensional ball movement maps per team — pass and carry trajectories rasterized on a pitch grid for fractal dimension estimation via box-counting',
    tech: ['Fractal Dimension', 'Box-Counting', 'Multi-Scale Analysis', 'Random Forest', 'Python', 'Time-Series', 'Sports Analytics'],
  },
  {
    id: 'renyi-edran-optimization',
    category: 'time-series-forecasting' as const,
    title: 'Rényi Entropy Optimization of Event Distribution Randomness',
    detail:
      'Compared three approaches to quantifying event distribution randomness (EDRan): emphasizing dominant pitch regions, weighting all regions equally, and standard Shannon entropy. Implemented Rényi entropy with varying α values over region-based cumulative possession matrices across 30 pitch regions and ten time intervals. Max entropy (α → 0), treating all field regions equally including rarely used areas, showed the strongest correlation with match-winning performance. Random Forest models at α = 0 and α = 0.5 significantly beat Shannon entropy (α = 1) baselines on men\'s data, with the best configuration reaching 80.61% match-winner prediction accuracy using only ten temporal EDRan features.',
    tech: ['Rényi Entropy', 'EDRan', 'Random Forest', 'Python', 'Time-Series', 'Sports Analytics'],
  },
  {
    id: 'realtime-match-outcome',
    category: 'time-series-forecasting' as const,
    title: 'Real-Time Match Outcome Forecasting',
    detail:
      'Built a real-time time-series pipeline for in-match outcome prediction that updates win/draw/loss probabilities as events unfold across successive match intervals. Combined temporally extracted features — spatial event randomness, ball-carrier open space, fractal movement complexity, and distribution consistency — into a sequential forecasting model. Evaluated with Ranked Probability Score (RPS) against football betting benchmark systems; the model outperformed published benchmarks on outcome ranking and probabilistic calibration, showing that cumulative in-game temporal metrics outperform static pre-match or score-only baselines for live forecasting.',
    tech: ['Ranked Probability Score', 'PyTorch', 'Python', 'Time-Series', 'Real-Time Forecasting', 'Sports Analytics'],
  },
  {
    id: 'tennis-broadcast-tracking',
    category: 'computer-vision' as const,
    title: 'Broadcast Video Player Tracking and Stroke Identification in Tennis',
    detail:
      'Novel computer vision pipeline for recognising tennis strokes from broadcast and consumer-grade match video. OpenPose generates stick-figure overlays from player pose keypoints, which are transformed into spatiotemporal distance-based features capturing racquet-side motion relative to the trunk. LSTM, bidirectional LSTM, and CNN-LSTM classifiers identify forehand, backhand, serve, and no-stroke activity in rolling 27-frame windows — enabling automated video indexing and augmented broadcasting without expert-driven feature engineering. Trained models achieved 97–100% multi-class classification accuracy on publicly available tennis footage.',
    image: '/projects/tennis.gif',
    video: '/projects/tennis.mp4',
    imageCaption: 'Stick figure overlays and stroke classification from broadcast tennis video',
    tech: ['OpenPose', 'LSTM', 'Bi-LSTM', 'CNN-LSTM', 'OpenCV', 'Computer Vision', 'Deep Learning'],
  },
  {
    id: 'cricket-batting-strokes',
    category: 'computer-vision' as const,
    title: 'Broadcast Video Stroke Classification in Cricket Batting',
    detail:
      'Computer vision pipeline for classifying front-foot and back-foot batting strokes from broadcast cricket video. Spatiotemporal time-series features are extracted from stick-figure overlays generated via pose estimation, forming a feature space that captures batsman movement patterns without manual expert labelling. LSTM and bidirectional LSTM networks classify stroke type on a dataset of 63 strokes from publicly available footage, achieving 100% accuracy on the test split — supporting sport analytics, augmented coaching systems, and automated body-segment annotation for enhanced cricket viewing.',
    video: '/projects/cricket.mp4',
    imageCaption: 'Front-foot and back-foot stroke classification from broadcast cricket batting video',
    tech: ['OpenPose', 'LSTM', 'Bi-LSTM', 'Computer Vision', 'Sports Analytics', 'Deep Learning'],
  },
]

export const fullStackProjects = [
  {
    id: 'backin5-mobile',
    category: 'mobile' as const,
    title: 'Backin5 Travel Mobile Apps',
    org: 'Backin5',
    role: 'Founding Lead Engineer',
    period: 'Jun 2024 — Present',
    detail:
      'Developed iOS and Android mobile applications for an AI-driven travel platform — personalized itinerary generation, real-time flight search, hotel booking, and accommodation reservations with GDPR-compliant data privacy. Built in-app subscription flows, social media features for sharing and discovery, and messaging with direct and group chat. Integrated flight and hotel booking end-to-end within the app alongside the core travel planning experience.',
    tech: ['React Native', 'iOS', 'Android', 'GraphQL', 'In-App Subscriptions', 'GDPR'],
  },
  {
    id: 'axiata-payments',
    category: 'mobile' as const,
    title: 'Axiata Mobile Payment Systems',
    org: 'Axiata Labs',
    role: 'Senior Full-Stack Engineer',
    period: 'Jul 2017 — Sep 2022',
    detail:
      'Built mobile payment and fintech integrations for Axiata Labs — the innovation arm of Axiata Group, one of Asia\'s largest telecommunications providers with operations across Malaysia, Indonesia, Bangladesh, Sri Lanka, Cambodia, and Nepal. Developed React Native applications enabling secure mobile wallet, bill payment, and digital transaction flows for millions of subscribers across Southeast Asian markets. Integrated carrier billing, payment gateways, and telco backend systems with enterprise-grade security and compliance for high-volume financial transactions.',
    tech: ['React Native', 'Node.js', 'Fintech', 'Mobile Payments', 'Telco Integration'],
  },
  {
    id: 'ny-life',
    category: 'web' as const,
    title: 'New York Life Digital Health Platform',
    org: 'Virtusa',
    role: 'Senior Full-Stack Engineer',
    period: 'Jul 2017 — Sep 2022',
    detail:
      'Developed components for New York Life Insurance\'s Digital Health platform with secure handling of PII/PHI data. Built frontend and backend integrations across enterprise health workflows with compliance-focused architecture.',
    tech: ['React', 'Node.js', 'GraphQL', 'PII/PHI Security'],
  },
  {
    id: 'wso2-choreo',
    category: 'web' as const,
    title: 'WSO2 Choreo Platform',
    org: 'WSO2',
    role: 'Senior Full-Stack Engineer',
    period: 'Jul 2017 — Sep 2022',
    detail:
      'Developed full-stack components on WSO2 Choreo — an enterprise integration and API management platform. Built web services with Java, Node.js, Angular, and TypeScript, contributed to cross-functional delivery, and participated in architecture design discussions.',
    tech: ['Java', 'Node.js', 'Angular', 'TypeScript', 'REST APIs'],
  },
  {
    id: 'wso2-support-portal',
    category: 'web' as const,
    title: 'WSO2 Support Portal',
    org: 'WSO2',
    role: 'Senior Full-Stack Engineer',
    period: 'Jul 2017 — Sep 2022',
    detail:
      'Developed the WSO2 Support Portal — a customer-facing web platform for enterprise product support, ticket management, documentation access, and community resources. Built responsive frontend interfaces and backend integrations connecting support workflows, knowledge base content, and customer account systems for WSO2\'s global open-source and enterprise user base.',
    tech: ['React', 'Node.js', 'TypeScript', 'REST APIs', 'Enterprise Support'],
  },
]

export const mlCategoryMeta = {
  'time-series-forecasting': {
    title: 'Time-Series',
    highlight: 'Forecasting',
    description:
      'Spatio-temporal football analytics projects — multi-event xG modeling, entropy-based team performance metrics, ball-carrier open space, fractal movement complexity, and live match outcome forecasting.',
  },
  'computer-vision': {
    title: 'Computer',
    highlight: 'Vision',
    description:
      'Deep learning computer vision for player tracking, tactical movement analysis, and spatio-temporal sports data using PyTorch, OpenCV, and CUDA.',
  },
  nlp: {
    title: 'Natural Language',
    highlight: 'Processing',
    description:
      'Biomedical text mining, named entity recognition, and LLM fine-tuning — from self-evolving medical ontologies to semi-supervised cybersecurity language models.',
  },
} as const

export const fullStackCategoryMeta = {
  mobile: {
    title: 'Mobile App',
    highlight: 'Projects',
    description:
      'Cross-platform mobile applications for fintech, travel, and enterprise — React Native, iOS, and Android with secure data handling.',
  },
  web: {
    title: 'Web App',
    highlight: 'Projects',
    description:
      'Enterprise web platforms across digital health, integration, API management, and customer support using React, Angular, and TypeScript.',
  },
} as const

export const agenticCategoryMeta = {
  'multi-agent': {
    title: 'Multi-Agentic',
    highlight: 'Workflow Projects',
    description:
      'Production multi-agent systems with LangGraph orchestration, RAG pipelines, and tool-calling across enterprise LMS and travel platforms.',
  },
  'llm-finetuning': {
    title: 'LLM Fine-Tuning',
    highlight: 'Projects',
    description:
      'Fine-tuned transformer models and semi-supervised learning frameworks for cybersecurity attack detection and intelligent security monitoring.',
  },
} as const
