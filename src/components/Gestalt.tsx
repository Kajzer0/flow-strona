import { useParallax } from '../lib/hooks'
import approachBg from '../assets/stock-approach.jpg'
import { WaveDivider } from './decor'

export default function Gestalt() {
  const { ref, offset } = useParallax(0.12)

  return (
    <section className="gestalt" id="gestalt" ref={ref}>
      <div className="gestalt__media" aria-hidden="true">
        <img
          className="gestalt__photo"
          src={approachBg}
          alt=""
          loading="lazy"
          style={{ transform: `translateY(${offset.toFixed(2)}%)` }}
        />
        <div className="gestalt__photo-overlay" />
      </div>

      <WaveDivider fill="#f6f8f7" flip />

      <div className="container gestalt__grid">
        <div className="gestalt__quote">
          <p className="eyebrow eyebrow--light">Nurt, w którym pracuję</p>
          <h2 className="section-title section-title--light">Psychoterapia Gestalt</h2>
          <blockquote>
            „W&nbsp;gabinecie jestem z&nbsp;moimi klientami w&nbsp;autentycznej relacji, która
            dzieje się tu i&nbsp;teraz… z&nbsp;myślą, że jej korzenie sięgają przeszłości
            i&nbsp;pracujemy na owoce przyszłości.”
          </blockquote>
        </div>

        <div className="gestalt__body">
          <p>
            Psychoterapia Gestalt to nurt <strong className="gestalt__em">humanistyczny</strong>{' '}
            - skoncentrowany na&nbsp;człowieku, jego potencjale do&nbsp;samorozwoju,
            autentyczności i&nbsp;samorealizacji. Oparty jest na&nbsp;empatii i&nbsp;relacji
            terapeutycznej.
          </p>
          <p>
            Moim głównym celem jest towarzyszenie klientom w&nbsp;odkrywaniu swoich uczuć,
            potrzeb i&nbsp;zasobów. W&nbsp;ten sposób rozwijają oni swoją świadomość oraz
            możliwość decydowania o&nbsp;sobie.
          </p>
          <p>
            To piękna droga, którą razem współtworzymy. 
            Bywa trudna i wymagająca, ale jej głównym celem jest osiągnięcie dobrostanu klienta.
          </p>
        </div>
      </div>

      <WaveDivider fill="#f6f8f7" />
    </section>
  )
}
