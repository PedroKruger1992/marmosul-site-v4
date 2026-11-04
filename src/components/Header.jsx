import logo from '../assets/logo-marmosul.webp';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#contato', label: 'Contato' }
];

const Header = () => {
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
      </div>
    </header>
  );
}

export default Header;