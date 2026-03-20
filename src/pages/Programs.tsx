import { useState } from "react";
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { BookOpen, GraduationCap, Award, Clock, Check, FlaskConical, Globe, Calculator, Palette, Dumbbell, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const programs = [
  {
    id: "primary",
    title: "Primary Section",
    grades: "Grade 1 - 5",
    icon: BookOpen,
    description: "Building strong academic foundations through interactive and engaging learning methods. Focus on literacy, numeracy, and creative thinking.",
    features: ["English & Urdu language skills", "Mathematics fundamentals", "General science & social studies", "Islamic studies & Nazra", "Art & craft activities", "Physical education"],
    subjects: [
      { name: "English", icon: Globe },
      { name: "Mathematics", icon: Calculator },
      { name: "Science", icon: FlaskConical },
      { name: "Urdu", icon: BookOpen },
      { name: "Art & Craft", icon: Palette },
      { name: "P.E.", icon: Dumbbell },
      { name: "Computer", icon: Monitor },
    ],
  },
  {
    id: "secondary",
    title: "Secondary Section",
    grades: "Grade 6 - 8",
    icon: GraduationCap,
    description: "Advancing academic excellence with specialized subjects, lab-based science, and development of analytical and critical thinking skills.",
    features: ["Advanced mathematics", "Lab-based science education", "Computer science & IT", "English literature & composition", "Social studies & history", "Sports & extracurriculars"],
    subjects: [
      { name: "English", icon: Globe },
      { name: "Mathematics", icon: Calculator },
      { name: "Physics", icon: FlaskConical },
      { name: "Chemistry", icon: FlaskConical },
      { name: "Biology", icon: FlaskConical },
      { name: "Computer", icon: Monitor },
      { name: "Urdu", icon: BookOpen },
    ],
  },
  {
    id: "matric",
    title: "Matric Section",
    grades: "Grade 9 - 10",
    icon: Award,
    description: "Comprehensive board exam preparation with expert faculty, extensive practice tests, career counseling, and competitive exam coaching.",
    features: ["Board exam focused teaching", "Weekly mock tests & assessments", "Career guidance sessions", "Competitive exam preparation", "Science & Commerce streams", "Parent-teacher meetings"],
    subjects: [
      { name: "Physics", icon: FlaskConical },
      { name: "Chemistry", icon: FlaskConical },
      { name: "Biology/CS", icon: Monitor },
      { name: "Mathematics", icon: Calculator },
      { name: "English", icon: Globe },
      { name: "Urdu", icon: BookOpen },
      { name: "Pak Studies", icon: BookOpen },
    ],
  },
];

export default function Programs() {
  const [activeProgram, setActiveProgram] = useState(programs[0].id);
  const { ref, isInView } = useInView();

  const currentProgram = programs.find((p) => p.id === activeProgram) || programs[0];
  const Icon = currentProgram.icon;

  return (
    <Layout>
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-custom">
          <SectionHeading badge="Our Programs" title="Academic Programs" description="From Primary to Matric — structured curricula designed for academic excellence and career readiness." />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div ref={ref} className={cn("flex flex-wrap justify-center gap-4 mb-12 opacity-0", isInView && "animate-fade-in-up")}>
            {programs.map((program) => {
              const ProgramIcon = program.icon;
              return (
                <button
                  key={program.id}
                  onClick={() => setActiveProgram(program.id)}
                  className={cn(
                    "flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all border",
                    activeProgram === program.id
                      ? "bg-primary text-primary-foreground shadow-soft border-primary"
                      : "bg-card hover:bg-muted text-foreground border-border"
                  )}
                >
                  <ProgramIcon className="w-5 h-5" />
                  <span>{program.title}</span>
                  <span className="text-sm opacity-70">({program.grades})</span>
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className={cn("opacity-0", isInView && "animate-slide-in-left delay-200")}>
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="w-10 h-10 text-primary" />
              </div>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{currentProgram.title}</h2>
                <span className="px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">{currentProgram.grades}</span>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{currentProgram.description}</p>

              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Program Highlights</h3>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {currentProgram.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="rounded-full px-8 bg-secondary hover:bg-secondary/90">
                <Link to="/admissions">Enroll Now</Link>
              </Button>
            </div>

            <div className={cn("opacity-0", isInView && "animate-slide-in-right delay-300")}>
              <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-heading font-bold text-foreground">Subjects Offered</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {currentProgram.subjects.map((subject) => {
                    const SubjectIcon = subject.icon;
                    return (
                      <div key={subject.name} className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <SubjectIcon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{subject.name}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 p-4 bg-primary/5 rounded-2xl">
                  <h4 className="font-heading font-bold text-foreground mb-2">School Timings</h4>
                  <p className="text-muted-foreground text-sm">Monday - Friday: 8:00 AM - 3:00 PM</p>
                  <p className="text-muted-foreground text-sm">Saturday: 9:00 AM - 12:00 PM (Extra classes)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary/5">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Find the Right Program for Your Child</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">Not sure which program is right? Contact us for a personalized consultation.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 bg-secondary hover:bg-secondary/90">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
