import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Target, Shield, Users, Sparkles, GraduationCap, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import bcaLogo from "@/assets/bca-logo.png";

const values = [
  { icon: Target, title: "Excellence", description: "We strive for academic excellence and push every student to reach their full potential.", color: "bg-primary/10" },
  { icon: Shield, title: "Discipline", description: "Character building through discipline, respect, and moral values is at our core.", color: "bg-secondary/10" },
  { icon: Users, title: "Community", description: "Building strong bonds between students, parents, and educators for holistic growth.", color: "bg-accent/10" },
  { icon: Sparkles, title: "Innovation", description: "Modern teaching methods and technology-enhanced learning for the 21st century.", color: "bg-primary/10" },
  { icon: GraduationCap, title: "Career Guidance", description: "Comprehensive career counseling to help students make informed decisions about their future.", color: "bg-secondary/10" },
  { icon: BookOpen, title: "Holistic Education", description: "Balanced focus on academics, sports, arts, and co-curricular activities.", color: "bg-accent/10" },
];

const team = [
  { name: "Mr. Shahid Ahmad", role: "Principal", bio: "With over 25 years in education, Mr. Ahmad leads BCA with a vision for academic excellence and student success.", avatar: "👨‍🏫" },
  { name: "Mrs. Nadia Hussain", role: "Vice Principal", bio: "An expert in curriculum development, Mrs. Hussain ensures our teaching standards remain the best in the region.", avatar: "👩‍🏫" },
  { name: "Mr. Imran Ali", role: "Head of Sciences", bio: "A passionate educator who brings science to life through practical experiments and modern teaching methods.", avatar: "👨‍🔬" },
  { name: "Mrs. Saba Khan", role: "Head of Languages", bio: "A language specialist dedicated to building strong communication skills in English and Urdu.", avatar: "👩‍💼" },
];

export default function About() {
  const { ref: storyRef, isInView: storyInView } = useInView();
  const { ref: valuesRef, isInView: valuesInView } = useInView();
  const { ref: teamRef, isInView: teamInView } = useInView();

  return (
    <Layout>
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-custom">
          <SectionHeading badge="About Us" title="Our Legacy of Excellence" description="For nearly two decades, Bright Career Academy has been shaping the leaders of tomorrow through quality education." />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div ref={storyRef} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={cn("opacity-0", storyInView && "animate-slide-in-left")}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">A Vision for Quality Education</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Bright Career Academy was established in 2005 with a clear mission: to provide accessible, high-quality education that prepares students for academic and career success.</p>
                <p>What began as a small school with a handful of students has grown into a respected institution serving over 1,000 families in our community. Our commitment to excellence has never wavered.</p>
                <p>Our educational philosophy combines rigorous academics with character development, ensuring students grow intellectually, morally, and socially.</p>
              </div>
              <Button asChild className="mt-8 rounded-full px-8">
                <Link to="/contact">Visit Our Campus</Link>
              </Button>
            </div>

            <div className={cn("relative opacity-0", storyInView && "animate-slide-in-right")}>
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 overflow-hidden shadow-card flex items-center justify-center">
                <img src={bcaLogo} alt="BCA" className="w-48 h-48 object-contain" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-card">
                <div className="text-4xl font-heading font-bold text-primary">18+</div>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding bg-primary/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Principal's Message</span>
            <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-6 italic">
              "At Bright Career Academy, we believe every child has the potential to achieve greatness. 
              Our role is to ignite that spark and guide them on their journey to success. 
              Education is not just about grades—it's about building character, confidence, and a lifelong love for learning."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-4xl">👨‍🏫</div>
              <div className="text-left">
                <p className="font-heading font-bold text-foreground">Mr. Shahid Ahmad</p>
                <p className="text-muted-foreground">Principal, Bright Career Academy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeading badge="Our Values" title="What We Stand For" description="These core values guide everything we do at Bright Career Academy." />
          <div ref={valuesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className={cn("bg-card rounded-2xl p-6 shadow-soft card-hover border border-border opacity-0", valuesInView && `animate-fade-in-up delay-${(index % 3 + 1) * 100}`)}>
                  <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-4", value.color)}>
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading badge="Our Team" title="Meet Our Faculty" description="Experienced and dedicated educators committed to your child's success." />
          <div ref={teamRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {team.map((member, index) => (
              <div key={member.name} className={cn("text-center opacity-0", teamInView && `animate-fade-in-up delay-${(index + 1) * 100}`)}>
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl mb-4 shadow-soft">{member.avatar}</div>
                <h3 className="font-heading font-bold text-foreground text-lg">{member.name}</h3>
                <p className="text-secondary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary/5">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Visit Our Campus</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">See our facilities, meet our teachers, and discover why BCA is the right choice for your child.</p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/contact">Schedule a Visit</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
