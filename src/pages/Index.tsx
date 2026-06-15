import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const LEADER_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/bucket/b516aca0-6077-4214-8edc-27a12738497d.jpg';
const LEADER_FULLBODY = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/bucket/15d61266-4ca3-4e3c-b27e-db812d364a70.jpg';
const ALTAR_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/files/8eab9b92-14e3-453c-bb54-000958ecbaf3.jpg';
const WOOD_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/files/3ad7cfd8-cbad-4383-bfc3-e09a3d7c8a0e.jpg';

const NAV = [
  { label: 'Главная', href: '#hero' },
  { label: 'О традиции', href: '#tradition' },
  { label: 'Община', href: '#path' },
  { label: 'Обучение', href: '#help' },
  { label: 'Консультации', href: '#contacts' },
  { label: 'Библиотека', href: '#library' },
  { label: 'Контакты', href: '#contacts' },
];

const HELP = [
  { icon: 'Compass', title: 'Поиск пути', text: 'Понять своё предназначение, услышать голос Орì и определить направление жизни через диагностику Ifá.' },
  { icon: 'Shield', title: 'Духовная сила и защита', text: 'Работа с Òrìṣà, очищение, укрепление личной силы и защита от того, что мешает идти вперёд.' },
  { icon: 'BookOpen', title: 'Обучение традиции', text: 'Системное погружение в знание дома: ритуал, корпус Ifá, дисциплина и подлинная практика.' },
  { icon: 'Users', title: 'Община и братство', text: 'Жизнь рядом с людьми одного пути — поддержка, наставничество и принадлежность к дому.' },
];

const PATH = [
  { n: '01', title: 'Знакомство', text: 'Первый разговор о традиции, ваших вопросах и пути.' },
  { n: '02', title: 'Консультация', text: 'Диагностика Ifá и личные рекомендации наставника.' },
  { n: '03', title: 'Обучение', text: 'Постепенное освоение знания и практики дома.' },
  { n: '04', title: 'Жизнь общины', text: 'Участие в ритуалах, праздниках и жизни братства.' },
  { n: '05', title: 'Глубокие уровни', text: 'Посвящения и более глубокие ступени традиции.' },
];

const ARTICLES = [
  { tag: 'Традиция', title: 'Что говорит корпус Ifá о судьбе и выборе', read: '7 мин' },
  { tag: 'Практика', title: 'Орì: внутренняя голова и личное предназначение', read: '5 мин' },
  { tag: 'Община', title: 'Дисциплина дома: почему путь требует терпения', read: '6 мин' },
];

const Index = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-ivory text-ink font-sans selection:bg-gold/20 overflow-x-hidden">

      {/* ─── NAV ───────────────────────────────────────────────── */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ink/93 backdrop-blur-md py-4 border-b border-ivory/8' : 'bg-transparent py-6'}`}>
        <div className="container flex items-center justify-between">
          <a href="#hero" className="flex flex-col leading-none">
            <span className="font-serif text-xl md:text-2xl text-ivory tracking-wide">İLE ORISA IFAGBAYE</span>
            <span className="text-[9px] uppercase tracking-luxury text-ivory/45 mt-1">Школа африканских традиций и магии</span>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="text-[13px] text-ivory/60 hover:text-ivory transition-colors duration-300 tracking-wide">{n.label}</a>
            ))}
          </nav>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-ivory" aria-label="Меню">
            <Icon name={open ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {open && (
          <div className="lg:hidden bg-ink border-t border-ivory/8 mt-4 px-8 py-8 flex flex-col gap-5">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="text-ivory/75 hover:text-ivory text-lg tracking-wide">{n.label}</a>
            ))}
          </div>
        )}
      </header>

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section id="hero" className="relative bg-ink overflow-hidden">

        {/* DESKTOP: full-screen with figure on the right */}
        <div className="hidden md:flex relative min-h-screen items-center">
          <div className="absolute inset-0 flex justify-end">
            <div className="relative w-[78%] h-full overflow-hidden">
              <img
                src={LEADER_IMG}
                alt="Наставник общины"
                className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
                style={{ objectPosition: '65% 8%', filter: 'brightness(0.80) contrast(1.04) saturate(0.90)' }}
              />
              <div className="absolute inset-0 bg-[hsl(32_30%_8%/0.3)]" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/65 to-transparent" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/25" />
          <div className="container relative z-10 pt-44 pb-32">
            <div className="max-w-xl">
              <h1 className="reveal font-serif text-ivory text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05]" style={{ animationDelay: '0.25s' }}>
                Школа африканских<br />традиций и магии
              </h1>
              <p className="reveal text-ivory/90 text-xl md:text-2xl mt-10 leading-[1.75] max-w-md font-light" style={{ animationDelay: '0.45s' }}>
                Для тех, кто ищет силу, поддержку и путь в традиции Ifá и Òrìṣà.
              </p>
              <div className="reveal flex flex-col sm:flex-row gap-4 mt-12" style={{ animationDelay: '0.65s' }}>
                <a href="#tradition" className="group inline-flex items-center justify-center gap-3 bg-gold text-ink px-8 py-4 text-sm uppercase tracking-wider hover:bg-ivory transition-colors duration-300">
                  Начать знакомство
                  <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contacts" className="inline-flex items-center justify-center gap-3 border border-ivory/30 text-ivory px-8 py-4 text-sm uppercase tracking-wider hover:border-ivory/60 hover:text-ivory transition-colors duration-300">
                  Записаться на консультацию
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/35 animate-bounce z-10">
            <Icon name="ChevronDown" size={24} />
          </div>
        </div>

        {/* MOBILE: text block → then figure below */}
        <div className="md:hidden flex flex-col">
          {/* text */}
          <div className="relative z-10 px-6 pt-36 pb-12 bg-ink">
            <h1 className="reveal font-serif text-ivory text-4xl leading-[1.08]" style={{ animationDelay: '0.25s' }}>
              Школа африканских<br />традиций и магии
            </h1>
            <p className="reveal text-ivory/90 text-lg mt-8 leading-[1.75] font-light" style={{ animationDelay: '0.45s' }}>
              Для тех, кто ищет силу, поддержку и путь в традиции Ifá и Òrìṣà.
            </p>
            <div className="reveal flex flex-col gap-3 mt-10" style={{ animationDelay: '0.65s' }}>
              <a href="#tradition" className="group inline-flex items-center justify-center gap-3 bg-gold text-ink px-6 py-4 text-sm uppercase tracking-wider">
                Начать знакомство
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contacts" className="inline-flex items-center justify-center gap-3 border border-ivory/30 text-ivory px-6 py-4 text-sm uppercase tracking-wider">
                Записаться на консультацию
              </a>
            </div>
          </div>
          {/* figure */}
          <div className="relative w-full aspect-[3/4] overflow-hidden">
            <img
              src={LEADER_IMG}
              alt="Наставник общины"
              className="w-full h-full object-cover"
              style={{ objectPosition: '65% 8%', filter: 'brightness(0.82) contrast(1.04) saturate(0.90)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          </div>
        </div>

      </section>

      {/* ─── LEADER ────────────────────────────────────────────── */}
      <section className="relative bg-ink text-ivory overflow-hidden">
        <div className="absolute inset-0 grain opacity-50 pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-0 md:gap-0 items-stretch min-h-[85vh]">

            {/* Portrait — full height, edge-to-edge on left */}
            <div className="relative order-2 md:order-1 md:min-h-full">
              <div className="md:absolute md:inset-0 aspect-[3/4] md:aspect-auto overflow-hidden">
                <img
                  src={LEADER_FULLBODY}
                  alt="Хранитель традиции"
                  className="w-full h-full object-cover object-[50%_5%]"
                  style={{ filter: 'brightness(0.88) contrast(1.03) saturate(0.9)' }}
                />
                {/* bottom fade */}
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-ink/80 to-transparent pointer-events-none" />
                {/* right fade into text */}
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent pointer-events-none hidden md:block" />
              </div>
            </div>

            {/* Text — vertically centred */}
            <div className="order-1 md:order-2 flex flex-col justify-center py-20 md:py-28 md:pl-16 lg:pl-20">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-10">Хранитель традиции<br />и наставник общины</h2>
              <p className="text-ivory/80 text-lg leading-[1.9] mb-7">
                Наш наставник — носитель живой традиции Ifá и линии преемственности, передаваемой от учителя к ученику.
              </p>
              <p className="text-ivory text-base leading-[1.9] mb-7">
                Путь Ifá — это не только знание, но и ответственность, духовная практика, уважение к традиции и постоянное обучение. Настоящая передача рождается не в книгах, а в опыте, наставничестве и живом прикосновении к традиции.
              </p>
              <p className="text-ivory text-base leading-[1.9]">
                В İLE ORISA IFAGBAYE мы стремимся сохранять уважение к традиции, поддерживать путь обучения и быть опорой для тех, кто ищет силу, поддержку и духовный путь.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── TRADITION ─────────────────────────────────────────── */}
      <section id="tradition" className="relative bg-ivory py-28 md:py-36">
        <div className="container grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <img src={ALTAR_IMG} alt="Алтарь Òrìṣà" className="w-full aspect-square object-cover" />
          </div>
          <div className="md:col-span-7 order-1 md:order-2 md:pl-8">
            <p className="text-bronze uppercase tracking-luxury text-xs mb-6">О традиции</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-ink">Что такое Ifá и Òrìṣà</h2>
            <p className="text-ink/70 text-lg leading-relaxed mb-5">
              Ifá — древняя система мудрости народа Йоруба, признанная ЮНЕСКО. Это священный корпус знания о человеке, его судьбе и взаимосвязи со вселенной.
            </p>
            <p className="text-ink/65 text-lg leading-relaxed">
              Òrìṣà — силы природы и духовные покровители, через которых традиция учит жить в гармонии, обретать защиту и раскрывать своё предназначение. Это не вера в сверхъестественное, а дисциплинированный путь знания.
            </p>
          </div>
        </div>
      </section>

      {/* ─── HELP ──────────────────────────────────────────────── */}
      <section id="help" className="relative bg-earth text-ivory py-28">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-ivory/40 uppercase tracking-luxury text-xs mb-6">Направления</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">Путь, сила, знание и братство</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ivory/8">
            {HELP.map((h) => (
              <div key={h.title} className="bg-earth p-10 hover:bg-ink/60 transition-colors duration-500 group">
                <div className="w-14 h-14 flex items-center justify-center border border-ivory/20 text-ivory/60 mb-8 group-hover:border-ivory/40 group-hover:text-ivory transition-colors">
                  <Icon name={h.icon} size={22} />
                </div>
                <h3 className="font-serif text-2xl mb-4">{h.title}</h3>
                <p className="text-ivory/55 leading-relaxed text-sm">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PATH ──────────────────────────────────────────────── */}
      <section id="path" className="relative bg-ivory py-28 md:py-36">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-bronze uppercase tracking-luxury text-xs mb-6">Путь в общине</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight text-ink">Путь знакомства с традицией</h2>
          </div>
          <div className="space-y-px">
            {PATH.map((p) => (
              <div key={p.n} className="group grid md:grid-cols-12 gap-6 items-center py-8 border-t border-ink/10 hover:bg-ink/[0.03] transition-colors px-2">
                <div className="md:col-span-2 font-serif text-5xl text-ink/20 group-hover:text-ink/40 transition-colors">{p.n}</div>
                <h3 className="md:col-span-3 font-serif text-2xl text-ink">{p.title}</h3>
                <p className="md:col-span-7 text-ink/60 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIBRARY ───────────────────────────────────────────── */}
      <section id="library" className="relative bg-ink text-ivory py-28">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <p className="text-ivory/40 uppercase tracking-luxury text-xs mb-6">Библиотека</p>
              <h2 className="font-serif text-4xl md:text-6xl leading-tight">Знания и материалы</h2>
            </div>
            <a href="#contacts" className="text-sm uppercase tracking-wider text-ivory/40 hover:text-ivory transition-colors inline-flex items-center gap-2">
              Все материалы <Icon name="ArrowRight" size={16} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ARTICLES.map((a, i) => (
              <article key={a.title} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img src={i === 1 ? LEADER_IMG : i === 2 ? WOOD_IMG : ALTAR_IMG} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-ivory/35 mb-3">
                  <span>{a.tag}</span><span className="text-ivory/20">·</span><span>{a.read}</span>
                </div>
                <h3 className="font-serif text-2xl leading-snug group-hover:text-ivory/70 transition-colors">{a.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACTS ──────────────────────────────────────────── */}
      <section id="contacts" className="relative bg-earth text-ivory py-36 overflow-hidden">
        <img src={WOOD_IMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-earth/85" />
        <div className="container relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-ivory/40 uppercase tracking-luxury text-xs mb-8">Контакты</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">Сделайте первый шаг на пути</h2>
          <p className="text-ivory/65 text-lg leading-relaxed mb-12 max-w-lg mx-auto">
            Запись на знакомство и консультацию ведётся через Telegram. Наставник отвечает лично.
          </p>
          <a href="#" className="group inline-flex items-center gap-3 border border-ivory/35 text-ivory px-10 py-5 text-sm uppercase tracking-wider hover:bg-ivory hover:text-ink transition-colors duration-300">
            <Icon name="Send" size={18} />
            Написать в Telegram
          </a>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────── */}
      <footer className="bg-ink border-t border-ivory/8">
        {/* Main footer body */}
        <div className="container py-16 grid md:grid-cols-3 gap-12 items-start">

          {/* Brand */}
          <div>
            <div className="font-serif text-ivory text-xl tracking-wide mb-3">İLE ORISA IFAGBAYE</div>
            <div className="text-[9px] uppercase tracking-luxury text-ivory/30 mb-6">Школа африканских традиций и магии</div>
            <p className="text-ivory/35 text-sm leading-relaxed max-w-[220px]">
              Дом традиции Ifá и Òrìṣà. Знание, дисциплина, духовный путь.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="text-[9px] uppercase tracking-luxury text-ivory/25 mb-6">Разделы</div>
            <div className="flex flex-col gap-3">
              {NAV.slice(0, 6).map((n) => (
                <a key={n.label} href={n.href} className="text-[13px] text-ivory/45 hover:text-ivory/75 transition-colors tracking-wide">{n.label}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
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

        {/* Bottom bar */}
        <div className="border-t border-ivory/6">
          <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-ivory/25">
            <span>© {new Date().getFullYear()} İLE ORISA IFAGBAYE</span>
            <span className="tracking-wide">Традиция Ifá · Путь Òrìṣà</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;