import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const ALTAR_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/files/8eab9b92-14e3-453c-bb54-000958ecbaf3.jpg';
const WOOD_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/files/3ad7cfd8-cbad-4383-bfc3-e09a3d7c8a0e.jpg';
const LEADER_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/bucket/b516aca0-6077-4214-8edc-27a12738497d.jpg';

const ORISHA = [
  { slug: 'eshu', name: 'Эшу / Elegbara', role: 'Хранитель перекрёстков и посредник между мирами' },
  { slug: 'ogun', name: 'Огун', role: 'Сила, труд, железо, справедливость и победа' },
  { slug: 'oshun', name: 'Ошун', role: 'Любовь, красота, сладость и река жизни' },
  { slug: 'yemoja', name: 'Йемоджа', role: 'Мать вод, защита и плодородие' },
  { slug: 'oya', name: 'Оя', role: 'Ветер, перемены, граница между мирами' },
  { slug: 'shango', name: 'Шанго', role: 'Гром, молния, справедливость и сила' },
  { slug: 'obatala', name: 'Обатала', role: 'Мудрость, чистота, создание человека' },
  { slug: 'babalaiye', name: 'Бабалуайе', role: 'Исцеление, болезни, земля и смирение' },
  { slug: 'olokun', name: 'Олокун', role: 'Глубины океана, тайны и богатство' },
  { slug: 'ori', name: 'Ори', role: 'Личное предназначение и внутренняя голова' },
  { slug: 'egbe', name: 'Эгбе', role: 'Небесные товарищи и духовное братство' },
  { slug: 'ibeji', name: 'Ибежи', role: 'Близнецы, удача, детство и радость' },
];

const IFA_ARTICLES = [
  { slug: 'chto-takoe-ifa', title: 'Что такое Ifá', desc: 'Священная система мудрости народа Йоруба.' },
  { slug: 'chto-takoe-divination', title: 'Что такое прорицание', desc: 'Как работает консультация Ifá и зачем она нужна.' },
  { slug: 'chto-takoe-ori', title: 'Что такое Ori', desc: 'Внутренняя голова и личное предназначение.' },
  { slug: 'chto-takoe-ebo', title: 'Что такое Ebo', desc: 'Подношение как инструмент баланса и изменения.' },
  { slug: 'sudba-v-traditsii', title: 'Судьба в традиции Ifá', desc: 'Как Ifá понимает судьбу и выбор человека.' },
  { slug: 'chto-takoe-odu', title: 'Что такое Odu', desc: '256 священных текстов — основа корпуса Ifá.' },
];

const PATH_ARTICLES = [
  { slug: 'kak-prokhodit-konsultatsiya', title: 'Как проходит консультация', desc: 'Что ожидать от первой встречи с наставником.' },
  { slug: 'bez-posvyashcheniya', title: 'Можно ли прийти без посвящения', desc: 'Путь открыт для всех, кто приходит с уважением.' },
  { slug: 'chego-ozhidat', title: 'Чего ожидать от пути', desc: 'Реалистичный взгляд на духовный путь в традиции.' },
  { slug: 'kak-nachat-obuchenie', title: 'Как начать обучение', desc: 'Первые шаги к знанию и практике дома.' },
];

export default function Znaniya() {
  return (
    <Layout darkHeader>
      {/* ─── HERO ── */}
      <section className="relative bg-ink text-ivory pt-40 pb-28 overflow-hidden">
        <img src={ALTAR_IMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-18" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
        <div className="container relative z-10 max-w-3xl">
          <p className="text-ivory/35 uppercase tracking-luxury text-[9px] mb-8">Знания</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8">
            Дом знания<br />и живой традиции
          </h1>
          <p className="text-ivory/60 text-xl leading-[1.8] max-w-xl">
            Статьи, объяснения и материалы о традиции Ifá, Òrìṣà и духовном пути. Для тех, кто хочет понять глубже.
          </p>
        </div>
      </section>

      {/* ─── КАТЕГОРИИ ── */}
      <section className="bg-ink border-b border-ivory/8 sticky top-[72px] z-30">
        <div className="container">
          <div className="flex gap-8 overflow-x-auto py-5 scrollbar-hide">
            {['Все', 'Òrìṣà', 'Ifá', 'Путь'].map((cat) => (
              <button key={cat}
                className="text-[12px] uppercase tracking-[0.12em] text-ivory/45 hover:text-ivory whitespace-nowrap transition-colors pb-0.5 border-b border-transparent hover:border-ivory/30">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ÒRÌṢÀ ── */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container">
          <div className="mb-14">
            <p className="text-ink/30 uppercase tracking-luxury text-[9px] mb-5">Категория</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-ink">Òrìṣà</h2>
            <p className="text-ink/45 text-base mt-4 max-w-md leading-relaxed">
              Духовные покровители и силы природы в традиции Йоруба.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/8">
            {ORISHA.map((o) => (
              <Link
                key={o.slug}
                to={`/znaniya/orisha/${o.slug}`}
                className="group bg-ivory p-8 md:p-10 hover:bg-ink hover:text-ivory transition-colors duration-400"
              >
                <div className="font-serif text-2xl text-ink group-hover:text-ivory mb-3 transition-colors">{o.name}</div>
                <p className="text-ink/45 group-hover:text-ivory/50 text-sm leading-relaxed transition-colors">{o.role}</p>
                <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-wider text-ink/25 group-hover:text-ivory/30 transition-colors">
                  Читать <Icon name="ArrowRight" size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IFÁ ── */}
      <section className="bg-ink text-ivory py-24 md:py-32">
        <div className="container">
          <div className="mb-14">
            <p className="text-ivory/30 uppercase tracking-luxury text-[9px] mb-5">Категория</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Ifá</h2>
            <p className="text-ivory/40 text-base mt-4 max-w-md leading-relaxed">
              Система мудрости, прорицание и священный корпус знания.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {IFA_ARTICLES.map((a) => (
              <Link key={a.slug} to={`/znaniya/ifa/${a.slug}`}
                className="group border-t border-ivory/10 pt-8 hover:border-ivory/30 transition-colors">
                <div className="font-serif text-xl text-ivory mb-3 group-hover:text-ivory/75 transition-colors">{a.title}</div>
                <p className="text-ivory/38 text-sm leading-relaxed mb-5">{a.desc}</p>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-ivory/25 group-hover:text-ivory/45 transition-colors">
                  Читать <Icon name="ArrowRight" size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ПУТЬ ── */}
      <section className="bg-earth text-ivory py-24 md:py-32">
        <div className="container">
          <div className="mb-14">
            <p className="text-ivory/30 uppercase tracking-luxury text-[9px] mb-5">Категория</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Путь</h2>
            <p className="text-ivory/40 text-base mt-4 max-w-md leading-relaxed">
              Практические вопросы о консультациях, обучении и жизни в традиции.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-ivory/8">
            {PATH_ARTICLES.map((a) => (
              <Link key={a.slug} to={`/znaniya/put/${a.slug}`}
                className="group bg-earth p-10 md:p-12 hover:bg-ink/50 transition-colors duration-400">
                <div className="font-serif text-2xl text-ivory mb-3">{a.title}</div>
                <p className="text-ivory/42 text-sm leading-relaxed mb-6">{a.desc}</p>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-ivory/25 group-hover:text-ivory/45 transition-colors">
                  Читать <Icon name="ArrowRight" size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ── */}
      <section className="bg-ivory py-24 md:py-28 border-t border-ink/8">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight text-ink mb-4">Есть вопросы?<br />Наставник ответит лично.</h2>
            <p className="text-ink/45 text-base leading-relaxed">
              Записаться на консультацию можно через Telegram.
            </p>
          </div>
          <Link to="/#contacts"
            className="shrink-0 inline-flex items-center gap-3 border border-ink/25 text-ink px-9 py-4 text-[11px] uppercase tracking-[0.16em] hover:bg-ink hover:text-ivory transition-colors duration-300">
            <Icon name="Send" size={15} />
            Консультация
          </Link>
        </div>
      </section>
    </Layout>
  );
}
