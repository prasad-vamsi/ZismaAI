export type BlogSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "diagram"; src: string; caption: string }
  | { type: "code"; text: string };

export type InsightPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  featured: boolean;
  published: string;
  sections: BlogSection[];
};

export const categoryColors: Record<string, string> = {
  "Platform Engineering": "text-[#1B3A6B] bg-[#1B3A6B]/8",
  Inference: "text-[#065F46] bg-[#065F46]/8",
  "Agentic AI": "text-[#7C3AED] bg-[#7C3AED]/8",
  RAG: "text-[#B45309] bg-[#B45309]/8",
  Infrastructure: "text-[#374151] bg-[#374151]/8",
  MLOps: "text-[#1D4ED8] bg-[#1D4ED8]/8",
};

export const insightPosts: InsightPost[] = [
  {
    slug: "designing-enterprise-ai-platforms-that-scale",
    category: "Platform Engineering",
    title: "Designing Enterprise AI Platforms That Scale",
    excerpt:
      "The architectural decisions that separate enterprise AI platforms from prototype tooling — and why most organizations get it wrong.",
    readTime: "8 min read",
    image: "/images/insights/ai-platforms.svg",
    featured: true,
    published: "June 2025",
    sections: [
      { type: "p", text: "Enterprise AI platforms fail when teams treat infrastructure as a side project. The difference between a demo and a production platform is not model quality — it is the control plane: identity, observability, data contracts, deployment pipelines, and governance baked into every workflow from day one." },
      { type: "h2", text: "The Three-Layer Reference Architecture" },
      { type: "p", text: "Mature organizations converge on a layered model. The Experience Layer exposes APIs, notebooks, and agent interfaces. The Platform Layer provides training, inference, feature management, and orchestration. The Infrastructure Layer abstracts compute, storage, networking, and security policies across cloud environments." },
      { type: "diagram", src: "/images/insights/ai-platforms.svg", caption: "Figure 1: Enterprise AI platform layered architecture with shared control plane" },
      { type: "h2", text: "Platform Primitives Every Team Reuses" },
      { type: "ul", items: [
        "Model Registry with lineage, approval gates, and rollback",
        "Feature Store with point-in-time correctness guarantees",
        "Inference Gateway with autoscaling, caching, and cost attribution",
        "Experiment Tracking integrated with CI/CD and policy checks",
        "Unified observability: latency, drift, cost, and data quality SLOs",
      ]},
      { type: "p", text: "Teams that ship fastest do not rebuild these primitives per project. They compose them. Platform engineering becomes a force multiplier when each new use case adds configuration, not infrastructure." },
      { type: "h2", text: "Anti-Patterns to Eliminate Early" },
      { type: "ul", items: [
        "Notebook-to-production paths without automated validation",
        "Siloed GPU clusters with no shared scheduling or quota management",
        "Ad-hoc vector stores without evaluation harnesses",
        "Security and compliance retrofitted after the first production incident",
      ]},
      { type: "p", text: "The organizations winning at scale invest in platform contracts early. They define how data enters, how models are promoted, and how failures are detected — before the first high-visibility deployment." },
    ],
  },
  {
    slug: "scaling-llm-inference",
    category: "Inference",
    title: "Scaling LLM Inference: From 10 to 10,000 Requests Per Second",
    excerpt:
      "How to architect GPU-optimized inference infrastructure using vLLM, TensorRT, and Kubernetes autoscaling without breaking the budget.",
    readTime: "12 min read",
    image: "/images/insights/llm-inference.svg",
    featured: false,
    published: "May 2025",
    sections: [
      { type: "p", text: "LLM inference scaling is a systems problem disguised as a model problem. Throughput improvements come from batching strategy, KV-cache management, hardware selection, and request routing — not from swapping model weights alone." },
      { type: "h2", text: "Inference Serving Topology" },
      { type: "diagram", src: "/images/insights/llm-inference.svg", caption: "Figure 1: Request routing across prefill/decode pools with autoscaling GPU nodes" },
      { type: "h2", text: "Optimization Levers" },
      { type: "ul", items: [
        "Continuous batching with vLLM or TensorRT-LLM for dynamic request grouping",
        "Prefill/decode disaggregation for long-context workloads",
        "Quantization (INT8/FP8) with accuracy regression gates in CI",
        "HPA on GPU utilization and queue depth, not CPU alone",
        "Semantic caching for repeated system prompts and RAG contexts",
      ]},
      { type: "code", text: "# Autoscaling signal: queue depth + p99 latency\nhpa_metrics:\n  - type: custom\n    name: inference_queue_depth\n    target: 32\n  - type: custom\n    name: p99_latency_ms\n    target: 800" },
      { type: "p", text: "At 10,000 RPS, cost attribution per tenant becomes mandatory. Tag every request with team, model version, and feature flag set. Finance and engineering should read the same dashboard." },
    ],
  },
  {
    slug: "agentic-ai-in-production",
    category: "Agentic AI",
    title: "Agentic AI in Production: Lessons from the Field",
    excerpt:
      "What actually breaks when you deploy multi-agent systems at enterprise scale — and the architectural patterns that make them reliable.",
    readTime: "10 min read",
    image: "/images/insights/agentic-ai.svg",
    featured: false,
    published: "April 2025",
    sections: [
      { type: "p", text: "Multi-agent demos work until the second week of production. Reliability requires explicit orchestration, tool contracts, human-in-the-loop checkpoints, and deterministic fallbacks when LLM reasoning drifts." },
      { type: "h2", text: "Orchestration Patterns" },
      { type: "diagram", src: "/images/insights/agentic-ai.svg", caption: "Figure 1: Supervisor agent with specialized workers, tool gateway, and audit log" },
      { type: "ul", items: [
        "Supervisor-worker topology with bounded delegation depth",
        "Tool gateway enforcing auth, rate limits, and schema validation",
        "Idempotent tool calls with compensating transactions",
        "Checkpointing agent state for replay and debugging",
        "Escalation paths to human reviewers on low-confidence actions",
      ]},
      { type: "p", text: "Treat agent memory as a governed data product. Short-term context lives in the session; long-term memory requires retention policies, PII scanning, and retrieval evaluation — the same rigor applied to RAG corpora." },
    ],
  },
  {
    slug: "building-enterprise-rag",
    category: "RAG",
    title: "Building Enterprise RAG That Doesn't Hallucinate",
    excerpt:
      "A production-tested framework for RAG evaluation, retrieval optimization, and governance that goes beyond basic vector search.",
    readTime: "9 min read",
    image: "/images/insights/rag.svg",
    featured: false,
    published: "March 2025",
    sections: [
      { type: "p", text: "Vector search is necessary but insufficient. Enterprise RAG requires hybrid retrieval, chunking strategies tuned per document type, citation enforcement, and offline evaluation suites that run before every index update." },
      { type: "h2", text: "RAG Pipeline Architecture" },
      { type: "diagram", src: "/images/insights/rag.svg", caption: "Figure 1: Ingestion, hybrid retrieval, reranking, and grounded generation with citations" },
      { type: "ul", items: [
        "Hybrid search: dense embeddings + BM25 with learned fusion weights",
        "Cross-encoder reranking on top-50 candidates before LLM context assembly",
        "Chunk metadata: source, ACL, freshness, and confidence score",
        "Answer grounding: require inline citations; reject uncited claims",
        "Golden-set evaluation: recall@k, faithfulness, and latency per corpus",
      ]},
      { type: "p", text: "Governance is not optional. Document ACLs must propagate to chunk level. A retrieval miss is preferable to a cross-tenant data leak." },
    ],
  },
  {
    slug: "gpu-optimization-for-ai-workloads",
    category: "Infrastructure",
    title: "GPU Optimization for AI Workloads",
    excerpt:
      "Practical techniques for reducing GPU inference costs: quantization, dynamic batching, model compression, and efficient scheduling.",
    readTime: "7 min read",
    image: "/images/insights/gpu.svg",
    featured: false,
    published: "February 2025",
    sections: [
      { type: "p", text: "GPU spend is the fastest-growing line item in AI budgets. Optimization starts with utilization measurement — most clusters run below 40% effective utilization before tuning." },
      { type: "h2", text: "GPU Cluster Scheduling" },
      { type: "diagram", src: "/images/insights/gpu.svg", caption: "Figure 1: Multi-tenant GPU pool with priority queues and model-aware bin packing" },
      { type: "ul", items: [
        "Right-size instances: L4 for light inference, A100/H100 for training bursts",
        "Dynamic batching windows tuned to latency SLO per endpoint",
        "Model distillation and pruning with accuracy guardrails",
        "Spot/preemptible nodes for batch and offline workloads",
        "Time-slicing and MIG for shared development environments",
      ]},
      { type: "p", text: "A 50% cost reduction is achievable without sacrificing user experience when batching, quantization, and scheduling are treated as platform features — not per-team optimizations." },
    ],
  },
  {
    slug: "platform-engineering-force-multiplier",
    category: "MLOps",
    title: "Platform Engineering as a Force Multiplier for AI Teams",
    excerpt:
      "Why investing in reusable AI platform services accelerates every ML team — and how to build them without slowing anyone down.",
    readTime: "6 min read",
    image: "/images/insights/mlops.svg",
    featured: false,
    published: "January 2025",
    sections: [
      { type: "p", text: "AI platform teams succeed when they reduce cognitive load. Every abstraction must eliminate toil: fewer bespoke deployment scripts, fewer one-off monitoring setups, fewer repeated security reviews." },
      { type: "h2", text: "Platform Service Catalog" },
      { type: "diagram", src: "/images/insights/mlops.svg", caption: "Figure 1: Self-service platform APIs consumed by ML, data, and product engineering teams" },
      { type: "ul", items: [
        "Golden-path templates: train → evaluate → register → deploy in under an hour",
        "Embedded policy-as-code in pipelines (data residency, PII, model cards)",
        "Internal developer portal with live SLOs and cost dashboards",
        "Office hours and RFC process to co-design with consuming teams",
        "Measure adoption: time-to-first-deployment, not lines of platform code",
      ]},
      { type: "p", text: "The best platform teams are product teams. They ship roadmaps, gather feedback, and deprecate services that nobody uses. Reusable infrastructure is the outcome — not the goal." },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return insightPosts.find((p) => p.slug === slug);
}
