import { CheckCircle, ArrowRight, UserPlus, Target, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Share your career goals, experience, and aspirations with our AI system to get personalized recommendations.",
    color: "text-primary"
  },
  {
    step: "02", 
    icon: Target,
    title: "Get AI Analysis",
    description: "Our advanced AI analyzes your profile and creates a custom career roadmap with actionable insights and opportunities.",
    color: "text-accent"
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Follow Your Path",
    description: "Execute your personalized career plan with ongoing support, interview coaching, and progress tracking.",
    color: "text-success"
  },
  {
    step: "04",
    icon: Award,
    title: "Achieve Success",
    description: "Land your dream job or advance your career with confidence, backed by data-driven insights and AI guidance.",
    color: "text-primary-glow"
  }
];

const benefits = [
  "Personalized career roadmap in minutes",
  "AI-powered interview preparation",
  "Real-time market insights and trends",
  "Professional networking opportunities",
  "Continuous learning recommendations",
  "24/7 career coaching support"
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            How It Works
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Your Journey to 
            <span className="block text-primary">Career Success</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started in just 4 simple steps and transform your career with the power of AI guidance and personalized coaching.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={step.step} className="relative group animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-accent/30 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
              )}
              
              <div className="bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-500 relative z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${step.color === 'text-primary' ? 'bg-primary/10' : step.color === 'text-accent' ? 'bg-accent/10' : step.color === 'text-success' ? 'bg-success/10' : 'bg-primary/20'}`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Why Choose Our 
              <span className="text-primary">AI Career Coach?</span>
            </h3>
            
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Experience the future of career development with cutting-edge AI technology that understands your unique professional journey and provides personalized guidance every step of the way.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit} 
                  className={`flex items-center gap-3 animate-slide-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button variant="hero" size="lg" className="group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Stats Card */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card animate-slide-up">
            <h4 className="text-xl font-semibold mb-6 text-center">Success Metrics</h4>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-primary/10 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Job Success Rate</div>
              </div>
              
              <div className="text-center p-4 bg-accent/10 rounded-xl">
                <div className="text-3xl font-bold text-accent mb-2">3x</div>
                <div className="text-sm text-muted-foreground">Faster Career Growth</div>
              </div>
              
              <div className="text-center p-4 bg-success/10 rounded-xl">
                <div className="text-3xl font-bold text-success mb-2">50k+</div>
                <div className="text-sm text-muted-foreground">Professionals Coached</div>
              </div>
              
              <div className="text-center p-4 bg-primary/20 rounded-xl">
                <div className="text-3xl font-bold text-primary-glow mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">AI Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}