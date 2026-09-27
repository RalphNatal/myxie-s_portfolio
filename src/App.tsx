import { MotionConfig } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SkipLink } from "@/components/layout/SkipLink";

export function App() {
  return (
    // "user" drops transform and layout animations for visitors who prefer reduced motion.
    <MotionConfig reducedMotion="user">
      <SkipLink />
      <Navbar />
      <main id="main" tabIndex={-1} className="focus:outline-none"></main>
      <Footer />
    </MotionConfig>
  );
}
