/**
 * Engineering Expertise Section
 * Design: Quiet Authority — clean minimal tech badges grouped by category
 * Improved: stronger visual hierarchy, navy accent on category labels
 */
import { useEffect, useRef } from "react";

const expertiseCategories = [
  {
    label: "Cloud",
    items: ["AWS", "GCP", "Azure"],
    highlight: true,
  },
  {
    label: "AI & ML Platforms",
    items: ["Amazon SageMaker", "Vertex AI", "MLflow", "Kubeflow", "Ray", "LangGraph", "MCP", "Amazon Bedrock", "Hugging Face"],
    highlight: false,
  },
  {
    label: "Infrastructure",
    items: ["Kubernetes", "Docker", "Terraform", "Helm", "GitHub Actions", "GitLab CI/CD", "Jenkins", "Linux"],
    highlight: false,
  },
  {
    label: "Inference",
    items: ["vLLM", "TensorRT", "ONNX Runtime", "NVIDIA A100", "NVIDIA H100", "Dynamic Batching", "Quantization"],
    highlight: true,
  },
  {
    label: "Frameworks",
    items: ["PyTorch", "TensorFlow", "FastAPI", "Apache Spark", "Apache Airflow", "LangChain", "Scala", "Python"],
    highlight: false,
  },
  {
    label: "Data Engineering",
    items: ["Databricks", "Delta Lake", "Apache Spark", "Hadoop", "Hive", "Feature Stores", "ETL Pipelines", "Streaming"],
    highlight: false,
  },
  {
    label: "Observability",
    items: ["OpenTelemetry", "Prometheus", "Grafana", "CloudWatch", "Model Monitoring", "Drift Detection", "Distributed Tracing"],
    highlight: false,
  },
];

export default function Expertise() {
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

  return (
    <section id="expertise" ref={sectionRef} className="py-24 bg-[#FAFAF8]">
      <div className="container">
        {/* Header — two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end">
          <div>
            <div className="fade-in-up mb-4">
              <span className="section-label">Engineering Expertise</span>
            </div>
            <h2
              className="fade-in-up font-display text-[2.25rem] sm:text-[2.75rem] lg:text-[3rem] leading-tight text-[#0F0F0E]"
              style={{ transitionDelay: "60ms" }}
            >
              Technology Stack
            </h2>
          </div>
          <p
            className="fade-in-up text-[1.0625rem] text-[#4B5563] leading-relaxed lg:pt-8"
            style={{ transitionDelay: "120ms" }}
          >
            Deep expertise across the full enterprise AI stack — from cloud infrastructure
            and data engineering to model serving and production observability.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-0">
          {expertiseCategories.map((cat, i) => (
            <div
              key={cat.label}
              className="fade-in-up"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className={`flex items-start gap-6 py-6 border-t border-[#E5E7EB] ${cat.highlight ? "group" : ""}`}>
                <div className="w-36 shrink-0 pt-0.5">
                  <span className={`font-mono-brand text-[0.6875rem] font-medium tracking-widest uppercase ${cat.highlight ? "text-[#1B3A6B]" : "text-[#9CA3AF]"}`}>
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className={`tech-badge ${cat.highlight ? "border-[#1B3A6B]/20 text-[#1B3A6B]" : ""}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-[#E5E7EB]" />
        </div>
      </div>
    </section>
  );
}
