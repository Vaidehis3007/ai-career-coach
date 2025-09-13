import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Software Engineer",
    company: "Tech Corp",
    content: "The AI career coach transformed my approach to job interviews. I went from struggling with technical questions to landing my dream role at a Fortune 500 company.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "Product Manager",
    company: "Innovation Labs", 
    content: "Incredible personalized guidance! The AI understood my career goals and created a roadmap that led me to a 40% salary increase within 6 months.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Emily Watson",
    role: "UX Designer", 
    company: "Design Studio",
    content: "The interview preparation was game-changing. The AI coach helped me practice scenarios I never would have thought of. Highly recommend!",
    rating: 5,
    avatar: "EW"
  },
  {
    name: "David Kim",
    role: "Data Scientist",
    company: "Analytics Inc",
    content: "From career transition anxiety to confidence - this platform guided me through switching industries with data-driven insights and support.",
    rating: 5,
    avatar: "DK"
  },
  {
    name: "Jennifer Liu",
    role: "Marketing Director",
    company: "Growth Agency",
    content: "The networking opportunities and professional connections I made through this platform accelerated my career beyond my expectations.",
    rating: 5,
    avatar: "JL"
  },
  {
    name: "Alex Thompson",
    role: "Engineering Manager",
    company: "StartupXYZ",
    content: "24/7 AI support means I could get career advice whenever I needed it. The personalized feedback on my resume was particularly valuable.",
    rating: 5,
    avatar: "AT"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Success Stories
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Professionals Love 
            <span className="block text-primary">Our AI Coach</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of professionals who have accelerated their careers with our AI-powered coaching platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className={`bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-500 animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Them?</h3>
            <p className="text-muted-foreground mb-6">
              Start your career transformation journey today with personalized AI guidance.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 4).map((testimonial, i) => (
                  <Avatar key={i} className="w-8 h-8 border-2 border-background">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span>+50k professionals transformed their careers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}