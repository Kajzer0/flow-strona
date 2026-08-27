import { ADDRESS, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, SOCIAL_LINKS } from '../lib/const'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">Flow</span>
            <p>
              Gabinet psychoterapii i&nbsp;psychoedukacji
              <br />
              Karina Sokołowska - psycholog, psychoterapeutka
            </p>
          </div>

          <nav className="footer__nav" aria-label="Nawigacja w stopce">
            {NAV_LINKS.map((link) => (
              <a key={link.id} href={`#${link.id}`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__contact">
            <a href={`tel:${PHONE_TEL}`}>tel. {PHONE_DISPLAY}</a>
            <p>
              {ADDRESS.place}
              <br />
              {ADDRESS.street}, {ADDRESS.city}
            </p>
            <div className="footer__social">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name === 'Instagram' ? <InstagramIcon /> : <FacebookIcon />}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} FLOW Gabinet psychoterapii i psychoedukacji Karina Sokołowska</p>
          <p>Ta strona nie używa plików cookies ani narzędzi analitycznych.</p>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.3-1.4 1.5-1.4h1.4V5.5c-.3-.1-1.2-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2.2H8.6V14H11v7h2.5Z" />
    </svg>
  )
}
