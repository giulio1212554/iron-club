import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Membership from "@/components/Membership";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Membership />
      <Testimonials />
      <FinalCta />
    </>
  );
}
