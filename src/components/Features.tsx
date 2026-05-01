import { CheckCircle2, Clock, Code, Layers, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "24/7 Automated Responses",
    description: "Never miss a lead. AI handles queries instantly at any time of day.",
    icon: Clock,
  },
  {
    title: "Faster Lead Conversion",
    description: "Respond in seconds, not hours. Speed to lead is the key to closing.",
    icon: CheckCircle2,
  },
  {
    title: "No Coding Required",
    description: "Plug and play systems that integrate with your existing website.",
    icon: Code,
  },
  {
    title: "Scalable Systems",
    description: "Handle 10 or 10,000 leads simultaneously without breaking a sweat.",
    icon: Layers,
  },
  {
    title: "Easy Integrations",
    description: "Connects with HubSpot, Salesforce, Zapier, and 2,000+ other tools.",
    icon: Share2,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Modern Scaling</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Our AI automation stack is designed to remove the friction from your sales funnel, allowing you to focus on high-level strategy while we handle the outreach.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-violet-500" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ff4ac373-564b-416a-aefd-c4a5e5bc0286/marketing-dashboard-ui-a8846841-1777574809016.webp"
                alt="Marketing Dashboard UI"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-violet-600/5 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}