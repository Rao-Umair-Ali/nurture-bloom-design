import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { FileDown, Phone, CheckCircle, Calendar, ClipboardList, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { icon: ClipboardList, title: "Fill Application", description: "Complete the admission form with student and parent details." },
  { icon: Calendar, title: "Admission Test", description: "Student takes a simple assessment test for placement." },
  { icon: Users, title: "Interview", description: "Brief meeting with parents and student with school administration." },
  { icon: CheckCircle, title: "Enrollment", description: "Submit documents, pay fees, and welcome to BCA!" },
];

export default function Admissions() {
  const { ref: stepsRef, isInView: stepsInView } = useInView();
  const { ref: formRef, isInView: formInView } = useInView();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    toast({ title: "Application Submitted!", description: "We'll contact you shortly to schedule the next steps." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-custom">
          <SectionHeading badge="Admissions Open 2025-26" title="Join Bright Career Academy" description="Take the first step towards your child's bright future. Admissions are now open for all classes." />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-secondary">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-secondary-foreground text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold">Download Admission Form</h3>
            <p className="opacity-80">Get the complete admission form and required documents checklist.</p>
          </div>
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8 h-14 text-lg">
            <FileDown className="w-5 h-5 mr-2" />
            Download Form (PDF)
          </Button>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading badge="How to Apply" title="Admission Process" description="A simple 4-step process to enroll your child at BCA." />
          <div ref={stepsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className={cn("text-center opacity-0", stepsInView && `animate-fade-in-up delay-${(index + 1) * 100}`)}>
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 relative">
                    <Icon className="w-10 h-10 text-primary" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <SectionHeading badge="Quick Inquiry" title="Admission Inquiry Form" description="Fill out this form and our admissions team will contact you." />

            <div ref={formRef} className={cn("mt-12 bg-card rounded-3xl p-8 shadow-card border border-border opacity-0", formInView && "animate-scale-in")}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Student Name</label>
                    <Input placeholder="Student's full name" required className="rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Class Applying For</label>
                    <Input placeholder="e.g., Grade 5" required className="rounded-xl" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Parent/Guardian Name</label>
                    <Input placeholder="Full name" required className="rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <Input type="tel" placeholder="(123) 456-7890" required className="rounded-xl" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <Input type="email" placeholder="email@example.com" className="rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Additional Information</label>
                  <Textarea placeholder="Any questions or special requirements..." rows={3} className="rounded-xl" />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full bg-secondary hover:bg-secondary/90" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">Our admissions team is here to help. Call us or visit our campus for more information.</p>
          <Button asChild size="lg" className="rounded-full px-8">
            <a href="tel:+1234567890"><Phone className="w-5 h-5 mr-2" /> Call Admissions Office</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
