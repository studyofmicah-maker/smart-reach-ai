import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { motion } from "framer-motion";

export function LeadCapture() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("AI Analysis Complete! Check your email for the demo.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get Free AI Demo</h2>
              <p className="text-muted-foreground mb-8">
                Our AI will analyze your needs and respond instantly with a custom strategy for your business.
              </p>
              <ul className="space-y-4">
                {[
                  "Personalized lead gen plan",
                  "Bot architecture preview",
                  "ROI projection",
                  "Automation roadmap",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" required className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" required className="bg-background/50" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="business">Business Type</Label>
                <Select required>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="saas">SaaS / Software</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="agency">Agency / Consulting</SelectItem>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="challenge">Biggest Marketing Challenge</Label>
                <Textarea
                  id="challenge"
                  placeholder="Tell us what you want to automate..."
                  className="min-h-[100px] bg-background/50"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white" disabled={isSubmitting}>
                {isSubmitting ? "Analyzing..." : "Analyze My Business Instantly"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}