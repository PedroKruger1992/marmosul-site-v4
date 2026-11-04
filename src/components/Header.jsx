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
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#inicio">
          <img src={logo} alt="Marmosul Pelotas" width="600" height="303" className="h-14 md:h-20 w-auto" />
        </a>
        <nav aria-label="Menu principal" className="hidden md:block">
          <ul className="flex gap-8">
            {links.map(link => (
              <li key={link.href}>
                <a href={link.href} className="font-semibold text-azul hover:text-vermelho transition-colors">
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
        <nav id="menu-mobile" aria-label="Menu principal" className="md:hidden border-t border-gray-100 bg-white">
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