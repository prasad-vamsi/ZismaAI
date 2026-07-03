/**
 * Navigation — uses shareable section routes (/about, /contact, etc.)
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import Logo from "./Logo";
import { navLinks, scrollToSection } from "@/lib/nav";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string, sectionId: string) => {
    setMobileOpen(false);
    if (location === path) {
      scrollToSection(sectionId);
    } else {
      setLocation(path);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/92 backdrop-blur-xl border-b border-[#E5E7EB] shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="group" aria-label="ZismaAI home">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.path, link.sectionId)}
                className="text-sm font-medium text-[#374151] transition-colors duration-150 hover:text-[#1B3A6B]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("/contact", "contact")}
              className="px-4 py-2 text-sm font-medium text-white bg-[#1B3A6B] rounded-md hover:bg-[#2D5BA3] transition-colors duration-150"
            >
              Get in Touch
            </button>
          </div>

          <button
            className="md:hidden p-2 text-[#374151]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E7EB] shadow-lg">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.path, link.sectionId)}
                className="text-left px-3 py-2.5 text-sm font-medium text-[#374151] hover:text-[#1B3A6B] hover:bg-[#F4F4F2] rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("/contact", "contact")}
              className="mt-2 px-4 py-2.5 text-sm font-medium text-white bg-[#1B3A6B] rounded-md hover:bg-[#2D5BA3] transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
