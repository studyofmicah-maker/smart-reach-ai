import { motion } from "framer-motion";
import { MousePointer2, UserCheck, Settings, Rocket } from "lucide-react";

const steps = [
  {
    title: "Capture",
    description: "Visitor lands and interacts with your AI-powered touchpoints.",
    icon: MousePointer2,
  },
  {
    title: "Qualify",
    description: "AI chatbot asks strategic questions to filter ready-to-buy leads.",
    icon: UserCheck,
  },
  {
    title: "Automate",
    description: "System stores data and triggers instant follow-up sequences.",
    icon: Settings,
  },
  {
    title: "Convert",
    description: "Your business receives high-quality leads ready for closing.",
    icon: Rocket,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to transform your traffic into measurable revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-violet-600/20 via-cyan-500/20 to-violet-600/20 -translate-y-12 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-background border-4 border-violet-600/30 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                <step.icon className="w-8 h-8 text-violet-500" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-violet-600 text-white rounded-full text-xs flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}