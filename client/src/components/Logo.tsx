/**
 * ZismaAI brand mark — geometric infrastructure-node motif
 */
type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  variant?: "default" | "inverted";
};

export function LogoMark({
  className = "h-8 w-8",
  variant = "default",
}: Pick<LogoProps, "className" | "variant">) {
  const primary = variant === "inverted" ? "#FFFFFF" : "#1B3A6B";
  const accent = variant === "inverted" ? "#6B8FD4" : "#2D5BA3";
  const bg = variant === "inverted" ? "#1B3A6B" : "#EEF2F8";

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill={bg} />
      <path
        d="M8 10h12l-8 6h10"
        stroke={primary}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="10" r="2.5" fill={accent} />
      <circle cx="20" cy="10" r="2.5" fill={primary} />
      <circle cx="12" cy="16" r="2.5" fill={primary} />
      <circle cx="22" cy="22" r="2.5" fill={accent} />
      <path
        d="M8 10l4 6M20 10l-8 6M12 16l10 6"
        stroke={primary}
        strokeWidth="1.4"
        strokeOpacity="0.35"
      />
    </svg>
  );
}

export default function Logo({
  className,
  showWordmark = true,
  variant = "default",
}: LogoProps) {
  const textColor = variant === "inverted" ? "text-white" : "text-[#0F0F0E]";
  const accentColor = variant === "inverted" ? "text-[#6B8FD4]" : "text-[#1B3A6B]";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark variant={variant} />
      {showWordmark && (
        <span className={`font-semibold text-[15px] tracking-tight ${textColor}`}>
          Zisma<span className={accentColor}>AI</span>
        </span>
      )}
    </span>
  );
}
