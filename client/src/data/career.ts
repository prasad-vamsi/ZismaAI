export type CareerMilestone = {
  period: string;
  company: string;
  location: string;
  role: string;
  theme: string;
  description: string;
  highlights: string[];
};

/** Latest roles first */
export const careerMilestones: CareerMilestone[] = [
  {
    period: "2025 – Present",
    company: "Erie Insurance",
    location: "Erie, PA",
    role: "Lead AI Forward Deployed Engineer (AWS)",
    theme: "Leadership",
    description:
      "Leading enterprise AI platform architecture across traditional ML, Agentic AI, RAG, and distributed inference. Designing reusable platform services adopted across multiple engineering teams, reducing workflow execution time by 40% and inference costs by 50%.",
    highlights: ["Agentic AI", "Multi-Agent Orchestration", "Distributed Inference", "Platform Leadership"],
  },
  {
    period: "2023 – 2025",
    company: "MondeeAI",
    location: "San Francisco, CA",
    role: "Senior Software Engineer — AI Platform",
    theme: "Scale",
    description:
      "Architected a production AI platform on Google Cloud Vertex AI serving millions of daily travel events — powering recommendation engines, dynamic pricing, demand forecasting, and intelligent travel assistants for partners including Expedia and Kayak.",
    highlights: ["Vertex AI Platform", "Recommendation Systems", "RAG Architecture", "LLM Inference"],
  },
  {
    period: "2018 – 2021",
    company: "Mastercard",
    location: "Bangalore, India",
    role: "Software Engineer — Machine Learning Platform",
    theme: "Foundation",
    description:
      "Built the foundational ML infrastructure: CI/CD pipelines, automated retraining, feature stores, and scalable deployment frameworks supporting fraud detection, risk modeling, and conversational AI at enterprise scale.",
    highlights: ["Fraud Detection ML", "CI/CD Automation", "Feature Stores", "AWS Infrastructure"],
  },
  {
    period: "Jul 2017 – Jul 2018",
    company: "Verizon",
    location: "Bangalore, India",
    role: "Software Engineer",
    theme: "Data Engineering",
    description:
      "Engineered data pipelines and search infrastructure for Verizon's product intelligence platform. Stored processed products and commodities data in MongoDB for downstream web applications (Green Box / Zoltar), deployed Spark applications and Java web services on Pivotal Cloud Foundry, and built large-scale analytics with Hive, Pig Latin, and custom MapReduce programs.",
    highlights: ["MongoDB", "Apache Spark", "Apache Solr", "Hive & MapReduce", "PCF Deployment"],
  },
  {
    period: "May 2016 – Jun 2017",
    company: "JP Morgan Chase",
    location: "Hyderabad, India",
    role: "Associate Data Analyst",
    theme: "Origins",
    description:
      "Performed secondary and primary research, data analysis, contact discovery, and company profiling across global markets. Identified and organized business data from online sources, conducted contact discovery for companies in USA, EMEA, APAC, DACH, EU, and LATAM, and extracted prospect data from LinkedIn, ZoomInfo, Hoovers, and professional networking platforms.",
    highlights: ["Market Research", "Contact Discovery", "Data Extraction", "Company Profiling"],
  },
];
