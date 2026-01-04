import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import {
  Shield,
  Heart,
  GraduationCap,
  Users,
  Clock,
  Camera,
  Leaf,
  Award,
  Check,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Shield,
    title: "Safety & Security",
    description:
      "24/7 surveillance, secure entry systems, comprehensive background checks for all staff, and strict visitor protocols.",
    color: "bg-primary",
    items: [
      "Keypad entry system",
      "Security cameras",
      "Background-checked staff",
      "Emergency preparedness plans",
    ],
  },
  {
    icon: Heart,
    title: "Nurturing Environment",
    description:
      "Small class sizes and low teacher-to-child ratios ensure your child receives personalized attention and care.",
    color: "bg-peach",
    items: [
      "Low staff-to-child ratios",
      "Warm, loving atmosphere",
      "Individual attention",
      "Emotional support",
    ],
  },
  {
    icon: GraduationCap,
    title: "Quality Education",
    description:
      "Research-based curriculum designed by early childhood experts to prepare children for academic success.",
    color: "bg-secondary",
    items: [
      "Play-based learning",
      "Kindergarten prep",
      "STEM activities",
      "Language development",
    ],
  },
  {
    icon: Users,
    title: "Qualified Staff",
    description:
      "All teachers hold degrees in early childhood education and receive ongoing professional development.",
    color: "bg-lavender",
    items: [
      "Certified educators",
      "First aid trained",
      "Ongoing training",
      "Passionate team",
    ],
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description:
      "Extended operating hours designed to accommodate working parents' busy schedules.",
    color: "bg-accent",
    items: [
      "Open 7 AM - 6 PM",
      "Full & part-time options",
      "Drop-in availability",
      "Early drop-off",
    ],
  },
  {
    icon: Camera,
    title: "Parent Communication",
    description:
      "Stay connected with daily updates, photos, and real-time communication through our parent app.",
    color: "bg-primary",
    items: [
      "Daily activity reports",
      "Photo sharing",
      "Milestone tracking",
      "Direct messaging",
    ],
  },
  {
    icon: Leaf,
    title: "Healthy Environment",
    description:
      "Nutritious meals, outdoor play areas, and strict cleanliness protocols for your child's wellbeing.",
    color: "bg-secondary",
    items: [
      "Healthy meals included",
      "Outdoor playground",
      "Clean facilities",
      "Allergy accommodations",
    ],
  },
  {
    icon: Award,
    title: "Licensed & Accredited",
    description:
      "Fully licensed by the state and committed to meeting the highest standards of childcare excellence.",
    color: "bg-peach",
    items: [
      "State licensed",
      "Regular inspections",
      "Quality standards",
      "Continuous improvement",
    ],
  },
];

const stats = [
  { value: "1:3", label: "Infant Ratio" },
  { value: "1:4", label: "Toddler Ratio" },
  { value: "1:8", label: "Preschool Ratio" },
  { value: "100%", label: "Staff Certified" },
];

export default function WhyChooseUs() {
  const { ref: featuresRef, isInView: featuresInView } = useInView();
  const { ref: statsRef, isInView: statsInView } = useInView();
  const { ref: testimonialsRef, isInView: testimonialsInView } = useInView();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-custom">
          <SectionHeading
            badge="Why Choose Us"
            title="The Difference is in the Details"
            description="Discover why hundreds of families trust Dr. Sofia's Daycare with their most precious ones."
          />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container-custom">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={cn(
                  "text-center opacity-0",
                  statsInView && `animate-fade-in-up delay-${(index + 1) * 100}`
                )}
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Our Advantages"
            title="What Sets Us Apart"
            description="Every aspect of our daycare is designed with your child's success and happiness in mind."
          />

          <div
            ref={featuresRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={cn(
                    "bg-card rounded-2xl p-6 shadow-soft card-hover opacity-0",
                    featuresInView && `animate-fade-in-up delay-${((index % 4) + 1) * 100}`
                  )}
                >
                  <div
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mb-4",
                      feature.color
                    )}
                  >
                    <Icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
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

      {/* Testimonial highlight */}
      <section className="section-padding bg-primary/5">
        <div className="container-custom">
          <div
            ref={testimonialsRef}
            className={cn(
              "max-w-4xl mx-auto text-center opacity-0",
              testimonialsInView && "animate-scale-in"
            )}
          >
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-8 h-8 text-accent fill-accent" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-8 leading-relaxed">
              "Choosing Dr. Sofia's Daycare was the best decision we made for our family. 
              The care, education, and love our children receive here is unmatched."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-4xl">
                👨‍👩‍👧‍👦
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-foreground">The Anderson Family</p>
                <p className="text-muted-foreground">Parents of 2 children</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Experience the Difference
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Come see for yourself why families choose Dr. Sofia's Daycare. 
            Schedule a tour today!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/contact">Schedule a Tour</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
