import { MessageCircle } from "lucide-react";

const WhatsAppCTA = () => (
  <a
    href="https://wa.me/39XXXXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-primary-foreground shadow-lg hover:scale-110 transition-transform"
    aria-label="Contattaci su WhatsApp"
  >
    <MessageCircle size={28} fill="white" stroke="white" />
  </a>
);

export default WhatsAppCTA;
