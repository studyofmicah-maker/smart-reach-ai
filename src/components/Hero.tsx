import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Next-Gen Marketing Automation
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              AI-Powered Marketing That <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-cyan-400">Captures, Converts & Automates</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              We help businesses generate leads, respond instantly, and scale using AI automation systems. Join the future of digital reach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" className="rounded-full px-8 bg-violet-600 hover:bg-violet-700 text-white text-lg">
                Get Free AI Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg border-violet-500/30">
                <PlayCircle className="mr-2 w-5 h-5" /> See How It Works
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ff4ac373-564b-416a-aefd-c4a5e5bc0286/hero-ai-abstract-9e3cf664-1777574809562.webp"
                alt="AI Network Connectivity"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent" />
            </div>
            {/* Floating Card UI */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 md:-left-12 p-4 bg-card/90 backdrop-blur-sm border border-border rounded-xl shadow-xl z-20 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="text-xs font-semibold">Live Lead Qualify</div>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-violet-600 w-3/4" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}