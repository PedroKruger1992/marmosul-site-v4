import logo from '../assets/logo-marmosul.webp';
import { useState } from 'react';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#contato', label: 'Contato' }
];

const Header = () => {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="group relative mx-auto flex max-w-6xl items-center justify-between overflow-hidden rounded-full border border-white/60 bg-white/25 px-6 py-2 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_24px_rgba(8,65,92,0.12)]">
        <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] bg-white/50 motion-safe:animate-brilho [animation-delay:600ms]" />
        <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] bg-white/50 motion-safe:group-hover:animate-brilho" />
        <a href="#inicio">
          <img src={logo} alt="Marmosul Pelotas" width="600" height="303" className="h-11 w-auto" />
        </a>
        <nav aria-label="Menu principal" className="hidden md:block">
          <ul className="flex gap-8">
            {links.map(link => (
              <li key={link.href}>
                <a href={link.href} className="drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] font-semibold text-azul hover:text-vermelho transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="md:hidden p-2 text-3xl leading-none text-azul"
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto(!aberto)}
        >
          <span aria-hidden="true">{aberto ? '✕' : '☰'}</span>
        </button>
      </div>
      {aberto && (
        <nav id="menu-mobile" aria-label="Menu principal" className="md:hidden mx-auto mt-2 max-w-6xl rounded-3xl border border-white/60 bg-white/80 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_24px_rgba(8,65,92,0.12)]">
          <ul className="flex flex-col px-4 py-2">
            {links.map(link => (
              <li key={link.href}>
                <a href={link.href} className="block py-3 font-semibold text-azul hover:text-vermelho" onClick={() => setAberto(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;