/**
 * Contact Section — submits to /api/contact (Web3Forms via Vercel serverless)
 */
import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, MapPin, ArrowRight, Loader2 } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Failed to send message.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message.");
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-[#FAFAF8]">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="fade-in-up mb-4">
            <span className="section-label">Contact</span>
          </div>
          <h2
            className="fade-in-up font-display text-[2.25rem] sm:text-[2.75rem] leading-tight text-[#0F0F0E] mb-4"
            style={{ transitionDelay: "60ms" }}
          >
            Let's Build Enterprise AI Together
          </h2>
          <p
            className="fade-in-up text-[1.0625rem] text-[#4B5563] leading-relaxed"
            style={{ transitionDelay: "120ms" }}
          >
            Whether you're architecting a new AI platform, scaling an existing system, or
            exploring what's possible — let's start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="fade-in-up lg:col-span-4" style={{ transitionDelay: "180ms" }}>
            <div className="space-y-6">
              <div>
                <div className="section-label mb-2">Email</div>
                <a
                  href="mailto:prasad.md1196@gmail.com"
                  className="flex items-center gap-2 text-[0.9375rem] text-[#1B3A6B] hover:text-[#2D5BA3] transition-colors"
                >
                  <Mail size={16} />
                  prasad.md1196@gmail.com
                </a>
              </div>
              <div>
                <div className="section-label mb-2">LinkedIn</div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[0.9375rem] text-[#1B3A6B] hover:text-[#2D5BA3] transition-colors"
                >
                  <Linkedin size={16} />
                  Connect on LinkedIn
                </a>
              </div>
              <div>
                <div className="section-label mb-2">Location</div>
                <div className="flex items-center gap-2 text-[0.9375rem] text-[#374151]">
                  <MapPin size={16} className="text-[#6B7280]" />
                  Erie, PA · United States
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-up lg:col-span-8" style={{ transitionDelay: "240ms" }}>
            {status === "success" ? (
              <div className="bg-white border border-[#E5E7EB] rounded-lg p-10 text-center shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <div className="w-12 h-12 rounded-full bg-[#1B3A6B]/8 flex items-center justify-center mx-auto mb-4">
                  <ArrowRight size={20} className="text-[#1B3A6B]" />
                </div>
                <h3 className="font-semibold text-[1rem] text-[#0F0F0E] mb-2">Message Sent</h3>
                <p className="text-sm text-[#6B7280]">
                  Thank you for reaching out. I'll respond within 24–48 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-[#E5E7EB] rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05)] space-y-5"
              >
                {status === "error" && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-md px-3 py-2">
                    {errorMsg}
                  </p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="section-label block mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 text-sm text-[#0F0F0E] bg-[#FAFAF8] border border-[#E5E7EB] rounded-md placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B]/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="section-label block mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2.5 text-sm text-[#0F0F0E] bg-[#FAFAF8] border border-[#E5E7EB] rounded-md placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B]/20 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="section-label block mb-1.5">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your organization"
                    className="w-full px-3.5 py-2.5 text-sm text-[#0F0F0E] bg-[#FAFAF8] border border-[#E5E7EB] rounded-md placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B]/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="section-label block mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your AI platform challenge or engagement type..."
                    className="w-full px-3.5 py-2.5 text-sm text-[#0F0F0E] bg-[#FAFAF8] border border-[#E5E7EB] rounded-md placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B]/20 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#1B3A6B] rounded-md hover:bg-[#2D5BA3] transition-colors duration-150 active:scale-[0.97] disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
