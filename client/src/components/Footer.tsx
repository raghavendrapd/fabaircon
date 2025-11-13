import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const whatsappNumber = "+1234567890"; //todo: remove mock functionality
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Fab Air Con</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Premium air conditioning rentals for every space. Your comfort is our priority.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="hover-elevate active-elevate-2 rounded-md p-2 inline-flex items-center justify-center"
                data-testid="link-facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="hover-elevate active-elevate-2 rounded-md p-2 inline-flex items-center justify-center"
                data-testid="link-instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="hover-elevate active-elevate-2 rounded-md p-2 inline-flex items-center justify-center"
                data-testid="link-twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href={`tel:${whatsappNumber}`}
                  className="hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2"
                  data-testid="link-phone"
                >
                  {whatsappNumber}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:info@fabaircon.com"
                  className="hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2"
                  data-testid="link-email"
                >
                  info@fabaircon.com
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  123 Cool Street, City Center<br />
                  Your City, State 12345
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3"
              data-testid="link-whatsapp-footer"
            >
              <FaWhatsapp className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fab Air Con. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
