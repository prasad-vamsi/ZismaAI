export type NavLink = {
  label: string;
  path: string;
  sectionId: string;
};

export const navLinks: NavLink[] = [
  { label: "Solutions", path: "/solutions", sectionId: "solutions" },
  { label: "Architecture", path: "/architecture", sectionId: "architecture" },
  { label: "Expertise", path: "/expertise", sectionId: "expertise" },
  { label: "About", path: "/about", sectionId: "about" },
  { label: "Insights", path: "/insights", sectionId: "insights" },
  { label: "Contact", path: "/contact", sectionId: "contact" },
];

export function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
