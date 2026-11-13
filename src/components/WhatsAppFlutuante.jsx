import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_URL } from '../data/contato';

function WhatsAppFlutuante() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp" className="group fixed right-4 bottom-4 z-40 motion-safe:animate-surgir [animation-delay:1200ms] md:right-6 md:bottom-6">
      <span aria-hidden="true" className="pointer-events-none absolute top-1/2 right-full mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-[#e5dccb] bg-white px-3 py-1.5 text-sm text-azul opacity-0 transition-opacity group-hover:opacity-100 md:block">Fale com a gente</span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform group-hover:scale-110">
        <FaWhatsapp aria-hidden="true" className="h-8 w-8" />
      </span>
    </a>
  );
}

export default WhatsAppFlutuante;