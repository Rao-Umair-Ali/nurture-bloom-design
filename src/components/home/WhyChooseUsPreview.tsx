import { Link } from "react-router-dom";
import { GraduationCap, Monitor, Shield, Target, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const features = [
  { icon: GraduationCap, title: "Qualified Teachers", description: "Highly qualified M.Ed & M.Phil faculty dedicated to student success." },
  { icon: Monitor, title: "Modern Learning", description: "Smart classrooms, computer labs, and technology-integrated education." },
  { icon: Shield, title: "Discipline & Values", description: "Strong emphasis on character building, morals, and discipline." },
  { icon: Target, title: "Career Guidance", description: "Professional counseling to guide students toward the right career path." },
];

export function WhyChooseUsPreview() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeading
          badge="Why Choose Us"
          title="The BCA Advantage"
          description="What makes Bright Career Academy the preferred choice for quality education."
        />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={cn(
                  "group bg-card rounded-2xl p-6 shadow-soft card-hover border border-border text-center opacity-0",
                  isInView && `animate-fade-in-up delay-${(index + 1) * 100}`
                )}
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/why-choose-us">Learn More <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
