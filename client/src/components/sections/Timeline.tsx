/**
 * Technology Timeline Section
 * Design: Quiet Authority — clean vertical timeline, not résumé formatting
 * Shows professional journey as architectural evolution
 */
import { useEffect, useRef } from "react";

const milestones = [
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
    period: "2025 – Present",
    company: "Erie Insurance",
    location: "Erie, PA",
    role: "Lead AI Forward Deployed Engineer (AWS)",
    theme: "Leadership",
    description:
      "Leading enterprise AI platform architecture across traditional ML, Agentic AI, RAG, and distributed inference. Designing reusable platform services adopted across multiple engineering teams, reducing workflow execution time by 40% and inference costs by 50%.",
    highlights: ["Agentic AI", "Multi-Agent Orchestration", "Distributed Inference", "Platform Leadership"],
  },
];

export default function Timeline() {
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

  return (
    <section ref={sectionRef} className="py-24 bg-[#FAFAF8]">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="fade-in-up mb-4">
            <span className="section-label">Professional Journey</span>
          </div>
          <h2
            className="fade-in-up font-display text-[2.25rem] sm:text-[2.75rem] leading-tight text-[#0F0F0E] mb-4"
            style={{ transitionDelay: "60ms" }}
          >
            From Infrastructure to Architecture
          </h2>
          <p
            className="fade-in-up text-[1.0625rem] text-[#4B5563] leading-relaxed"
            style={{ transitionDelay: "120ms" }}
          >
            A progression from building ML infrastructure to architecting enterprise AI
            platforms — across financial services, travel technology, and insurance.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#E5E7EB] hidden sm:block" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div
                key={m.company}
                className="fade-in-up relative sm:pl-10"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1B3A6B] hidden sm:block" />

                <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_rgba(27,58,107,0.07)] transition-shadow duration-200">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-[1rem] text-[#0F0F0E]">{m.company}</span>
                        <span className="text-[#D1D5DB]">·</span>
                        <span className="text-sm text-[#6B7280]">{m.location}</span>
                      </div>
                      <div className="text-sm text-[#374151]">{m.role}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="section-label">{m.period}</span>
                      <span className="px-2 py-0.5 text-xs font-medium text-[#1B3A6B] bg-[#1B3A6B]/8 rounded-full font-mono-brand">
                        {m.theme}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#4B5563] leading-relaxed mb-4">{m.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {m.highlights.map((h) => (
                      <span key={h} className="tech-badge">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
