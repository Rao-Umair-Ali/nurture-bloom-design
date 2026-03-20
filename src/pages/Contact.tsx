import { useState } from "react";
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(123) 456-7890", href: "tel:+1234567890" },
  { icon: Mail, label: "Email", value: "info@brightcareeracademy.com", href: "mailto:info@brightcareeracademy.com" },
  { icon: MapPin, label: "Address", value: "123 Education Road, City, State 12345", href: "#" },
  { icon: Clock, label: "Hours", value: "Mon-Fri: 8AM-3PM, Sat: 9AM-12PM", href: "#" },
];

export default function Contact() {
  const { ref, isInView } = useInView();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-custom">
          <SectionHeading badge="Contact Us" title="Get in Touch" description="Have questions about admissions or want to visit our campus? We'd love to hear from you!" />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div ref={ref} className="grid lg:grid-cols-2 gap-12">
            <div className={cn("opacity-0", isInView && "animate-slide-in-left")}>
              <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Parent/Guardian Name</label>
                      <Input placeholder="Full name" required className="rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <Input type="tel" placeholder="(123) 456-7890" className="rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <Input type="email" placeholder="email@example.com" required className="rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Student's Grade/Class</label>
                    <Input placeholder="e.g., Grade 5" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <Textarea placeholder="Your message or inquiry..." rows={4} className="rounded-xl" />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-full bg-secondary hover:bg-secondary/90" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : <>Send Message <Send className="w-4 h-4 ml-2" /></>}
                  </Button>
                </form>
              </div>
            </div>

            <div className={cn("opacity-0", isInView && "animate-slide-in-right")}>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">We're here to help. Reach out and we'll respond within 24 hours.</p>
              <div className="space-y-4 mb-8">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.label} href={item.href} className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.label}</p>
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-border">
                <div className="text-center">
                  <div className="text-6xl mb-2">📍</div>
                  <p className="text-muted-foreground">Map Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
