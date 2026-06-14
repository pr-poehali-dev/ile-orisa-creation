import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/bucket/b516aca0-6077-4214-8edc-27a12738497d.jpg';
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

const TRUST = [
  { title: 'Ifá', sub: 'Священный корпус знания' },
  { title: 'Òrìṣà', sub: 'Духовные покровители пути' },
  { title: 'Обучение', sub: 'Системная передача традиции' },
  { title: 'Сопровождение', sub: 'Личная работа с наставником' },
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
    <div className="bg-ivory text-ink font-sans selection:bg-gold/15 overflow-x-hidden">

      {/* ─── HEADER ────────────────────────────────────────────── */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${scrolled ? 'bg-ink/95 backdrop-blur-md py-4 border-b border-ivory/8' : 'bg-transparent py-7'}`}>
        <div className="container flex items-center justify-between">
          <a href="#hero" className="flex flex-col leading-none">
            <span className="font-serif text-base md:text-lg text-ivory tracking-[0.06em]">İLE ORISA IFAGBAYE</span>
            <span className="text-[8px] uppercase tracking-luxury text-ivory/35 mt-[3px]">Школа африканских традиций и магии</span>
          </a>
          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((n) => (
              <a key={n.label} href={n.href}
                className="text-[12px] text-ivory/50 hover:text-ivory/85 transition-colors duration-400 tracking-[0.04em]">
                {n.label}
              </a>
            ))}
          </nav>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-ivory/70" aria-label="Меню">
            <Icon name={open ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
        {open && (
          <div className="lg:hidden bg-ink border-t border-ivory/8 mt-4 px-8 py-10 flex flex-col gap-6">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)}
                className="text-ivory/65 hover:text-ivory text-base tracking-[0.04em]">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(28_16%_5%)]">

        {/* Portrait — closer crop, eyes & face as focal point */}
        <div className="absolute inset-0">
          {/* Desktop: portrait on right ~60% width */}
          <div className="hidden md:flex absolute inset-0 justify-end">
            <div className="relative w-[60%] h-full overflow-hidden">
              <img
                src={HERO_IMG}
                alt="Наставник общины"
                className="absolute inset-0 w-full h-full object-cover object-[46%_5%] animate-slow-zoom scale-110"
                style={{ filter: 'brightness(0.72) contrast(1.06) saturate(0.88)' }}
              />
              {/* cinematic warm color grade */}
              <div className="absolute inset-0 bg-[hsl(28_30%_8%/0.42)]" style={{ mixBlendMode: 'multiply' }} />
              {/* left fade to text area */}
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(28_16%_5%)] via-[hsl(28_16%_5%/0.55)] to-transparent" />
            </div>
          </div>
          {/* Mobile: full bleed portrait */}
          <div className="md:hidden absolute inset-0">
            <img
              src={HERO_IMG}
              alt="Наставник общины"
              className="w-full h-full object-cover object-[46%_5%]"
              style={{ filter: 'brightness(0.55) contrast(1.05) saturate(0.85)' }}
            />
          </div>
        </div>

        {/* Atmospheric overlays — darker, more cinematic */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(28_16%_4%)] via-transparent to-[hsl(28_16%_5%/0.5)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(28_16%_5%/0.9)] via-[hsl(28_16%_5%/0.45)] to-transparent" />
        {/* subtle warm vignette bottom-left — anchors text area */}
        <div className="absolute bottom-0 left-0 w-[55%] h-[45%] bg-[radial-gradient(ellipse_at_bottom_left,hsl(28_18%_4%/0.8),transparent)]" />

        {/* Text content */}
        <div className="container relative z-10 pt-40 pb-28 md:pb-36">
          <div className="max-w-[420px]">
            {/* Eyebrow — very restrained */}
            <p
              className="reveal text-ivory/38 uppercase text-[9px] tracking-luxury mb-12"
              style={{ animationDelay: '0.1s' }}
            >
              Традиция Ifá · Òrìṣà
            </p>

            {/* Headline — reduced further ~12%, premium leading */}
            <h1
              className="reveal font-serif text-ivory text-[2.2rem] md:text-[3.2rem] lg:text-[3.75rem] leading-[1.12] font-normal"
              style={{ animationDelay: '0.3s' }}
            >
              Школа африканских<br />традиций и магии
            </h1>

            {/* Subtitle */}
            <p
              className="reveal text-ivory/55 text-[14px] md:text-[15px] mt-12 leading-[2] max-w-[320px] tracking-[0.01em]"
              style={{ animationDelay: '0.5s' }}
            >
              Духовный путь, обучение, консультации и жизнь общины — для тех, кто ищет глубину, силу и дисциплину.
            </p>

            {/* CTA buttons */}
            <div
              className="reveal flex flex-col sm:flex-row gap-3 mt-16"
              style={{ animationDelay: '0.7s' }}
            >
              <a href="#tradition"
                className="inline-flex items-center justify-center gap-3 bg-ivory text-ink px-9 py-[14px] text-[11px] uppercase tracking-[0.18em] hover:bg-[hsl(38_30%_88%)] transition-colors duration-400">
                Начать знакомство
              </a>
              <a href="#contacts"
                className="inline-flex items-center justify-center border border-ivory/18 text-ivory/60 px-9 py-[14px] text-[11px] uppercase tracking-[0.18em] hover:border-ivory/40 hover:text-ivory/85 transition-colors duration-400">
                Записаться на консультацию
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/25 animate-bounce z-10">
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* ─── TRUST SIGNAL ──────────────────────────────────────── */}
      <section className="bg-ink border-t border-ivory/8 border-b border-b-ivory/8">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {TRUST.map((t, i) => (
              <div
                key={t.title}
                className={`py-10 px-8 md:px-12 ${i < TRUST.length - 1 ? 'border-r border-ivory/8' : ''} ${i >= 2 ? 'border-t border-ivory/8 lg:border-t-0' : ''}`}
              >
                <div className="font-serif text-ivory text-xl md:text-2xl mb-2">{t.title}</div>
                <div className="text-[11px] text-ivory/35 leading-relaxed tracking-[0.03em]">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEADER ────────────────────────────────────────────── */}
      <section className="relative bg-ink text-ivory py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
        <div className="container grid md:grid-cols-2 gap-20 items-end relative z-10">

          <div className="relative flex justify-center md:justify-start">
            <div className="relative w-full max-w-[390px]">
              <img
                src={LEADER_FULLBODY}
                alt="Хранитель традиции"
                className="w-full aspect-[3/4] object-cover object-[50%_8%]"
                style={{ filter: 'brightness(0.92) contrast(1.04) saturate(0.9)' }}
              />
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-ink/60 to-transparent pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-ivory/12 hidden md:block" />
            </div>
          </div>

          <div className="md:pb-8">
            <p className="text-ivory/30 uppercase tracking-luxury text-[9px] mb-8">Хранитель традиции</p>
            <h2 className="font-serif text-[2.2rem] md:text-[2.6rem] leading-[1.15] mb-10">
              Хранитель традиции<br />и наставник общины
            </h2>
            <p className="text-ivory/65 text-[16px] leading-[1.9] mb-6">
              Традиция Ifá — это путь дисциплины, знания и постепенного понимания. Наставник дома несёт живую линию передачи, в которой ценится глубина, уважение к пути и серьёзное отношение к практике.
            </p>
            <p className="text-ivory/42 text-[15px] leading-[1.9] mb-14">
              Дорогу к Ifá не ищут торопливо. Она открывается тем, кто готов слушать, учиться и идти — шаг за шагом, согласно своему предназначению.
            </p>
            <div className="flex gap-14 border-t border-ivory/8 pt-10">
              {[['25+', 'лет в традиции'], ['∞', 'живая линия передачи'], ['1', 'дом, одна семья']].map(([num, t]) => (
                <div key={t}>
                  <div className="font-serif text-2xl text-ivory/80 mb-2">{num}</div>
                  <div className="text-[10px] uppercase tracking-[0.1em] text-ivory/30 max-w-[80px] leading-relaxed">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRADITION ─────────────────────────────────────────── */}
      <section id="tradition" className="relative bg-ivory py-32 md:py-44">
        <div className="container grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <img src={ALTAR_IMG} alt="Алтарь Òrìṣà" className="w-full aspect-square object-cover" />
          </div>
          <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
            <p className="text-ink/28 uppercase tracking-luxury text-[9px] mb-9">О традиции</p>
            <h2 className="font-serif text-[2rem] md:text-[2.8rem] leading-[1.18] mb-10 text-ink">Что такое Ifá<br />и Òrìṣà</h2>
            <p className="text-ink/60 text-[16px] leading-[1.9] mb-7">
              Ifá — древняя система мудрости народа Йоруба, признанная ЮНЕСКО. Это священный корпус знания о человеке, его судьбе и взаимосвязи со вселенной.
            </p>
            <p className="text-ink/45 text-[15px] leading-[1.9]">
              Òrìṣà — силы природы и духовные покровители, через которых традиция учит жить в гармонии, обретать защиту и раскрывать своё предназначение. Дисциплинированный путь знания, а не внешней магии.
            </p>
          </div>
        </div>
      </section>

      {/* ─── HELP ──────────────────────────────────────────────── */}
      <section id="help" className="relative bg-earth text-ivory py-32 md:py-40">
        <div className="container">
          <div className="max-w-md mb-24">
            <p className="text-ivory/28 uppercase tracking-luxury text-[9px] mb-9">Направления работы</p>
            <h2 className="font-serif text-[2rem] md:text-[2.6rem] leading-[1.18]">Путь, сила,<br />знание и братство</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-ivory/8">
            {HELP.map((h) => (
              <div key={h.title} className="p-10 md:p-12 hover:bg-ivory/[0.04] transition-colors duration-500 group">
                <div className="font-serif text-lg text-ivory mb-5">{h.title}</div>
                <p className="text-ivory/42 leading-[1.85] text-[13px]">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PATH ──────────────────────────────────────────────── */}
      <section id="path" className="relative bg-ivory py-32 md:py-44">
        <div className="container">
          <div className="max-w-md mb-24">
            <p className="text-ink/28 uppercase tracking-luxury text-[9px] mb-9">Путь в общине</p>
            <h2 className="font-serif text-[2rem] md:text-[2.6rem] leading-[1.18] text-ink">Постепенный путь<br />уважения и дисциплины</h2>
          </div>
          <div>
            {PATH.map((p, i) => (
              <div key={p.n}
                className={`group grid md:grid-cols-12 gap-8 items-start py-11 ${i > 0 ? 'border-t border-ink/7' : ''} px-1`}>
                <div className="md:col-span-2 font-serif text-3xl text-ink/15 group-hover:text-ink/30 transition-colors duration-500 pt-1">{p.n}</div>
                <h3 className="md:col-span-3 font-serif text-[1.1rem] text-ink/80 mt-1">{p.title}</h3>
                <p className="md:col-span-7 text-ink/48 leading-[1.9] text-[14px]">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIBRARY ───────────────────────────────────────────── */}
      <section id="library" className="relative bg-ink text-ivory py-32 md:py-40">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
            <div className="max-w-sm">
              <p className="text-ivory/28 uppercase tracking-luxury text-[9px] mb-9">Библиотека</p>
              <h2 className="font-serif text-[2rem] md:text-[2.6rem] leading-[1.18]">Материалы<br />и статьи дома</h2>
            </div>
            <a href="#contacts" className="text-[11px] uppercase tracking-[0.16em] text-ivory/35 hover:text-ivory/65 transition-colors inline-flex items-center gap-2">
              Все материалы <Icon name="ArrowRight" size={13} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {ARTICLES.map((a) => (
              <article key={a.title} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-8">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
                    style={{ filter: 'brightness(0.88) saturate(0.85)' }}
                  />
                </div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.12em] text-ivory/28 mb-4">
                  <span>{a.tag}</span><span className="text-ivory/15">—</span><span>{a.read}</span>
                </div>
                <h3 className="font-serif text-[1.15rem] leading-[1.5] text-ivory/80 group-hover:text-ivory transition-colors duration-300">{a.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACTS ──────────────────────────────────────────── */}
      <section id="contacts" className="relative bg-earth text-ivory py-40 overflow-hidden">
        <img src={WOOD_IMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-earth/90" />
        <div className="container relative z-10 text-center max-w-xl mx-auto">
          <p className="text-ivory/28 uppercase tracking-luxury text-[9px] mb-11">Контакты</p>
          <h2 className="font-serif text-[2rem] md:text-[2.8rem] leading-[1.18] mb-9">Сделайте первый<br />шаг на пути</h2>
          <p className="text-ivory/50 text-[15px] leading-[1.95] mb-16 max-w-sm mx-auto">
            Запись на знакомство и консультацию ведётся через Telegram. Наставник отвечает лично.
          </p>
          <a href="#"
            className="inline-flex items-center gap-3 border border-ivory/22 text-ivory/70 px-11 py-[15px] text-[11px] uppercase tracking-[0.18em] hover:border-ivory/45 hover:text-ivory transition-colors duration-400">
            <Icon name="Send" size={15} />
            Написать в Telegram
          </a>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────── */}
      <footer className="bg-ink text-ivory/28 py-14 border-t border-ivory/7">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="font-serif text-ivory/65 text-sm tracking-[0.05em]">İLE ORISA IFAGBAYE</div>
            <div className="text-[8px] uppercase tracking-luxury text-ivory/22 mt-1">Школа африканских традиций и магии</div>
          </div>
          <div className="flex gap-8 text-[11px] tracking-[0.04em]">
            {NAV.slice(0, 5).map((n) => (
              <a key={n.label} href={n.href} className="hover:text-ivory/55 transition-colors">{n.label}</a>
            ))}
          </div>
          <div className="text-[10px]">© {new Date().getFullYear()} İLE ORISA IFAGBAYE</div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
