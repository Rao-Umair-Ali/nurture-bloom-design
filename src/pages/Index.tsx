import { Layout } from "@/components/layout";
import {
  HeroSection,
  StatsSection,
  ProgramsPreview,
  TestimonialsCarousel,
  CTASection,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ProgramsPreview />
      <TestimonialsCarousel />
      <CTASection />
    </Layout>
  );
};

export default Index;
