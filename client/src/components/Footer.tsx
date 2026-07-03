/**
 * Footer Component
 * Design: Quiet Authority — professional, minimal
 * Company description, navigation, social links, copyright
 */
import { Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Architecture", href: "#architecture" },
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-[#0F0F0E] text-white">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/manus-storage/logo-mark_463bf5e5.png"
                alt="Vamsi AI Platform"
                className="h-7 w-7 object-contain brightness-0 invert"
              />
              <span className="font-semibold text-[15px] tracking-tight">
                Vamsi<span className="text-[#6B8FD4]">AI</span>
              </span>
            </div>
            <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-[320px]">
              Enterprise AI platform engineering — designing and building the infrastructure
              layer between AI research and enterprise production across AWS and Google Cloud.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7280] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:prasad.md1196@gmail.com"
                className="text-[#6B7280] hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <div className="section-label text-[#4B5563] mb-4">Navigation</div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="section-label text-[#4B5563] mb-4">Contact</div>
            <div className="space-y-2">
              <a
                href="mailto:prasad.md1196@gmail.com"
                className="block text-sm text-[#9CA3AF] hover:text-white transition-colors"
              >
                prasad.md1196@gmail.com
              </a>
              <p className="text-sm text-[#9CA3AF]">Erie, PA · United States</p>
            </div>
            <div className="mt-6">
              <button
                onClick={() => handleNavClick("#contact")}
                className="px-4 py-2 text-sm font-medium text-white border border-[#374151] rounded-md hover:border-[#6B7280] transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#1F2937] flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-[#4B5563]">
            © {new Date().getFullYear()} Vamsi AI Platform Engineering. All rights reserved.
          </p>
          <p className="text-xs text-[#4B5563]">
            Enterprise AI · MLOps · LLMOps · Agentic AI · Distributed Inference
          </p>
        </div>
      </div>
    </footer>
  );
}
