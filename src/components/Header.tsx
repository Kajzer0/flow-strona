import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from '../lib/const'
import { useActiveSection } from '../lib/hooks'

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a href="#top" className="site-header__brand" onClick={close}>
          <img src={logo} alt="FLOW - Gabinet psychoterapii i psychoedukacji, strona główna" />
        </a>

        <nav className="site-nav" aria-label="Nawigacja główna">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`site-nav__link${active === link.id ? ' is-active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--petrol site-header__cta" href={`tel:${PHONE_TEL}`}>
          <PhoneIcon />
          {PHONE_DISPLAY}
        </a>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? 'Zamknij menu' : 'Otwórz menu'}</span>
          <span className={`burger${open ? ' is-open' : ''}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu${open ? ' is-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.id} href={`#${link.id}`} className="mobile-menu__link" onClick={close}>
            {link.label}
          </a>
        ))}
        <a className="btn btn--petrol mobile-menu__cta" href={`tel:${PHONE_TEL}`} onClick={close}>
          <PhoneIcon />
          Zadzwoń: {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  )
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5.5 3h3l1.7 4.3-2 1.6a13.5 13.5 0 0 0 6 6l1.5-2 4.3 1.7v3c0 1.1-.9 2.1-2 2A17.4 17.4 0 0 1 3.4 5.5c-.1-1.1.9-2 2.1-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}
