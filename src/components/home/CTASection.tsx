import { Link } from "react-router-dom";
import { ArrowRight, Phone, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function CTASection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-8 md:p-16 text-center opacity-0",
            isInView && "animate-scale-in"
          )}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 blob" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 blob" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-secondary/20 blob" />

          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
              Admissions Open 2025-26
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6 max-w-2xl mx-auto">
              Give Your Child the Best Education
            </h2>

            <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
              Enroll your child at Bright Career Academy today. Limited seats available 
              for the upcoming academic session. Don't miss out!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 h-14 text-lg"
              >
                <Link to="/admissions">
                  <FileDown className="w-5 h-5 mr-2" />
                  Apply Now
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 h-14 text-lg"
              >
                <a href="tel:+1234567890">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </a>
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/60 mt-6">
              📍 123 Education Road, City • Open Mon-Fri 8AM-3PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
