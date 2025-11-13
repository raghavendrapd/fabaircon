import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const whatsappNumber = "+1234567890"; //todo: remove mock functionality
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2" data-testid="link-home">
            <div className="text-2xl font-bold text-primary">Fab Air Con</div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#models" className="text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2" data-testid="link-models">
              AC Models
            </a>
            <a href="#why-us" className="text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2" data-testid="link-why-us">
              Why Choose Us
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2" data-testid="link-how-it-works">
              How It Works
            </a>
          </nav>

          <Button 
            asChild
            variant="default"
            className="gap-2"
            data-testid="button-whatsapp-header"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="h-5 w-5" />
              <span className="hidden sm:inline">Contact Us</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
