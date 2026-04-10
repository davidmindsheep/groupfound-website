import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";
import { SectionDots } from "@/components/SectionDots";
import { BackgroundEffect } from "@/components/BackgroundEffect";
import { SnapScroll } from "@/components/SnapScroll";

export default function Home() {
  return (
    <>
      <BackgroundEffect />
      <Header />
      <SectionDots />
      <SnapScroll />
      <main
        id="snap-container"
        className="h-screen overflow-y-auto"
      >
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <About />
        <Waitlist />
        <Footer />
      </main>
    </>
  );
}
