import { Leaf } from './decor'

export default function Bridge() {
  return (
    <section className="bridge" aria-label="Zaproszenie do kontaktu">
      <div className="container bridge__inner reveal">
        <div className="bridge__leaves" aria-hidden="true">
          <Leaf fill="#dd8f3d" size={20} className="bridge__leaf bridge__leaf--a" />
          <Leaf fill="#b0512b" size={15} className="bridge__leaf bridge__leaf--b" />
        </div>
        <h2 className="bridge__question">Co Ciebie przywiodło w&nbsp;to miejsce…?</h2>
        <p className="bridge__sub">
          Pewnie dla każdego odpowiedź będzie inna. Pierwsze spotkania to wstępne konsultacje -
          przestrzeń, by wspólnie sprawdzić, czego potrzebujesz.
        </p>
        <a className="btn btn--petrol" href="#kontakt">
          Zadzwoń lub napisz SMS
        </a>
      </div>
    </section>
  )
}
