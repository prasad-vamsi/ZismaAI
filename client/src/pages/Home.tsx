/**
 * Home Page
 * Assembles all sections for the ZismaAI Platform Engineering website
 * Design: Quiet Authority — enterprise AI consulting, not personal portfolio
 */
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Solutions from "@/components/sections/Solutions";
import Architecture from "@/components/sections/Architecture";
import Expertise from "@/components/sections/Expertise";
import About from "@/components/sections/About";
import Insights from "@/components/sections/Insights";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

import { useScrollToSection } from "@/hooks/useScrollToSection";

type HomeProps = { section?: string };

export default function Home({ section }: HomeProps) {
  useScrollToSection(section);
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />
      <main>
        <Hero />
        <Philosophy />
        <Solutions />
        <Architecture />
        <Expertise />
        <About />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
