import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small businesses starting with AI.",
    features: ["1 AI Chatbot", "500 Leads/mo", "Email Support", "Basic CRM Integration"],
  },
  {
    name: "Growth",
    price: "$99",
    description: "Scale your leads with advanced automation.",
    features: ["3 AI Chatbots", "2,500 Leads/mo", "Priority Support", "Advanced Automation", "WhatsApp Integration"],
    popular: true,
  },
  {
    name: "Pro",
    price: "Custom",
    description: "Enterprise-grade solutions for large scale.",
    features: ["Unlimited Chatbots", "Unlimited Leads", "24/7 Dedicated Support", "Custom AI Training", "API Access"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your current stage and scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border border-border bg-card flex flex-col ${
                plan.popular ? "ring-2 ring-violet-500 scale-105 z-10" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-violet-600 text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <p className="text-sm text-muted-foreground mt-4">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-violet-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "default" : "outline"}
                className={`w-full ${plan.popular ? "bg-violet-600 hover:bg-violet-700 text-white" : ""}`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}