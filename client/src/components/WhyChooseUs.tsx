import { Truck, Wrench, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Quick Delivery",
    description: "Fast and reliable delivery to your doorstep within 24-48 hours",
  },
  {
    icon: Wrench,
    title: "Installation Support",
    description: "Professional installation assistance available for all AC units",
  },
  {
    icon: Clock,
    title: "Flexible Rental",
    description: "Short-term and long-term rental options to suit your needs",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All units are regularly serviced and maintained for optimal performance",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Why Choose Fab Air Con?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide premium air conditioning solutions with exceptional service and support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-md hover-elevate active-elevate-2"
                data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-md bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
