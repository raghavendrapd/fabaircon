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
import Ductableac from '@assets/generated_images/
import Inbuiltac from '@assets/generated_images
const acModels = [
    {
    id: 1,
    name: "Portable AC",
    
    type: "Portable",
    capacity: "1 Ton",
    coverage: "Small rooms",
   
    features: ["Compact", "Easy to Move", "Remote Control"],
    imageUrl: portableAcImage,
  },
{
    id: 2,
    name: "Split AC",
    
    type: "Split",
    capacity: "1.5 Ton",
    
    
    features: ["Inverter", "Silent Operation", "Anti-Bacterial Filter"],
    imageUrl: splitAcImage,
  },
    {
    id: 3,
    name: "Dual Split AC System",
    
    type: "Split",
    capacity: "1 Ton x 2",
    
    
    features: ["Dual Cooling", "Multi-Room", "Smart Control"],
    imageUrl: dualSplitAcImage,
  },
  
  
  {
    id: 4,
    name: "Cassette Ceiling AC",
    
    type: "Cassette",
    capacity: "2 Ton",
    c
    
    features: ["360° Air Flow", "Premium Design", "Silent"],
    imageUrl: cassetteAcImage,
  },
  {
    id: 5,
    name: "Floor Standing AC",
    
    type: "Floor Standing",
    capacity: "2 Ton",
    
    
    features: ["High Power", "Remote", "Modern Look"],
    imageUrl: floorAcImage,
  },
    {
    id: 6,
    name: "Window AC",
    
    type: "Window",
    capacity: "1.5 Ton",
    
    
    features: ["Affordable", "Easy Installation", "Good Cooling"],
    imageUrl: windowAcImage,
  },
  
    {
        id:7,
        name: "Ductable AC",
        type: "Ductable",
        capacity: "8.5 / 11 / 17 / 22 Ton",
        features: [
          "Compact design",
          "Easy installation",
          "Economical cooling",
          "Low maintenance",
        ],
        imageUrl: Ductableac,
      },
      {
        id :8,
        name: "In-Built AC",
        type: "Mobile",
        capacity: "7.5 Ton",
        features: [
          "Advanced airflow control",
          "Energy-saving operation",
          "Smart temperature regulation",
          "Eco-friendly refrigerant system",
        ],
        imageUrl: Inbuiltac,
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

