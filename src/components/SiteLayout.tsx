import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

const navigation = [
  { label: 'Domov', to: '/' },
  { label: 'Zápasy', to: '/zapas' },
  { label: 'Hráči', to: '/hraci' },
  { label: 'Novinky', to: '/novinky' },
  { label: 'História', to: '/historia' },
];

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="demo-strip">
        <span className="demo-strip__dot" />
        <span>Univerzitný projekt</span>
        <span className="demo-strip__divider">/</span>
        <span>Ukážkové údaje, nie aktuálne výsledky ani štatistiky</span>
      </div>
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="brand" to="/" aria-label="Dynamo Kyjev, domov">
            <span className="brand__crest" aria-hidden="true"><span>D</span><span>K</span></span>
            <span className="brand__text"><strong>DYNAMO</strong><small>KYJEV · 1927</small></span>
          </Link>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Zavrieť navigáciu' : 'Otvoriť navigáciu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Hlavná navigácia">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setMenuOpen(false)} className={({ isActive }) => `main-nav__link${isActive ? ' is-active' : ''}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link className="header-cta" to="/zapas">
            Program zápasov <ArrowUpRight size={16} />
          </Link>
        </div>
      </header>
      <main key={location.pathname} className="page-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="site-footer__main wrap">
          <Link className="brand brand--footer" to="/">
            <span className="brand__crest" aria-hidden="true"><span>D</span><span>K</span></span>
            <span className="brand__text"><strong>DYNAMO</strong><small>KYJEV · 1927</small></span>
          </Link>
          <p>Tradícia. Tím. Kyjev.</p>
          <nav className="footer-nav" aria-label="Navigácia v päte">
            <Link to="/zapas">Zápasy</Link><Link to="/hraci">Hráči</Link><Link to="/novinky">Novinky</Link><Link to="/historia">História klubu</Link>
          </nav>
        </div>
        <div className="site-footer__bottom wrap">
          <span>© 2026 Dynamo Kyjev · Univerzitný projekt</span>
          <span>Všetky zápasové údaje a profily sú ukážkové.</span>
        </div>
      </footer>
    </>
  );
}
