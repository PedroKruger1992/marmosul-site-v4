import logo from '../assets/logo-marmosul.webp';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { LuPhone, LuMail, LuMapPin } from 'react-icons/lu';
import { links } from '../data/navegacao';
import { WHATSAPP_URL, TELEFONE, TELEFONE_LINK, EMAIL, EMAIL_LINK, FACEBOOK_URL, INSTAGRAM_URL, RAZAO_SOCIAL, CNPJ } from '../data/contato';

function 
Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-dourado bg-[#f4f0e9]">
      <div className="mx-auto max-w-6xl px-4 pt-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <a href="#inicio">
              <img
                src={logo}
                alt="Marmosul Pelotas"
                width="600"
                height="303"
                loading="lazy"
                className="h-14 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-600">
              Mármores e granitos sob medida, com acabamento que valoriza cada espaço.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Marmosul"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform motion-safe:hover:-translate-y-1"
              >
                <FaFacebookF aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Marmosul"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] text-white transition-transform motion-safe:hover:-translate-y-1"
              >
                <FaInstagram aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>
          </div>
          <nav aria-label="Navegação do rodapé">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-900">Navegação</p>
            <div aria-hidden="true" className="mt-2 mb-4 h-px w-6 bg-dourado" />
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-azul transition-colors hover:text-vermelho">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-900">Contato</p>
            <div aria-hidden="true" className="mt-2 mb-4 h-px w-6 bg-dourado" />
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-azul transition-colors hover:text-vermelho"
                >
                  <FaWhatsapp aria-hidden="true" className="h-4 w-4 text-dourado" />WhatsApp
                </a>
              </li>
              <li>
                <a href={TELEFONE_LINK} className="inline-flex items-center gap-2 text-azul transition-colors hover:text-vermelho">
                  <LuPhone aria-hidden="true" className="h-4 w-4 text-dourado" />{TELEFONE}
                </a>
              </li>
              <li>
                <a href={EMAIL_LINK} className="inline-flex items-center gap-2 text-azul transition-colors hover:text-vermelho">
                  <LuMail aria-hidden="true" className="h-4 w-4 text-dourado" />{EMAIL}
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-gray-600">
                  <LuMapPin aria-hidden="true" className="h-4 w-4 text-dourado" />Três Vendas, Pelotas - RS
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-[#e3d9c6] py-6 text-xs text-gray-600 md:flex-row md:items-center md:justify-between md:pr-20">
          <p>© {ano} {RAZAO_SOCIAL} · CNPJ {CNPJ}</p>
          <a href="#inicio" className="uppercase tracking-[0.3em] text-azul transition-colors hover:text-vermelho">Voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;