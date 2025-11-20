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
        name: "Portable AC Unit",
        type: "Portable",
        capacity: "1 Ton",
        coverage: "120-150 sq ft",
        features: [
          "Easy to move and install",
          "No permanent installation needed",
          "Built-in dehumidifier",
          "Remote control included",
        ],
        imageUrl: "/assets/generated_images/Portable_AC_unit_f1927014.png",
      },
      {
        name: "Premium Split AC",
        type: "Split AC",
        capacity: "1.5 Ton",
        coverage: "150-180 sq ft",
        features: [
          "Fast cooling technology",
          "Low noise operation",
          "Energy efficient compressor",
          "Auto clean function",
        ],
        imageUrl: "/assets/generated_images/Split_AC_unit_white_69b54d10.png",
      },
      {
        name: "Dual Split System",
        type: "Multi-Split",
        capacity: "2.5 Ton",
        coverage: "300-350 sq ft",
        features: [
          "Cool multiple rooms",
          "Individual room control",
          "Energy efficient operation",
          "Premium quality components",
        ],
        imageUrl: "/assets/generated_images/Dual_split_AC_system_1a0f6d94.png",
      },
      {
        name: "Cassette Ceiling AC",
        type: "Cassette",
        capacity: "2 Ton",
        coverage: "250-300 sq ft",
        features: [
          "360-degree airflow",
          "Ideal for offices",
          "Sleek ceiling design",
          "Powerful cooling capacity",
        ],
        imageUrl: "/assets/generated_images/Cassette_ceiling_AC_29a173d2.png",
      },
      {
        name: "Floor Standing Tower",
        type: "Floor Standing",
        capacity: "3 / 4 / 5.5  Ton",
        coverage: "3:200-240/4:400-500/5.5:600-750 sq ft ",
        features: [
          "Modern tower design",
          "Space-saving footprint",
          "Advanced air purification",
          "Smart temperature control",
        ],
        imageUrl: "/assets/generated_images/Floor_standing_AC_e60e569d.png",
      },
      {
        name: "Ductable AC",
        type: "Ductable",
        capacity: "8.5 / 11 / 17 / 22 Ton",
        coverage: "120-150 sq ft",
        features: [
          "Compact design",
          "Easy installation",
          "Economical cooling",
          "Low maintenance",
        ],
        imageUrl: "/assets/generated_images/Floor_standing_AC_e60e569d.png",
      },
      {
        name: "In-Built AC",
        type: "Mobile",
        capacity: "7.5 Ton",
        coverage: "600-800 sq ft",
        features: [
          "Advanced airflow control",
          "Energy-saving operation",
          "Smart temperature regulation",
          "Eco-friendly refrigerant system",
        ],
        imageUrl: "/assets/generated_images/Floor_standing_AC_e60e569d.png",
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
                
                type={model.type}
                capacity={model.capacity}
                coverage={model.coverage}
                
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

