import { ADDRESS, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from '../lib/const'

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
