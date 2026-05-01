import { Bot, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-linear-to-br from-violet-600 to-cyan-500 rounded-lg">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">SmartReach <span className="text-violet-500">AI</span></span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pioneering AI-driven marketing automation for the next generation of digital-first businesses.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Chatbots</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lead Gen</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Automations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SmartReach AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}