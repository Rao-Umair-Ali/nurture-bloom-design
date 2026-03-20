import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import bcaLogo from "@/assets/bca-logo.png";

export function HeroSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 blob float opacity-40" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary/10 blob float opacity-40" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-accent/10 blob float opacity-30" style={{ animationDelay: "-1.5s" }} />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 opacity-0",
                isInView && "animate-fade-in-up"
              )}
            >
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm font-medium">Excellence in Education Since 2005</span>
            </div>

            <h1
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 opacity-0",
                isInView && "animate-fade-in-up delay-100"
              )}
            >
              <span className="text-primary">Bright Career</span>{" "}
              <span className="relative inline-block">
                Academy
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="hsl(var(--secondary))" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p
              className={cn(
                "text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 opacity-0",
                isInView && "animate-fade-in-up delay-200"
              )}
            >
              Building Futures Through Quality Education. We nurture young minds 
              with discipline, knowledge, and career guidance for a brighter tomorrow.
            </p>

            <div
              className={cn(
                "flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start opacity-0",
                isInView && "animate-fade-in-up delay-300"
              )}
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 h-14 text-lg animate-pulse-glow"
              >
                <Link to="/admissions">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/programs">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Programs
                </Link>
              </Button>
            </div>

            <div
              className={cn(
                "flex items-center gap-8 mt-10 justify-center lg:justify-start opacity-0",
                isInView && "animate-fade-in-up delay-400"
              )}
            >
              {[
                { value: "1000+", label: "Students" },
                { value: "50+", label: "Teachers" },
                { value: "98%", label: "Pass Rate" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-heading font-bold text-primary">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={cn("relative opacity-0", isInView && "animate-fade-in delay-200")}>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 overflow-hidden shadow-card flex items-center justify-center">
                <img src={bcaLogo} alt="Bright Career Academy" className="w-64 h-64 object-contain float" />
              </div>

              <div className="absolute -top-4 -left-4 bg-card rounded-2xl p-4 shadow-card float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">Academic</p>
                    <p className="text-sm text-muted-foreground">Excellence</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl p-4 shadow-card float" style={{ animationDelay: "-2s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">Modern</p>
                    <p className="text-sm text-muted-foreground">Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
