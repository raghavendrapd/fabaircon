import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const whatsappNumber = "+91 9845157675"; //todo: remove mock functionality
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi, I'd like to inquire about AC rentals`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-pulse"
      data-testid="button-floating-whatsapp"
    >
      <Button
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg"
      >
        <FaWhatsapp className="h-7 w-7" />
      </Button>
    </a>
  );
}
