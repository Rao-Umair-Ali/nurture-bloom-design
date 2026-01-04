import { useState } from "react";
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Baby, Heart, BookOpen, Clock, Check, Sun, Moon, Apple, Palette, Music, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const programs = [
  {
    id: "infant",
    title: "Infant Care",
    age: "0-12 months",
    ratio: "1:3",
    icon: Baby,
    color: "bg-peach",
    description:
      "A warm, secure environment designed specifically for your baby's first year of growth and discovery.",
    features: [
      "Personalized care schedules",
      "Safe sleep practices",
      "Tummy time and sensory play",
      "Daily milestone tracking",
      "Parent communication app",
      "Feeding support (breast milk/formula)",
    ],
    schedule: [
      { time: "7:00 AM", activity: "Arrival & Free Play", icon: Sun },
      { time: "9:00 AM", activity: "Sensory Activities", icon: Palette },
      { time: "10:30 AM", activity: "Morning Nap", icon: Moon },
      { time: "12:00 PM", activity: "Lunch & Feeding", icon: Apple },
      { time: "2:00 PM", activity: "Afternoon Nap", icon: Moon },
      { time: "4:00 PM", activity: "Music & Movement", icon: Music },
      { time: "5:30 PM", activity: "Pickup Time", icon: Users },
    ],
  },
  {
    id: "toddler",
    title: "Toddler Program",
    age: "1-2 years",
    ratio: "1:4",
    icon: Heart,
    color: "bg-secondary",
    description:
      "Encouraging independence and curiosity as your toddler explores the world through play and discovery.",
    features: [
      "Language development focus",
      "Gross motor skill activities",
      "Potty training support",
      "Social interaction building",
      "Art and sensory exploration",
      "Outdoor playground time",
    ],
    schedule: [
      { time: "7:00 AM", activity: "Arrival & Free Play", icon: Sun },
      { time: "9:00 AM", activity: "Circle Time", icon: Users },
      { time: "10:00 AM", activity: "Art & Sensory", icon: Palette },
      { time: "11:30 AM", activity: "Outdoor Play", icon: Sun },
      { time: "12:30 PM", activity: "Lunch", icon: Apple },
      { time: "1:00 PM", activity: "Nap Time", icon: Moon },
      { time: "3:30 PM", activity: "Music & Dance", icon: Music },
      { time: "5:00 PM", activity: "Story Time & Pickup", icon: BookOpen },
    ],
  },
  {
    id: "preschool",
    title: "Preschool",
    age: "3-5 years",
    ratio: "1:8",
    icon: BookOpen,
    color: "bg-primary",
    description:
      "Comprehensive kindergarten preparation focusing on literacy, numeracy, and social-emotional development.",
    features: [
      "Pre-reading and phonics",
      "Early math concepts",
      "Science exploration",
      "Creative arts program",
      "Social skills development",
      "Kindergarten readiness assessment",
    ],
    schedule: [
      { time: "7:00 AM", activity: "Arrival & Centers", icon: Sun },
      { time: "9:00 AM", activity: "Circle Time & Calendar", icon: Users },
      { time: "9:30 AM", activity: "Literacy Block", icon: BookOpen },
      { time: "10:30 AM", activity: "Math & Science", icon: Palette },
      { time: "11:30 AM", activity: "Outdoor Play", icon: Sun },
      { time: "12:30 PM", activity: "Lunch", icon: Apple },
      { time: "1:00 PM", activity: "Rest/Quiet Time", icon: Moon },
      { time: "3:00 PM", activity: "Art & Music", icon: Music },
      { time: "4:30 PM", activity: "Free Play & Pickup", icon: Users },
    ],
  },
];

export default function Programs() {
  const [activeProgram, setActiveProgram] = useState(programs[0].id);
  const { ref, isInView } = useInView();

  const currentProgram = programs.find((p) => p.id === activeProgram) || programs[0];
  const Icon = currentProgram.icon;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-custom">
          <SectionHeading
            badge="Our Programs"
            title="Age-Appropriate Learning for Every Stage"
            description="From infants to preschoolers, we offer specialized programs designed to nurture development at every age."
          />
        </div>
      </section>

      {/* Program Tabs */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Tab buttons */}
          <div
            ref={ref}
            className={cn(
              "flex flex-wrap justify-center gap-4 mb-12 opacity-0",
              isInView && "animate-fade-in-up"
            )}
          >
            {programs.map((program) => {
              const ProgramIcon = program.icon;
              return (
                <button
                  key={program.id}
                  onClick={() => setActiveProgram(program.id)}
                  className={cn(
                    "flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all",
                    activeProgram === program.id
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-card hover:bg-muted text-foreground"
                  )}
                >
                  <ProgramIcon className="w-5 h-5" />
                  <span>{program.title}</span>
                  <span className="text-sm opacity-70">({program.age})</span>
                </button>
              );
            })}
          </div>

          {/* Program content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Program details */}
            <div className={cn("opacity-0", isInView && "animate-slide-in-left delay-200")}>
              <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center mb-6", currentProgram.color)}>
                <Icon className="w-10 h-10 text-foreground" />
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  {currentProgram.title}
                </h2>
                <span className="px-4 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                  Ages {currentProgram.age}
                </span>
              </div>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {currentProgram.description}
              </p>

              <div className="flex items-center gap-6 mb-8 p-4 bg-muted rounded-2xl">
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-primary">
                    {currentProgram.ratio}
                  </div>
                  <p className="text-sm text-muted-foreground">Staff Ratio</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-primary">
                    7am-6pm
                  </div>
                  <p className="text-sm text-muted-foreground">Hours</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-primary">
                    5 Days
                  </div>
                  <p className="text-sm text-muted-foreground">Per Week</p>
                </div>
              </div>

              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                Program Highlights
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {currentProgram.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary-foreground" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/contact">Enroll Now</Link>
              </Button>
            </div>

            {/* Right: Daily schedule */}
            <div className={cn("opacity-0", isInView && "animate-slide-in-right delay-300")}>
              <div className="bg-card rounded-3xl p-8 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    Sample Daily Schedule
                  </h3>
                </div>

                <div className="space-y-4">
                  {currentProgram.schedule.map((item, index) => {
                    const ScheduleIcon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted transition-colors"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <ScheduleIcon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{item.activity}</p>
                          <p className="text-sm text-muted-foreground">{item.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="text-sm text-muted-foreground mt-6 text-center">
                  * Schedule may vary based on individual needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/5">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Find the Perfect Program for Your Child
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Not sure which program is right for your little one? Contact us for a 
            personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/contact">Schedule a Tour</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/why-choose-us">Why Choose Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
