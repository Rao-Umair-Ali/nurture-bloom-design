import { useInView } from "@/hooks/useInView";
import { useCounter } from "@/hooks/useCounter";
import { cn } from "@/lib/utils";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: string;
  isInView: boolean;
}

function StatItem({ value, suffix = "", label, delay, isInView }: StatItemProps) {
  const count = useCounter({ end: isInView ? value : 0, duration: 2000 });

  return (
    <div className={cn("text-center opacity-0", isInView && `animate-fade-in-up ${delay}`)}>
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
}

export function StatsSection() {
  const { ref, isInView } = useInView();

  const stats = [
    { value: 14, suffix: "+", label: "Years Experience" },
    { value: 500, suffix: "+", label: "Happy Families" },
    { value: 25, suffix: "+", label: "Qualified Staff" },
    { value: 98, suffix: "%", label: "Parent Satisfaction" },
  ];

  return (
    <section className="py-16 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      
      <div className="container-custom" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={`delay-${(index + 1) * 100}`}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
