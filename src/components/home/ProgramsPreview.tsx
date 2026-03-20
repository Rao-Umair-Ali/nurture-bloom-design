import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const programs = [
  {
    id: "primary",
    title: "Primary Section",
    grades: "Grade 1 - 5",
    icon: BookOpen,
    description: "Building strong foundations in literacy, numeracy, and critical thinking through engaging and interactive learning methods.",
    features: ["Interactive classrooms", "Activity-based learning", "Strong foundation building"],
  },
  {
    id: "secondary",
    title: "Secondary Section",
    grades: "Grade 6 - 8",
    icon: GraduationCap,
    description: "Advancing academic skills with a focus on science, mathematics, and language arts to prepare for higher education.",
    features: ["Science laboratories", "Computer education", "Sports & co-curricular"],
  },
  {
    id: "matric",
    title: "Matric Section",
    grades: "Grade 9 - 10",
    icon: Award,
    description: "Comprehensive board exam preparation with expert faculty, career guidance, and competitive exam coaching.",
    features: ["Board exam preparation", "Career counseling", "Competitive exam coaching"],
  },
];

export function ProgramsPreview() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Our Programs"
          title="Academic Programs"
          description="Structured curricula designed to nurture academic excellence from primary through matriculation."
        />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
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

                <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-3">
                  {program.grades}
                </div>

                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>

                <ul className="space-y-2 mb-6">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/programs#${program.id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
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
