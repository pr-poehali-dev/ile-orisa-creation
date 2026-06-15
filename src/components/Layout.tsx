import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const NAV = [
  { label: 'Главная', href: '/' },
  { label: 'Традиция', href: '/tradiciya' },
  { label: 'Община', href: '/obshina' },
  { label: 'Обучение', href: '/obuchenie' },
  { label: 'Знания', href: '/znaniya' },
  { label: 'Контакты', href: '/#contacts' },
];

const ALTAR_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/files/8eab9b92-14e3-453c-bb54-000958ecbaf3.jpg';
const WOOD_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/files/3ad7cfd8-cbad-4383-bfc3-e09a3d7c8a0e.jpg';

interface LayoutProps {
  children: React.ReactNode;
  darkHeader?: boolean;
}

export default function Layout({ children, darkHeader = false }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const alwaysDark = darkHeader || scrolled;

  return (
    <div className="bg-ivory text-ink font-sans selection:bg-gold/20 overflow-x-hidden">

      {/* ─── HEADER ────────────────────────────────────────────── */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${alwaysDark ? 'bg-ink/95 backdrop-blur-md py-4 border-b border-ivory/8' : 'bg-transparent py-6'}`}>
        <div className="container flex items-center justify-between gap-8">

          {/* Brand */}
          <Link to="/" className="flex flex-col leading-none shrink-0">
            <span className="font-serif text-xl md:text-2xl text-ivory tracking-wide">İLE ORISA IFAGBAYE</span>
            <span className="text-[9px] uppercase tracking-luxury text-ivory/40 mt-0.5">Школа африканских традиций и магии</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => {
              const isActive = n.href === location.pathname;
              return (
                <Link
                  key={n.label}
                  to={n.href}
                  className={`text-[13px] tracking-wide transition-colors duration-300 ${isActive ? 'text-ivory' : 'text-ivory/55 hover:text-ivory/85'}`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-4">
            <Link
              to="/konsultaciya"
              className="hidden md:inline-flex items-center border border-ivory/30 text-ivory/80 hover:border-ivory/60 hover:text-ivory px-5 py-2.5 text-[11px] uppercase tracking-[0.14em] transition-colors duration-300"
            >
              Консультация
            </Link>
            <button onClick={() => setOpen(!open)} className="lg:hidden text-ivory" aria-label="Меню">
              <Icon name={open ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-ink border-t border-ivory/8 mt-4 px-8 py-8 flex flex-col gap-5">
            {NAV.map((n) => (
              <Link key={n.label} to={n.href} onClick={() => setOpen(false)}
                className="text-ivory/70 hover:text-ivory text-lg tracking-wide">
                {n.label}
              </Link>
            ))}
            <Link to="/konsultaciya" onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center border border-ivory/30 text-ivory/80 px-6 py-3 text-sm uppercase tracking-wider">
              Консультация
            </Link>
          </div>
        )}
      </header>

      {/* Page content */}
      {children}

      {/* ─── FOOTER ────────────────────────────────────────────── */}
      <footer className="bg-ink border-t border-ivory/8">
        <div className="container py-16 grid md:grid-cols-3 gap-12 items-start">
          <div>
            <div className="font-serif text-ivory text-xl tracking-wide mb-3">İLE ORISA IFAGBAYE</div>
            <div className="text-[9px] uppercase tracking-luxury text-ivory/30 mb-6">Школа африканских традиций и магии</div>
            <p className="text-ivory/35 text-sm leading-relaxed max-w-[220px]">
              Дом традиции Ifá и Òrìṣà. Знание, дисциплина, духовный путь.
            </p>
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-luxury text-ivory/25 mb-6">Разделы</div>
            <div className="flex flex-col gap-3">
              {NAV.map((n) => (
                <Link key={n.label} to={n.href}
                  className="text-[13px] text-ivory/45 hover:text-ivory/75 transition-colors tracking-wide">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-luxury text-ivory/25 mb-6">Связь</div>
            <p className="text-ivory/40 text-sm leading-relaxed mb-6">
              Запись на консультацию и знакомство с традицией — через Telegram.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-wider text-ivory/50 hover:text-ivory transition-colors">
              <Icon name="Send" size={14} />
              Написать нам
            </a>
          </div>
        </div>
        <div className="border-t border-ivory/6">
          <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-ivory/25">
            <span>© {new Date().getFullYear()} İLE ORISA IFAGBAYE</span>
            <span className="tracking-wide">Традиция Ifá · Путь Òrìṣà</span>
          </div>
        </div>
      </footer>
    </div>
  );
}