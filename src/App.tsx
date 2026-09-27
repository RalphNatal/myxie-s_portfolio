import { MotionConfig } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SkipLink } from "@/components/layout/SkipLink";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Packages } from "@/components/sections/Packages";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Toolkit } from "@/components/sections/Toolkit";
import { TrustBar } from "@/components/sections/TrustBar";

export function App() {
  return (
    // "user" drops transform and layout animations for visitors who prefer reduced motion.
    <MotionConfig reducedMotion="user">
      <SkipLink />
      <Navbar />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <CaseStudies />
        <Toolkit />
        <Experience />
        <Testimonials />
        <Packages />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
