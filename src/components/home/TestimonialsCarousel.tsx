import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    role: "Parent of Emma, 3",
    avatar: "👩",
    rating: 5,
    text: "Dr. Sofia's Daycare has been a blessing for our family. Emma has flourished here and looks forward to going every single day. The teachers are incredibly caring and attentive.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Parent of Lucas, 2",
    avatar: "👨",
    rating: 5,
    text: "The curriculum is amazing! Lucas has learned so much in just a few months. The daily updates and photos give us peace of mind knowing he's in great hands.",
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Parent of Sophia, 4",
    avatar: "👩‍🦱",
    rating: 5,
    text: "We couldn't be happier with our choice. The facilities are spotless, the staff is professional, and most importantly, our daughter is thriving and making wonderful friends.",
  },
  {
    id: 4,
    name: "David Martinez",
    role: "Parent of twins, 1",
    avatar: "👨‍🦲",
    rating: 5,
    text: "Managing twins is challenging, but the infant care program here is exceptional. The personalized attention each child receives is remarkable. Highly recommend!",
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container-custom">
        <SectionHeading
          badge="Testimonials"
          title="What Parents Say"
          description="Hear from families who have entrusted us with their most precious ones."
        />

        <div ref={ref} className="mt-16 relative max-w-4xl mx-auto">
          {/* Quote icon */}
          <div
            className={cn(
              "absolute -top-8 left-8 opacity-0",
              isInView && "animate-fade-in"
            )}
          >
            <Quote className="w-16 h-16 text-primary/20" />
          </div>

          {/* Testimonial card */}
          <div
            className={cn(
              "bg-card rounded-3xl p-8 md:p-12 shadow-card opacity-0",
              isInView && "animate-scale-in"
            )}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="min-w-full px-4"
                  >
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-accent fill-accent"
                        />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-3xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-heading font-bold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={goToPrev}
                  className="w-10 h-10 rounded-full border border-border hover:bg-muted flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full border border-border hover:bg-muted flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* View all link */}
          <div className="text-center mt-8">
            <Button
              asChild
              variant="ghost"
              className="text-primary hover:text-primary/80"
            >
              <Link to="/testimonials">
                Read More Reviews
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
