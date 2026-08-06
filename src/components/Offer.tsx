import type { ReactNode } from 'react'
import offer1 from '../assets/offer-1.jpg'
import offer2 from '../assets/offer-2.jpg'
import offer3 from '../assets/offer-3.jpg'
import offer4 from '../assets/offer-4.jpg'

type Service = {
  title: string
  desc: ReactNode
  time: string
  price: string
  icon: ReactNode
  image: string
  imageAlt: string
  note?: string
}

const SERVICES: Service[] = [
  {
    title: 'Psychoterapia dla dorosłych',
    desc: (
      <>
        Warto zgłosić się, kiedy „życie boli” - gdy towarzyszy Ci nieustanne zmęczenie,
        bezradność, rozdrażnienie, złość, lęk lub wstyd. Także wtedy, gdy objawy
        psychosomatyczne (bóle głowy, bezsenność, zaburzenia jedzenia) nie mają medycznych
        przyczyn - albo gdy po prostu czujesz potrzebę samorozwoju i&nbsp;zmiany optyki
        na&nbsp;świat i&nbsp;ludzi.
      </>
    ),
    time: '50 min',
    price: '200 zł',
    icon: <AdultIcon />,
    image: offer1,
    imageAlt: 'Spokojny, falujący wzór symbolizujący proces terapii dorosłych',
    note: 'Pierwsze spotkania to jeszcze nie terapia - to wstępne konsultacje.',
  },
  {
    title: 'Psychoterapia dzieci i młodzieży',
    desc: (
      <>
        Wspieram dzieci i&nbsp;nastolatków w&nbsp;radzeniu sobie z&nbsp;nagromadzonymi
        emocjami, w&nbsp;rozwoju emocjonalno-społecznym oraz w&nbsp;rozumieniu komunikacji
        między ludźmi. W&nbsp;proces terapii zawsze angażuję rodziców - to oni tworzą
        pierwotny system rodzinny moich klientów.
      </>
    ),
    time: '50 min',
    price: '200 zł',
    icon: <YouthIcon />,
    image: offer2,
    imageAlt: 'Ciepły, botaniczny wzór symbolizujący rozwój młodego człowieka',
  },
  {
    title: 'Konsultacje dla rodziców',
    desc: (
      <>
        Kiedy dziecko lub nastolatek doświadcza trudności, w&nbsp;pierwszej kolejności
        zapraszam rodziców - to oni znają swoje „pociechy” najlepiej, a&nbsp;szersze
        spojrzenie i&nbsp;zmiana w&nbsp;podejściu potrafią stworzyć dobry grunt do zdrowego
        rozwoju młodego człowieka. Konsultacje wspierają też w&nbsp;trudnościach
        w&nbsp;komunikacji z&nbsp;dziećmi oraz w&nbsp;poczuciu bezradności czy przytłoczenia
        rolą rodzica.
      </>
    ),
    time: '75 min',
    price: '250 zł',
    icon: <ParentsIcon />,
    image: offer3,
    imageAlt: 'Geometryczny wzór symbolizujący strukturę i równowagę w rodzicielstwie',
  },
  {
    title: 'Grupa wsparcia',
    desc: (
      <>
        Przestrzeń na psychoedukację i&nbsp;rozmowę w&nbsp;atmosferze szacunku
        i&nbsp;zaufania, bez oceniania. Grupa może dotyczyć konkretnych obszarów - np.
        rodziców dzieci ze spektrum autyzmu i&nbsp;ADHD, rodziców dzieci
        z&nbsp;niepełnosprawnością, osób współuzależnionych czy młodych dorosłych
        wkraczających w&nbsp;dorosłość. Jeśli szukasz grupy wsparcia - napisz do mnie.
      </>
    ),
    time: '150 min (2,5 h)',
    price: '75 zł',
    icon: <GroupIcon />,
    image: offer4,
    imageAlt: 'Artystyczny, liściasty wzór symbolizujący wspólnotę i wzajemne wsparcie',
  },
]

export default function Offer() {
  return (
    <section className="section section--paper offer" id="oferta">
      <div className="container">
        <div className="offer__head reveal">
          <p className="eyebrow">Oferta i cennik</p>
          <h2 className="section-title">W czym mogę Ci towarzyszyć</h2>
        </div>

        <div className="offer__grid">
          {SERVICES.map((s) => (
            <article className="card reveal" key={s.title}>
              <div className="card__banner">
                <img src={s.image} alt="" aria-hidden="true" loading="lazy" />
                <div className="card__banner-overlay" aria-hidden="true" />
              </div>
              <div className="card__body">
                <div className="card__icon" aria-hidden="true">
                  {s.icon}
                </div>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__desc">{s.desc}</p>
                {s.note && <p className="card__note">{s.note}</p>}
                <div className="card__meta">
                  <span className="card__time">{s.time}</span>
                  <span className="card__price">{s.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --- Ikony usług (rysowane liniowo, spójna kreska) --- */

const iconProps = {
  width: 30,
  height: 30,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

function AdultIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <circle cx="12" cy="7.5" r="3.2" />
      <path d="M4.8 20c.4-4.2 3.4-6.6 7.2-6.6s6.8 2.4 7.2 6.6" />
    </svg>
  )
}

function YouthIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <circle cx="9" cy="8" r="2.9" />
      <path d="M3.4 19.6c.3-3.7 2.6-5.8 5.6-5.8 1.7 0 3.1.7 4.1 1.8" />
      <circle cx="17" cy="10.9" r="2.2" />
      <path d="M13.4 19.6c.2-2.9 1.7-4.5 3.6-4.5s3.4 1.6 3.6 4.5" />
    </svg>
  )
}

function ParentsIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v6a2.5 2.5 0 0 1-2.5 2.5H11l-4 4v-4h-.5A2.5 2.5 0 0 1 4 12.5v-6Z" />
      <path d="m12 12.1-2.1-2a1.5 1.5 0 0 1 2.1-2.1 1.5 1.5 0 0 1 2.1 2.1l-2.1 2Z" />
    </svg>
  )
}

function GroupIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <circle cx="12" cy="6.3" r="2.3" />
      <circle cx="6.4" cy="9.2" r="2" />
      <circle cx="17.6" cy="9.2" r="2" />
      <path d="M2.8 18.6c.4-2.7 1.9-4.3 4.1-4.6M21.2 18.6c-.4-2.7-1.9-4.3-4.1-4.6" />
      <path d="M8.3 19.8c.4-3.1 1.8-4.8 3.7-4.8s3.3 1.7 3.7 4.8" />
    </svg>
  )
}
