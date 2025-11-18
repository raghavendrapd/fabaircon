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
  energyRating: string;
  features: string[];
  imageUrl: string;
}

export default function AcModelCard({
  name,
  type,
  capacity,
  coverage,
  energyRating,
  features,
  imageUrl,
}: AcModelCardProps) {
  const whatsappNumber = "+91 9845157675"; //todo: remove mock functionality
  const whatsappMessage = `Hi, I'm interested in renting the ${name}. Can you provide more details?`;
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-ac-model-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="p-0">
        <div className="aspect-[4/3] bg-muted overflow-hidden">
          <img 
            src={imageUrl} 
            alt={`${name}`}
            className="w-full h-full object-contain"
            data-testid={`img-ac-${name.toLowerCase().replace(/\s+/g, '-')}`}
          />
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-2xl font-semibold mb-1" data-testid={`text-model-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
              {name}
            </h3>
            <p className="text-sm text-muted-foreground"></p>
          </div>
          <Badge variant="secondary" className="shrink-0">
            {type}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Snowflake className="h-4 w-4 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Capacity</div>
              <div className="text-sm font-medium">{capacity}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Grid3x3 className="h-4 w-4 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Coverage</div>
              <div className="text-sm font-medium">{coverage}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <Zap className="h-4 w-4 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Energy Rating</div>
              <div className="text-sm font-medium">{energyRating}</div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {features.slice(0, 4).map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button 
          asChild
          className="w-full gap-2"
          size="lg"
          data-testid={`button-whatsapp-${name.toLowerCase().replace(/\s+/g, '-')}`}
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
