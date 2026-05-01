import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { LeadCapture } from "@/components/LeadCapture";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-violet-500/30">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <HowItWorks />
          <Features />
          <LeadCapture />
          <Pricing />
          <Testimonials />
          <CTASection />
        </main>
        <Footer />
        <Toaster position="bottom-right" richColors theme="dark" />
      </div>
    </div>
  );
}

export default App;