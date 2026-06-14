import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const LEADER_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/files/16c25201-cd69-4ff2-89e0-191a450196ce.jpg';
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
    <div className="bg-ivory text-ink font-sans selection:bg-gold/30 overflow-x-hidden">
      {/* NAV */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ink/90 backdrop-blur-md py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'}`}>
        <div className="container flex items-center justify-between">
          <a href="#hero" className="flex flex-col leading-none">
            <span className="font-serif text-xl md:text-2xl text-ivory tracking-wide">İLE ORISA IFAGBAYE</span>
            <span className="text-[10px] uppercase tracking-luxury text-gold/80 mt-1">Школа традиций и магии</span>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="text-sm text-ivory/70 hover:text-gold transition-colors">{n.label}</a>
            ))}
          </nav>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-ivory" aria-label="Меню">
            <Icon name={open ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {open && (
          <div className="lg:hidden bg-ink/95 backdrop-blur-md mt-4 px-8 py-6 flex flex-col gap-4 animate-fade-up">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="text-ivory/80 hover:text-gold text-lg">{n.label}</a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-end overflow-hidden bg-ink">
        <img src={LEADER_IMG} alt="Лидер общины" className="absolute inset-0 w-full h-full object-cover object-center opacity-70 animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />
        <div className="container relative z-10 pb-24 pt-40">
          <div className="max-w-3xl">
            <p className="reveal text-gold uppercase tracking-luxury text-xs mb-8" style={{ animationDelay: '0.1s' }}>
              Традиция Ifá · Òrìṣà
            </p>
            <h1 className="reveal font-serif text-ivory text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-500" style={{ animationDelay: '0.25s' }}>
              Школа африканских<br />традиций и магии
            </h1>
            <p className="reveal text-ivory/70 text-lg md:text-xl mt-8 max-w-2xl leading-relaxed" style={{ animationDelay: '0.45s' }}>
              Духовный путь, обучение, консультации и жизнь общины — для тех, кто ищет глубину, силу и дисциплину.
            </p>
            <div className="reveal flex flex-col sm:flex-row gap-4 mt-12" style={{ animationDelay: '0.65s' }}>
              <a href="#tradition" className="group inline-flex items-center justify-center gap-3 bg-gold text-ink px-8 py-4 text-sm uppercase tracking-wider hover:bg-ivory transition-colors">
                Начать знакомство
                <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contacts" className="inline-flex items-center justify-center gap-3 border border-ivory/30 text-ivory px-8 py-4 text-sm uppercase tracking-wider hover:border-gold hover:text-gold transition-colors">
                Записаться на консультацию
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/40 animate-bounce">
          <Icon name="ChevronDown" size={24} />
        </div>
      </section>

      {/* TRUST / LEADER */}
      <section className="relative bg-ink text-ivory py-28 grain">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={LEADER_IMG} alt="Наставник дома" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/40 hidden md:block" />
          </div>
          <div>
            <p className="text-gold uppercase tracking-luxury text-xs mb-6">Хранитель традиции</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">Отец дома и духовный проводник</h2>
            <p className="text-ivory/70 text-lg leading-relaxed mb-6">
              Наставник общины — носитель живой линии передачи Ifá. Его путь — это десятилетия дисциплины, посвящений и служения тем, кто приходит за ответом и силой.
            </p>
            <p className="text-ivory/60 leading-relaxed mb-10">
              Здесь нет обещаний чудес. Есть знание, ритуал и честная работа над собой — то, что веками держит традицию живой.
            </p>
            <div className="flex gap-10">
              {[['25+', 'лет в традиции'], ['∞', 'линия передачи'], ['1', 'дом, одна семья']].map(([num, t]) => (
                <div key={t}>
                  <div className="font-serif text-4xl text-gold">{num}</div>
                  <div className="text-xs uppercase tracking-wider text-ivory/50 mt-2 max-w-[90px]">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS IFA */}
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
            <p className="text-ink/70 text-lg leading-relaxed">
              Òrìṣà — силы природы и духовные покровители, через которых традиция учит жить в гармонии, обретать защиту и раскрывать своё предназначение. Это не вера в сверхъестественное, а дисциплинированный путь знания.
            </p>
          </div>
        </div>
      </section>

      {/* HELP */}
      <section id="help" className="relative bg-earth text-ivory py-28">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-gold uppercase tracking-luxury text-xs mb-6">Чем мы можем помочь</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">Путь, сила, знание и братство</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ivory/10">
            {HELP.map((h) => (
              <div key={h.title} className="bg-earth p-10 hover:bg-ink transition-colors duration-500 group">
                <div className="w-14 h-14 flex items-center justify-center border border-gold/40 text-gold mb-8 group-hover:bg-gold group-hover:text-ink transition-colors">
                  <Icon name={h.icon} size={24} />
                </div>
                <h3 className="font-serif text-2xl mb-4">{h.title}</h3>
                <p className="text-ivory/60 leading-relaxed text-sm">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PATH */}
      <section id="path" className="relative bg-ivory py-28 md:py-36">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-bronze uppercase tracking-luxury text-xs mb-6">Путь в общине</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight text-ink">Постепенный путь уважения и дисциплины</h2>
          </div>
          <div className="space-y-px">
            {PATH.map((p) => (
              <div key={p.n} className="group grid md:grid-cols-12 gap-6 items-center py-8 border-t border-ink/10 hover:bg-ink/[0.03] transition-colors px-2">
                <div className="md:col-span-2 font-serif text-5xl text-gold/70 group-hover:text-gold transition-colors">{p.n}</div>
                <h3 className="md:col-span-3 font-serif text-2xl text-ink">{p.title}</h3>
                <p className="md:col-span-7 text-ink/60 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIBRARY */}
      <section id="library" className="relative bg-ink text-ivory py-28">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <p className="text-gold uppercase tracking-luxury text-xs mb-6">Библиотека</p>
              <h2 className="font-serif text-4xl md:text-6xl leading-tight">Материалы и статьи дома</h2>
            </div>
            <a href="#contacts" className="text-sm uppercase tracking-wider text-gold hover:text-ivory transition-colors inline-flex items-center gap-2">
              Все материалы <Icon name="ArrowRight" size={16} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ARTICLES.map((a, i) => (
              <article key={a.title} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img src={i === 1 ? LEADER_IMG : i === 2 ? WOOD_IMG : ALTAR_IMG} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-gold/80 mb-3">
                  <span>{a.tag}</span><span className="text-ivory/30">·</span><span className="text-ivory/40">{a.read}</span>
                </div>
                <h3 className="font-serif text-2xl leading-snug group-hover:text-gold transition-colors">{a.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS / CTA */}
      <section id="contacts" className="relative bg-earth text-ivory py-32 overflow-hidden">
        <img src={WOOD_IMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-earth/80" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-gold uppercase tracking-luxury text-xs mb-8">Контакты</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">Сделайте первый шаг на пути</h2>
          <p className="text-ivory/70 text-lg leading-relaxed mb-12">
            Запись на знакомство и консультацию ведётся через Telegram. Напишите нам — и наставник ответит лично.
          </p>
          <a href="#" className="group inline-flex items-center gap-3 bg-gold text-ink px-10 py-5 text-sm uppercase tracking-wider hover:bg-ivory transition-colors">
            <Icon name="Send" size={20} />
            Написать в Telegram
            <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-ivory/50 py-14 border-t border-ivory/10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="font-serif text-ivory text-lg">İLE ORISA IFAGBAYE</div>
            <div className="text-xs uppercase tracking-luxury text-gold/70 mt-1">Школа африканских традиций и магии</div>
          </div>
          <div className="flex gap-6 text-sm">
            {NAV.slice(0, 5).map((n) => (
              <a key={n.label} href={n.href} className="hover:text-gold transition-colors">{n.label}</a>
            ))}
          </div>
          <div className="text-xs">© {new Date().getFullYear()} İLE ORISA IFAGBAYE</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
