import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const testimonials = [
  { id: 1, name: "Sarah Thompson", role: "Parent of Emma, 3", avatar: "👩", rating: 5, text: "Dr. Sofia's Daycare has been a blessing for our family. Emma has flourished here and looks forward to going every single day." },
  { id: 2, name: "Michael Chen", role: "Parent of Lucas, 2", avatar: "👨", rating: 5, text: "The curriculum is amazing! Lucas has learned so much in just a few months. The daily updates give us peace of mind." },
  { id: 3, name: "Jessica Williams", role: "Parent of Sophia, 4", avatar: "👩‍🦱", rating: 5, text: "The facilities are spotless, the staff is professional, and our daughter is thriving and making wonderful friends." },
  { id: 4, name: "David Martinez", role: "Parent of twins, 1", avatar: "👨‍🦲", rating: 5, text: "Managing twins is challenging, but the infant care program here is exceptional. Highly recommend!" },
  { id: 5, name: "Amanda Rodriguez", role: "Parent of Liam, 4", avatar: "👩‍🦰", rating: 5, text: "Liam was shy before joining. Now he's confident, social, and excited about learning. Thank you Dr. Sofia's!" },
  { id: 6, name: "Robert Kim", role: "Parent of Mia, 2", avatar: "👨‍💼", rating: 5, text: "The communication through the parent app is fantastic. We feel connected to Mia's day even when we're at work." },
];

export default function Testimonials() {
  const { ref, isInView } = useInView();

  return (
    <Layout>
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-custom">
          <SectionHeading
            badge="Testimonials"
            title="What Parents Say About Us"
            description="Don't just take our word for it—hear from the families who trust us every day."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/20">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <span className="font-heading font-bold text-foreground">4.9/5</span>
              <span className="text-muted-foreground">from 200+ reviews</span>
            </div>
          </div>

          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "bg-card rounded-2xl p-6 shadow-soft opacity-0",
                  isInView && `animate-fade-in-up delay-${((index % 3) + 1) * 100}`
                )}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/contact">Join Our Happy Families</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
