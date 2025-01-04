import SeoDashboard from "@/components/features/feature-showcase";
import { FeaturesGrid } from "@/components/features/features-grid";
import { FooterSection } from "@/components/footer/footer-section";
import HeroSection from "@/components/hero-section";
import { PricingSection } from "@/components/pricing/pricing-section";
import Testimonials from "@/components/testimonials/testimonials-section";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <SeoDashboard />
      <FeaturesGrid />
      <Testimonials />
      <PricingSection />
      <FooterSection />
    </div>
  );
}
