import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import heroImage from '@assets/generated_images/Hero_background_living_room_52872386.png';

export default function Hero() {
  const whatsappNumber = "+91 9845157675";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi, I'm interested in renting an AC unit`;

  const scrollToModels = () => {
    const modelsSection = document.getElementById('models');
    modelsSection?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-950 to-slate-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-md tracking-tight">
          Fab Air Con
        </h1>
        <p className="text-2xl md:text-3xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
          Premium Air Conditioning Rentals for Every Space
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-14">
          <Button
            size="lg"
            variant="outline"
            className="gap-2 bg-white/10 backdrop-blur-xl border-white/30 text-white hover:bg-white/20 font-bold shadow-lg transition"
            onClick={scrollToModels}
            data-testid="button-browse-models"
          >
            Browse Models
          </Button>
          <Button
            asChild
            size="lg"
            className="gap-2 bg-green-600 hover:bg-green-700 transition font-bold text-white shadow-lg"
            data-testid="button-whatsapp-hero"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
        {/* Glassmorphism Stats */}
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="rounded-2xl bg-white/10 backdrop-blur-md px-7 py-5 shadow-lg border border-white/20 text-white min-w-[120px]">
            <div className="text-4xl font-bold">10+</div>
            <div className="text-sm text-white/80 font-medium mt-1">Years Experience</div>
          </div>
          <div className="rounded-2xl bg-white/10 backdrop-blur-md px-7 py-5 shadow-lg border border-white/20 text-white min-w-[120px]">
            <div className="text-4xl font-bold">5000+</div>
            <div className="text-sm text-white/80 font-medium mt-1">Happy Customers</div>
          </div>
          <div className="rounded-2xl bg-white/10 backdrop-blur-md px-7 py-5 shadow-lg border border-white/20 text-white min-w-[120px]">
            <div className="text-4xl font-bold">24/7</div>
            <div className="text-sm text-white/80 font-medium mt-1">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
