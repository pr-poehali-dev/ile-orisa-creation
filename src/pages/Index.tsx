import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

// Hero — portrait closer shot (focus: лицо, взгляд)
const HERO_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/bucket/b516aca0-6077-4214-8edc-27a12738497d.jpg';
// Leader section — full body, реальный человек традиции
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
  { tag: 'Традиция', title: 'Что говорит корпус Ifá о судьбе и выборе', read: '7 мин', img: ALTAR_IMG },
  { tag: 'Практика', title: 'Орì: внутренняя голова и личное предназначение', read: '5 мин', img: HERO_IMG },
  { tag: 'Община', title: 'Дисциплина дома: почему путь требует терпения', read: '6 мин', img: WOOD_IMG },
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

      {/* ─── HEADER ────────────────────────────────────────────── */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ink/92 backdrop-blur-md py-4' : 'bg-transparent py-7'}`}>
        <div className="container flex items-center justify-between">
          <a href="#hero" className="flex flex-col leading-none">
            <span className="font-serif text-lg md:text-xl text-ivory tracking-wide">İLE ORISA IFAGBAYE</span>
            <span className="text-[9px] uppercase tracking-luxury text-ivory/45 mt-1">Школа африканских традиций и магии</span>
          </a>
          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((n) => (
              <a key={n.label} href={n.href}
                className="text-[13px] text-ivory/60 hover:text-ivory transition-colors duration-300 tracking-wide">
                {n.label}
              </a>
            ))}
          </nav>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-ivory" aria-label="Меню">
            <Icon name={open ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
        {open && (
          <div className="lg:hidden bg-ink border-t border-ivory/10 mt-4 px-8 py-8 flex flex-col gap-5">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)}
                className="text-ivory/75 hover:text-ivory text-lg tracking-wide">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-ink">

        {/* Portrait panel — anchored right, face in upper portion */}
        <div className="absolute inset-0 flex justify-end">
          <div className="relative w-full md:w-[62%] h-full overflow-hidden">
            <img
              src={HERO_IMG}
              alt="Наставник общины"
              className="absolute inset-0 w-full h-full object-cover object-[48%_10%] animate-slow-zoom"
            />
            {/* left-to-right gradient — плавный переход к тексту */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/50 to-transparent" />
            {/* warm amber tint */}
            <div className="absolute inset-0 bg-[hsl(32_30%_6%/0.35)]" />
          </div>
        </div>

        {/* global overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_20%_55%,hsl(28_15%_5%/0.65),transparent)]" />

        <div className="container relative z-10 pt-44 pb-32">
          <div className="max-w-lg">
            <p className="reveal text-ivory/45 uppercase tracking-luxury text-[11px] mb-10" style={{ animationDelay: '0.1s' }}>
              Традиция Ifá · Òrìṣà
            </p>
            {/* headline ~15-20% меньше: было 5xl/7xl/5.5rem → стало 4xl/6xl/4.5rem */}
            <h1
              className="reveal font-serif text-ivory text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.08] font-normal"
              style={{ animationDelay: '0.25s' }}
            >
              Школа африканских<br />традиций и магии
            </h1>
            <p
              className="reveal text-ivory/65 text-base md:text-lg mt-10 leading-[1.8] max-w-sm"
              style={{ animationDelay: '0.45s' }}
            >
              Духовный путь, обучение, консультации и жизнь общины — для тех, кто ищет глубину, силу и дисциплину.
            </p>
            <div className="reveal flex flex-col sm:flex-row gap-4 mt-14" style={{ animationDelay: '0.65s' }}>
              <a href="#tradition"
                className="group inline-flex items-center justify-center gap-3 bg-ivory text-ink px-8 py-4 text-[12px] uppercase tracking-widest hover:bg-gold transition-colors duration-300">
                Начать знакомство
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contacts"
                className="inline-flex items-center justify-center border border-ivory/20 text-ivory/75 px-8 py-4 text-[12px] uppercase tracking-widest hover:border-ivory/50 hover:text-ivory transition-colors duration-300">
                Записаться на консультацию
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 text-ivory/30 animate-bounce z-10">
          <Icon name="ChevronDown" size={22} />
        </div>
      </section>

      {/* ─── LEADER ────────────────────────────────────────────── */}
      <section className="relative bg-ink text-ivory py-32 overflow-hidden">
        {/* subtle grain texture */}
        <div className="absolute inset-0 grain opacity-60 pointer-events-none" />
        <div className="container grid md:grid-cols-2 gap-20 items-end relative z-10">

          {/* Full-body portrait */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative w-full max-w-[400px]">
              <img
                src={LEADER_FULLBODY}
                alt="Хранитель традиции"
                className="w-full aspect-[3/4] object-cover object-[50%_8%]"
              />
              {/* bottom fade into section bg */}
              <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-ink/70 to-transparent pointer-events-none" />
              {/* minimal corner line */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-ivory/15 hidden md:block" />
            </div>
          </div>

          {/* Text — новый tone: спокойная уверенность, достоинство */}
          <div className="md:pb-10">
            <p className="text-ivory/40 uppercase tracking-luxury text-[10px] mb-7">Хранитель традиции</p>
            <h2 className="font-serif text-4xl md:text-[2.75rem] leading-tight mb-9">
              Хранитель традиции<br />и наставник общины
            </h2>
            <p className="text-ivory/70 text-lg leading-[1.85] mb-5">
              Традиция Ifá — это путь дисциплины, знания и постепенного понимания. Наставник дома несёт живую линию передачи, в которой ценится глубина, уважение к пути и серьёзное отношение к духовной практике.
            </p>
            <p className="text-ivory/50 leading-[1.85] mb-12">
              Дорогу к Ifá не ищут торопливо. Она открывается тем, кто готов слушать, учиться и идти — шаг за шагом, согласно своему предназначению.
            </p>
            <div className="flex gap-12">
              {[['25+', 'лет в традиции'], ['∞', 'линия передачи'], ['1', 'дом, одна семья']].map(([num, t]) => (
                <div key={t}>
                  <div className="font-serif text-3xl text-ivory/90">{num}</div>
                  <div className="text-[10px] uppercase tracking-wider text-ivory/35 mt-2 max-w-[90px]">{t}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── TRADITION ─────────────────────────────────────────── */}
      <section id="tradition" className="relative bg-ivory py-32 md:py-40">
        <div className="container grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <img src={ALTAR_IMG} alt="Алтарь Òrìṣà" className="w-full aspect-square object-cover" />
          </div>
          <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
            <p className="text-ink/35 uppercase tracking-luxury text-[10px] mb-7">О традиции</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-9 text-ink">Что такое Ifá и Òrìṣà</h2>
            <p className="text-ink/65 text-lg leading-[1.85] mb-6">
              Ifá — древняя система мудрости народа Йоруба, признанная ЮНЕСКО. Это священный корпус знания о человеке, его судьбе и взаимосвязи со вселенной.
            </p>
            <p className="text-ink/55 text-lg leading-[1.85]">
              Òrìṣà — силы природы и духовные покровители, через которых традиция учит жить в гармонии, обретать защиту и раскрывать своё предназначение. Дисциплинированный путь знания, а не внешней магии.
            </p>
          </div>
        </div>
      </section>

      {/* ─── HELP ──────────────────────────────────────────────── */}
      <section id="help" className="relative bg-earth text-ivory py-32">
        <div className="container">
          <div className="max-w-xl mb-20">
            <p className="text-ivory/35 uppercase tracking-luxury text-[10px] mb-7">Направления работы</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Путь, сила,<br />знание и братство</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ivory/8">
            {HELP.map((h) => (
              <div key={h.title} className="bg-earth p-10 hover:bg-ink/60 transition-colors duration-500 group">
                <div className="w-12 h-12 flex items-center justify-center border border-ivory/20 text-ivory/60 mb-9 group-hover:border-ivory/40 group-hover:text-ivory transition-colors">
                  <Icon name={h.icon} size={20} />
                </div>
                <h3 className="font-serif text-xl mb-4 text-ivory">{h.title}</h3>
                <p className="text-ivory/50 leading-relaxed text-sm">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PATH ──────────────────────────────────────────────── */}
      <section id="path" className="relative bg-ivory py-32 md:py-40">
        <div className="container">
          <div className="max-w-xl mb-20">
            <p className="text-ink/35 uppercase tracking-luxury text-[10px] mb-7">Путь в общине</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-ink">Постепенный путь<br />уважения и дисциплины</h2>
          </div>
          <div>
            {PATH.map((p, i) => (
              <div key={p.n}
                className={`group grid md:grid-cols-12 gap-6 items-start py-10 ${i > 0 ? 'border-t border-ink/8' : ''} hover:bg-ink/[0.02] transition-colors px-2`}>
                <div className="md:col-span-2 font-serif text-4xl text-ink/20 group-hover:text-ink/40 transition-colors pt-1">{p.n}</div>
                <h3 className="md:col-span-3 font-serif text-xl text-ink mt-0.5">{p.title}</h3>
                <p className="md:col-span-7 text-ink/55 leading-[1.85] text-base">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIBRARY ───────────────────────────────────────────── */}
      <section id="library" className="relative bg-ink text-ivory py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div className="max-w-lg">
              <p className="text-ivory/35 uppercase tracking-luxury text-[10px] mb-7">Библиотека</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">Материалы и статьи дома</h2>
            </div>
            <a href="#contacts" className="text-[12px] uppercase tracking-widest text-ivory/45 hover:text-ivory transition-colors inline-flex items-center gap-2">
              Все материалы <Icon name="ArrowRight" size={14} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {ARTICLES.map((a) => (
              <article key={a.title} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-7">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-ivory/35 mb-3">
                  <span>{a.tag}</span><span>·</span><span>{a.read}</span>
                </div>
                <h3 className="font-serif text-xl leading-snug group-hover:text-ivory/70 transition-colors">{a.title}</h3>
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
          <p className="text-ivory/35 uppercase tracking-luxury text-[10px] mb-9">Контакты</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">Сделайте первый шаг<br />на пути</h2>
          <p className="text-ivory/60 text-lg leading-[1.85] mb-14 max-w-lg mx-auto">
            Запись на знакомство и консультацию ведётся через Telegram. Наставник отвечает лично.
          </p>
          <a href="#"
            className="group inline-flex items-center gap-3 border border-ivory/30 text-ivory px-10 py-5 text-[12px] uppercase tracking-widest hover:bg-ivory hover:text-ink transition-colors duration-300">
            <Icon name="Send" size={18} />
            Написать в Telegram
          </a>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────── */}
      <footer className="bg-ink text-ivory/35 py-14 border-t border-ivory/8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="font-serif text-ivory/80 text-base tracking-wide">İLE ORISA IFAGBAYE</div>
            <div className="text-[9px] uppercase tracking-luxury text-ivory/30 mt-1">Школа африканских традиций и магии</div>
          </div>
          <div className="flex gap-7 text-[12px] tracking-wide">
            {NAV.slice(0, 5).map((n) => (
              <a key={n.label} href={n.href} className="hover:text-ivory/70 transition-colors">{n.label}</a>
            ))}
          </div>
          <div className="text-[11px]">© {new Date().getFullYear()} İLE ORISA IFAGBAYE</div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
