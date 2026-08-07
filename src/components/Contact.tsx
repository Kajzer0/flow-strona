import { useState } from 'react'
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL } from '../lib/const'

export default function Contact() {
  const [showMap, setShowMap] = useState(false)

  return (
    <section className="section section--white contact" id="kontakt">
      <div className="container">
        <div className="contact__head reveal">
          <p className="eyebrow">Kontakt</p>
          <h2 className="section-title">Umów się na konsultację</h2>
        </div>

        <div className="contact__grid">
          <div className="contact__info reveal">
            <a className="contact__phone" href={`tel:${PHONE_TEL}`}>
              <span className="contact__phone-label">Telefon</span>
              {PHONE_DISPLAY}
            </a>
            <p className="contact__sms">
              Jeśli nie odbieram, jestem prawdopodobnie w&nbsp;trakcie sesji.
              <br />
              <strong>Napisz SMS, oddzwonię.</strong>
            </p>

            <div className="contact__actions">
              <a className="btn btn--petrol" href={`tel:${PHONE_TEL}`}>
                Zadzwoń
              </a>
              <a className="btn btn--outline" href={`sms:${PHONE_TEL}`}>
                Napisz SMS
              </a>
            </div>

            <address className="contact__address">
              <strong>FLOW Gabinet psychoterapii i&nbsp;psychoedukacji</strong>
              {ADDRESS.place}
              <br />
              {ADDRESS.street}, {ADDRESS.city}
              <span className="contact__address-note">{ADDRESS.note}</span>
            </address>
          </div>

          <div className="contact__map reveal">
            {showMap ? (
              <iframe
                title="Mapa dojazdu - Centrum Zdrowia Andrespol, ul. Rokicińska 146a"
                src={ADDRESS.mapsEmbedUrl}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="contact__map-placeholder">
                <PinIcon />
                <p>
                  Mapa Google załaduje się po kliknięciu.
                  <br />
                  <small>Google może wtedy zapisać pliki cookies.</small>
                </p>
                <button type="button" className="btn btn--petrol" onClick={() => setShowMap(true)}>
                  Pokaż mapę
                </button>
                <a
                  className="contact__map-link"
                  href={ADDRESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Otwórz w Mapach Google ↗
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function PinIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s-7-5.6-7-11a7 7 0 1 1 14 0c0 5.4-7 11-7 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}
