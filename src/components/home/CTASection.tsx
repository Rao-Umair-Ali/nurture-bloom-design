import { Link } from "react-router-dom";
import { ArrowRight, Phone, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { usePageSections, useSettings } from "@/hooks/useCMS";
import { getBlockValue } from "@/lib/cms";
import { cn } from "@/lib/utils";

export function CTASection() {
  const { ref, isInView } = useInView();
  const { data: sections } = usePageSections("home");
  const { data: settings } = useSettings();

  const ctaSection = sections.find((s) => s.name === "cta");
  const blocks = ctaSection?.content_blocks || [];

  const badge = getBlockValue(blocks, "badge") || "Admissions Open 2025-26";
  const heading = getBlockValue(blocks, "heading") || "Give Your Child the Best Education";
  const description = getBlockValue(blocks, "description") || "Enroll your child at Bright Career Academy today. Limited seats available for the upcoming academic session. Don't miss out!";
  const address = getBlockValue(blocks, "address") || "📍 123 Education Road, City • Open Mon-Fri 8AM-3PM";

  const showAdmissionBtn = settings?.show_admission_button !== false;
  const phone = settings?.contact_phone || "+1234567890";

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
              {badge}
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6 max-w-2xl mx-auto">
              {heading}
            </h2>

            <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {showAdmissionBtn && (
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 h-14 text-lg">
                  <Link to="/admissions">
                    <FileDown className="w-5 h-5 mr-2" />
                    Apply Now
                  </Link>
                </Button>
              )}
              <Button asChild variant="outline" size="lg" className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 h-14 text-lg">
                <a href={`tel:${phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </a>
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/60 mt-6">
              {address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
