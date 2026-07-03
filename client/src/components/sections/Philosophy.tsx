/**
 * Philosophy Section — "Trusted Engineering Philosophy"
 * Design: Quiet Authority — editorial with large typographic numbers as anchors
 * Improved: asymmetric layout, numbered principles, stronger hierarchy
 */
import { useEffect, useRef } from "react";

const principles = [
  {
    number: "01",
    title: "Build Once. Scale Everywhere.",
    description:
      "Reusable platform services — feature stores, model registries, inference APIs — that accelerate every team rather than solving the same problem repeatedly.",
  },
  {
    number: "02",
    title: "Production Before Prototypes.",
    description:
      "Architecture decisions are made with production constraints in mind from day one: reliability, latency, cost, and governance are not afterthoughts.",
  },
  {
    number: "03",
    title: "Infrastructure First.",
    description:
      "Scalable AI requires a foundation: reproducible pipelines, standardized environments, and observable systems before any model goes live.",
  },
  {
    number: "04",
    title: "Reliable AI Systems.",
    description:
      "Every deployed model is monitored for drift, latency, and accuracy. Observability is built into the platform, not bolted on after incidents.",
  },
];

export default function Philosophy() {
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
    <section ref={sectionRef} className="py-24 bg-[#F4F4F2]">
      <div className="container">
        {/* Header — asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end">
          <div>
            <div className="fade-in-up mb-4">
              <span className="section-label">Engineering Philosophy</span>
            </div>
            <h2
              className="fade-in-up font-display text-[2.25rem] sm:text-[2.75rem] lg:text-[3rem] leading-tight text-[#0F0F0E]"
              style={{ transitionDelay: "60ms" }}
            >
              How Enterprise AI Succeeds
            </h2>
          </div>
          <p
            className="fade-in-up text-[1.0625rem] text-[#4B5563] leading-relaxed lg:pt-8"
            style={{ transitionDelay: "120ms" }}
          >
            Enterprise AI platforms fail when they are built for demos. They succeed when
            they are engineered for the realities of production — scale, reliability, cost,
            and governance.
          </p>
        </div>

        {/* Principles — horizontal list with large numbers */}
        <div className="space-y-0">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className="fade-in-up border-t border-[#E5E7EB] py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start group hover:bg-white/50 transition-colors duration-200 -mx-6 px-6 rounded-lg"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Number */}
              <div className="sm:col-span-1">
                <span className="font-mono-brand text-[0.6875rem] font-medium text-[#1B3A6B]/40 tracking-widest">
                  {p.number}
                </span>
              </div>
              {/* Title */}
              <div className="sm:col-span-4">
                <h3 className="font-semibold text-[1rem] text-[#0F0F0E] leading-snug">
                  {p.title}
                </h3>
              </div>
              {/* Description */}
              <div className="sm:col-span-7">
                <p className="text-[0.9375rem] text-[#6B7280] leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-[#E5E7EB]" />
        </div>
      </div>
    </section>
  );
}
