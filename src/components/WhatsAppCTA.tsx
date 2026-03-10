import { trackWhatsAppClick } from "@/lib/analytics";

const WhatsAppCTA = () => (
  <a
    href="https://wa.me/39XXXXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    onClick={trackWhatsAppClick}
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform"
    aria-label="Contattaci su WhatsApp"
  >
    <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.914 15.914 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.584c-.39 1.1-1.932 2.012-3.182 2.278-.856.18-1.974.324-5.738-1.234-4.818-1.994-7.916-6.878-8.158-7.196-.232-.318-1.952-2.6-1.952-4.958s1.234-3.516 1.672-3.996c.39-.428 1.03-.624 1.642-.624.198 0 .376.01.536.018.438.018.658.044 .948.736.362.866 1.244 3.034 1.352 3.254.11.22.22.518.072.818-.138.308-.258.498-.478.762-.22.264-.428.466-.648.752-.198.248-.422.514-.176.952.248.438 1.098 1.81 2.358 2.932 1.622 1.444 2.99 1.892 3.414 2.102.318.158.698.13.956-.158.328-.366.734-.972 1.148-1.57.294-.428.666-.482 1.018-.328.358.148 2.264 1.068 2.652 1.264.388.196.648.294.744.458.094.164.094.952-.296 2.052z" />
    </svg>
  </a>
);

export default WhatsAppCTA;
