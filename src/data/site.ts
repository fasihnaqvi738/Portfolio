export const profile = {
  name: 'Syed Mohd Fasih Naqvi',
  location: 'New Delhi, India',
  github: 'https://github.com/fasihnaqvi738',
  leetcode: 'https://leetcode.com/u/fasihnaqvi738/',
  linkedin: 'https://www.linkedin.com/in/fasihnaqvi738',
  email: 'fasihnaqvi738@gmail.com',
}

export type Project = {
  number: string
  title: string
  category: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  highlights: string[]
  githubUrl?: string
  liveUrl?: string
  visual: 'property' | 'legal' | 'analytics' | 'finance' | 'resume' | 'grocery' | 'ml' | 'business' | 'sales'
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Property Vision',
    category: 'Computer Vision · 3D Reconstruction',
    shortDescription: 'A computer-vision pipeline for turning room captures into 3D reconstructions and diagnostic plan candidates.',
    fullDescription: 'Property Vision processes room photos, walkthrough videos, and RGB-D/LiDAR captures into reconstruction artifacts, scan-derived plan candidates, and optional damage-assessment sidecars. Its outputs are intended for review: photo and video reconstructions have arbitrary scale, and scan-derived room layouts and measurements remain diagnostic rather than validated floor plans.',
    technologies: ['Python', 'COLMAP', 'Computer vision', 'RGB-D / LiDAR'],
    highlights: ['Photo and walkthrough-video reconstruction workflows', 'RGB-D/LiDAR capture ingestion', 'Diagnostic room-plan candidates and scan artifacts', 'Optional visible-damage classification and preliminary scope estimates'],
    githubUrl: 'https://github.com/fasihnaqvi738/Property-vision',
    visual: 'property',
  },
  {
    number: '02',
    title: 'Legal Document Intelligence',
    category: 'Retrieval · GenAI',
    shortDescription: 'A grounded question-answering workspace for working with legal documents.',
    fullDescription: 'A full-stack application for uploading, processing, indexing and querying legal documents. PostgreSQL stores application and document data, while FAISS handles vector similarity search. Responses are grounded in retrieved document content to help reduce unsupported answers.',
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'FAISS', 'RAG', 'Llama 3.2', 'Ollama', 'Nomic embeddings'],
    highlights: ['PDF ingestion and chunking', 'Semantic retrieval with FAISS', 'Document-grounded legal Q&A', 'Authentication and document management'],
    githubUrl: 'https://github.com/fasihnaqvi738/Legal-Document-Intelligence',
    visual: 'legal',
  },
  {
    number: '03',
    title: 'AI Data Analytics Platform',
    category: 'Data Analysis · GenAI',
    shortDescription: 'Upload tabular data, ask questions in plain language, and create charts and business reports.',
    fullDescription: 'A full-stack analytics application for uploading CSV and Excel files, asking questions about the data, generating Gemini-powered insights and charts, and creating downloadable business reports. The README describes account registration and login, JWT-protected dashboards, and file management alongside analysis workflows.',
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'Google Gemini'],
    highlights: ['CSV and Excel upload and file management', 'Ask questions and generate business-friendly insights', 'Bar, line, and pie charts from data', 'Save and download reports as Word documents'],
    githubUrl: 'https://github.com/fasihnaqvi738/AI-Data-Analytics-Platform',
    visual: 'analytics',
  },
  {
    number: '04',
    title: 'GenAI Personal Finance Assistant',
    category: 'Full-Stack · GenAI',
    shortDescription: 'A personal finance product pairing everyday expense workflows with AI insights.',
    fullDescription: 'A full-stack personal finance assistant combining expense and category management with LLM-powered insights. The application brings authenticated financial data workflows and a conversational AI layer together in one product.',
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'JWT', 'Llama 3.2', 'GenAI'],
    highlights: ['Expense tracking and categorization', 'Personalized dashboards and spending trends', 'JWT authentication', 'Local Ollama / Llama 3.2 insights from summarized transaction data'],
    githubUrl: 'https://github.com/fasihnaqvi738/Personal-finance-assistant',
    visual: 'finance',
  },
  {
    number: '05',
    title: 'AI Resume Analyzer',
    category: 'Document AI · NLP',
    shortDescription: 'An AI application that turns an uploaded resume into structured analysis.',
    fullDescription: 'An authenticated resume-analysis application that compares a resume with a job description. It parses PDF and DOCX files, calculates an ATS score, identifies matched and missing skills, and returns Gemini-generated suggestions and detailed feedback. Prior analyses can be saved and revisited.',
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'PyPDF2', 'python-docx', 'Google Gemini'],
    highlights: ['Upload and parse PDF or DOCX resumes', 'Compare a resume with a job description', 'ATS score plus matched and missing skills', 'Gemini suggestions and saved analysis history'],
    githubUrl: 'https://github.com/fasihnaqvi738/AI-Resume-Analyzer',
    visual: 'resume',
  },
  {
    number: '06',
    title: 'Recipe for Rating',
    category: 'Machine Learning · Tabular Data',
    shortDescription: 'A Kaggle course project exploring classifiers for predicting recipe ratings from reviews.',
    fullDescription: 'A Machine Learning Practice Project completed as part of the IIT Madras BS program. The notebook trains and compares classification models for recipe-rating prediction in an IIT Madras-organized Kaggle competition; the README reports XGBoost as the best-performing model at 78% accuracy.',
    technologies: ['Python', 'Jupyter Notebook', 'Classification', 'XGBoost'],
    highlights: ['Recipe-rating prediction task', 'Compared classification models on testing data', 'README reports 78% accuracy for the most accurate model (XGBoost)'],
    githubUrl: 'https://github.com/fasihnaqvi738/MLP-Project',
    visual: 'ml',
  },
  {
    number: '07',
    title: 'Business Data Management Capstone',
    category: 'Data Analysis · IIT Madras',
    shortDescription: 'A business-focused capstone documenting a problem investigation and proposed solutions.',
    fullDescription: 'An IIT Madras BS program capstone centered on collecting data from a business, understanding the problems it faces, and analyzing possible responses. The repository describes two submissions: a proposal covering the business and its problems, followed by a final report detailing the analysis process and proposed solutions.',
    technologies: ['Business data management', 'Data analysis', 'Capstone project'],
    highlights: ['Business context and problem proposal', 'Analysis process documented in a final submission', 'Potential solutions grounded in the collected business data'],
    githubUrl: 'https://github.com/fasihnaqvi738/Business-Data-Management-project',
    visual: 'business',
  },
  {
    number: '08',
    title: 'Sales & Profit Analysis',
    category: 'Business Analysis · Sportswear',
    shortDescription: 'An analysis of a sportswear company dataset to identify and formulate business problems.',
    fullDescription: 'A sportswear-company dataset analysis presented in a project report and slide deck. The repository describes the work as a thorough analysis to identify and formulate business problems; it does not provide further quantified outcomes in the repository summary.',
    technologies: ['Data analysis', 'Jupyter Notebook', 'Project report'],
    highlights: ['Analyzed a sportswear company dataset', 'Identified and formulated business problems', 'Includes a written report and presentation'],
    githubUrl: 'https://github.com/fasihnaqvi738/Sales-and-profit-analysis-of-a-sportswear-company',
    visual: 'sales',
  },
  {
    number: '09',
    title: 'Grocery Store V2',
    category: 'Full-Stack · E-Commerce',
    shortDescription: 'A multi-role grocery shopping app with manager workflows and asynchronous store tasks.',
    fullDescription: 'A multi-user grocery store application with separate admin, manager, and customer roles. It supports product discovery and purchasing, category and inventory management, manager requests, and background tasks for product exports and customer reminders/reports.',
    technologies: ['Flask', 'Vue.js', 'SQLite', 'Celery', 'Redis'],
    highlights: ['Admin category and manager product workflows', 'Search and filter products; cart checks current stock', 'Manager requests and asynchronous CSV exports', 'Customer order confirmation and scheduled reminders/reports'],
    githubUrl: 'https://github.com/fasihnaqvi738/Grocery-store-web-app',
    visual: 'grocery',
  },
  {
    number: '10',
    title: 'Grocery Store App',
    category: 'Full-Stack · E-Commerce',
    shortDescription: 'An earlier multi-user grocery storefront with product search, cart, and stock-aware checkout.',
    fullDescription: 'A grocery shopping application where customers can register, browse and search products, manage a cart, and purchase items. An admin can add, update, and delete products; the cart checks stock availability when inventory changes.',
    technologies: ['Flask', 'Flask-SQLAlchemy', 'SQLite', 'HTML', 'CSS'],
    highlights: ['Customer registration and profile dashboard', 'Browse and search by product name or category', 'Cart and purchase workflow', 'Admin product management and stock-aware cart quantities'],
    githubUrl: 'https://github.com/fasihnaqvi738/Grocery-store-app-v1',
    visual: 'grocery',
  },
]

export const skillGroups = [
  { title: 'Programming', note: 'Languages & data', skills: ['Python', 'C', 'JavaScript', 'SQL'] },
  { title: 'Software & Backend', note: 'Building blocks', skills: ['FastAPI', 'REST APIs', 'React', 'PostgreSQL', 'JWT', 'Git', 'GitHub'] },
  { title: 'AI & Machine Learning', note: 'Areas I work in', skills: ['Machine Learning', 'NLP', 'Generative AI', 'LLM Applications', 'RAG', 'FAISS', 'Embeddings', 'Prompt Engineering'] },
  { title: 'Currently Developing', note: 'Learning in practice', skills: ['AI Deployment', 'RAG Systems', 'LLM Application Development', 'Scalable AI Systems'] },
]

export const education: { school: string; logo: string; degree: string; detail: string; index: string; minors?: string }[] = [
  { school: 'Indian Institute of Technology Madras', logo: '/assets/iit-madras-logo.webp', degree: 'B.S. in Data Science and Applications', minors: 'Economics and Finance, Computer Systems', detail: 'Graduated 2026', index: '01' },
  { school: 'Jamia Hamdard', logo: '/assets/jamia-hamdard-logo.png', degree: 'B.Tech in Computer Science and Engineering (Artificial Intelligence)', detail: 'Graduated 2025', index: '02' },
]

export const navigation = [
  ['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Education', 'education'], ['Certifications', 'certifications'], ['Contact', 'contact'],
] as const
