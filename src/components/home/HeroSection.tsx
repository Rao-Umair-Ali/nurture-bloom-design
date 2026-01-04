import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export function HeroSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 blob float opacity-60" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary/20 blob float opacity-60" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-accent/30 blob float opacity-40" style={{ animationDelay: "-1.5s" }} />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground mb-6 opacity-0",
                isInView && "animate-fade-in-up"
              )}
            >
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-medium">Trusted by 500+ families</span>
            </div>

            <h1
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 opacity-0",
                isInView && "animate-fade-in-up delay-100"
              )}
            >
              Where Little{" "}
              <span className="text-primary">Minds</span>{" "}
              <span className="relative inline-block">
                Bloom
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p
              className={cn(
                "text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 opacity-0",
                isInView && "animate-fade-in-up delay-200"
              )}
            >
              A nurturing environment where children aged 0-5 years discover, learn, 
              and grow through play-based education and loving care.
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
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-lg animate-pulse-glow"
              >
                <Link to="/contact">
                  Schedule a Visit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-lg border-2"
              >
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div
              className={cn(
                "flex items-center gap-6 mt-10 justify-center lg:justify-start opacity-0",
                isInView && "animate-fade-in-up delay-400"
              )}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-medium"
                  >
                    👶
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  4.9/5 from 200+ reviews
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={cn(
              "relative opacity-0",
              isInView && "animate-fade-in delay-200"
            )}
          >
            <div className="relative">
              {/* Main image placeholder */}
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden shadow-card">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">👨‍👩‍👧‍👦</div>
                    <p className="text-muted-foreground font-medium">
                      Happy children playing
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-card rounded-2xl p-4 shadow-card float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                    🎨
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">Creative</p>
                    <p className="text-sm text-muted-foreground">Activities</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -right-4 bg-card rounded-2xl p-4 shadow-card float"
                style={{ animationDelay: "-2s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-2xl">
                    📚
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">Early</p>
                    <p className="text-sm text-muted-foreground">Learning</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute top-1/2 -right-8 bg-card rounded-2xl p-4 shadow-card float hidden lg:block"
                style={{ animationDelay: "-4s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-peach flex items-center justify-center text-2xl">
                    ❤️
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">Loving</p>
                    <p className="text-sm text-muted-foreground">Care</p>
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
