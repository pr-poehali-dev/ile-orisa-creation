import Layout from '@/components/Layout';
import { Link, useParams } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const ALTAR_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/files/8eab9b92-14e3-453c-bb54-000958ecbaf3.jpg';
const WOOD_IMG = 'https://cdn.poehali.dev/projects/a467827a-a378-4bc9-965e-6991faea4d98/files/3ad7cfd8-cbad-4383-bfc3-e09a3d7c8a0e.jpg';

// Данные статей
const ARTICLES: Record<string, {
  category: string;
  categoryHref: string;
  title: string;
  subtitle: string;
  heroImg: string;
  body: { heading?: string; text: string }[];
  related: { title: string; href: string }[];
}> = {
  // ORISHA
  eshu: {
    category: 'Òrìṣà',
    categoryHref: '/znaniya',
    title: 'Эшу / Elegbara',
    subtitle: 'Хранитель перекрёстков, посредник между мирами и первый среди Òrìṣà',
    heroImg: WOOD_IMG,
    body: [
      { heading: 'Кто такой Эшу', text: 'Эшу (также известный как Elegbara, Elegba или Legba) — один из самых значимых Òrìṣà в традиции Йоруба. Он хранитель перекрёстков, дверей и границ между мирами. Ни один ритуал не начинается без почитания Эшу — он первый, к кому обращаются, и последний, кого благодарят.' },
      { heading: 'Роль в традиции', text: 'Эшу — это посредник между людьми и другими Òrìṣà, между живыми и духами предков, между видимым и невидимым. Он несёт молитвы и подношения туда, куда они должны быть доставлены. Без его одобрения ни одно духовное действие не достигнет цели.' },
      { heading: 'Символика', text: 'Эшу ассоциируется с перекрёстками, дорогами и порогами. Его цвета — чёрный и красный. Его число — 3 или 21. Он принимает подношения у дверей, у перекрёстков и в начале любого ритуала.' },
      { heading: 'Что важно понимать', text: 'Эшу часто неправильно интерпретируют как «злого» духа или дьявола — это глубокое заблуждение. Он не зол и не добр в привычном смысле. Он — принцип возможности, выбора и последствий. Он напоминает нам, что каждый выбор имеет последствия.' },
    ],
    related: [
      { title: 'Огун', href: '/znaniya/orisha/ogun' },
      { title: 'Что такое Ebo', href: '/znaniya/ifa/chto-takoe-ebo' },
      { title: 'Как проходит консультация', href: '/znaniya/put/kak-prokhodit-konsultatsiya' },
    ],
  },
  ogun: {
    category: 'Òrìṣà',
    categoryHref: '/znaniya',
    title: 'Огун',
    subtitle: 'Сила, труд, железо, справедливость и непреклонная воля',
    heroImg: ALTAR_IMG,
    body: [
      { heading: 'Кто такой Огун', text: 'Огун — Òrìṣà труда, железа и справедливости. Он покровитель всех, кто работает руками: кузнецов, военных, хирургов, водителей, строителей. Огун расчищает путь там, где есть препятствия.' },
      { heading: 'Роль в традиции', text: 'Огун — первопроходец. Он идёт через джунгли, расчищая дорогу мачете, чтобы другие Òrìṣà и люди могли пройти. Он символизирует непреклонную волю, необходимость тяжёлой работы и торжество справедливости через действие.' },
      { heading: 'Символика', text: 'Цвета Огуна — зелёный и чёрный. Его металл — железо. Он живёт в лесу, у кузниц и у дорог. Его число — 3 или 7.' },
    ],
    related: [
      { title: 'Эшу / Elegbara', href: '/znaniya/orisha/eshu' },
      { title: 'Шанго', href: '/znaniya/orisha/shango' },
    ],
  },
  oshun: {
    category: 'Òrìṣà',
    categoryHref: '/znaniya',
    title: 'Ошун',
    subtitle: 'Любовь, красота, сладость, река жизни и женская сила',
    heroImg: ALTAR_IMG,
    body: [
      { heading: 'Кто такая Ошун', text: 'Ошун — Òrìṣà любви, красоты, рек и сладости. Она олицетворяет женскую силу, плодородие, радость и притяжение. Её стихия — пресная вода, её дом — реки.' },
      { heading: 'Роль в традиции', text: 'Ошун — посредница в делах любви, брака, беременности и женского здоровья. Она также связана с золотом, богатством и магией привлечения. Её мёд — символ сладости жизни и даров традиции.' },
      { heading: 'Символика', text: 'Цвета Ошун — жёлтый и золотой. Её металл — медь и золото. Число — 5.' },
    ],
    related: [
      { title: 'Йемоджа', href: '/znaniya/orisha/yemoja' },
      { title: 'Оя', href: '/znaniya/orisha/oya' },
    ],
  },
  yemoja: {
    category: 'Òrìṣà', categoryHref: '/znaniya',
    title: 'Йемоджа',
    subtitle: 'Мать вод, защита, материнство и плодородие',
    heroImg: WOOD_IMG,
    body: [
      { heading: 'Кто такая Йемоджа', text: 'Йемоджа — мать всех вод и покровительница материнства. Её имя означает «мать, чьи дети как рыбы в море». Она защищает детей, беременных и всех, кто нуждается в материнской заботе.' },
      { heading: 'Символика', text: 'Цвета — синий и белый. Стихия — соль и пресные воды, океан. Число — 7.' },
    ],
    related: [{ title: 'Ошун', href: '/znaniya/orisha/oshun' }, { title: 'Олокун', href: '/znaniya/orisha/olokun' }],
  },
  oya: {
    category: 'Òrìṣà', categoryHref: '/znaniya',
    title: 'Оя',
    subtitle: 'Ветер, перемены, молния и граница между мирами',
    heroImg: ALTAR_IMG,
    body: [
      { heading: 'Кто такая Оя', text: 'Оя — Òrìṣà ветра, бури и перемен. Она хозяйка кладбища — не как смерть, а как граница между живыми и мёртвыми. Она несёт трансформацию и очищение через перемены.' },
      { heading: 'Символика', text: 'Цвета — бордовый, тёмно-красный, 9 цветов одновременно. Число — 9.' },
    ],
    related: [{ title: 'Шанго', href: '/znaniya/orisha/shango' }, { title: 'Эшу / Elegbara', href: '/znaniya/orisha/eshu' }],
  },
  shango: {
    category: 'Òrìṣà', categoryHref: '/znaniya',
    title: 'Шанго',
    subtitle: 'Гром, молния, справедливость и королевская сила',
    heroImg: WOOD_IMG,
    body: [
      { heading: 'Кто такой Шанго', text: 'Шанго — Òrìṣà грома и молнии, царь и воин. Он воплощает справедливость, страсть, мужскую силу и королевское достоинство. Его огонь — это огонь правды.' },
      { heading: 'Символика', text: 'Цвета — красный и белый. Его символ — двойной топор. Число — 6.' },
    ],
    related: [{ title: 'Огун', href: '/znaniya/orisha/ogun' }, { title: 'Оя', href: '/znaniya/orisha/oya' }],
  },
  obatala: {
    category: 'Òrìṣà', categoryHref: '/znaniya',
    title: 'Обатала',
    subtitle: 'Мудрость, чистота, создание человека и небесный отец',
    heroImg: ALTAR_IMG,
    body: [
      { heading: 'Кто такой Обатала', text: 'Обатала — старейший из Òrìṣà, создатель человеческих тел. Он олицетворяет чистоту, мудрость, спокойствие и небесный порядок. К нему обращаются за ясностью ума и справедливостью.' },
      { heading: 'Символика', text: 'Цвет — белый. Он не употребляет пальмовое масло и алкоголь. Число — 8.' },
    ],
    related: [{ title: 'Ори', href: '/znaniya/orisha/ori' }, { title: 'Что такое Ifá', href: '/znaniya/ifa/chto-takoe-ifa' }],
  },
  babalaiye: {
    category: 'Òrìṣà', categoryHref: '/znaniya',
    title: 'Бабалуайе',
    subtitle: 'Исцеление, болезни, земля и духовное смирение',
    heroImg: WOOD_IMG,
    body: [
      { heading: 'Кто такой Бабалуайе', text: 'Бабалуайе — Òrìṣà болезней и исцеления. Он не вызывает болезни — он управляет ими. К нему обращаются за исцелением, особенно при кожных заболеваниях и хронических недугах.' },
      { heading: 'Символика', text: 'Цвета — фиолетовый и чёрный. Его символ — костыли. Число — 17.' },
    ],
    related: [{ title: 'Обатала', href: '/znaniya/orisha/obatala' }],
  },
  olokun: {
    category: 'Òrìṣà', categoryHref: '/znaniya',
    title: 'Олокун',
    subtitle: 'Глубины океана, тайны, богатство и духовная глубина',
    heroImg: ALTAR_IMG,
    body: [
      { heading: 'Кто такой Олокун', text: 'Олокун — владыка глубин океана. В отличие от Йемоджи, которая ассоциируется с поверхностью воды, Олокун живёт в тёмных и таинственных глубинах. Он связан с богатством, тайнами и подсознательным.' },
      { heading: 'Символика', text: 'Цвета — синий и белый, иногда чёрный. Связан с водами, которые никогда не видят солнца.' },
    ],
    related: [{ title: 'Йемоджа', href: '/znaniya/orisha/yemoja' }],
  },
  ori: {
    category: 'Òrìṣà', categoryHref: '/znaniya',
    title: 'Ори',
    subtitle: 'Личное предназначение, внутренняя голова и судьба',
    heroImg: ALTAR_IMG,
    body: [
      { heading: 'Что такое Ори', text: 'Ори — это личная духовная интуиция и судьба каждого человека. В традиции Ifá Ори считается самым важным духовным покровителем человека — важнее любого Òrìṣà. Ори знает твой путь лучше всех.' },
      { heading: 'Роль в традиции', text: 'Перед воплощением душа выбирает свой Ори — своё предназначение. Работа с традицией во многом направлена на то, чтобы услышать и выполнить это предназначение.' },
    ],
    related: [{ title: 'Что такое Ori', href: '/znaniya/ifa/chto-takoe-ori' }, { title: 'Судьба в традиции Ifá', href: '/znaniya/ifa/sudba-v-traditsii' }],
  },
  egbe: {
    category: 'Òrìṣà', categoryHref: '/znaniya',
    title: 'Эгбе',
    subtitle: 'Небесные товарищи, духовное братство и сопровождение пути',
    heroImg: WOOD_IMG,
    body: [
      { heading: 'Что такое Эгбе', text: 'Эгбе — это духовные братья и сёстры человека, его небесные товарищи. Они выбирают друг друга ещё до воплощения. Если человек игнорирует своё Эгбе, это может стать причиной одиночества, неудач и ощущения отчуждённости.' },
    ],
    related: [{ title: 'Ори', href: '/znaniya/orisha/ori' }, { title: 'Ибежи', href: '/znaniya/orisha/ibeji' }],
  },
  ibeji: {
    category: 'Òrìṣà', categoryHref: '/znaniya',
    title: 'Ибежи',
    subtitle: 'Близнецы, удача, детство и радость',
    heroImg: ALTAR_IMG,
    body: [
      { heading: 'Кто такие Ибежи', text: 'Ибежи — Òrìṣà близнецов. В традиции Йоруба близнецы считаются особо благословлёнными существами, несущими удачу и радость. Их почитание — важная часть традиции.' },
    ],
    related: [{ title: 'Эгбе', href: '/znaniya/orisha/egbe' }],
  },

  // IFÁ
  'chto-takoe-ifa': {
    category: 'Ifá', categoryHref: '/znaniya',
    title: 'Что такое Ifá',
    subtitle: 'Священная система мудрости народа Йоруба, признанная ЮНЕСКО',
    heroImg: ALTAR_IMG,
    body: [
      { heading: 'Определение', text: 'Ifá — это система мудрости, духовной практики и прорицания народа Йоруба Западной Африки. В 2005 году ЮНЕСКО признала Ifá частью нематериального культурного наследия человечества.' },
      { heading: 'Корпус знания', text: 'В основе Ifá — 256 Odu: священных текстов, содержащих поэзию, истории, пословицы и знание о судьбе. Каждое Odu — это уникальный взгляд на жизнь человека и его взаимосвязь с вселенной.' },
      { heading: 'Линия передачи', text: 'Ifá передаётся от учителя к ученику в живой непрерывной традиции. Обучение жреца (бабалаво) занимает многие годы и включает практику, дисциплину и глубокое знание корпуса.' },
    ],
    related: [{ title: 'Что такое Odu', href: '/znaniya/ifa/chto-takoe-odu' }, { title: 'Что такое прорицание', href: '/znaniya/ifa/chto-takoe-divination' }],
  },
  'chto-takoe-divination': {
    category: 'Ifá', categoryHref: '/znaniya',
    title: 'Что такое прорицание',
    subtitle: 'Диагностический инструмент для понимания пути и предназначения',
    heroImg: WOOD_IMG,
    body: [
      { heading: 'Не гадание', text: 'Прорицание Ifá — это не гадание в привычном смысле. Это системная консультация, позволяющая понять своё предназначение (Orí), выявить препятствия и получить конкретные рекомендации.' },
      { heading: 'Как это работает', text: 'Жрец Ifá использует специальные инструменты — орула, опеле или ирокин — для определения Odu. Каждое Odu содержит истории, рекомендации и ebo, которые помогают восстановить баланс.' },
    ],
    related: [{ title: 'Что такое Ebo', href: '/znaniya/ifa/chto-takoe-ebo' }, { title: 'Как проходит консультация', href: '/znaniya/put/kak-prokhodit-konsultatsiya' }],
  },
  'chto-takoe-ori': {
    category: 'Ifá', categoryHref: '/znaniya',
    title: 'Что такое Ori',
    subtitle: 'Внутренняя голова и личное предназначение каждого человека',
    heroImg: ALTAR_IMG,
    body: [
      { heading: 'Ori — твой главный покровитель', text: 'В традиции Ifá Ori считается самым важным духовным аспектом человека. Это личная судьба и предназначение, которое душа выбрала до воплощения. Ни один Òrìṣà не может помочь человеку, если его Ori не в гармонии.' },
      { heading: 'Работа с Ori', text: 'Регулярное почитание Ori — молитвы, медитации и церемонии — помогает выровняться со своим предназначением и двигаться в правильном направлении.' },
    ],
    related: [{ title: 'Ори', href: '/znaniya/orisha/ori' }, { title: 'Судьба в традиции Ifá', href: '/znaniya/ifa/sudba-v-traditsii' }],
  },
  'chto-takoe-ebo': {
    category: 'Ifá', categoryHref: '/znaniya',
    title: 'Что такое Ebo',
    subtitle: 'Подношение как инструмент баланса, изменения и духовной работы',
    heroImg: WOOD_IMG,
    body: [
      { heading: 'Ebo — не жертва', text: 'Ebo — это подношение или жертва в традиции Ifá. Но это не просто ритуальное действие. Ebo — это форма обмена между человеком и духовными силами, способ восстановить баланс и устранить препятствия.' },
      { heading: 'Виды Ebo', text: 'Ebo может включать еду, природные элементы, деньги или время. Конкретный вид Ebo определяется через прорицание на основе Odu, выпавшего в консультации.' },
    ],
    related: [{ title: 'Что такое прорицание', href: '/znaniya/ifa/chto-takoe-divination' }],
  },
  'sudba-v-traditsii': {
    category: 'Ifá', categoryHref: '/znaniya',
    title: 'Судьба в традиции Ifá',
    subtitle: 'Как традиция понимает предназначение, выбор и путь человека',
    heroImg: ALTAR_IMG,
    body: [
      { heading: 'Судьба выбрана до рождения', text: 'В традиции Ifá считается, что перед воплощением каждая душа выбирает свой жизненный путь — Ori. Этот выбор определяет предназначение, таланты и испытания человека.' },
      { heading: 'Свобода выбора внутри судьбы', text: 'Но Ifá не детерминизм. Человек сохраняет свободу выбора внутри своего пути. Прорицание и духовная работа помогают понять, где ты сейчас отклонился от своего предназначения.' },
    ],
    related: [{ title: 'Что такое Ori', href: '/znaniya/ifa/chto-takoe-ori' }, { title: 'Что такое Odu', href: '/znaniya/ifa/chto-takoe-odu' }],
  },
  'chto-takoe-odu': {
    category: 'Ifá', categoryHref: '/znaniya',
    title: 'Что такое Odu',
    subtitle: '256 священных текстов — основа и корпус традиции Ifá',
    heroImg: WOOD_IMG,
    body: [
      { heading: '256 Odu', text: 'Odu — это 256 архетипических паттернов, составляющих корпус Ifá. Каждое Odu содержит множество историй (ese), пословиц, рекомендаций и ebo. Вместе они описывают всё, что может произойти в жизни человека.' },
      { heading: 'Структура', text: 'Первые 16 Odu называются основными (Oju Odu). Остальные 240 — их комбинации. Жрец Ifá посвящает годы изучению этих текстов наизусть.' },
    ],
    related: [{ title: 'Что такое Ifá', href: '/znaniya/ifa/chto-takoe-ifa' }, { title: 'Что такое прорицание', href: '/znaniya/ifa/chto-takoe-divination' }],
  },

  // ПУТЬ
  'kak-prokhodit-konsultatsiya': {
    category: 'Путь', categoryHref: '/znaniya',
    title: 'Как проходит консультация',
    subtitle: 'Что ожидать от первой встречи с наставником',
    heroImg: ALTAR_IMG,
    body: [
      { heading: 'Первый контакт', text: 'Консультация начинается с разговора. Наставник выслушивает ваши вопросы и ситуацию. Важно прийти с конкретным намерением — что вы хотите понять или решить.' },
      { heading: 'Прорицание', text: 'Затем следует прорицание Ifá. Наставник использует инструменты традиции для определения Odu — священного текста, соответствующего вашей ситуации.' },
      { heading: 'Рекомендации', text: 'На основе Odu наставник даёт конкретные рекомендации: что сделать, чего избегать, какое Ebo выполнить. Это практические указания, а не общие советы.' },
      { heading: 'После консультации', text: 'Консультация — это начало пути, а не его конец. Наставник остаётся доступен для вопросов и поддержки по ходу выполнения рекомендаций.' },
    ],
    related: [{ title: 'Что такое прорицание', href: '/znaniya/ifa/chto-takoe-divination' }, { title: 'Что такое Ebo', href: '/znaniya/ifa/chto-takoe-ebo' }],
  },
  'bez-posvyashcheniya': {
    category: 'Путь', categoryHref: '/znaniya',
    title: 'Можно ли прийти без посвящения',
    subtitle: 'Путь открыт для всех, кто приходит с уважением и серьёзным намерением',
    heroImg: WOOD_IMG,
    body: [
      { heading: 'Да, можно', text: 'Посвящение — это не входной билет. Путь в традиции начинается с консультации и знакомства. Многие люди годами работают с традицией без формального посвящения.' },
      { heading: 'Когда приходит посвящение', text: 'Посвящение — это глубокий шаг, который приходит тогда, когда человек готов: духовно, практически и в отношениях с наставником. Это не покупка — это призвание.' },
    ],
    related: [{ title: 'Как проходит консультация', href: '/znaniya/put/kak-prokhodit-konsultatsiya' }, { title: 'Чего ожидать от пути', href: '/znaniya/put/chego-ozhidat' }],
  },
  'chego-ozhidat': {
    category: 'Путь', categoryHref: '/znaniya',
    title: 'Чего ожидать от пути',
    subtitle: 'Реалистичный и честный взгляд на духовный путь в традиции',
    heroImg: ALTAR_IMG,
    body: [
      { heading: 'Это не быстро', text: 'Путь в традиции Ifá — это путь всей жизни. Не ждите мгновенных результатов или волшебных изменений. Ждите постепенного углубления понимания и укрепления связи с собой и традицией.' },
      { heading: 'Это требует дисциплины', text: 'Регулярная практика, почитание Ori и Òrìṣà, выполнение рекомендаций — это не опциональные вещи. Без дисциплины путь не работает.' },
      { heading: 'Это работает', text: 'При серьёзном отношении традиция приносит ясность, силу и поддержку. Люди, которые идут честно, находят то, что искали — понимание своего пути и места в мире.' },
    ],
    related: [{ title: 'Как начать обучение', href: '/znaniya/put/kak-nachat-obuchenie' }],
  },
  'kak-nachat-obuchenie': {
    category: 'Путь', categoryHref: '/znaniya',
    title: 'Как начать обучение',
    subtitle: 'Первые шаги к знанию и практике традиции Ifá',
    heroImg: WOOD_IMG,
    body: [
      { heading: 'Шаг первый — консультация', text: 'Обучение начинается не с учебников, а с консультации Ifá. Она показывает, на каком пути вы находитесь и что нужно сделать в первую очередь.' },
      { heading: 'Шаг второй — практика', text: 'Базовые практики — почитание Ori, понимание основных Òrìṣà и их символики — начинаются сразу после первой консультации.' },
      { heading: 'Шаг третий — обучение', text: 'Постепенно — история традиции, изучение Odu, понимание ритуала. Темп определяется совместно с наставником.' },
    ],
    related: [{ title: 'Можно ли прийти без посвящения', href: '/znaniya/put/bez-posvyashcheniya' }, { title: 'Как проходит консультация', href: '/znaniya/put/kak-prokhodit-konsultatsiya' }],
  },
};

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? ARTICLES[slug] : null;

  if (!article) {
    return (
      <Layout darkHeader>
        <div className="min-h-screen bg-ivory flex items-center justify-center pt-32">
          <div className="container text-center max-w-md">
            <div className="font-serif text-4xl text-ink mb-6">Статья не найдена</div>
            <Link to="/znaniya" className="text-ink/50 hover:text-ink underline text-sm">
              Вернуться в раздел Знания
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout darkHeader>
      {/* ─── HERO ── */}
      <section className="relative bg-ink text-ivory pt-40 pb-24 overflow-hidden">
        <img src={article.heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
        <div className="container relative z-10 max-w-3xl">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-luxury text-ivory/35 mb-8">
            <Link to="/znaniya" className="hover:text-ivory/60 transition-colors">Знания</Link>
            <span>/</span>
            <Link to={article.categoryHref} className="hover:text-ivory/60 transition-colors">{article.category}</Link>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.08] mb-7">{article.title}</h1>
          <p className="text-ivory/55 text-xl leading-[1.8] max-w-xl">{article.subtitle}</p>
        </div>
      </section>

      {/* ─── ARTICLE BODY ── */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-8">
              {article.body.map((block, i) => (
                <div key={i} className="mb-10">
                  {block.heading && (
                    <h2 className="font-serif text-2xl md:text-3xl text-ink mb-5">{block.heading}</h2>
                  )}
                  <p className="text-ink/60 text-lg leading-[1.9]">{block.text}</p>
                </div>
              ))}
            </div>
            <aside className="md:col-span-4">
              <div className="sticky top-28">
                {/* Related */}
                {article.related.length > 0 && (
                  <div className="mb-10">
                    <div className="text-[9px] uppercase tracking-luxury text-ink/30 mb-5">Связанные темы</div>
                    <div className="flex flex-col gap-3">
                      {article.related.map((r) => (
                        <Link key={r.href} to={r.href}
                          className="group flex items-center gap-2 text-[14px] text-ink/55 hover:text-ink transition-colors">
                          <Icon name="ArrowRight" size={13} className="group-hover:translate-x-0.5 transition-transform" />
                          {r.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {/* CTA */}
                <div className="bg-ink text-ivory p-8">
                  <div className="font-serif text-xl mb-4">Есть вопросы?</div>
                  <p className="text-ivory/45 text-sm leading-relaxed mb-6">
                    Наставник ответит на ваши вопросы лично на консультации.
                  </p>
                  <Link to="/#contacts"
                    className="inline-flex items-center gap-2 border border-ivory/25 text-ivory px-6 py-3 text-[11px] uppercase tracking-wider hover:bg-ivory hover:text-ink transition-colors">
                    <Icon name="Send" size={13} />
                    Консультация
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}
