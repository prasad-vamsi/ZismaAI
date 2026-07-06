/**
 * About Section — "About the Founder"
 * Design: Quiet Authority — executive-level bio, not résumé
 * Two-column layout: portrait left, bio right
 */
import { useEffect, useRef } from "react";
import { Linkedin, Mail, MapPin } from "lucide-react";
import CareerTimeline from "@/components/CareerTimeline";

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-24 bg-[#F4F4F2]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Portrait */}
          <div
            className="fade-in-up lg:col-span-4 xl:col-span-3"
            style={{ transitionDelay: "0ms" }}
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-[#E5E7EB] shadow-[0_4px_16px_rgba(27,58,107,0.10)]">
                <img
                  src="/images/about-portrait.svg"
                  alt="Vamsi Prasad — Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Name card */}
              <div className="mt-4">
                <div className="font-semibold text-[1rem] text-[#0F0F0E]">Vamsi Prasad</div>
                <div className="text-sm text-[#6B7280] mt-0.5">Lead AI Platform Engineer</div>
                <div className="flex items-center gap-1.5 mt-1 text-sm text-[#6B7280]">
                  <MapPin size={13} />
                  <span>Erie, PA · USA</span>
                </div>
              </div>
              {/* Social links */}
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-[#1B3A6B] hover:text-[#2D5BA3] transition-colors"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                </a>
                <span className="text-[#D1D5DB]">·</span>
                <a
                  href="mailto:prasad.md1196@gmail.com"
                  className="flex items-center gap-1.5 text-sm text-[#1B3A6B] hover:text-[#2D5BA3] transition-colors"
                >
                  <Mail size={15} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="fade-in-up mb-4" style={{ transitionDelay: "60ms" }}>
              <span className="section-label">About the Founder</span>
            </div>
            <h2
              className="fade-in-up font-display text-[2.25rem] sm:text-[2.75rem] leading-tight text-[#0F0F0E] mb-6"
              style={{ transitionDelay: "120ms" }}
            >
              The Architect Behind the Platform
            </h2>

            <div
              className="fade-in-up space-y-4 text-[1.0rem] text-[#374151] leading-relaxed"
              style={{ transitionDelay: "180ms" }}
            >
              <p>
                Vamsi Prasad is a Lead AI Platform Engineer with over eight years of experience
                designing and building enterprise AI infrastructure across AWS and Google Cloud.
                His work sits at the intersection of platform engineering and applied AI — where
                research prototypes become reliable production systems.
              </p>
              <p>
                He has designed AI platforms supporting over 150 engineers across multiple
                business domains, built distributed data pipelines processing tens of millions
                of records daily, and reduced inference infrastructure costs by 50% through
                GPU optimization, dynamic batching, and quantization. His platforms have powered
                recommendation engines, intelligent knowledge assistants, fraud detection systems,
                and multi-agent workflows in production.
              </p>
              <p>
                Vamsi works closely with ML Scientists, Platform Engineering teams, Product
                leaders, and business stakeholders — translating research ambitions into
                architectures that scale, govern, and operate reliably. He believes that
                enterprise AI succeeds when the platform is treated as a product, not an
                afterthought.
              </p>
              <p>
                Currently serving as Lead AI Forward Deployed Engineer at Erie Insurance,
                previously at MondeeAI (San Francisco), Mastercard, Verizon, and JP Morgan Chase, he brings
                cross-industry perspective to every engagement — from travel personalization
                to financial risk modeling to enterprise automation.
              </p>
            </div>

            {/* Key credentials */}
            <div
              className="fade-in-up mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
              style={{ transitionDelay: "240ms" }}
            >
              {[
                { value: "8+", label: "Years of Experience" },
                { value: "5", label: "Enterprise Roles" },
                { value: "AWS · GCP", label: "Cloud Expertise" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-[#E5E7EB] rounded-lg p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                >
                  <div className="font-display text-2xl text-[#1B3A6B] mb-1">{item.value}</div>
                  <div className="section-label">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="fade-in-up mt-12" style={{ transitionDelay: "300ms" }}>
              <h3 className="font-display text-[1.5rem] text-[#0F0F0E] mb-2">Professional Experience</h3>
              <p className="text-sm text-[#6B7280] mb-6">
                Latest roles first — from enterprise AI leadership to foundational data engineering.
              </p>
              <CareerTimeline />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
