import { Leaf, Award, Users, Clock, Zap, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "High-Quality Products",
    description: "Safe, non-toxic, eco-friendly cleaning products that protect your family and environment"
  },
  {
    icon: Award,
    title: "Accredited & Certified",
    description: "Trusted with industry certifications and quality standards"
  },
  {
    icon: Users,
    title: "Trained Workers",
    description: "Professional, experienced, and efficient cleaning staff"
  },
  {
    icon: Clock,
    title: "Time Availability",
    description: "Flexible scheduling including weekends and evenings"
  },
  {
    icon: Zap,
    title: "Quick Response",
    description: "Prompt service bookings and responsive customer support"
  },
  {
    icon: CheckCircle,
    title: "Satisfaction Guarantee",
    description: "Service guarantees and customer satisfaction assurance"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 font-rubik">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Six Reasons For People Choosing Us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="p-8 bg-gray-50 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition"
              >
                <div className="mb-4">
                  <Icon size={40} className="text-primary" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3 font-rubik">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
