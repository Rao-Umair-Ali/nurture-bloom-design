import { Link } from "react-router-dom";
import { Baby, Heart, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const programs = [
  {
    id: "infant",
    title: "Infant Care",
    age: "0-12 months",
    icon: Baby,
    color: "bg-peach",
    description:
      "A warm, nurturing environment focused on bonding, sensory exploration, and reaching important developmental milestones.",
    features: ["Individual care plans", "Tummy time activities", "Parent communication"],
  },
  {
    id: "toddler",
    title: "Toddler Program",
    age: "1-2 years",
    icon: Heart,
    color: "bg-secondary",
    description:
      "Encouraging independence and curiosity through guided play, language development, and social interaction.",
    features: ["Sensory play", "Language building", "Motor skill development"],
  },
  {
    id: "preschool",
    title: "Preschool",
    age: "3-5 years",
    icon: BookOpen,
    color: "bg-primary",
    description:
      "Kindergarten readiness program focusing on literacy, numeracy, creativity, and social-emotional learning.",
    features: ["Pre-reading skills", "Math foundations", "Creative expression"],
  },
];

export function ProgramsPreview() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Our Programs"
          title="Age-Appropriate Learning"
          description="Tailored programs designed to nurture every stage of your child's early development."
        />

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className={cn(
                  "group bg-card rounded-3xl p-8 shadow-soft card-hover opacity-0",
                  isInView && `animate-fade-in-up delay-${(index + 1) * 100}`
                )}
              >
                <div
                  className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                    program.color
                  )}
                >
                  <Icon className="w-8 h-8 text-foreground" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-3">
                  {program.age}
                </div>

                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                  {program.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/programs#${program.id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8"
          >
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
