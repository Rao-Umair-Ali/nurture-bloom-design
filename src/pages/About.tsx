import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Heart, Shield, Users, Sparkles, GraduationCap, Smile } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Heart,
    title: "Love & Care",
    description: "Every child receives individual attention and unconditional care from our dedicated team.",
    color: "bg-peach",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "State-of-the-art security, thorough background checks, and strict health protocols.",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building strong relationships between children, families, and educators.",
    color: "bg-secondary",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    description: "Encouraging imagination and self-expression through art, music, and play.",
    color: "bg-accent",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Research-based curriculum that prepares children for lifelong learning.",
    color: "bg-lavender",
  },
  {
    icon: Smile,
    title: "Joy",
    description: "Creating a happy environment where children love coming every day.",
    color: "bg-peach",
  },
];

const team = [
  {
    name: "Dr. Sofia Martinez",
    role: "Founder & Director",
    bio: "With over 20 years in early childhood education, Dr. Sofia founded this daycare with a vision to create a nurturing space where every child can thrive.",
    avatar: "👩‍⚕️",
  },
  {
    name: "Emily Johnson",
    role: "Head Teacher - Preschool",
    bio: "Emily brings 12 years of experience and a passion for preparing young minds for kindergarten success.",
    avatar: "👩‍🏫",
  },
  {
    name: "Marcus Williams",
    role: "Toddler Program Lead",
    bio: "Marcus specializes in developmental milestones and creating engaging activities for curious toddlers.",
    avatar: "👨‍🏫",
  },
  {
    name: "Sarah Chen",
    role: "Infant Care Specialist",
    bio: "Sarah's gentle approach and expertise in infant development make her perfect for our youngest learners.",
    avatar: "👩‍⚕️",
  },
];

export default function About() {
  const { ref: storyRef, isInView: storyInView } = useInView();
  const { ref: valuesRef, isInView: valuesInView } = useInView();
  const { ref: teamRef, isInView: teamInView } = useInView();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-custom">
          <SectionHeading
            badge="About Us"
            title="Where Every Child's Story Begins"
            description="For over a decade, we've been nurturing young minds and building a community of happy, confident children."
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            ref={storyRef}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div
              className={cn(
                "opacity-0",
                storyInView && "animate-slide-in-left"
              )}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                A Dream Built on Love for Children
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dr. Sofia's Daycare was founded in 2010 with a simple but powerful mission: 
                  to create a space where children feel safe, loved, and excited to learn.
                </p>
                <p>
                  What started as a small home-based daycare has grown into a full-fledged 
                  early learning center, serving hundreds of families in our community. 
                  Through it all, we've never lost sight of what matters most—your children.
                </p>
                <p>
                  Our philosophy combines the best of play-based learning with structured 
                  educational activities, ensuring children develop holistically while 
                  having the time of their lives.
                </p>
              </div>
              <Button
                asChild
                className="mt-8 rounded-full px-8"
              >
                <Link to="/contact">Schedule a Tour</Link>
              </Button>
            </div>

            <div
              className={cn(
                "relative opacity-0",
                storyInView && "animate-slide-in-right"
              )}
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden shadow-card">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-9xl mb-4">👩‍⚕️</div>
                    <p className="text-muted-foreground font-medium">
                      Dr. Sofia Martinez, Founder
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-card">
                <div className="text-4xl font-heading font-bold text-primary">14+</div>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeading
            badge="Our Values"
            title="What We Believe In"
            description="These core values guide everything we do at Dr. Sofia's Daycare."
          />

          <div
            ref={valuesRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={cn(
                    "bg-card rounded-2xl p-6 shadow-soft card-hover opacity-0",
                    valuesInView && `animate-fade-in-up delay-${(index % 3 + 1) * 100}`
                  )}
                >
                  <div
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mb-4",
                      value.color
                    )}
                  >
                    <Icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Our Team"
            title="Meet Our Amazing Educators"
            description="Dedicated professionals who make magic happen every day."
          />

          <div
            ref={teamRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {team.map((member, index) => (
              <div
                key={member.name}
                className={cn(
                  "text-center opacity-0",
                  teamInView && `animate-fade-in-up delay-${(index + 1) * 100}`
                )}
              >
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl mb-4 shadow-soft">
                  {member.avatar}
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/5">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Come See Us in Action
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            The best way to experience our daycare is to visit. Schedule a tour 
            and see why families love us.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8"
          >
            <Link to="/contact">Schedule Your Visit</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
