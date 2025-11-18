import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AcModelCard from "@/components/AcModelCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Import images from your assets folder
import splitAcImage from '@assets/generated_images/Split_AC_unit_white_69b54d10.png';
import portableAcImage from '@assets/generated_images/Portable_AC_unit_f1927014.png';
import windowAcImage from '@assets/generated_images/Window_AC_unit_cebc637b.png';
import cassetteAcImage from '@assets/generated_images/Cassette_ceiling_AC_29a173d2.png';
import floorAcImage from '@assets/generated_images/Floor_standing_AC_e60e569d.png';
import dualSplitAcImage from '@assets/generated_images/Dual_split_AC_system_1a0f6d94.png';

const acModels = [
  {
    id: 1,
    name: "Split AC",
    brand: "Daikin",
    type: "Split",
    capacity: "1.5 Ton",
    coverage: "Medium rooms",
    energyRating: "5 Star",
    features: ["Inverter", "Silent Operation", "Anti-Bacterial Filter"],
    imageUrl: splitAcImage,
  },
  {
    id: 2,
    name: "Portable AC",
    brand: "LG",
    type: "Portable",
    capacity: "1 Ton",
    coverage: "Small rooms",
    energyRating: "3 Star",
    features: ["Compact", "Easy to Move", "Remote Control"],
    imageUrl: portableAcImage,
  },
  {
    id: 3,
    name: "Window AC",
    brand: "Voltas",
    type: "Window",
    capacity: "1.5 Ton",
    coverage: "Medium rooms",
    energyRating: "3 Star",
    features: ["Affordable", "Easy Installation", "Good Cooling"],
    imageUrl: windowAcImage,
  },
  {
    id: 4,
    name: "Cassette Ceiling AC",
    brand: "Hitachi",
    type: "Cassette",
    capacity: "2 Ton",
    coverage: "Large halls",
    energyRating: "5 Star",
    features: ["360° Air Flow", "Premium Design", "Silent"],
    imageUrl: cassetteAcImage,
  },
  {
    id: 5,
    name: "Floor Standing AC",
    brand: "Samsung",
    type: "Floor Standing",
    capacity: "2 Ton",
    coverage: "Large halls",
    energyRating: "4 Star",
    features: ["High Power", "Remote", "Modern Look"],
    imageUrl: floorAcImage,
  },
  {
    id: 6,
    name: "Dual Split AC System",
    brand: "Carrier",
    type: "Split",
    capacity: "1 Ton x 2",
    coverage: "Two Spaces",
    energyRating: "5 Star",
    features: ["Dual Cooling", "Multi-Room", "Smart Control"],
    imageUrl: dualSplitAcImage,
  },
];

export default function Home() {
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {acModels.map((model) => (
              <AcModelCard
                key={model.id}
                name={model.name}
                brand={model.brand}
                type={model.type}
                capacity={model.capacity}
                coverage={model.coverage}
                energyRating={model.energyRating}
                features={model.features}
                imageUrl={model.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <HowItWorks />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

