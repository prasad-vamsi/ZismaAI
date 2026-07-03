import { useEffect } from "react";
import { scrollToSection } from "@/lib/nav";

export function useScrollToSection(sectionId?: string) {
  useEffect(() => {
    if (!sectionId) return;
    const timer = setTimeout(() => scrollToSection(sectionId), 100);
    return () => clearTimeout(timer);
  }, [sectionId]);
}
