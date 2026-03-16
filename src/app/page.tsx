import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Stats from "@/components/sections/Stats";
import ServicesPreview from "@/components/sections/ServicesPreview";
import SelectedWork from "@/components/sections/SelectedWork";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Home",
  description: "Apex Media Group helps brands achieve digital evolution through data-driven strategy and world-class design.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <ServicesPreview />
      <SelectedWork id="work" />
      <Testimonials />
      <CTA />
    </>
  );
}