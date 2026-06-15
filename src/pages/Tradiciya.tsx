import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const ALTAR_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/files/8eab9b92-14e3-453c-bb54-000958ecbaf3.jpg';
const WOOD_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/files/3ad7cfd8-cbad-4383-bfc3-e09a3d7c8a0e.jpg';

const FAQ = [
  {
    q: 'Нужно ли быть африканского происхождения?',
    a: 'Нет. Традиция Ifá открыта для всех, кто приходит с уважением и серьёзным намерением. Происхождение не определяет путь.',
  },
  {
    q: 'Это религия?',
    a: 'Ifá — это не религия в привычном смысле. Это система мудрости, духовной практики и связи с природными силами. Многие практикующие сохраняют свои прежние убеждения.',
  },
  {
    q: 'Нужно ли сразу принимать посвящение?',
    a: 'Нет. Путь начинается с консультации и знакомства. Посвящения — это глубокий шаг, который приходит постепенно, когда человек готов.',
  },
  {
    q: 'Это магия или шаманизм?',
    a: 'Традиция Ifá не тождественна шаманизму. Это системное знание с тысячелетней историей, священным корпусом текстов Odu и живой линией передачи.',
  },
  {
    q: 'Опасно ли это?',
    a: 'Традиция основана на гармонии, ответственности и уважении. Путь, построенный на честности и дисциплине, не несёт опасности.',
  },
];

export default function Tradiciya() {
  return (
    <Layout darkHeader>
      {/* ─── HERO ── */}
      <section className="relative bg-ink text-ivory pt-40 pb-28 overflow-hidden">
        <img src={ALTAR_IMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
        <div className="container relative z-10 max-w-3xl">
          <p className="text-ivory/35 uppercase tracking-luxury text-[9px] mb-8">Традиция</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8">
            Что такое Ifá<br />и Òrìṣà
          </h1>
          <p className="text-ivory/65 text-xl leading-[1.8] max-w-xl">
            Древняя система мудрости народа Йоруба — признанная ЮНЕСКО и живущая через непрерывную линию передачи от наставника к ученику.
          </p>
        </div>
      </section>

      {/* ─── ЧТО ТАКОЕ IFÁ ── */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <img src={ALTAR_IMG} alt="Алтарь" className="w-full aspect-square object-cover" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-ink/30 uppercase tracking-luxury text-[9px] mb-7">Ifá</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 text-ink">Священный корпус<br />знания</h2>
            <p className="text-ink/65 text-lg leading-[1.9] mb-6">
              Ifá — это система мудрости и прорицания народа Йоруба, уходящая корнями в тысячелетия. В 2005 году ЮНЕСКО признала Ifá частью нематериального культурного наследия человечества.
            </p>
            <p className="text-ink/50 text-base leading-[1.9]">
              В основе Ifá — корпус Odu: 256 священных текстов, содержащих знание о судьбе, природе человека, ритуалах и взаимосвязи всего живого. Это не магия и не суеверие — это живая система понимания мира.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ЧТО ТАКОЕ ÒRÌṢÀ ── */}
      <section className="bg-ink text-ivory py-24 md:py-32">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-ivory/30 uppercase tracking-luxury text-[9px] mb-7">Òrìṣà</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">Силы природы<br />и духовные покровители</h2>
            <p className="text-ivory/65 text-lg leading-[1.9] mb-6">
              Òrìṣà — это архетипические силы природы и духовные покровители в традиции Йоруба. Каждый Òrìṣà управляет определённой сферой жизни: судьбой, любовью, справедливостью, морем, войной, мудростью.
            </p>
            <p className="text-ivory/48 text-base leading-[1.9]">
              Отношения с Òrìṣà строятся через ритуал, подношение и уважение. Это не поклонение идолам — это сознательная работа с силами, которые влияют на жизнь каждого человека.
            </p>
          </div>
          <div>
            <img src={WOOD_IMG} alt="Традиция" className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      {/* ─── ПРОРИЦАНИЕ ── */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container max-w-3xl">
          <p className="text-ink/30 uppercase tracking-luxury text-[9px] mb-7">Прорицание</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-10 text-ink">Divination — диалог<br />с традицией</h2>
          <p className="text-ink/65 text-lg leading-[1.9] mb-7">
            Прорицание Ifá — это не гадание и не предсказание будущего в привычном смысле. Это системный диагностический инструмент, позволяющий понять своё предназначение (Orí), выявить препятствия и получить конкретные рекомендации.
          </p>
          <p className="text-ink/50 text-base leading-[1.9] mb-7">
            В процессе консультации жрец Ifá (бабалаво) использует священные инструменты — орула, опеле или ирокин — чтобы вызвать одно из 256 Odu. Каждое Odu содержит истории, рекомендации и ebo (жертвоприношения), которые помогают восстановить баланс.
          </p>
          <p className="text-ink/42 text-base leading-[1.9]">
            Результат консультации — не готовый ответ, а понимание: где ты находишься, что мешает твоему пути и как двигаться дальше в согласии с традицией.
          </p>
        </div>
      </section>

      {/* ─── ДУХОВНЫЙ ПУТЬ ── */}
      <section className="bg-earth text-ivory py-24 md:py-32">
        <div className="container grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <p className="text-ivory/30 uppercase tracking-luxury text-[9px] mb-7">Путь</p>
            <h2 className="font-serif text-4xl leading-tight">Духовный путь в традиции</h2>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            {[
              { title: 'Уважение', text: 'Путь начинается с уважения — к традиции, наставнику и себе. Без этого фундамента невозможно двигаться вперёд.' },
              { title: 'Дисциплина', text: 'Традиция требует регулярной практики, выполнения предписаний и честности перед собой.' },
              { title: 'Обучение', text: 'Знание передаётся постепенно — от базового понимания к глубокой практике. Это не курс, а жизненный путь.' },
              { title: 'Сообщество', text: 'Путь проходится не в одиночку. Дом, братство и наставник — важнейшая часть традиции.' },
            ].map((item) => (
              <div key={item.title} className="border-t border-ivory/12 pt-6">
                <div className="font-serif text-xl mb-3">{item.title}</div>
                <p className="text-ivory/50 text-sm leading-[1.85]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── МИФ И РЕАЛЬНОСТЬ ── */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container max-w-3xl">
          <p className="text-ink/30 uppercase tracking-luxury text-[9px] mb-7">Мифы и реальность</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-12 text-ink">Что это не такое</h2>
          <div className="space-y-6">
            {[
              ['Это не «чёрная магия»', 'Традиция Ifá основана на гармонии с природными силами, а не на манипуляции или причинении вреда.'],
              ['Это не секта', 'İLE ORISA IFAGBAYE — открытый дом традиции. Никакого принуждения, никаких закрытых систем управления.'],
              ['Это не быстрый результат', 'Традиция не продаёт мгновенных решений. Путь требует времени, дисциплины и искреннего намерения.'],
              ['Это не для всех', 'И это честно. Путь Ifá подходит тем, кто готов к серьёзной работе над собой и уважению к традиции.'],
            ].map(([title, text]) => (
              <div key={title} className="grid md:grid-cols-5 gap-4 py-6 border-t border-ink/8">
                <div className="md:col-span-2 font-serif text-lg text-ink">{title}</div>
                <p className="md:col-span-3 text-ink/55 leading-[1.85] text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ── */}
      <section className="bg-ink text-ivory py-24 md:py-32">
        <div className="container max-w-3xl">
          <p className="text-ivory/30 uppercase tracking-luxury text-[9px] mb-7">Вопросы</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-12">Часто задаваемые<br />вопросы</h2>
          <div className="space-y-0">
            {FAQ.map((item, i) => (
              <div key={i} className={`py-8 ${i > 0 ? 'border-t border-ivory/8' : ''}`}>
                <div className="font-serif text-xl text-ivory mb-4">{item.q}</div>
                <p className="text-ivory/55 leading-[1.85] text-base">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ── */}
      <section className="bg-earth text-ivory py-28 overflow-hidden relative">
        <img src={WOOD_IMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-12" />
        <div className="absolute inset-0 bg-earth/88" />
        <div className="container relative z-10 text-center max-w-xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-7">Начните знакомство<br />с традицией</h2>
          <p className="text-ivory/55 text-lg leading-[1.85] mb-12">
            Первый шаг — консультация. Наставник ответит на ваши вопросы лично.
          </p>
          <Link to="/#contacts"
            className="inline-flex items-center gap-3 border border-ivory/30 text-ivory px-10 py-5 text-[11px] uppercase tracking-[0.16em] hover:bg-ivory hover:text-ink transition-colors duration-300">
            <Icon name="Send" size={16} />
            Записаться на консультацию
          </Link>
        </div>
      </section>
    </Layout>
  );
}
