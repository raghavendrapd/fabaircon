import { Search, MessageCircle, TruckIcon, Wind } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Models",
    description: "Explore our wide range of AC units and find the perfect fit for your space",
  },
  {
    icon: MessageCircle,
    title: "Contact Us",
    description: "Reach out via WhatsApp to discuss your requirements and get a quote",
  },
  {
    icon: TruckIcon,
    title: "Quick Delivery",
    description: "We'll deliver and help install your chosen AC unit at your location",
  },
  {
    icon: Wind,
    title: "Enjoy Comfort",
    description: "Relax in a cool, comfortable environment with our premium AC units",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get started with Fab Air Con in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative"
                data-testid={`card-step-${index + 1}`}
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -z-10">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                )}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-md bg-primary text-primary-foreground mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <div className="mb-4">
                    <Icon className="h-8 w-8 mx-auto text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
