import { Brain, MessageSquare, BarChart3, Users, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import aiGuidanceImage from "@/assets/ai-guidance.jpg";
import interviewPrepImage from "@/assets/interview-prep.jpg";
import careerPlanningImage from "@/assets/career-planning.jpg";

const features = [
  {
    icon: Brain,
    title: "AI Career Guidance",
    description: "Get personalized career advice powered by advanced AI algorithms that understand your unique professional journey.",
    image: aiGuidanceImage,
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    description: "Practice with our AI interview coach that provides real-time feedback and helps you master any interview scenario.",
    image: interviewPrepImage,
    gradient: "from-accent/20 to-accent/5"
  },
  {
    icon: BarChart3,
    title: "Career Planning",
    description: "Visualize your career path with data-driven insights and actionable steps to reach your professional goals.",
    image: careerPlanningImage,
    gradient: "from-success/20 to-success/5"
  }
];

const additionalFeatures = [
  {
    icon: Users,
    title: "Professional Network",
    description: "Connect with industry professionals and expand your career opportunities."
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Receive immediate AI-powered feedback on your resume, portfolio, and interview performance."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your career data is encrypted and secure. We prioritize your privacy above all else."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Powerful Features
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Everything You Need for 
            <span className="block text-primary">Career Success</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive AI-powered platform provides all the tools and guidance you need to accelerate your professional growth.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`group relative bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow animate-slide-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Feature Image */}
                <div className="relative mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary-glow group-hover:translate-x-2 transition-all">
                  Learn More →
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className={`bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}