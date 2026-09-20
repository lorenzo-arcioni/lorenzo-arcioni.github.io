import React from "react";

/**
 * Sezione "Formazione"
 * Landing page interna al portfolio, pensata per generare contatti WhatsApp
 * per le lezioni private di Python. Da inserire come sezione a fianco di
 * Progetti / Pubblicazioni / Certificazioni (es. <Formazione /> nel router
 * o come <section id="formazione"> nella home).
 *
 * Nessuna dipendenza esterna: solo React. Gli stili sono scoped tramite
 * la classe "formazione-section" per non entrare in conflitto col resto
 * del sito, anche se questo usa già Tailwind.
 */

const WHATSAPP_NUMBER = "393296986474";
const WHATSAPP_MESSAGE = "Ciao Lorenzo, ho visto la sezione Formazione sul sito: vorrei prenotare la sessione gratuita di Python.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const OFFERS = [
  {
    title: "Preparazione esami universitari",
    desc: "Esercizi presi dalle prove d'esame reali della tua università. Ci si ferma su ogni passaggio finché non è chiaro davvero, senza fretta.",
    highlight: "Per arrivare all'esame senza ansia da pagina bianca.",
  },
  {
    title: "Progetti, tesi e script",
    desc: "Dal problema al codice funzionante: automazione, analisi dati, elaborazione file, tesi di laurea, articoli scientifici, progetti personali.",
    highlight: "Impari a ragionare sul problema, non solo a copiare la soluzione.",
  },
];

const PRICING = [
  { type: "Sessione 1:1", amount: "€30", unit: "/ ora", note: "Lezione individuale" },
  { type: "Pacchetto 5 ore", amount: "€125", unit: "/ pacchetto", note: "€25/ora · risparmi €25", popular: true },
  { type: "Piccolo gruppo", amount: "€20", unit: "/ ora", note: "2–5 persone · a testa" },
];

const TESTIMONIALS = [
  {
    quote: "Non avevo mai capito bene le classi in Python. Dopo tre sessioni ho superato l'esame senza problemi.",
    who: "Giulia R. — Ingegneria Informatica, Politecnico di Milano",
    meta: "3 sessioni · 28/30",
  },
  {
    quote: "Mi ha aiutato a finire la tesi in tempo, spiegando le cose molto meglio di quanto riuscissi a capirle da sola.",
    who: "Marco T. — Statistica, La Sapienza Roma",
    meta: "4 sessioni · tesi consegnata",
  },
];

const TOPICS = [
  { label: "Variabili e tipi", level: "base" },
  { label: "Liste e dizionari", level: "base" },
  { label: "Funzioni e ricorsione", level: "base" },
  { label: "OOP e classi", level: "base" },
  { label: "Algoritmi", level: "mid" },
  { label: "Pandas / NumPy", level: "mid" },
  { label: "Debugging", level: "mid" },
  { label: "Async", level: "adv" },
  { label: "Decoratori", level: "adv" },
  { label: "Generatori", level: "adv" },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.09c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.11.11-1.79-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.3-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35h.55c.18 0 .41-.07.64.49.24.58.8 2 .87 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.28-.12.56.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.17-.19.72-.84.91-1.13.19-.28.38-.24.64-.14.26.09 1.66.78 1.94.93.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}

export default function FormazionePage() {
  return (
    <section id="formazione" className="formazione-section" aria-labelledby="formazione-heading">
      <style>{`
        .formazione-section {
          --fz-ink: #1c1c1a;
          --fz-muted: #6b6b64;
          --fz-bg: #faf9f6;
          --fz-panel: #ffffff;
          --fz-green: #4f7042;
          --fz-green-deep: #3c5732;
          --fz-green-tint: #eef4e8;
          --fz-green-line: #cddcc0;
          --fz-line: #e6e4dc;
          --fz-radius: 14px;
          font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
          background: var(--fz-bg);
          color: var(--fz-ink);
          padding: 5rem 1.25rem;
        }
        .fz-mono { font-family: 'DM Mono', ui-monospace, monospace; }
        .fz-wrap { max-width: 880px; margin: 0 auto; }

        /* Hero */
        .fz-hero { margin-bottom: 2.75rem; }
        .fz-hero h2 {
          font-size: clamp(2rem, 4.5vw, 2.75rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.08;
          margin: 0 0 0.9rem;
        }
        .fz-hero h2 em { color: var(--fz-green-deep); font-style: normal; }
        .fz-hero p {
          font-size: 1.02rem;
          color: var(--fz-muted);
          font-weight: 400;
          max-width: 46ch;
          line-height: 1.55;
          margin: 0;
        }

        /* Free session banner */
        .fz-free {
          display: flex;
          gap: 0.9rem;
          align-items: flex-start;
          background: var(--fz-green-tint);
          border: 1px solid var(--fz-green-line);
          border-radius: var(--fz-radius);
          padding: 1.1rem 1.3rem;
          margin: 1.75rem 0 3rem;
        }
        .fz-free-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--fz-green); flex-shrink: 0; margin-top: 6px;
        }
        .fz-free strong { display: block; font-size: 0.98rem; font-weight: 600; color: var(--fz-ink); margin-bottom: 2px; }
        .fz-free span { font-size: 0.9rem; color: var(--fz-muted); line-height: 1.5; }

        /* Offers */
        .fz-offers { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 3rem; }
        @media (max-width: 640px) { .fz-offers { grid-template-columns: 1fr; } }
        .fz-offer {
          background: var(--fz-panel);
          border: 1px solid var(--fz-line);
          border-radius: var(--fz-radius);
          padding: 1.4rem 1.5rem;
        }
        .fz-offer .fz-offer-icon {
          width: 26px; height: 26px; border-radius: 50%;
          background: var(--fz-green-tint); color: var(--fz-green-deep);
          display: flex; align-items: center; justify-content: center; margin-bottom: 0.85rem;
        }
        .fz-offer h3 { font-size: 1.02rem; font-weight: 600; margin: 0 0 0.4rem; }
        .fz-offer p { font-size: 0.9rem; color: var(--fz-muted); line-height: 1.55; margin: 0 0 0.6rem; }
        .fz-offer .fz-offer-highlight { font-size: 0.86rem; font-weight: 500; color: var(--fz-green-deep); }

        /* Pricing */
        .fz-block-label {
          font-size: 0.78rem; font-weight: 500; color: var(--fz-muted);
          margin-bottom: 0.9rem; letter-spacing: 0.01em;
        }
        .fz-pricing { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.9rem; margin-bottom: 3rem; }
        @media (max-width: 640px) { .fz-pricing { grid-template-columns: 1fr; } }
        .fz-price-card {
          position: relative;
          border: 1px solid var(--fz-line);
          border-radius: var(--fz-radius);
          padding: 1.1rem 1.2rem;
          background: var(--fz-panel);
        }
        .fz-price-card.is-popular { border-color: var(--fz-green-line); background: var(--fz-green-tint); }
        .fz-price-card .fz-popular-tag {
          position: absolute; top: -10px; right: 14px;
          font-size: 0.68rem; background: var(--fz-green); color: #fff;
          padding: 2px 8px; border-radius: 20px;
        }
        .fz-price-card .fz-type { font-size: 0.88rem; font-weight: 500; margin-bottom: 4px; }
        .fz-price-card .fz-amount { font-size: 1.4rem; font-weight: 600; line-height: 1; }
        .fz-price-card .fz-amount span { font-size: 0.82rem; font-weight: 400; color: var(--fz-muted); }
        .fz-price-card .fz-note { font-size: 0.8rem; color: var(--fz-muted); margin-top: 4px; }

        /* CTA bar */
        .fz-cta {
          display: flex; align-items: center; justify-content: space-between; gap: 1.25rem;
          background: var(--fz-ink); border-radius: var(--fz-radius);
          padding: 1.4rem 1.6rem; margin-bottom: 3rem; flex-wrap: wrap;
        }
        .fz-cta-copy p:first-child { color: #fff; font-size: 1.02rem; font-weight: 500; margin: 0 0 3px; }
        .fz-cta-copy p:last-child { color: #9c9c92; font-size: 0.85rem; margin: 0; }
        .fz-cta-btn {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: var(--fz-green); color: #fff; text-decoration: none;
          font-weight: 500; font-size: 0.92rem; padding: 0.7rem 1.2rem;
          border-radius: 8px; white-space: nowrap; transition: background 0.15s ease;
        }
        .fz-cta-btn:hover { background: var(--fz-green-deep); }
        .fz-cta-btn:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }

        /* Testimonials */
        .fz-testimonials { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; margin-bottom: 3rem; }
        @media (max-width: 640px) { .fz-testimonials { grid-template-columns: 1fr; } }
        .fz-testi {
          border-left: 2px solid var(--fz-green-line);
          background: var(--fz-panel);
          border-radius: 0 10px 10px 0;
          padding: 1.1rem 1.3rem;
        }
        .fz-testi p { font-size: 0.92rem; font-style: italic; color: #444; line-height: 1.55; margin: 0 0 0.6rem; }
        .fz-testi .fz-who { font-size: 0.78rem; color: var(--fz-muted); margin-bottom: 6px; }
        .fz-testi .fz-meta {
          display: inline-block; font-size: 0.76rem; color: var(--fz-green-deep);
          background: var(--fz-green-tint); border: 1px solid var(--fz-green-line);
          padding: 2px 8px; border-radius: 4px;
        }

        /* Topics */
        .fz-topics { display: flex; flex-wrap: wrap; gap: 0.45rem; margin-bottom: 3.5rem; }
        .fz-topic {
          font-size: 0.8rem; padding: 0.32rem 0.7rem; border-radius: 20px;
          border: 1px solid var(--fz-line); color: var(--fz-muted); background: var(--fz-panel);
        }
        .fz-topic.is-base { color: var(--fz-green-deep); background: var(--fz-green-tint); border-color: var(--fz-green-line); }

        /* Bio / trust footer */
        .fz-bio {
          display: flex; gap: 1.5rem; align-items: flex-start;
          border-top: 1px solid var(--fz-line); padding-top: 2rem; flex-wrap: wrap;
        }
        .fz-bio-name { font-size: 1rem; font-weight: 600; margin-bottom: 2px; }
        .fz-bio-title { font-size: 0.86rem; color: var(--fz-green-deep); margin-bottom: 0.5rem; }
        .fz-bio-desc { font-size: 0.86rem; color: var(--fz-muted); line-height: 1.6; max-width: 54ch; }
        .fz-badges { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .fz-badge {
          font-size: 0.76rem; color: var(--fz-muted); background: #f2f1ec;
          border: 1px solid var(--fz-line); padding: 0.3rem 0.65rem; border-radius: 6px; white-space: nowrap;
        }

        /* Sticky mobile CTA */
        .fz-sticky-cta { display: none; }
        @media (max-width: 640px) {
          .fz-sticky-cta {
            display: flex; position: sticky; bottom: 1rem; z-index: 5;
            justify-content: center; margin-top: -1rem; margin-bottom: 2rem;
          }
          .fz-sticky-cta a {
            display: inline-flex; align-items: center; gap: 0.5rem;
            background: var(--fz-green); color: #fff; text-decoration: none;
            font-weight: 500; font-size: 0.9rem; padding: 0.75rem 1.4rem;
            border-radius: 30px; box-shadow: 0 6px 18px rgba(0,0,0,0.18);
          }
        }
      `}</style>

      <div className="fz-wrap">

        <div className="fz-hero">
          <h2 id="formazione-heading">Esame di Python in arrivo? <em>Ti aiuto ad arrivarci pronto.</em></h2>
          <p>Lezioni private di programmazione, individuali o in piccolo gruppo, via Discord — dal tuo livello, al tuo ritmo. Preparazione esami, progetti e tesi di laurea.</p>
        </div>

        <div className="fz-free">
          <span className="fz-free-dot" aria-hidden="true" />
          <div>
            <strong>Prima sessione gratuita — 30 minuti, zero impegno</strong>
            <span>Capiamo insieme di cosa hai bisogno e come posso aiutarti, prima di deciderne insieme.</span>
          </div>
        </div>

        <div className="fz-offers">
          {OFFERS.map((o) => (
            <div className="fz-offer" key={o.title}>
              <div className="fz-offer-icon"><CheckIcon /></div>
              <h3>{o.title}</h3>
              <p>{o.desc}</p>
              <div className="fz-offer-highlight">{o.highlight}</div>
            </div>
          ))}
        </div>

        <div>
          <div className="fz-block-label fz-mono">TARIFFE</div>
          <div className="fz-pricing">
            {PRICING.map((p) => (
              <div className={`fz-price-card${p.popular ? " is-popular" : ""}`} key={p.type}>
                {p.popular && <span className="fz-popular-tag">più scelto</span>}
                <div className="fz-type">{p.type}</div>
                <div className="fz-amount">{p.amount} <span>{p.unit}</span></div>
                <div className="fz-note">{p.note}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="fz-cta">
          <div className="fz-cta-copy">
            <p>Scrivimi oggi — la prima sessione è gratis.</p>
            <p>Massimo 5 nuovi studenti al mese, rispondo appena posso.</p>
          </div>
          <a className="fz-cta-btn" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Scrivimi su WhatsApp
          </a>
        </div>

        <div className="fz-testimonials">
          {TESTIMONIALS.map((t) => (
            <div className="fz-testi" key={t.who}>
              <p>&ldquo;{t.quote}&rdquo;</p>
              <div className="fz-who">{t.who}</div>
              <span className="fz-meta">{t.meta}</span>
            </div>
          ))}
        </div>

        <div className="fz-topics" aria-label="Argomenti trattati">
          {TOPICS.map((t) => (
            <span className={`fz-topic${t.level === "base" ? " is-base" : ""}`} key={t.label}>{t.label}</span>
          ))}
        </div>

        <div className="fz-bio">
          <div style={{ flex: 1, minWidth: 220 }}>
            <div className="fz-bio-name">Lorenzo Arcioni</div>
            <div className="fz-bio-title">Laurea in Informatica 110L e lode — Sapienza, Roma</div>
            <p className="fz-bio-desc">
              Insegno programmazione online da oltre 10 anni, con un metodo strutturato e adattato al livello
              di ognuno. Ho esperienza accademica e ho collaborato alla pubblicazione di articoli scientifici
              con diversi gruppi di ricerca.
            </p>
          </div>
          <div className="fz-badges">
            <span className="fz-badge">110L e lode</span>
            <span className="fz-badge">10+ anni di insegnamento</span>
            <span className="fz-badge">Kaggle Silver Medal</span>
          </div>
        </div>

      </div>

      <div className="fz-sticky-cta">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon /> Prenota la sessione gratuita
        </a>
      </div>
    </section>
  );
}