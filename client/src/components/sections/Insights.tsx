/**
 * Insights Section — Blog with technical diagram images
 * Design: Quiet Authority — editorial layout, all posts have architectural imagery
 * Featured post large, then 2-column grid for remaining posts
 */
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Platform Engineering",
    title: "Designing Enterprise AI Platforms That Scale",
    excerpt:
      "The architectural decisions that separate enterprise AI platforms from prototype tooling — and why most organizations get it wrong.",
    readTime: "8 min read",
    image: "/manus-storage/insights-ai-platforms_3f394908.png",
    featured: true,
  },
  {
    category: "Inference",
    title: "Scaling LLM Inference: From 10 to 10,000 Requests Per Second",
    excerpt:
      "How to architect GPU-optimized inference infrastructure using vLLM, TensorRT, and Kubernetes autoscaling without breaking the budget.",
    readTime: "12 min read",
    image: "/manus-storage/insights-llm-inference_02c6b4c4.png",
    featured: false,
  },
  {
    category: "Agentic AI",
    title: "Agentic AI in Production: Lessons from the Field",
    excerpt:
      "What actually breaks when you deploy multi-agent systems at enterprise scale — and the architectural patterns that make them reliable.",
    readTime: "10 min read",
    image: "/manus-storage/insights-agentic-ai_f62e0e9e.png",
    featured: false,
  },
  {
    category: "RAG",
    title: "Building Enterprise RAG That Doesn't Hallucinate",
    excerpt:
      "A production-tested framework for RAG evaluation, retrieval optimization, and governance that goes beyond basic vector search.",
    readTime: "9 min read",
    image: "/manus-storage/insights-rag_3ce47d22.png",
    featured: false,
  },
  {
    category: "Infrastructure",
    title: "GPU Optimization for AI Workloads",
    excerpt:
      "Practical techniques for reducing GPU inference costs: quantization, dynamic batching, model compression, and efficient scheduling.",
    readTime: "7 min read",
    image: "/manus-storage/insights-gpu_c5a079e1.png",
    featured: false,
  },
  {
    category: "MLOps",
    title: "Platform Engineering as a Force Multiplier for AI Teams",
    excerpt:
      "Why investing in reusable AI platform services accelerates every ML team — and how to build them without slowing anyone down.",
    readTime: "6 min read",
    image: "/manus-storage/insights-mlops_b72a9ebe.png",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "Platform Engineering": "text-[#1B3A6B] bg-[#1B3A6B]/8",
  "Inference": "text-[#065F46] bg-[#065F46]/8",
  "Agentic AI": "text-[#7C3AED] bg-[#7C3AED]/8",
  "RAG": "text-[#B45309] bg-[#B45309]/8",
  "Infrastructure": "text-[#374151] bg-[#374151]/8",
  "MLOps": "text-[#1D4ED8] bg-[#1D4ED8]/8",
};

export default function Insights() {
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

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <section id="insights" ref={sectionRef} className="py-24 bg-[#F4F4F2]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div className="max-w-xl">
            <div className="fade-in-up mb-4">
              <span className="section-label">Insights</span>
            </div>
            <h2
              className="fade-in-up font-display text-[2.25rem] sm:text-[2.75rem] leading-tight text-[#0F0F0E]"
              style={{ transitionDelay: "60ms" }}
            >
              Architectural Thinking
            </h2>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: "120ms" }}>
            <button className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1B3A6B] hover:text-[#2D5BA3] transition-colors group">
              View all articles
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Featured post — asymmetric editorial layout */}
        <div className="fade-in-up mb-8" style={{ transitionDelay: "120ms" }}>
          <div className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(27,58,107,0.10)] transition-shadow duration-200 group cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 overflow-hidden">
                <div className="aspect-[16/9] lg:aspect-auto lg:h-full min-h-[240px] bg-[#E5E7EB]">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`px-2 py-0.5 text-xs font-medium rounded font-mono-brand ${categoryColors[featured.category]}`}>
                    {featured.category}
                  </span>
                  <span className="section-label">{featured.readTime}</span>
                </div>
                <h3 className="font-display text-[1.625rem] sm:text-[2rem] leading-snug text-[#0F0F0E] mb-3">
                  {featured.title}
                </h3>
                <p className="text-[0.9375rem] text-[#4B5563] leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-[#1B3A6B] group-hover:text-[#2D5BA3] transition-colors">
                  <span>Read article</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of posts — 2-column then 3-column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post, i) => (
            <div
              key={post.title}
              className="fade-in-up bg-white border border-[#E5E7EB] rounded-lg overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(27,58,107,0.09)] transition-shadow duration-200 group cursor-pointer flex flex-col"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="aspect-[16/9] bg-[#E5E7EB] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-0.5 text-xs font-medium rounded font-mono-brand ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                  <span className="section-label">{post.readTime}</span>
                </div>
                <h3 className="font-semibold text-[0.9375rem] text-[#0F0F0E] leading-snug mb-2 flex-1">
                  {post.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-1.5 text-sm font-medium text-[#1B3A6B] group-hover:text-[#2D5BA3] transition-colors">
                  <span>Read</span>
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
