import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaWhatsapp } from "react-icons/fa";
import { Snowflake, Grid3x3 } from "lucide-react";

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
  const whatsappNumber = "+91 9845157675";
  const whatsappMessage = `Hi, I'm interested in renting the ${name}. Can you provide more details?`;
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Card className="rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 border-0 bg-white/70 backdrop-blur-md">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] flex justify-center items-center bg-gray-100 overflow-hidden rounded-t-2xl">
          <img
            src={imageUrl}
            alt={name}
            className="w-36 h-36 object-contain drop-shadow-md"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-1">{name}</h3>
            <Badge className="rounded-full px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold">
              {type}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-3">
          <div className="flex items-center gap-2">
            <Snowflake className="h-4 w-4 text-blue-400" />
            <div>
              <div className="text-xs text-gray-500">Capacity</div>
              <div className="text-base font-semibold text-gray-700">{capacity}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Grid3x3 className="h-4 w-4 text-indigo-400" />
            <div>
              <div className="text-xs text-gray-500">Coverage</div>
              <div className="text-base font-semibold text-gray-700">{coverage}</div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2 text-gray-800">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {features.slice(0, 4).map((feature, i) => (
              <span key={i} className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-xs font-medium shadow-sm">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          asChild
          className="w-full gap-2 font-semibold bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md"
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
