import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4 opacity-0",
            isInView && "animate-fade-in-up"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 opacity-0",
          isInView && "animate-fade-in-up delay-100"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg text-muted-foreground opacity-0",
            isInView && "animate-fade-in-up delay-200"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
