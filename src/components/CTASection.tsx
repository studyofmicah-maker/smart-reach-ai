import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-linear-to-br from-violet-600 to-cyan-500 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Automate Your Marketing?</h2>
            <p className="text-white/80 text-lg mb-10">
              Join 500+ businesses using SmartReach AI to scale their growth effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-10 bg-white text-violet-600 hover:bg-white/90 font-bold">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 text-white border-white hover:bg-white/10">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}