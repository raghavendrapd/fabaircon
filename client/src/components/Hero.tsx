import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import heroImage from '@assets/generated_images/Hero_background_living_room_52872386.png';

export default function Hero() {
  const whatsappNumber = "+1234567890"; //todo: remove mock functionality
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi, I'm interested in renting an AC unit`;

  const scrollToModels = () => {
    const modelsSection = document.getElementById('models');
    modelsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Fab Air Con
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Premium Air Conditioning Rentals for Every Space
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg"
            variant="outline"
            className="gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            onClick={scrollToModels}
            data-testid="button-browse-models"
          >
            Browse Models
          </Button>
          <Button 
            asChild
            size="lg"
            className="gap-2"
            data-testid="button-whatsapp-hero"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-8 justify-center text-white">
          <div>
            <div className="text-3xl font-bold">10+</div>
            <div className="text-sm text-white/80">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold">5000+</div>
            <div className="text-sm text-white/80">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-sm text-white/80">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
