import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/useInView";
import { usePrograms } from "@/hooks/useCMS";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  GraduationCap,
  Award,
};

export function ProgramsPreview() {
  const { ref, isInView } = useInView();
  const { data: programs, loading } = usePrograms();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Our Programs"
          title="Academic Programs"
          description="Structured curricula designed to nurture academic excellence from primary through matriculation."
        />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-card rounded-3xl p-8 border border-border">
                <Skeleton className="w-16 h-16 rounded-2xl mb-6" />
                <Skeleton className="h-6 w-24 mb-3" />
                <Skeleton className="h-8 w-48 mb-3" />
                <Skeleton className="h-20 w-full mb-6" />
              </div>
            ))
          ) : (
            programs.map((program, index) => {
              const Icon = iconMap[program.icon || "BookOpen"] || BookOpen;
              const features = Array.isArray(program.features) ? program.features as string[] : [];
              return (
                <div
                  key={program.id}
                  className={cn(
                    "group bg-card rounded-3xl p-8 shadow-soft card-hover opacity-0 border border-border",
                    isInView && `animate-fade-in-up delay-${(index + 1) * 100}`
                  )}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {program.age_range && (
                    <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-3">
                      {program.age_range}
                    </div>
                  )}

                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>

                  {features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {features.slice(0, 3).map((feature) => (
                        <li key={String(feature)} className="flex items-center gap-2 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          {String(feature)}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    to="/programs"
                    className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })
          )}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
