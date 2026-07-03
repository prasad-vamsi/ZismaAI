/**
 * Hero Section
 * Design: Quiet Authority — asymmetric left-weighted layout
 * Large display headline (Instrument Serif), supporting paragraph, two CTAs
 * Right side: abstract AI infrastructure illustration
 */
import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Hero animations trigger on mount (not scroll)
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".fade-in-up");
    if (!els) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    els.forEach((el) => {
      const delay = parseInt((el as HTMLElement).style.transitionDelay || "0") || 0;
      const t = setTimeout(() => el.classList.add("visible"), delay + 80);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-[#FAFAF8] overflow-hidden"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#1B3A6B 1px, transparent 1px),
            linear-gradient(90deg, #1B3A6B 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
          {/* Left: Text content */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            {/* Section label */}
            <div className="fade-in-up mb-6" style={{ transitionDelay: "0ms" }}>
              <span className="section-label">Enterprise AI Platform Engineering</span>
            </div>

            {/* Main headline */}
            <h1
              className="fade-in-up font-display text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[1.05] tracking-tight text-[#0F0F0E] mb-6"
              style={{ transitionDelay: "60ms" }}
            >
              Enterprise AI Platforms{" "}
              <em className="not-italic text-[#1B3A6B]">Built for Production.</em>
            </h1>

            {/* Supporting paragraph */}
            <p
              className="fade-in-up text-[1.0625rem] leading-relaxed text-[#4B5563] mb-8 max-w-[480px]"
              style={{ transitionDelay: "120ms" }}
            >
              We design and build the infrastructure layer between AI research and enterprise
              reality — scalable platforms supporting machine learning, Agentic AI, RAG, and
              distributed inference across AWS and Google Cloud.
            </p>

            {/* Impact stats */}
            <div
              className="fade-in-up flex flex-wrap gap-8 mb-10"
              style={{ transitionDelay: "180ms" }}
            >
              {[
                { value: "150+", label: "Engineers Supported" },
                { value: "50M+", label: "Records Processed" },
                { value: "50%", label: "Cost Reduction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl text-[#1B3A6B] leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="section-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="fade-in-up flex flex-wrap gap-3"
              style={{ transitionDelay: "240ms" }}
            >
              <button
                onClick={() => handleScroll("#solutions")}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#1B3A6B] rounded-md hover:bg-[#2D5BA3] transition-colors duration-150 active:scale-[0.97]"
              >
                Explore Solutions
                <ArrowRight size={15} />
              </button>
              <button
                onClick={() => handleScroll("#about")}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#1B3A6B] border border-[#1B3A6B] rounded-md hover:bg-[#1B3A6B]/5 transition-colors duration-150 active:scale-[0.97]"
              >
                About
              </button>
            </div>
          </div>

          {/* Right: Illustration */}
          <div
            className="fade-in-up lg:col-span-6 xl:col-span-7 flex items-center justify-center lg:justify-end"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative w-full max-w-[580px]">
              {/* Decorative background shape */}
              <div className="absolute inset-0 -m-6 bg-[#1B3A6B]/[0.03] rounded-2xl" />
              <img
                src="/manus-storage/hero-illustration_f19d7cd1.png"
                alt="Enterprise AI Infrastructure Architecture"
                className="relative w-full h-auto rounded-xl shadow-[0_4px_24px_rgba(27,58,107,0.10)]"
              />
              {/* Floating label cards */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-[#E5E7EB] rounded-lg px-3 py-2 shadow-sm hidden sm:block">
                <div className="section-label mb-0.5">Inference Latency</div>
                <div className="font-semibold text-sm text-[#0F0F0E]">↓ 50% Cost Reduction</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white border border-[#E5E7EB] rounded-lg px-3 py-2 shadow-sm hidden sm:block">
                <div className="section-label mb-0.5">Platform Scale</div>
                <div className="font-semibold text-sm text-[#0F0F0E]">50M+ Records / Day</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="section-label">Scroll</span>
          <ChevronDown size={16} className="text-[#6B7280] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
