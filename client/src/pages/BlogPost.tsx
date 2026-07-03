import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { categoryColors, getPostBySlug, type BlogSection } from "@/data/insights";
import { ArrowLeft } from "lucide-react";
import { Link, useRoute } from "wouter";

function Section({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "h2":
      return <h2 className="font-display text-[1.5rem] text-[#0F0F0E] mt-10 mb-4">{section.text}</h2>;
    case "p":
      return <p className="text-[1rem] text-[#374151] leading-relaxed mb-4">{section.text}</p>;
    case "ul":
      return (
        <ul className="list-disc pl-5 space-y-2 mb-6 text-[#374151]">
          {section.items.map((item) => (
            <li key={item} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      );
    case "diagram":
      return (
        <figure className="my-8 bg-white border border-[#E5E7EB] rounded-lg overflow-hidden shadow-sm">
          <img src={section.src} alt={section.caption} className="w-full h-auto" />
          <figcaption className="px-4 py-3 text-sm text-[#6B7280] border-t border-[#E5E7EB] font-mono-brand">
            {section.caption}
          </figcaption>
        </figure>
      );
    case "code":
      return (
        <pre className="my-6 p-4 bg-[#0F0F0E] text-[#E5E7EB] rounded-lg text-sm overflow-x-auto font-mono-brand leading-relaxed">
          {section.text}
        </pre>
      );
  }
}

export default function BlogPost() {
  const [, params] = useRoute("/insights/:slug");
  const post = getPostBySlug(params?.slug ?? "");

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FAFAF8]">
        <Navigation />
        <main className="container py-32 text-center">
          <h1 className="font-display text-3xl text-[#0F0F0E] mb-4">Article not found</h1>
          <Link href="/insights" className="text-[#1B3A6B] hover:underline">Back to Insights</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />
      <main className="py-24">
        <article className="container max-w-3xl">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm text-[#1B3A6B] hover:text-[#2D5BA3] mb-8">
            <ArrowLeft size={14} /> Back to Insights
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className={`px-2 py-0.5 text-xs font-medium rounded font-mono-brand ${categoryColors[post.category]}`}>
              {post.category}
            </span>
            <span className="section-label">{post.readTime}</span>
            <span className="section-label">{post.published}</span>
          </div>
          <h1 className="font-display text-[2.25rem] sm:text-[2.75rem] leading-tight text-[#0F0F0E] mb-6">
            {post.title}
          </h1>
          <div className="mb-10 rounded-lg overflow-hidden border border-[#E5E7EB]">
            <img src={post.image} alt={post.title} className="w-full h-auto" />
          </div>
          <div className="prose-custom">
            {post.sections.map((section, i) => (
              <Section key={i} section={section} />
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
