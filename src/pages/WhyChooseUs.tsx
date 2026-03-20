import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Shield, GraduationCap, Users, Monitor, BookOpen, Award, Check, Star, Target, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  { icon: GraduationCap, title: "Qualified Teachers", description: "Highly qualified and experienced faculty members dedicated to student success.", items: ["M.Ed & M.Phil qualified", "Ongoing professional training", "Subject specialists", "Caring mentors"] },
  { icon: Monitor, title: "Modern Learning", description: "Technology-integrated classrooms with smart boards, computer labs, and digital resources.", items: ["Smart classrooms", "Computer labs", "Digital library", "Online resources"] },
  { icon: Shield, title: "Discipline & Values", description: "Strong emphasis on discipline, moral values, and character building alongside academics.", items: ["Character education", "Code of conduct", "Respectful environment", "Leadership training"] },
  { icon: Target, title: "Career Guidance", description: "Professional career counseling to help students choose the right path for their future.", items: ["Career workshops", "University guidance", "Aptitude testing", "Mentorship programs"] },
  { icon: BookOpen, title: "Comprehensive Curriculum", description: "Well-structured curriculum aligned with board standards plus enrichment activities.", items: ["Board-aligned syllabus", "Extra practice tests", "Project-based learning", "Research skills"] },
  { icon: Dumbbell, title: "Sports & Activities", description: "Well-equipped sports facilities and a range of extracurricular activities for holistic development.", items: ["Cricket & football", "Annual sports day", "Debate competitions", "Science exhibitions"] },
  { icon: Users, title: "Small Class Sizes", description: "Optimal student-teacher ratio ensuring personalized attention for every student.", items: ["25-30 students per class", "Individual attention", "Regular assessments", "Parent-teacher meetings"] },
  { icon: Award, title: "Proven Results", description: "Consistently outstanding board exam results with students achieving top positions.", items: ["98% pass rate", "Top board positions", "University placements", "Award-winning students"] },
];

export default function WhyChooseUs() {
  const { ref: featuresRef, isInView: featuresInView } = useInView();
  const { ref: testimonialsRef, isInView: testimonialsInView } = useInView();

  return (
    <Layout>
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-custom">
          <SectionHeading badge="Why Choose Us" title="The BCA Advantage" description="Discover what makes Bright Career Academy the preferred choice for quality education." />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading badge="Our Strengths" title="What Sets Us Apart" description="Every aspect of BCA is designed for your child's academic and personal success." />
          <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className={cn("bg-card rounded-2xl p-6 shadow-soft card-hover border border-border opacity-0", featuresInView && `animate-fade-in-up delay-${((index % 4) + 1) * 100}`)}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary/5">
        <div className="container-custom">
          <div ref={testimonialsRef} className={cn("max-w-4xl mx-auto text-center opacity-0", testimonialsInView && "animate-scale-in")}>
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-8 h-8 text-secondary fill-secondary" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-8 leading-relaxed">
              "Choosing Bright Career Academy was the best decision for our children's education. 
              The academic results and personal growth have been remarkable."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-4xl">👨‍👩‍👧‍👦</div>
              <div className="text-left">
                <p className="font-heading font-bold text-foreground">The Ahmed Family</p>
                <p className="text-muted-foreground">Parents of 3 students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Experience the BCA Difference</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">Visit our campus and see for yourself why families choose Bright Career Academy.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 bg-secondary hover:bg-secondary/90">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/testimonials">Read Reviews</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
