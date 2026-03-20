import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const testimonials = [
  { id: 1, name: "Ahmed Khan", role: "Parent of Ali, Grade 8", avatar: "👨", rating: 5, text: "BCA has transformed my son's academic performance. The teachers are dedicated and the discipline is excellent." },
  { id: 2, name: "Fatima Noor", role: "Parent of Sara, Grade 5", avatar: "👩", rating: 5, text: "The quality of education is outstanding. My daughter has developed a genuine love for learning." },
  { id: 3, name: "Mohammad Raza", role: "Parent of Hassan, Grade 10", avatar: "👨‍💼", rating: 5, text: "Hassan scored 95% in board exams thanks to BCA's exceptional coaching and career guidance." },
  { id: 4, name: "Ayesha Malik", role: "Parent of Zainab, Grade 3", avatar: "👩‍🦱", rating: 5, text: "BCA provides the perfect balance of academics and character building. Zainab loves going to school." },
  { id: 5, name: "Usman Sheikh", role: "Parent of Omar, Grade 7", avatar: "👨‍🦲", rating: 5, text: "The science labs and computer facilities are top-notch. Omar's interest in technology has really grown here." },
  { id: 6, name: "Sana Tariq", role: "Parent of Hira, Grade 9", avatar: "👩‍🦰", rating: 5, text: "The career counseling sessions have been invaluable. Hira now has a clear vision for her future." },
];

export default function Testimonials() {
  const { ref, isInView } = useInView();

  return (
    <Layout>
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-custom">
          <SectionHeading badge="Testimonials" title="What Parents Say About BCA" description="Hear from the families who trust us with their children's education." />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/10">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
              </div>
              <span className="font-heading font-bold text-foreground">4.9/5</span>
              <span className="text-muted-foreground">from 200+ reviews</span>
            </div>
          </div>

          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={cn("bg-card rounded-2xl p-6 shadow-soft border border-border opacity-0", isInView && `animate-fade-in-up delay-${((index % 3) + 1) * 100}`)}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-heading font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full px-8 bg-secondary hover:bg-secondary/90">
              <Link to="/admissions">Join Our Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
