import Image from "next/image";
import Navigation from "@/components/Navigation";
import HeroSection  from "@/components/hero-section";
import Features from "@/components/Features";

export default function Home() {
  return (
      <div>
      <Navigation />
      <HeroSection />
      <Features />
        <h1>Radhe Radhe</h1>
      </div>
  );
}
