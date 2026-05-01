import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "SmartReach AI completely transformed our sales process. We're getting 3x more qualified leads without increasing our ad spend.",
    author: "Sarah Jenkins",
    role: "CEO at GrowthFlow",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/ff4ac373-564b-416a-aefd-c4a5e5bc0286/testimonial-user-1-bb27b16d-1777574811252.webp",
  },
  {
    quote: "The automated responses are so natural, most customers think they're talking to a human. It's saved our team 20+ hours a week.",
    author: "David Chen",
    role: "Marketing Director at TechVibe",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-violet-600/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Loved by Forward-Thinking Teams</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-violet-500 text-violet-500" />
                ))}
              </div>
              <p className="text-lg italic mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold">{t.author}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}