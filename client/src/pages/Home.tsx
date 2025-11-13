import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AcModelCard from "@/components/AcModelCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { type AcModel } from "@shared/schema";

import splitAcImage from '@assets/generated_images/Split_AC_unit_white_69b54d10.png';
import portableAcImage from '@assets/generated_images/Portable_AC_unit_f1927014.png';
import windowAcImage from '@assets/generated_images/Window_AC_unit_cebc637b.png';
import cassetteAcImage from '@assets/generated_images/Cassette_ceiling_AC_29a173d2.png';
import floorAcImage from '@assets/generated_images/Floor_standing_AC_e60e569d.png';
import dualSplitAcImage from '@assets/generated_images/Dual_split_AC_system_1a0f6d94.png';

const imageMap: Record<string, string> = {
  "/assets/generated_images/Split_AC_unit_white_69b54d10.png": splitAcImage,
  "/assets/generated_images/Portable_AC_unit_f1927014.png": portableAcImage,
  "/assets/generated_images/Window_AC_unit_cebc637b.png": windowAcImage,
  "/assets/generated_images/Cassette_ceiling_AC_29a173d2.png": cassetteAcImage,
  "/assets/generated_images/Floor_standing_AC_e60e569d.png": floorAcImage,
  "/assets/generated_images/Dual_split_AC_system_1a0f6d94.png": dualSplitAcImage,
};

export default function Home() {
  const { data: acModels, isLoading } = useQuery<AcModel[]>({
    queryKey: ["/api/ac-models"],
  });

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <section id="models" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Our AC Models
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of air conditioning units perfect for homes, offices, and commercial spaces
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i} 
                  className="h-[500px] bg-muted/30 rounded-md animate-pulse"
                  data-testid={`skeleton-${i}`}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {acModels?.map((model) => (
                <AcModelCard
                  key={model.id}
                  name={model.name}
                  brand={model.brand}
                  type={model.type}
                  capacity={model.capacity}
                  coverage={model.coverage}
                  energyRating={model.energyRating}
                  features={model.features}
                  imageUrl={imageMap[model.imageUrl] || model.imageUrl}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <WhyChooseUs />
      <HowItWorks />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
