import { Layout } from "@/components/layout";
import {
  HeroSection,
  StatsSection,
  ProgramsPreview,
  TestimonialsCarousel,
  CTASection,
} from "@/components/home";
import { WhyChooseUsPreview } from "@/components/home/WhyChooseUsPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ProgramsPreview />
      <WhyChooseUsPreview />
      <TestimonialsCarousel />
      <CTASection />
    </Layout>
  );
};

export default Index;
