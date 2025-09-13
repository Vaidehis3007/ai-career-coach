import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Career Coaching
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
              Your AI Career Coach for 
              <span className="block text-primary">Professional Success</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Advance your career with personalized guidance, interview prep, and AI-powered tools designed for professional success in the modern workplace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="professional" size="lg">
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Target className="w-5 h-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-primary">95%</span>
                </div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-primary">50k+</span>
                </div>
                <p className="text-sm text-muted-foreground">Careers Advanced</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Sparkles className="w-5 h-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-primary">24/7</span>
                </div>
                <p className="text-sm text-muted-foreground">AI Support</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={heroImage} 
                alt="AI Career Coach - Professional success with personalized guidance"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-glow animate-bounce">
              <span className="text-sm font-semibold">AI Powered</span>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-success text-success-foreground px-4 py-2 rounded-lg shadow-soft animate-bounce delay-500">
              <span className="text-sm font-semibold">Career Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}