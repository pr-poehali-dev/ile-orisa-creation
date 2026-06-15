import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';

const ALTAR_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/files/8eab9b92-14e3-453c-bb54-000958ecbaf3.jpg';
const WOOD_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/files/3ad7cfd8-cbad-4383-bfc3-e09a3d7c8a0e.jpg';

const TELEGRAM_URL = 'https://t.me/+QgiLIa1gFRY4Y2Iy';

const SITUATIONS = [
  {
    icon: 'Heart',
    title: 'Отношения',
    text: 'Трудности в близких отношениях, непонимание, разрыв, выбор между людьми или путями.',
  },
  {
    icon: 'AlertTriangle',
    title: 'Кризис',
    text: 'Острый период в жизни, когда привычные опоры не работают и нужна ясность в происходящем.',
  },
  {
    icon: 'RefreshCw',
    title: 'Повторяющиеся проблемы',
    text: 'Ситуации, которые возвращаются снова и снова — в работе, здоровье, деньгах, отношениях.',
  },
  {
    icon: 'CloudRain',
    title: 'Тяжёлые периоды',
    text: 'Потеря сил, ощущение тупика, депрессия, потеря близких или разрушение привычного мира.',
  },
  {
    icon: 'Eye',
    title: 'Магические воздействия',
    text: 'Подозрение на сглаз, порчу, враждебное воздействие или блокировку жизненных сфер.',
  },
  {
    icon: 'Shield',
    title: 'Защита',
    text: 'Укрепление личной силы, духовная защита себя и близких, работа с враждебным окружением.',
  },
];

export default function Konsultaciya() {
  return (
    <Layout darkHeader>

      {/* ─── HERO ── */}
      <section className="relative bg-ink text-ivory pt-40 pb-32 overflow-hidden">
        <img src={ALTAR_IMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-18" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/65 to-ink" />
        <div className="container relative z-10 max-w-3xl">
          <p className="text-ivory/35 uppercase tracking-luxury text-[9px] mb-8">İLE ORISA IFAGBAYE</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8">
            Консультация<br />Ifá
          </h1>
          <p className="text-ivory/65 text-xl leading-[1.8] max-w-xl mb-12">
            Поддержка, понимание ситуации и духовное направление через предсказание Дафа (Dáfá) в традиции Ifá.
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

      {/* ─── КОГДА ОБРАЩАЮТСЯ ── */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container">
          <div className="mb-16">
            <p className="text-ink/30 uppercase tracking-luxury text-[9px] mb-5">Причины обращения</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-ink max-w-lg">
              Когда обращаются<br />за консультацией
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/8">
            {SITUATIONS.map((s) => (
              <div key={s.title} className="bg-ivory p-10 flex flex-col gap-5">
                <div className="w-10 h-10 flex items-center justify-center border border-ink/12">
                  <Icon name={s.icon} size={18} className="text-ink/45" />
                </div>
                <h3 className="font-serif text-xl text-ink">{s.title}</h3>
                <p className="text-ink/50 text-[15px] leading-[1.8]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── КАК ПРОХОДИТ ── */}
      <section className="bg-ink text-ivory py-24 md:py-32">
        <div className="container grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <img
              src={WOOD_IMG}
              alt="Традиция"
              className="w-full aspect-[4/5] object-cover opacity-75"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
            <p className="text-ivory/30 uppercase tracking-luxury text-[9px] mb-8">Процесс</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-10">
              Как проходит<br />консультация
            </h2>
            <div className="flex flex-col gap-8">
              <div className="flex gap-6 items-start">
                <span className="font-serif text-gold text-2xl leading-none mt-1 shrink-0">01</span>
                <p className="text-ivory/65 text-lg leading-[1.8]">
                  Вы пишете в Telegram и кратко описываете ситуацию.
                </p>
              </div>
              <div className="w-full h-px bg-ivory/8" />
              <div className="flex gap-6 items-start">
                <span className="font-serif text-gold text-2xl leading-none mt-1 shrink-0">02</span>
                <p className="text-ivory/65 text-lg leading-[1.8]">
                  В ближайшее время вам ответят и помогут определить дальнейшие шаги.
                </p>
              </div>
            </div>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-3 border border-ivory/30 text-ivory/80 hover:border-ivory/60 hover:text-ivory px-7 py-3.5 text-[11px] uppercase tracking-[0.14em] transition-colors duration-300"
            >
              <Icon name="Send" size={13} />
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      {/* ─── ЧТО ВАЖНО ПОНИМАТЬ ── */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container max-w-3xl">
          <p className="text-ink/30 uppercase tracking-luxury text-[9px] mb-8">Важно</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-ink mb-12">
            Что важно<br />понимать
          </h2>
          <div className="border-l-2 border-ink/12 pl-10 flex flex-col gap-8">
            <p className="text-ink/70 text-xl leading-[1.85]">
              Традиция Ifá не обещает быстрых чудес и простых решений.
            </p>
            <p className="text-ink/55 text-lg leading-[1.9]">
              Дафа помогает увидеть направление, понять причины происходящего и получить рекомендации. Однако путь требует уважения, личного участия и внимательного соблюдения полученных рекомендаций и наставлений Ifá.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ФИНАЛЬНЫЙ CTA ── */}
      <section className="bg-ink text-ivory py-24 md:py-32">
        <div className="container max-w-2xl text-center">
          <p className="text-ivory/30 uppercase tracking-luxury text-[9px] mb-8">Первый шаг</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Сделайте первый шаг<br />к пониманию ситуации
          </h2>
          <p className="text-ivory/50 text-lg leading-[1.9] mb-12 max-w-lg mx-auto">
            Вы можете написать в Telegram, кратко описать ситуацию и получить дальнейшее направление.
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