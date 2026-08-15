import heroBg from '../assets/stock-hero.jpg'
import { PHONE_DISPLAY, PHONE_TEL } from '../lib/const'
import { HeroRibbon, Leaf, WaveDivider } from './decor'

const HERO_LEAVES = [
  { top: 12, right: 8, size: 28, fill: '#dd8f3d', r: -10, dur: 14, delay: 0 },
  { top: 18, right: 22, size: 18, fill: '#b0512b', r: 35, dur: 18, delay: -3 },
  { top: 26, right: 38, size: 14, fill: '#e7c14b', r: 110, dur: 12, delay: -7 },
  { top: 34, right: 14, size: 22, fill: '#4fb3ad', r: 70, dur: 16, delay: -2 },
  { top: 42, right: 30, size: 16, fill: '#dd8f3d', r: -45, dur: 20, delay: -9 },
  { top: 48, right: 6, size: 20, fill: '#b0512b', r: 15, dur: 13, delay: -5 },
  { top: 56, right: 44, size: 12, fill: '#e7c14b', r: 125, dur: 17, delay: -11 },
  { top: 62, right: 20, size: 26, fill: '#4fb3ad', r: 55, dur: 15, delay: -1 },
  { top: 70, right: 35, size: 15, fill: '#10606d', r: -25, dur: 19, delay: -8 },
  { top: 76, right: 10, size: 19, fill: '#dd8f3d', r: 85, dur: 14, delay: -4 },
  { top: 82, right: 28, size: 14, fill: '#b0512b', r: 40, dur: 21, delay: -13 },
  { top: 88, right: 46, size: 17, fill: '#e7c14b', r: -60, dur: 16, delay: -6 },
  { top: 20, right: 52, size: 13, fill: '#10606d', r: 100, dur: 22, delay: -10 },
  { top: 66, right: 56, size: 16, fill: '#4fb3ad', r: 20, dur: 18, delay: -15 },
  { top: 92, right: 18, size: 15, fill: '#dd8f3d', r: -40, dur: 20, delay: -12 },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <img className="hero__photo" src={heroBg} alt="" loading="eager" />
        <div className="hero__photo-overlay" />
      </div>

      <HeroRibbon className="hero__ribbon" id="hero" />

      <div className="hero__leaves" aria-hidden="true">
        {HERO_LEAVES.map((leaf, i) => (
          <Leaf
            key={i}
            className="hero__leaf"
            fill={leaf.fill}
            size={leaf.size}
            style={{
              '--top': `${leaf.top}%`,
              '--right': `${leaf.right}%`,
              '--r': `${leaf.r}deg`,
              '--dur': `${leaf.dur}s`,
              '--delay': `${leaf.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="container hero__content">
        <p className="hero__eyebrow">
          FLOW · Gabinet psychoterapii i psychoedukacji · Andrespol
        </p>
        <h1 className="hero__title">
          Tu i&nbsp;teraz… <em>dla lepszego potem</em>
        </h1>
        <p className="hero__lead">
          Nazywam się <strong>Karina Sokołowska</strong>. Jestem psychologiem
          i&nbsp;psychoterapeutką w&nbsp;nurcie Gestalt. Towarzyszę dorosłym, młodzieży
          i&nbsp;dzieciom w&nbsp;odkrywaniu ich uczuć, potrzeb i&nbsp;zasobów -
          w&nbsp;bezpiecznej, autentycznej relacji.
        </p>
        <div className="hero__actions">
          <a className="btn btn--amber" href="#kontakt">
            Umów konsultację
          </a>
          <a className="btn btn--ghost" href={`tel:${PHONE_TEL}`}>
            tel. {PHONE_DISPLAY}
          </a>
        </div>
        <p className="hero__note">Centrum Zdrowia Andrespol · ul. Rokicińska 146a</p>
      </div>

      <WaveDivider fill="#f6f8f7" />
    </section>
  )
}
