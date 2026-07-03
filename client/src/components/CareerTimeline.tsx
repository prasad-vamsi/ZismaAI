import { careerMilestones } from "@/data/career";

export default function CareerTimeline() {
  return (
    <div className="relative mt-12">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#E5E7EB] hidden sm:block" />
      <div className="space-y-6">
        {careerMilestones.map((m) => (
          <div key={`${m.company}-${m.period}`} className="relative sm:pl-10">
            <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1B3A6B] hidden sm:block" />
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-semibold text-[0.9375rem] text-[#0F0F0E]">{m.company}</span>
                    <span className="text-[#D1D5DB]">·</span>
                    <span className="text-sm text-[#6B7280]">{m.location}</span>
                  </div>
                  <div className="text-sm text-[#374151]">{m.role}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="section-label">{m.period}</span>
                  <span className="px-2 py-0.5 text-xs font-medium text-[#1B3A6B] bg-[#1B3A6B]/8 rounded-full font-mono-brand">
                    {m.theme}
                  </span>
                </div>
              </div>
              <p className="text-sm text-[#4B5563] leading-relaxed mb-3">{m.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {m.highlights.map((h) => (
                  <span key={h} className="tech-badge">{h}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
