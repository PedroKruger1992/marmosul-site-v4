import { useState } from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { LuPhone, LuMail, LuMapPin, LuClock } from 'react-icons/lu';
import { WHATSAPP_URL, TELEFONE, TELEFONE_LINK, EMAIL, EMAIL_LINK, ENDERECO, MAPA_EMBED, MAPA_LINK, HORARIO, FACEBOOK_URL, INSTAGRAM_URL } from '../data/contato';

const itens = [
  { Icone: LuPhone, rotulo: 'Telefone', valor: TELEFONE, link: TELEFONE_LINK },
  { Icone: LuMail, rotulo: 'E-mail', valor: EMAIL, link: EMAIL_LINK },
  { Icone: LuMapPin, rotulo: 'Endereço', valor: ENDERECO, link: MAPA_LINK, externo: true },
  { Icone: LuClock, rotulo: 'Horário', valor: HORARIO },
];

function Contato() {
  const [mapaAberto, setMapaAberto] = useState(false);

  return (
    <section id="contato" className="scroll-mt-24 bg-white">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-vermelho">Fale conosco</p>
          <h2 className="mt-3 text-4xl font-bold uppercase text-gray-900 md:text-5xl">Entre em <span className="text-vermelho">contato</span></h2>
          <p className="mt-6 border-l border-dourado pl-4 leading-relaxed text-gray-600">Conte sua ideia e receba um orçamento sem compromisso.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full border border-azul/40 bg-white/30 px-8 py-3 font-semibold text-azul backdrop-blur-sm transition-colors hover:bg-azul hover:text-white">
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] bg-white/50 motion-safe:group-hover:animate-brilho" />
            <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
            Chamar no WhatsApp
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <ul className="mt-8 border-t border-[#efe7d8]">
            {itens.map(({ Icone, rotulo, valor, link, externo }) => (
              <li key={rotulo} className="flex items-start gap-4 border-b border-[#efe7d8] py-4">
                <Icone aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-dourado" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{rotulo}</p>
                  {link ? (
                    <a href={link} className="mt-1 block font-semibold text-azul transition-colors hover:text-vermelho" target={externo ? '_blank' : ''} rel={externo ? 'noopener noreferrer' : ''}>
                      {valor}
                    </a>
                  ) : (
                    <p className="mt-1 font-semibold text-azul">{valor}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500">Siga a Marmosul</span>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook da Marmosul" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform motion-safe:hover:-translate-y-1">
              <FaFacebookF aria-hidden="true" className="h-4 w-4" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Marmosul" className="flex h-10 w-10 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] text-white transition-transform motion-safe:hover:-translate-y-1">
              <FaInstagram aria-hidden="true" className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="relative pt-4 pr-4">
          <div aria-hidden="true" className="absolute top-0 right-0 bottom-4 left-4 border border-dourado" />
          <div className="relative aspect-[4/5] overflow-hidden bg-[#ece7de]">
            {mapaAberto ? (
              <iframe src={MAPA_EMBED} title="Mapa com a localização da Marmosul" className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-4">
                <LuMapPin aria-hidden="true" className="h-9 w-9 text-vermelho" />
                <button type="button" onClick={() => setMapaAberto(true)} className="border border-dourado bg-white/85 px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-azul transition-colors hover:bg-dourado hover:text-gray-900">Ver no mapa</button>
                <a href={MAPA_LINK} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 underline underline-offset-4 hover:text-vermelho">Abrir no Google Maps</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;