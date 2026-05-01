import { MessageSquare, Target, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI Chatbots",
    description: "Intelligent agents for website, WhatsApp, and Telegram that handle queries and capture leads 24/7.",
    icon: MessageSquare,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "AI Lead Generation",
    description: "Automated systems that identify and qualify prospects based on your ideal customer profile.",
    icon: Target,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    title: "Marketing Automation",
    description: "Streamline your workflows with AI that handles follow-ups, scheduling, and repetitive tasks.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Conversion Optimization",
    description: "Data-driven AI insights to boost your website performance and increase ROI on every click.",
    icon: TrendingUp,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful AI Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to modernize your marketing stack and scale your business without increasing headcount.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-background hover:border-violet-500/50 transition-all group"
            >
              <div className={`w-12 h-12 rounded-lg ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}