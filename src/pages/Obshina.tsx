import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const LEADER_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/bucket/b516aca0-6077-4214-8edc-27a12738497d.jpg';
const LEADER_FULLBODY = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/bucket/15d61266-4ca3-4e3c-b27e-db812d364a70.jpg';
const ALTAR_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/files/8eab9b92-14e3-453c-bb54-000958ecbaf3.jpg';
const WOOD_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/files/3ad7cfd8-cbad-4383-bfc3-e09a3d7c8a0e.jpg';

const VALUES = [
  { title: 'Уважение к традиции', text: 'Мы сохраняем живую линию передачи Ifá, не адаптируя её под моду и не упрощая ради привлекательности.' },
  { title: 'Честность пути', text: 'Мы не обещаем быстрых результатов. Путь требует времени, терпения и искреннего намерения.' },
  { title: 'Братство', text: 'Дом — это семья. Взаимная поддержка, уважение и общий путь важнее индивидуального прогресса.' },
  { title: 'Дисциплина', text: 'Регулярная практика, выполнение предписаний и ответственность перед собой и традицией.' },
];

const PATH_STEPS = [
  { n: '01', title: 'Знакомство', text: 'Первый разговор с наставником о традиции, ваших вопросах и намерениях.' },
  { n: '02', title: 'Консультация Ifá', text: 'Диагностика и понимание вашего пути через священный корпус знания.' },
  { n: '03', title: 'Начало обучения', text: 'Постепенное погружение в знание дома — ритуал, история, практика.' },
  { n: '04', title: 'Жизнь общины', text: 'Участие в праздниках, ритуалах и совместной жизни братства.' },
  { n: '05', title: 'Углублённый путь', text: 'Посвящения и более глубокие уровни традиции по мере готовности.' },
];

export default function Obshina() {
  return (
    <Layout darkHeader>
      {/* ─── HERO ── */}
      <section className="relative bg-ink text-ivory pt-40 pb-28 overflow-hidden">
        <img src={LEADER_IMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25 object-[50%_15%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink" />
        <div className="container relative z-10 max-w-3xl">
          <p className="text-ivory/35 uppercase tracking-luxury text-[9px] mb-8">Община</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8">
            Дом традиции<br />и братство пути
          </h1>
          <p className="text-ivory/60 text-xl leading-[1.8] max-w-lg">
            İLE ORISA IFAGBAYE — это живое сообщество людей, объединённых уважением к традиции Ifá и искренним путём духовного развития.
          </p>
        </div>
      </section>

      {/* ─── КТО МЫ ── */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <img src={ALTAR_IMG} alt="Дом традиции" className="w-full aspect-square object-cover" />
          </div>
          <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
            <p className="text-ink/30 uppercase tracking-luxury text-[9px] mb-7">Кто мы</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 text-ink">Настоящий дом<br />живой традиции</h2>
            <p className="text-ink/65 text-lg leading-[1.9] mb-6">
              İLE ORISA IFAGBAYE — это дом традиции Ifá и Òrìṣà, основанный на уважении к линии преемственности и серьёзном отношении к духовному пути.
            </p>
            <p className="text-ink/48 text-base leading-[1.9]">
              Мы не культ и не организация. Мы — семья людей, которые выбрали путь знания, дисциплины и живой традиции. Здесь ценится глубина, а не поверхностный интерес.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ЦЕННОСТИ ── */}
      <section className="bg-ink text-ivory py-24 md:py-32">
        <div className="container">
          <div className="max-w-lg mb-16">
            <p className="text-ivory/30 uppercase tracking-luxury text-[9px] mb-7">Ценности</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">На чём стоит наш дом</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-ivory/8">
            {VALUES.map((v) => (
              <div key={v.title} className="p-10 md:p-12">
                <div className="font-serif text-xl text-ivory mb-4">{v.title}</div>
                <p className="text-ivory/45 text-sm leading-[1.85]">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── НАСТАВНИК ── */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container grid md:grid-cols-2 gap-16 items-end">
          <div className="relative">
            <div className="relative w-full max-w-[420px]">
              <img
                src={LEADER_FULLBODY}
                alt="Хранитель традиции"
                className="w-full aspect-[3/4] object-cover object-[50%_8%]"
              />
              <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-ivory/60 to-transparent pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-ink/12 hidden md:block" />
            </div>
          </div>
          <div className="md:pb-8">
            <p className="text-ink/30 uppercase tracking-luxury text-[9px] mb-7">Наставник</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-9 text-ink">Хранитель традиции<br />и наставник общины</h2>
            <p className="text-ink/65 text-lg leading-[1.9] mb-6">
              Наш наставник — носитель живой традиции Ifá и линии преемственности, передаваемой от учителя к ученику.
            </p>
            <p className="text-ink/48 text-base leading-[1.9] mb-6">
              Путь Ifá — это не только знание, но и ответственность, духовная практика и постоянное обучение. Настоящая передача рождается не в книгах, а в опыте, наставничестве и живом прикосновении к традиции.
            </p>
            <p className="text-ink/38 text-base leading-[1.9]">
              В İLE ORISA IFAGBAYE мы стремимся сохранять уважение к традиции и быть опорой для тех, кто ищет силу, поддержку и духовный путь.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ЖИЗНЬ ОБЩИНЫ ── */}
      <section className="bg-earth text-ivory py-24 md:py-32">
        <div className="container">
          <div className="max-w-lg mb-16">
            <p className="text-ivory/30 uppercase tracking-luxury text-[9px] mb-7">Жизнь дома</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Что значит быть<br />частью дома</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { img: ALTAR_IMG, title: 'Ритуалы и праздники', text: 'Совместные церемонии по традиционному календарю. Ритуальная жизнь — основа общины.' },
              { img: WOOD_IMG, title: 'Обучение и передача', text: 'Регулярные занятия, изучение Odu, история традиции и практические знания.' },
              { img: LEADER_IMG, title: 'Поддержка и братство', text: 'Люди одного пути рядом в важные моменты. Наставничество и взаимная поддержка.' },
            ].map((item) => (
              <div key={item.title}>
                <div className="aspect-[4/3] overflow-hidden mb-7">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover object-top" />
                </div>
                <div className="font-serif text-xl text-ivory mb-3">{item.title}</div>
                <p className="text-ivory/45 text-sm leading-[1.85]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ПУТЬ ВНУТРИ ОБЩИНЫ ── */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container">
          <div className="max-w-lg mb-16">
            <p className="text-ink/30 uppercase tracking-luxury text-[9px] mb-7">Путь в общине</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-ink">Постепенный путь<br />уважения и дисциплины</h2>
          </div>
          <div>
            {PATH_STEPS.map((p, i) => (
              <div key={p.n}
                className={`group grid md:grid-cols-12 gap-6 items-start py-10 ${i > 0 ? 'border-t border-ink/8' : ''} px-1`}>
                <div className="md:col-span-2 font-serif text-4xl text-ink/15 group-hover:text-ink/35 transition-colors duration-500 pt-1">{p.n}</div>
                <h3 className="md:col-span-3 font-serif text-xl text-ink mt-1">{p.title}</h3>
                <p className="md:col-span-7 text-ink/50 leading-[1.85] text-[15px]">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ── */}
      <section className="bg-ink text-ivory py-28 relative overflow-hidden">
        <img src={WOOD_IMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-ink/88" />
        <div className="container relative z-10 text-center max-w-xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-7">Стать частью<br />нашего дома</h2>
          <p className="text-ivory/50 text-lg leading-[1.85] mb-12">
            Первый шаг — разговор. Наставник ответит на ваши вопросы лично.
          </p>
          <Link to="/#contacts"
            className="inline-flex items-center gap-3 border border-ivory/30 text-ivory px-10 py-5 text-[11px] uppercase tracking-[0.16em] hover:bg-ivory hover:text-ink transition-colors duration-300">
            <Icon name="Send" size={16} />
            Написать в Telegram
          </Link>
        </div>
      </section>
    </Layout>
  );
}
