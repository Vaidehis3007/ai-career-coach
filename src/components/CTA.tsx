import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Start Your Journey
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to Transform 
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Your Career?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of professionals who have accelerated their careers with AI-powered coaching. Get started today and unlock your potential.
            </p>
          </div>
          
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              "Personalized Career Roadmap",
              "AI Interview Coaching", 
              "24/7 Professional Support"
            ].map((benefit, index) => (
              <div 
                key={benefit}
                className={`flex items-center justify-center gap-3 bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button variant="hero" size="lg" className="group text-lg px-8 py-6">
              Get Started Free
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="professional" size="lg" className="text-lg px-8 py-6">
              Schedule Demo
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="animate-fade-in">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by professionals at leading companies worldwide
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {["Google", "Microsoft", "Amazon", "Apple", "Meta", "Netflix"].map((company) => (
                <div key={company} className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors">
                  {company}
                </div>
              ))}
            </div>
          </div>
          
          {/* Security Badge */}
          <div className="mt-12 inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            100% Secure & Private
          </div>
        </div>
      </div>
    </section>
  );
}