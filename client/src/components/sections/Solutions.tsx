/**
 * Solutions Section — Enterprise AI Capabilities
 * Design: Quiet Authority — featured first solution + 5-card grid
 * Asymmetric editorial composition to break generic card-grid pattern
 */
import { useEffect, useRef } from "react";
import { Network, Bot, BookOpen, Zap, GitBranch, RefreshCw, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Network,
    title: "Enterprise AI Platforms",
    description:
      "Build scalable AI platforms supporting end-to-end lifecycle management: experimentation, deployment, monitoring, governance, and reusable platform services across engineering teams.",
    tags: ["SageMaker", "Vertex AI", "MLflow", "Kubernetes"],
    featured: true,
  },
  {
    icon: Bot,
    title: "Agentic AI Systems",
    description:
      "Production-grade multi-agent architectures with orchestration, memory management, workflow automation, tool integration, and human-in-the-loop validation for enterprise operations.",
    tags: ["MCP", "LangGraph", "Bedrock Agents", "Ray"],
    featured: false,
  },
  {
    icon: BookOpen,
    title: "Retrieval-Augmented Generation",
    description:
      "Enterprise knowledge systems with semantic retrieval, vector databases, evaluation pipelines, retrieval optimization, and model routing for intelligent business applications.",
    tags: ["Vector DBs", "LangChain", "Semantic Search", "RAG Eval"],
    featured: false,
  },
  {
    icon: Zap,
    title: "Inference Platforms",
    description:
      "GPU-optimized inference infrastructure using Kubernetes, vLLM, TensorRT, ONNX Runtime, dynamic batching, quantization, and autoscaling — reducing serving costs by up to 50%.",
    tags: ["vLLM", "TensorRT", "ONNX", "NVIDIA GPUs"],
    featured: false,
  },
  {
    icon: GitBranch,
    title: "ML Platform Engineering",
    description:
      "Reusable platforms supporting feature stores, experimentation, model registries, deployment pipelines, observability, and reproducibility — accelerating every ML team.",
    tags: ["Feature Stores", "Kubeflow", "Airflow", "MLflow"],
    featured: false,
  },
  {
    icon: RefreshCw,
    title: "AI Modernization",
    description:
      "Transform legacy ML workflows into modern cloud-native AI platforms with standardized pipelines, automated retraining, CI/CD, and scalable infrastructure on AWS or GCP.",
    tags: ["AWS", "GCP", "Terraform", "CI/CD"],
    featured: false,
  },
];

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.06 }
    );
    const els = sectionRef.current?.querySelectorAll(".fade-in-up");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featured = solutions[0];
  const rest = solutions.slice(1);

  return (
    <section id="solutions" ref={sectionRef} className="py-24 bg-[#FAFAF8]">
      <div className="container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end">
          <div>
            <div className="fade-in-up mb-4">
              <span className="section-label">Solutions</span>
            </div>
            <h2
              className="fade-in-up font-display text-[2.25rem] sm:text-[2.75rem] lg:text-[3rem] leading-tight text-[#0F0F0E]"
              style={{ transitionDelay: "60ms" }}
            >
              Enterprise AI Capabilities
            </h2>
          </div>
          <p
            className="fade-in-up text-[1.0625rem] text-[#4B5563] leading-relaxed lg:pt-8"
            style={{ transitionDelay: "120ms" }}
          >
            From platform architecture to production deployment — end-to-end capabilities
            designed for the complexity of enterprise AI at scale.
          </p>
        </div>

        {/* Featured solution — full-width editorial card */}
        <div
          className="fade-in-up mb-6"
          style={{ transitionDelay: "160ms" }}
        >
          <div className="group bg-[#1B3A6B] text-white rounded-lg p-8 lg:p-10 shadow-[0_4px_20px_rgba(27,58,107,0.20)] hover:shadow-[0_8px_32px_rgba(27,58,107,0.28)] transition-shadow duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center">
                    <featured.icon size={18} className="text-white" />
                  </div>
                  <span className="font-mono-brand text-[0.6875rem] font-medium tracking-widest uppercase text-white/50">
                    Core Capability
                  </span>
                </div>
                <h3 className="font-display text-[1.75rem] sm:text-[2.25rem] leading-snug text-white mb-3">
                  {featured.title}
                </h3>
                <p className="text-[1rem] text-white/75 leading-relaxed max-w-[560px]">
                  {featured.description}
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium font-mono-brand text-white/80 border border-white/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer group/link">
                  <span>Learn more</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining solutions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((s, i) => (
            <div
              key={s.title}
              className="fade-in-up group bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(27,58,107,0.09)] hover:border-[#1B3A6B]/25 transition-all duration-200 flex flex-col"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-10 h-10 rounded-md bg-[#1B3A6B]/8 flex items-center justify-center mb-4 group-hover:bg-[#1B3A6B]/12 transition-colors">
                <s.icon size={20} className="text-[#1B3A6B]" />
              </div>
              <h3 className="font-semibold text-[1rem] text-[#0F0F0E] mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-4 flex-1">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#F3F4F6]">
                {s.tags.map((tag) => (
                  <span key={tag} className="tech-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
