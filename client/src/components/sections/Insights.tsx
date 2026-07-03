/**
 * Insights Section — links to full blog articles at /insights/:slug
 */
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { categoryColors, insightPosts } from "@/data/insights";

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

  const featured = insightPosts.find((p) => p.featured) ?? insightPosts[0];
  const rest = insightPosts.filter((p) => !p.featured);

  return (
    <section id="insights" ref={sectionRef} className="py-24 bg-[#F4F4F2]">
      <div className="container">
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
            <Link href="/insights" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1B3A6B] hover:text-[#2D5BA3] transition-colors group">
              View all articles
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="fade-in-up mb-8" style={{ transitionDelay: "120ms" }}>
          <Link href={`/insights/${featured.slug}`}>
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
                  <p className="text-[0.9375rem] text-[#4B5563] leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-[#1B3A6B] group-hover:text-[#2D5BA3] transition-colors">
                    <span>Read article</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post, i) => (
            <Link key={post.slug} href={`/insights/${post.slug}`}>
              <div
                className="fade-in-up bg-white border border-[#E5E7EB] rounded-lg overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(27,58,107,0.09)] transition-shadow duration-200 group cursor-pointer flex flex-col h-full"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
