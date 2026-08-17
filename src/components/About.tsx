import portrait from '../assets/karina.jpg'
import { Leaf } from './decor'

const CREDENTIALS = [
  'Psychoterapeutka Gestalt w trakcie szkolenia (3 rok)',
  'Ukończyłam Studium Psychoterapii Dzieci i Młodzieży - Szkoła Psychoterapii Gestalt w Warszawie',
  'Psycholog (Uniwersytet Łódzki)',
  '14 lat doświadczenia jako psycholog szkolny w pracy z dziećmi, młodzieżą i rodzicami',
]

const VALUES = [
  {
    name: 'Szacunek',
    desc: 'dla Twojego tempa, granic i decyzji',
  },
  {
    name: 'Autentyczność',
    desc: 'prawdziwa relacja, nie procedura',
  },
  {
    name: 'Człowieczeństwo',
    desc: 'spotkanie człowieka z człowiekiem',
  },
]

export default function About() {
  return (
    <section className="section section--paper about" id="o-mnie">
      <div className="container">
        <div className="about__grid">
          <div className="about__text reveal">
            <p className="eyebrow">O mnie</p>
            <h2 className="section-title">
              Więź, która tworzy bezpieczne warunki do&nbsp;rozwoju
            </h2>
            <p>
              W&nbsp;pracy z&nbsp;moimi klientami przede wszystkim staram się zbudować więź,
              która tworzy bezpieczne warunki do&nbsp;rozwoju. Zarówno w&nbsp;życiu osobistym,
              jak i&nbsp;zawodowym kieruję się zasadą szacunku, autentyczności
              i&nbsp;człowieczeństwa.
            </p>
            <ul className="leaf-list">
              {CREDENTIALS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="about__supervision">
              Pracuję pod stałą superwizją grupową i&nbsp;indywidualną.
            </p>
          </div>

          <figure className="about__portrait reveal">
            <img
              src={portrait}
              alt="Karina Sokołowska - psycholog i psychoterapeutka"
              loading="lazy"
              width={1065}
              height={1600}
            />
            <figcaption>
              <strong>Karina Sokołowska</strong>
              Psycholog, Psychoterapeuta
            </figcaption>
          </figure>
        </div>

        <ul className="values reveal">
          {VALUES.map((v, i) => (
            <li key={v.name} className="values__item">
              <Leaf
                fill={['#b0512b', '#dd8f3d', '#10606d'][i]}
                vein="rgba(255,255,255,.4)"
                size={20}
              />
              <div>
                <strong>{v.name}</strong>
                <span>{v.desc}</span>
              </div>
            </li>
          ))}
        </ul>

        <p className="values-note reveal">
          Nadrzędnymi wartościami w&nbsp;pracy z&nbsp;moimi klientami są: ich dobrostan,
          prawidłowy rozwój oraz możliwość korzystania z&nbsp;własnego potencjału.
        </p>
      </div>
    </section>
  )
}
