import { cn } from "@/lib/utils";

type Domain = "mobile" | "web" | "ai" | "system" | "backend" | "game";

interface DomainBadgeProps {
  domain: Domain;
  className?: string;
}

const domainConfig: Record<Domain, { label: string; gradient: string }> = {
  mobile: { label: "Mobile", gradient: "bg-gradient-mobile" },
  web: { label: "Web", gradient: "bg-gradient-web" },
  ai: { label: "AI/ML", gradient: "bg-gradient-ai" },
  system: { label: "System", gradient: "bg-gradient-system" },
  backend: { label: "Backend", gradient: "bg-gradient-backend" },
  game: { label: "Game Dev", gradient: "bg-primary" },
};

export const DomainBadge = ({ domain, className }: DomainBadgeProps) => {
  const config = domainConfig[domain];
  
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white shadow-soft",
        config.gradient,
        className
      )}
    >
      {config.label}
    </span>
  );
};
