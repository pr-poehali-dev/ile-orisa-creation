import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';

const ALTAR_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/files/8eab9b92-14e3-453c-bb54-000958ecbaf3.jpg';
const WOOD_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/files/3ad7cfd8-cbad-4383-bfc3-e09a3d7c8a0e.jpg';

const TELEGRAM_URL = 'https://t.me/+QgiLIa1gFRY4Y2Iy';

const LEARNING_ITEMS = [
  {
    icon: 'Flame',
    title: 'Духовные практики и обряды',
    text: 'Изучение традиционных ритуалов, обрядов и их значения в системе Ifá.',
  },
  {
    icon: 'Sparkles',
    title: 'Взаимодействие с Òrìṣà',
    text: 'Понимание природы Òrìṣà, их сфер влияния и построение с ними живой связи.',
  },
  {
    icon: 'Eye',
    title: 'Предсказание Дафа (Dáfá)',
    text: 'Освоение системы прорицания Ifá — одного из священных знаний традиции.',
  },
  {
    icon: 'Shield',
    title: 'Духовная защита',
    text: 'Принципы и практики защиты себя и близких в рамках традиции Ifá.',
  },
  {
    icon: 'Users',
    title: 'Помощь себе и близким',
    text: 'Применение знания традиции для поддержки, исцеления и духовного роста.',
  },
  {
    icon: 'BookOpen',
    title: 'Глубокое изучение традиции',
    text: 'Погружение в корпус Odu, историю традиции и её практическое применение.',
  },
];

export default function Obuchenie() {
  return (
    <Layout darkHeader>

      {/* ─── HERO ── */}
      <section className="relative bg-ink text-ivory pt-40 pb-32 overflow-hidden">
        <img src={WOOD_IMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/70 to-ink" />
        <div className="container relative z-10 max-w-3xl">
          <p className="text-ivory/35 uppercase tracking-luxury text-[9px] mb-8">İLE ORISA IFAGBAYE</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8">
            Обучение в традиции<br />Ifá и Òrìṣà
          </h1>
          <p className="text-ivory/65 text-xl leading-[1.8] max-w-xl mb-12">
            Школа африканских традиций и магии для тех, кто готов пройти посвящение и изучать живую традицию под наставничеством.
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-ink px-8 py-4 text-[12px] uppercase tracking-[0.14em] hover:bg-ivory transition-colors duration-300"
          >
            <Icon name="Send" size={15} />
            Написать в Telegram
          </a>
        </div>
      </section>

      {/* ─── ЧТО ВАЖНО ПОНИМАТЬ ── */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <img
              src={ALTAR_IMG}
              alt="Алтарь традиции"
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-ink/30 uppercase tracking-luxury text-[9px] mb-8">Основа пути</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-ink mb-10">
              Что важно<br />понимать
            </h2>
            <div className="flex flex-col gap-7">
              <p className="text-ink/80 text-xl leading-[1.85] font-light">
                Обучение в традиции Ifá невозможно без посвящения.
              </p>
              <div className="w-12 h-px bg-ink/15" />
              <p className="text-ink/55 text-lg leading-[1.9]">
                Посвящение — это не формальность, а часть пути, открывающая возможность полноценного изучения традиции, духовной практики и взаимодействия с Òrìṣà.
              </p>
              <p className="text-ink/45 text-base leading-[1.9]">
                Именно после посвящения ученик получает доступ к более глубоким знаниям, практикам и обучению.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ЧТО ВКЛЮЧАЕТ ОБУЧЕНИЕ ── */}
      <section className="bg-ink text-ivory py-24 md:py-32">
        <div className="container">
          <div className="mb-16 max-w-2xl">
            <p className="text-ivory/30 uppercase tracking-luxury text-[9px] mb-5">Программа</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-7">
              Что включает<br />обучение
            </h2>
            <p className="text-ivory/50 text-lg leading-[1.9]">
              Обучение включает постепенное освоение традиции Ifá и практическую работу.
              Ученик получает возможность:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/6">
            {LEARNING_ITEMS.map((item) => (
              <div key={item.title} className="bg-ink p-10 flex flex-col gap-5 border border-ivory/6">
                <div className="w-10 h-10 flex items-center justify-center border border-ivory/15">
                  <Icon name={item.icon} size={17} className="text-gold/80" />
                </div>
                <h3 className="font-serif text-xl text-ivory">{item.title}</h3>
                <p className="text-ivory/45 text-[15px] leading-[1.8]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── КАК НАЧИНАЕТСЯ ПУТЬ ── */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container max-w-3xl">
          <p className="text-ink/30 uppercase tracking-luxury text-[9px] mb-8">Начало</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-ink mb-12">
            Как начинается<br />путь
          </h2>
          <div className="border-l-2 border-ink/12 pl-10 flex flex-col gap-8">
            <p className="text-ink/70 text-xl leading-[1.85]">
              Первый шаг — связь с наставником через Telegram.
            </p>
            <p className="text-ink/50 text-lg leading-[1.9]">
              Вы можете написать, рассказать о своём намерении и получить дальнейшее направление.
            </p>
          </div>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 border border-ink/25 text-ink/70 hover:border-ink/50 hover:text-ink px-7 py-3.5 text-[11px] uppercase tracking-[0.14em] transition-colors duration-300"
          >
            <Icon name="Send" size={13} />
            Написать в Telegram
          </a>
        </div>
      </section>

      {/* ─── ФИНАЛЬНЫЙ CTA ── */}
      <section className="bg-ink text-ivory py-24 md:py-32">
        <div className="container max-w-2xl text-center">
          <p className="text-ivory/30 uppercase tracking-luxury text-[9px] mb-8">Следующий шаг</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Узнать о посвящении<br />и обучении
          </h2>
          <p className="text-ivory/50 text-lg leading-[1.9] mb-12 max-w-lg mx-auto">
            Если вы чувствуете, что хотите идти глубже в традиции Ifá и Òrìṣà, вы можете написать в Telegram и задать вопросы о дальнейшем пути.
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-ink px-10 py-5 text-[12px] uppercase tracking-[0.14em] hover:bg-ivory transition-colors duration-300"
          >
            <Icon name="Send" size={15} />
            Написать в Telegram
          </a>
        </div>
      </section>

    </Layout>
  );
}
