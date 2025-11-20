import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaWhatsapp } from "react-icons/fa";
import { Snowflake, Grid3x3, Zap } from "lucide-react";

interface AcModelCardProps {
  name: string;
  type: string;
  capacity: string;
  coverage: string;
  
  features: string[];
  imageUrl: string;
}

export default function AcModelCard({
  name,
  type,
  capacity,
  coverage,
  
  features,
  imageUrl,
}: AcModelCardProps) {
  const whatsappNumber = "+91 9845157675"; //todo: remove mock functionality
  const whatsappMessage = `Hi, I'm interested in renting the ${name}. Can you provide more details?`;
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
   <Card className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-100 bg-white">
  <CardHeader className="p-0">
    <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-contain"
      />
    </div>
  </CardHeader>
  <CardContent className="p-6 space-y-2">
    <div className="flex items-start justify-between gap-2 mb-3">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-500">{type}</p>
      </div>
      <Badge
        variant="secondary"
        className="shrink-0 bg-blue-100 text-blue-700"
      >
        {type}
      </Badge>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="flex items-center gap-2">
        <Snowflake className="h-4 w-4 text-blue-400" />
        <div>
          <div className="text-xs text-gray-500">Capacity</div>
          <div className="text-sm font-medium text-gray-800">{capacity}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Grid3x3 className="h-4 w-4 text-indigo-400" />
        <div>
          <div className="text-xs text-gray-500">Coverage</div>
          <div className="text-sm font-medium text-gray-800">{coverage}</div>
        </div>
      </div>
    </div>

    <div>
      <h4 className="text-sm font-semibold mb-2 text-gray-800">Key Features:</h4>
      <ul className="space-y-2">
        {features.slice(0, 4).map((feature, index) => (
          <li key={index} className="flex gap-2 text-sm text-gray-600 items-center">
            <span className="text-xl text-blue-600">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </CardContent>
  <CardFooter className="p-6 pt-0">
    <Button
      asChild
      className="w-full gap-2 font-semibold bg-green-500 hover:bg-green-600 text-white"
      size="lg"
    >
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="h-5 w-5" />
        Get Rental Details on WhatsApp
      </a>
    </Button>
  </CardFooter>
</Card>

  );
}
