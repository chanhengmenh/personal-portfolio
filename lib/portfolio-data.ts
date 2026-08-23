export const profileData = {
  name: 'Chanheng Menh',
  avatar: '/profile.jpg',
  email: 'chanhengmenh@gmail.com',
  phone: '+85570494393',
  location: 'Ruessey Keo, Phnom Penh, Cambodia',
  social: {
    github: 'https://github.com/chanhengmenh',
    linkedin: 'https://www.linkedin.com/in/chanheng-menh',
    credly: 'https://www.credly.com/users/chanheng-menh/edit/badges/credly',
  },
}

export const aboutData = {
  description: [
    "I'm a Digital Infrastructure graduate from American University of Phnom Penh (AUPP), working across data/AI and DevOps — two areas that overlap more than most people expect. On the ML side, I build and deploy models using Python, PyTorch, and Scikit-learn, serving them through FastAPI on cloud infrastructure. On the DevOps side, I provision infrastructure with Terraform, set up CI/CD pipelines in Jenkins, monitor systems with Grafana and Prometheus, and maintain code quality with SonarQube — all on AWS.",
    "I'm comfortable across the stack without pretending to be a frontend engineer. I can spin up an EC2 instance, deploy a containerized model, hook it into a pipeline, and watch it in a dashboard — end to end, without needing someone else to glue the pieces together.",
    "On the IT side, I've handled live A/V and technical troubleshooting at a large international conference, and I'm at home in Linux environments.",
    "I'm looking for roles in DevOps, data engineering, AI/ML, or IT operations — anywhere technical ownership matters and there's room to keep building."
  ],
  services: [
    {
      icon: 'Code',
      title: 'Frontend Development',
      description: 'Building modern, responsive web applications with React, Next.js, and TypeScript.',
    },
    {
      icon: 'Zap',
      title: 'Backend Development',
      description: 'Creating robust APIs and server-side solutions with Node.js and modern frameworks.',
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Development',
      description: 'Professional development of mobile applications with React Native and modern tools.',
    },
    {
      icon: 'PenTool',
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces that enhance user experience.',
    },
  ],
}

export const resumeData = {
  education: [
    {
      title: 'American University of Phnom Penh, Phnom Penh',
      period: 'Feb 2023 - May 2026',
      description: 'Bachelor of Science in Digital Infrastructure',
      schoolUrl: 'https://www.aupp.edu.kh/',
      degreeUrl: 'https://www.aupp.edu.kh/faculty-of-digital-technologies/bachelor-of-science-in-digital-infrastructure/',
    },
  ],
  experience: [
    {
      title: 'UI/UX & Frontend Developer Intern',
      company: 'SpaceGap',
      companyUrl: 'https://website.spacegap.net/',
      period: 'May 2025 — Jul 2025',
      description:
        'Collaborated in a team of 5 to design and deploy 2 web application pages for a student management platform. Designed key platform modules including student dashboard, event scheduling, reports and analytics, user profile, and notification systems. Developed interactive frontend components, calendar, and to-do list using Bootstrap for responsive UI architecture.',
    },
    {
      title: 'Digital Content Creator Intern',
      company: 'Spring Education Center',
      companyUrl: 'https://www.linkedin.com/company/springeducationcenter/?originalSubdomain=kh',
      period: 'Jul 2023 — Aug 2023',
      description:
        'Produced and published weekly video content across TikTok and Facebook to drive brand awareness for an early-stage education startup. Reached over 4,000 viewers per video, supporting the centre\'s initial community growth and audience engagement.',
    },
  ], 
  skills: [
    { name: 'Web Design', level: 90 },
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 85 },
    { name: 'Database Design', level: 80 },
  ],
}

export const extracurricularData = [
  {
    title: 'Club President — Chess Club',
    organization: 'American University of Phnom Penh (AUPP)',
    period: 'Jan 2026 — May 2026',
    description: [
      'Facilitated weekly sessions for 15–20 members, cultivating a campus culture of analytical problem-solving and strategic thinking.',
      'Directed the planning and execution of the AUPP Chess Tournament, managing event logistics, player brackets, and promotional outreach.',
    ],
  },
  {
    title: 'Mentor',
    organization: 'AUPP Student Affairs Mentorship Program',
    period: 'Sep 2025 — May 2026',
    description: [
      'Guided incoming freshmen through their university transition and academic planning, while delivering targeted academic support in AI and machine learning coursework.',
    ],
  },
  {
    title: 'Member',
    organization: 'Global Shapers Phnom Penh Community',
    period: 'Jan 2024 — Present',
    description: [
      'Directed end-to-end digital campaigns for the Riel Hackathon for Kids, scaling event visibility and impact.',
      'Orchestrated site logistics, vendor coordination, and physical infrastructure for community events.',
      'Collaborated with cross-functional teams to conceptualize and plan local outreach initiatives.',
    ],
  },
  {
    title: 'IT Support Volunteer',
    organization: '20th CamTESOL',
    period: '2024',
    description: [
      'Managed Audio/Visual (A/V) setup and provided live technical troubleshooting for a dedicated presentation room during a major international conference.',
    ],
  },
]

export const skillsData = {
  languages: [
    { name: 'Python (FastAPI, SQLAlchemy)', icon: '/python.png' },
    { name: 'Node.js', icon: '/node.png' },
    { name: 'Express.js' },
    { name: 'PostgreSQL', icon: '/postgresql.png' },
    { name: 'RESTful API Design' },
  ],
  analytics: [
    { name: 'Excel', icon: '/excel.png' },
    { name: 'Power BI', icon: '/powerbi.png' },
  ],
  aiMl: [
    { name: 'PyTorch', icon: '/pytorch-dark.png', iconDark: '/pytorch-light.png' },
    { name: 'TensorFlow', icon: '/tensorflow.png' },
    { name: 'Scikit-learn', icon: '/scikit-learn.png' },
    { name: 'YOLO', icon: '/ultralytics-yolo.png' },
    { name: 'Pandas', icon: '/pandas.png' },
    { name: 'NumPy', icon: '/numpy.png' },
    { name: 'Computer Vision' },
    { name: 'Natural Language Processing' },
  ],
  infrastructure: [
    { name: 'Docker', icon: '/docker.png' },
    { name: 'Kubernetes', icon: '/kubernetes.png' },
    { name: 'Jenkins', icon: '/jenkins.png' },
    { name: 'GitHub Actions', icon: '/github.png' },
    { name: 'SonarQube', icon: '/sonarqube.png' },
    { name: 'Linux (Ubuntu/Fedora)', icon: '/linux.png' },
    { name: 'AWS (EC2, S3, RDS)', icon: '/aws.png' },
    { name: 'PostgreSQL', icon: '/postgresql.png' },
    { name: 'MongoDB', icon: '/mongodb.png' },
    { name: 'DynamoDB' },
    { name: 'Firebase', icon: '/firebase.png' },
    { name: 'Supabase', icon: '/supabase.png' },
    { name: 'RBAC' },
    { name: 'Microservices' },
    { name: 'CI/CD' },
    { name: 'System Design' },
  ]
}

export const projectsData = [
  {
    title: 'NLP Discord Moderation System',
    description:
      'Deep learning NLP pipeline using RoBERTa for automated Discord text moderation and sequence classification, with Optuna hyperparameter tuning to optimize learning rate, batch size, and epochs.',
    tags: ['RoBERTa', 'PyTorch', 'Optuna', 'NLP'],
    githubUrl: 'https://github.com/chanhengmenh/discord-moderation-system.git',
    imageUrl: '/discord-moderation.jpg',
  },
  {
    title: 'Public School Management System',
    description:
      'Full-stack educational platform with a Next.js frontend and FastAPI backend, featuring a behavior analytics engine, JWT + RBAC authentication, and PostgreSQL on Railway with internal networking for low latency.',
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'Vercel', 'Railway'],
    githubUrl: 'https://github.com/chanhengmenh/public-school-management-system.git',
    imageUrl: '/public-school.jpg',
  },
  {
    title: 'Spam Classification Pipeline',
    description:
      'ML pipeline benchmarking tree-based (Random Forest, Gradient Boosting) and linear (Logistic Regression, Naive Bayes) models with tailored preprocessing per architecture, selected by F1-score on imbalanced data.',
    tags: ['Scikit-learn', 'Pandas', 'Python'],
    githubUrl: 'https://github.com/chanhengmenh/ml-final-spam-email-detection.git',
    imageUrl: '/spam_detection.png',
  },
  {
    title: 'AUPP Intelligent Chatbot',
    description:
      'Fully local university chatbot combining RAG, knowledge distillation, and fine-tuning on 2,500+ Q&A pairs using Unsloth + LoRA (4-bit). Exported as GGUF, served via Ollama, with a Streamlit UI featuring streaming and source citations.',
    tags: ['Llama 3.1', 'Ollama', 'ChromaDB', 'Streamlit', 'Unsloth'],
    githubUrl: 'https://github.com/chanhengmenh/aupp_chatbot.git',
  },
  {
    title: 'AUPP LMS CI/CD Pipeline',
    description:
      'Designed and implemented a full CI/CD pipeline for a university LMS, automating code quality checks, security scanning, and deployment to AWS EC2. Integrated SonarQube and Trivy to enforce quality gates and block deployments on critical vulnerabilities. Provisioned cloud infrastructure with Terraform and monitored live deployments via Prometheus and Grafana dashboards.',
    tags: ['Jenkins', 'GitHub Actions', 'SonarQube', 'Trivy', 'Docker', 'Terraform', 'Prometheus', 'Grafana', 'AWS EC2'],
    githubUrl: 'https://github.com/chanhengmenh/devops-final-project.git',
    imageUrl: '/lms.png',
  },
  {
  title: 'Traffic Accident Analysis',
  description:
    'Power BI dashboard analyzing traffic accident data, providing insights into accident trends, causes, and high-risk areas in the United Kingdom over the course of 2021 and 2022. Utilized Power Query for data transformation and DAX for advanced calculations, enabling interactive visualizations and actionable insights for decision-making.',
  tags: ['Power BI'],
  githubUrl: 'https://github.com/chanhengmenh/power_bi_projects.git',
  imageUrl: '/traffic-accident-bi.png',
  },
]

export const contactData = {
  email: 'chanhengmenh@gmail.com',
  phone: '+85570494393',
  location: 'Ruessey Keo, Phnom Penh, Cambodia',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19118.657867651364!2d104.89705650793239!3d11.603978487882097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310953c4466283ff%3A0x6f4a8adb7d45b289!2sRuessei%20Kaev%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1782332768665!5m2!1sen!2skh',
}
