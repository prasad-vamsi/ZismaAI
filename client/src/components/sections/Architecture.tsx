/**
 * Architecture Thinking Section
 * Design: Quiet Authority — architectural thought leadership case studies
 * Tab-based layout showing challenge, architecture, technologies, outcome
 */
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const studies = [
  {
    id: "enterprise-platform",
    label: "Enterprise AI Platform",
    challenge:
      "A Fortune 500 insurer needed a unified AI platform to support 150+ engineers across traditional ML, LLMs, and Agentic AI — replacing fragmented, team-specific tooling that created duplication and slowed delivery.",
    architecture:
      "Designed a layered platform on Amazon SageMaker and Kubernetes: a data layer (Spark, Delta Lake), a feature layer (online + offline feature stores), an experimentation layer (MLflow, Ray), a deployment layer (SageMaker Endpoints, vLLM), and an observability layer (CloudWatch, OpenTelemetry, Prometheus).",
    technologies: ["SageMaker", "Kubernetes", "MLflow", "Ray", "Spark", "Airflow", "vLLM", "CloudWatch"],
    outcome:
      "Reduced time-to-production by 40%. Standardized model lifecycle across 6 business domains. Enabled 150+ engineers on a single governed platform.",
  },
  {
    id: "distributed-inference",
    label: "Distributed Inference",
    challenge:
      "LLM inference costs were unsustainable at scale. Serving multiple foundation models with variable traffic required an architecture that could optimize GPU utilization without sacrificing latency SLAs.",
    architecture:
      "Built a multi-model inference platform on Kubernetes with vLLM for continuous batching, TensorRT for optimized model graphs, ONNX Runtime for traditional ML, and NVIDIA A100/H100 GPU scheduling with autoscaling. Implemented dynamic batching, quantization (INT8/FP16), and model routing by request type.",
    technologies: ["vLLM", "TensorRT", "ONNX Runtime", "Kubernetes", "NVIDIA A100", "H100", "Prometheus"],
    outcome:
      "50% reduction in inference infrastructure cost. 3× improvement in throughput. Sub-100ms p99 latency maintained at peak load.",
  },
  {
    id: "rag-architecture",
    label: "RAG Architecture",
    challenge:
      "Enterprise knowledge was siloed across documents, databases, and internal systems. Building a reliable knowledge assistant required more than a simple vector search — it needed evaluation, governance, and retrieval quality monitoring.",
    architecture:
      "Designed a production RAG pipeline: document ingestion (chunking, embedding), vector database (semantic retrieval), retrieval augmentation (re-ranking, context compression), prompt orchestration (LangChain/LangGraph), LLM routing, and an evaluation pipeline measuring faithfulness, relevance, and groundedness.",
    technologies: ["Vector DBs", "LangChain", "LangGraph", "Bedrock", "Embedding Models", "RAGAS", "MLflow"],
    outcome:
      "Deployed enterprise knowledge assistant serving 5+ business domains. Retrieval accuracy >85%. Hallucination rate reduced by 60% through evaluation-driven iteration.",
  },
  {
    id: "feature-store",
    label: "Feature Store Platform",
    challenge:
      "Feature duplication across teams caused training-serving skew, inconsistent feature definitions, and redundant computation — slowing model development and creating reliability risks in production.",
    architecture:
      "Built a unified feature platform with an offline store (Spark + Delta Lake for batch features), an online store (low-latency retrieval for real-time inference), a feature registry (lineage, versioning, ownership), and automated feature pipelines with data quality monitoring.",
    technologies: ["Spark", "Delta Lake", "Feast", "Redis", "Airflow", "Great Expectations", "MLflow"],
    outcome:
      "40% reduction in feature retrieval latency. Eliminated training-serving skew across 12 production models. Reduced feature development time by 35%.",
  },
  {
    id: "agentic-workflow",
    label: "Agentic AI Workflow",
    challenge:
      "Complex enterprise workflows requiring multi-step reasoning, tool use, and human oversight could not be handled by single-model inference. Needed a production-grade agentic architecture with reliability and auditability.",
    architecture:
      "Implemented a multi-agent orchestration platform using MCP (Model Context Protocol) for tool integration, LangGraph for workflow state management, memory systems for context persistence, human-in-the-loop checkpoints for validation, and comprehensive tracing for auditability.",
    technologies: ["MCP", "LangGraph", "Bedrock Agents", "Ray", "OpenTelemetry", "Redis", "PostgreSQL"],
    outcome:
      "Reduced workflow execution time by 40%. Deployed 3 production agentic workflows across claims, underwriting, and customer service domains.",
  },
  {
    id: "ml-lifecycle",
    label: "Model Lifecycle Platform",
    challenge:
      "Model retraining was manual, inconsistent, and error-prone. Teams lacked standardized processes for model versioning, approval workflows, and production promotion — creating governance and reliability risks.",
    architecture:
      "Designed an end-to-end model lifecycle platform: automated retraining pipelines (Airflow + Kubeflow), experiment tracking (MLflow), model registry with versioning and lineage, approval workflows with automated evaluation gates, CI/CD for model deployment, and drift monitoring with automated alerting.",
    technologies: ["MLflow", "Kubeflow", "Airflow", "Jenkins", "GitLab CI", "SageMaker", "Grafana"],
    outcome:
      "Deployment frequency increased 30%. Eliminated manual model promotion steps. Full audit trail for regulatory compliance across all production models.",
  },
];

export default function Architecture() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    const els = sectionRef.current?.querySelectorAll(".fade-in-up");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const study = studies[active];

  return (
    <section id="architecture" ref={sectionRef} className="py-24 bg-[#F4F4F2]">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="fade-in-up mb-4">
            <span className="section-label">Architecture Thinking</span>
          </div>
          <h2
            className="fade-in-up font-display text-[2.25rem] sm:text-[2.75rem] leading-tight text-[#0F0F0E] mb-4"
            style={{ transitionDelay: "60ms" }}
          >
            Platform Architecture at Scale
          </h2>
          <p
            className="fade-in-up text-[1.0625rem] text-[#4B5563] leading-relaxed"
            style={{ transitionDelay: "120ms" }}
          >
            Architectural patterns and design decisions from production enterprise AI systems —
            not demos, but systems that run at scale.
          </p>
        </div>

        <div className="fade-in-up" style={{ transitionDelay: "180ms" }}>
          {/* Tab navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-[#E5E7EB] pb-0">
            {studies.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`px-4 py-2.5 text-sm font-medium rounded-t-md border-b-2 transition-all duration-150 -mb-px ${
                  active === i
                    ? "border-[#1B3A6B] text-[#1B3A6B] bg-white"
                    : "border-transparent text-[#6B7280] hover:text-[#374151] hover:border-[#D1D5DB]"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Study content */}
          <div className="bg-white border border-[#E5E7EB] rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left: Details */}
              <div className="lg:col-span-8 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
                <div className="space-y-7">
                  {/* Challenge */}
                  <div>
                    <div className="section-label mb-2">Challenge</div>
                    <p className="text-[0.9375rem] text-[#374151] leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  {/* Architecture */}
                  <div>
                    <div className="section-label mb-2">Architecture</div>
                    <p className="text-[0.9375rem] text-[#374151] leading-relaxed">
                      {study.architecture}
                    </p>
                  </div>
                  {/* Technologies */}
                  <div>
                    <div className="section-label mb-3">Technologies</div>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((t) => (
                        <span key={t} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Outcome */}
              <div className="lg:col-span-4 p-8 lg:p-10 bg-[#FAFAF8] flex flex-col justify-between">
                <div>
                  <div className="section-label mb-3">Business Outcome</div>
                  <p className="text-[0.9375rem] text-[#374151] leading-relaxed">
                    {study.outcome}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
                  <div className="flex items-center gap-2 text-sm font-medium text-[#1B3A6B] hover:text-[#2D5BA3] cursor-pointer group">
                    <span>Discuss this architecture</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
