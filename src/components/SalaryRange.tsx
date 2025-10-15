interface SalaryRangeProps {
  min: number;
  max: number;
  gradient?: string;
}

export const SalaryRange = ({ min, max, gradient = "bg-gradient-hero" }: SalaryRangeProps) => {
  const formatSalary = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-sm font-medium">
        <span className="text-muted-foreground">Entry Level</span>
        <span className="text-muted-foreground">Senior Level</span>
      </div>
      <div className="relative h-8 bg-muted rounded-full overflow-hidden">
        <div className={`h-full ${gradient} rounded-full shadow-glow transition-all duration-500`} />
      </div>
      <div className="flex justify-between text-lg font-bold">
        <span>{formatSalary(min)}</span>
        <span>{formatSalary(max)}</span>
      </div>
    </div>
  );
};
