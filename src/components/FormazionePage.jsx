import React, { useEffect, useRef } from "react";

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
 *
 * HERO: su desktop il logo sta a destra del blocco di testo; su smartphone
 * (<= 640px) il logo è piccolo e sta di fianco al titolo, centrato
 * verticalmente rispetto ad esso.
 */

const WHATSAPP_NUMBER = "393296986474";
const WHATSAPP_MESSAGE = "Ciao Lorenzo, ho visto la sezione Formazione sul sito: vorrei prenotare la sessione gratuita di Python.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// ⚠️ NUMERI DA SOSTITUIRE CON QUELLI REALI (devono corrispondere al vero)
const REVIEWS_TOTAL = 40;          // totale recensioni che hai davvero ricevuto
const RATING_AVERAGE = "4,9";      // media reale
const STUDENTS_TOTAL = "100+";     // studenti seguiti in totale
const EXAM_SETS_COUNT = "30+";     // quanti set di esami hai pronti

const WHATSAPP_EXAM_MESSAGE = "Ciao Lorenzo, ti mando la traccia/il programma del mio esame di Python: mi dici da dove partire?";
const WHATSAPP_EXAM_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_EXAM_MESSAGE)}`;

// ⚠️ DA CONFERMARE: sono promesse che devi essere sicuro di poter mantenere
const SPOTS_LEFT = 3;                       // posti davvero liberi questo mese (max 5). Metti 0 per nascondere
const EXAM_SESSION_LABEL = "sessione";
const GUARANTEE_TEXT = "Se dopo la prima ora a pagamento senti che non fa per te, non paghi quell'ora.";
const REPLY_TIME = "in tempi brevi";

// Percorsi delle immagini: modificali con i nomi dei tuoi file
// (es. file in public/images/ -> "/images/nome.png")
const HERO_IMAGE = "/images/logo-python.png";        // logo dell'hero
const PROFILE_IMAGE = "https://lorenzo-arcioni.github.io/images/profile.jpeg";  // tua foto nella sezione bio

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

const EXAM_SETS = [
  { title: "Prove d'esame reali", desc: "Tracce di anni diversi, organizzate per argomento e difficoltà." },
  { title: "Soluzioni commentate", desc: "Non solo il codice: il ragionamento passo passo per arrivarci." },
  { title: "Simulazioni a tempo", desc: "Prova completa con cronometro, poi correzione insieme." },
  { title: "Errori più comuni", desc: "Le trappole in cui cadono quasi tutti, così le eviti il giorno dell'esame." },
];

const INCLUDED = [
  "Materiale di studio e set di esercizi inclusi",
  "Feedback dettagliato sul tuo codice",
  "Supporto su WhatsApp tra una lezione e l'altra",
  "Set di esami pronti da esercizi d'esame reali",
  "Orari flessibili tra le 15 e le 19, anche nel weekend",
  "Si parte dal tuo livello, anche da zero",
];

const STEPS = [
  { title: "Mi scrivi su WhatsApp", desc: "Mi dici corso, università e data dell'esame. Se le hai, allega anche le prove passate del tuo professore." },
  { title: "Sessione gratuita da 30 minuti", desc: "Vediamo il tuo livello, ti dico cosa studiare e in che ordine. Esci con un piano, anche se non continui." },
  { title: "Lavoriamo sugli esercizi giusti", desc: "Uso i set di esami pronti per allenarti sulle tipologie che escono davvero, con correzione subito dopo." },
];

const FOR_YOU = [
  "Hai un esame di Python e non sai da dove cominciare",
  "Capisci la teoria ma davanti a un esercizio resti bloccato",
  "Hai già provato da solo/a con video e tutorial senza risultati",
  "Devi finire una tesi o un progetto che richiede codice",
  "Hai poco tempo e vuoi studiare solo ciò che serve",
];

const PRICING = [
  { type: "Sessione 1:1", amount: "€30", unit: "/ ora", note: "Lezione individuale" },
  { type: "Pacchetto 5 ore", amount: "€125", unit: "/ pacchetto", note: "€25/ora · risparmi €25", popular: true },
  { type: "Piccolo gruppo", amount: "€20", unit: "/ ora", note: "Da 2 a 5 persone · a testa" },
];

const TESTIMONIALS = [
  {
    quote: "Non avevo mai capito bene le classi in Python. Dopo tre sessioni ho superato l'esame senza problemi.",
    who: "Giulia R., Ingegneria Informatica, Politecnico di Milano",
    meta: "3 sessioni · 28/30",
  },
  {
    quote: "Mi ha aiutato a finire la tesi in tempo, spiegando le cose molto meglio di quanto riuscissi a capirle da sola.",
    who: "Marco T., Statistica, La Sapienza Roma",
    meta: "4 sessioni · tesi consegnata",
  },
];

// Altre recensioni VERE che compaiono sfocate sotto le prime due (aggiungine quante vuoi).
// Formato: { quote: "...", who: "Nome C. — Corso, Università", meta: "N sessioni · esito" }
// Se l'array è vuoto, resta solo il pulsante "E molti altri".
const MORE_TESTIMONIALS = [];

const TOPICS = [
  { label: "Variabili e tipi", level: "base" },
  { label: "Cicli e condizioni", level: "base" },
  { label: "Liste e dizionari", level: "base" },
  { label: "Stringhe e file", level: "base" },
  { label: "Funzioni e ricorsione", level: "base" },
  { label: "OOP e classi", level: "base" },
  { label: "Algoritmi e strutture dati", level: "mid" },
  { label: "Pandas / NumPy", level: "mid" },
  { label: "Matplotlib", level: "mid" },
  { label: "Debugging", level: "mid" },
  { label: "Testing", level: "mid" },
  { label: "Machine Learning", level: "adv" },
  { label: "Async", level: "adv" },
  { label: "Decoratori", level: "adv" },
  { label: "Generatori", level: "adv" },
];

const FAQ = [
  {
    q: "Parto da zero, va bene lo stesso?",
    a: "Sì. Si parte dal tuo livello reale: se non hai mai scritto una riga di codice, cominciamo dalle basi, senza darle per scontate.",
  },
  {
    q: "Come funzionano le lezioni?",
    a: "Online su Discord, con condivisione dello schermo: scriviamo il codice insieme e ti lascio esercizi da fare tra una lezione e l'altra. Gli orari sono flessibili, dalle 15 alle 19, anche nel weekend.",
  },
  {
    q: "Quali facoltà e università segui?",
    a: "Tutte. Che tu sia a Ingegneria, Informatica, Statistica, Matematica, Fisica, Economia, Biologia o in qualsiasi altro corso con Python nel programma, e in qualunque università italiana o estera, si parte dal tuo programma d'esame.",
  },
  {
    q: "Hai esercizi pronti per il mio esame?",
    a: "Sì: ho set di esami già pronti, costruiti su esercizi presi da prove d'esame reali. Se il tuo corso ha tracce particolari, mandamele e ci lavoriamo sopra.",
  },
  {
    q: "Cosa succede nella sessione gratuita?",
    a: "30 minuti per capire il tuo livello, l'esame o il progetto che hai davanti e come organizzare il lavoro. Nessun obbligo di continuare.",
  },
  {
    q: "L'esame è tra poche settimane, fai in tempo ad aiutarmi?",
    a: "Spesso sì: con i set di esami pronti si lavora direttamente sulle tipologie di esercizio che escono di più. Scrivimi la data e vediamo.",
  },
];

const BADGES = [
  "110L e lode",
  "10+ anni di insegnamento",
  "Kaggle Silver Medal",
  "Articoli scientifici pubblicati",
  "Esperienza in gruppi di ricerca",
  "Python per Data Science",
  "Machine Learning",
  "Lezioni su Discord",
  "Primo incontro gratuito",
  "Esami di tantissime facoltà",
  "Orari flessibili dalle 15 alle 19",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

function CodeAnimation() {
  return (
    <div className="fz-anim" aria-hidden="true">
      <svg viewBox="0 0 300 220" width="100%" role="img">
        <rect x="1" y="1" width="298" height="218" rx="12" fill="#1c241a" stroke="#2f3d2b" />
        <circle cx="20" cy="20" r="4.5" fill="#5b6b55" />
        <circle cx="36" cy="20" r="4.5" fill="#5b6b55" />
        <circle cx="52" cy="20" r="4.5" fill="#5b6b55" />
        <text x="150" y="24" fill="#8a9a84" fontSize="10" fontFamily="DM Mono, ui-monospace, monospace">esame.py</text>
        <line x1="0" y1="36" x2="300" y2="36" stroke="#2f3d2b" />
        <g fontFamily="DM Mono, ui-monospace, monospace" fontSize="12.5">
          <text className="fz-a-l1" x="18" y="64"><tspan fill="#c792ea">def</tspan><tspan fill="#e6e4dc"> media</tspan><tspan fill="#8a9a84">(voti):</tspan></text>
          <text className="fz-a-l2" x="34" y="88"><tspan fill="#c792ea">return</tspan><tspan fill="#e6e4dc"> sum(voti) / len(voti)</tspan></text>
          <text className="fz-a-l3" x="18" y="122"><tspan fill="#8a9a84">{">>> "}</tspan><tspan fill="#e6e4dc">media([28, 30, 27])</tspan></text>
          <text className="fz-a-l4" x="18" y="144" fill="#9fd183">28.333333333333332</text>
        </g>
        <g className="fz-a-badge">
          <rect x="18" y="166" width="170" height="30" rx="15" fill="#4f7042" />
          <path d="M34 181l5 5 9-10" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <text x="56" y="185" fill="#fff" fontSize="12" fontFamily="DM Sans, system-ui, sans-serif" fontWeight="500">Test superati</text>
        </g>
        <rect className="fz-a-cursor" x="206" y="52" width="7" height="15" fill="#9fd183" />
      </svg>
    </div>
  );
}

function PythonAtComputer() {
  return (
    <div className="fz-pc" aria-hidden="true">
      <svg viewBox="0 0 210 160" width="100%" fill="none">
        {/* scrivania */}
        <line x1="6" y1="152" x2="204" y2="152" stroke="#cddcc0" strokeWidth="2" strokeLinecap="round" />
        {/* laptop */}
        <rect x="82" y="26" width="116" height="78" rx="7" fill="#1c241a" stroke="#2f3d2b" />
        <rect x="90" y="34" width="100" height="62" rx="3" fill="#232d20" />
        <g className="fz-pc-lines">
          <rect x="97" y="42" width="44" height="5" rx="2.5" fill="#c792ea" />
          <rect x="105" y="53" width="70" height="5" rx="2.5" fill="#9fd183" />
          <rect x="105" y="64" width="52" height="5" rx="2.5" fill="#e6e4dc" />
          <rect x="97" y="75" width="38" height="5" rx="2.5" fill="#c792ea" />
          <rect x="105" y="86" width="60" height="5" rx="2.5" fill="#9fd183" />
        </g>
        <path d="M70 104 H210 L202 116 H78 Z" fill="#d8dfd0" stroke="#b9c4ae" />
        <rect x="124" y="108" width="30" height="3" rx="1.5" fill="#b9c4ae" />
        {/* corpo del pitone, avvolto davanti al laptop */}
        <g className="fz-pc-snake">
          <path d="M168 146 C 120 156, 36 156, 30 134 C 24 112, 66 118, 58 94 C 53 78, 36 80, 42 62" stroke="#4f7042" strokeWidth="15" strokeLinecap="round" />
          <path d="M168 146 C 120 156, 36 156, 30 134 C 24 112, 66 118, 58 94 C 53 78, 36 80, 42 62" stroke="#cddcc0" strokeWidth="15" strokeDasharray="2 12" opacity="0.5" />
          {/* testa */}
          <g className="fz-pc-head">
            <ellipse cx="50" cy="52" rx="15" ry="10.5" transform="rotate(8 50 52)" fill="#4f7042" />
            <ellipse cx="46" cy="55" rx="9" ry="4" transform="rotate(8 46 55)" fill="#cddcc0" opacity="0.55" />
            <circle cx="56" cy="48" r="3.4" fill="#fff" />
            <circle className="fz-pc-pupil" cx="57.4" cy="48.3" r="1.7" fill="#1c241a" />
            <path className="fz-pc-tongue" d="M64 55 l10 1 M74 56 l5 -3 M74 56 l5 3" stroke="#c0453a" strokeWidth="1.6" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SnakeField() {
  const ref = useRef(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return undefined;

    const reduce = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const N = 72; // punti lungo il corpo
    const cfgs = [
      { dir: 1, speed: 92, off: 0.05, phase: 0.0, band: "bottom", wl: 210 },
      { dir: -1, speed: 78, off: 0.55, phase: 2.1, band: "top", wl: 260 },
    ];
    const parts = Array.from(svg.querySelectorAll("[data-snake]")).map((g) => ({
      body: g.querySelector(".fz-sb"),
      spine: g.querySelector(".fz-ss"),
      head: g.querySelector(".fz-sh"),
      tongue: g.querySelector(".fz-st"),
    }));

    let W = 880, H = 320, raf = 0, visible = true;

    const resize = () => {
      const r = svg.getBoundingClientRect();
      W = Math.max(r.width, 240);
      H = Math.max(r.height, 160);
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    };

    const f1 = (n) => n.toFixed(1);

    const draw = (t, fixed) => {
      const wmax = Math.min(19, Math.max(12, H * 0.055));
      const L = Math.min(340, Math.max(170, W * 0.32));
      const margin = 40;
      const D = W + 2 * margin + L;
      const A = Math.min(12, H * 0.04);

      cfgs.forEach((c, ci) => {
        const part = parts[ci];
        if (!part) return;
        const p = fixed ? fixed[ci] * D - margin : ((t * c.speed + c.off * D) % D) - margin;
        const yc = c.band === "bottom" ? H - 28 : 28;

        // spina dorsale: il corpo segue la testa lungo una curva sinuosa + onda che scorre lungo il corpo
        const pts = [];
        for (let i = 0; i <= N; i++) {
          const f = i / N;
          const pi = p - L * f;
          const x = c.dir > 0 ? pi : W - pi;
          let y = yc
            + A * Math.sin((pi / c.wl) * 2 * Math.PI + c.phase)
            + A * 0.45 * Math.sin((pi / (c.wl * 0.53)) * 2 * Math.PI + c.phase * 1.7);
          y += wmax * 0.5 * (0.25 + 0.75 * Math.sin(Math.PI * f)) * Math.sin(2 * Math.PI * f * (L / 150) - t * 4.2 + c.phase);
          pts.push([x, y]);
        }

        // corpo con sezione variabile (collo, centro, coda affusolata)
        const left = [], right = [];
        for (let i = 0; i <= N; i++) {
          const a = pts[Math.max(i - 1, 0)], b = pts[Math.min(i + 1, N)];
          let dx = b[0] - a[0], dy = b[1] - a[1];
          const len = Math.hypot(dx, dy) || 1;
          dx /= len; dy /= len;
          const f = i / N;
          const w = f < 0.18 ? wmax * (0.72 + 0.28 * (f / 0.18)) : wmax * (1 - 0.9 * Math.pow((f - 0.18) / 0.82, 1.25));
          const h = w / 2;
          left.push(`${f1(pts[i][0] - dy * h)} ${f1(pts[i][1] + dx * h)}`);
          right.push(`${f1(pts[i][0] + dy * h)} ${f1(pts[i][1] - dx * h)}`);
        }
        part.body.setAttribute("d", `M${left.join("L")}L${right.reverse().join("L")}Z`);
        part.spine.setAttribute("d", `M${pts.map((q) => `${f1(q[0])} ${f1(q[1])}`).join("L")}`);
        part.spine.setAttribute("stroke-width", f1(wmax * 0.62));

        // testa orientata nella direzione di marcia
        const h0 = pts[0], h1 = pts[4];
        const ang = (Math.atan2(h0[1] - h1[1], h0[0] - h1[0]) * 180) / Math.PI;
        part.head.setAttribute("transform", `translate(${f1(h0[0])} ${f1(h0[1])}) rotate(${f1(ang)}) scale(${f1(wmax / 12)})`);
        part.tongue.setAttribute("opacity", Math.sin(t * 2.1 + c.phase * 3) > 0.93 ? "1" : "0");
      });
    };

    const loop = (now) => {
      if (!visible) { raf = 0; return; }
      draw(now / 1000);
      raf = requestAnimationFrame(loop);
    };

    resize();
    const ro = typeof ResizeObserver === "function" ? new ResizeObserver(() => { resize(); if (reduce) draw(0, [0.34, 0.66]); }) : null;
    if (ro) ro.observe(svg);

    let io = null;
    if (reduce) {
      draw(0, [0.34, 0.66]);
    } else {
      io = typeof IntersectionObserver === "function"
        ? new IntersectionObserver((entries) => {
            visible = entries[0].isIntersecting;
            if (visible && !raf) raf = requestAnimationFrame(loop);
          })
        : null;
      if (io) io.observe(svg);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      visible = false;
      if (raf) cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      if (io) io.disconnect();
    };
  }, []);

  return (
    <svg ref={ref} className="fz-snakefield" aria-hidden="true" focusable="false">
      {[0, 1].map((k) => (
        <g key={k} data-snake>
          <path className="fz-sb" fill="#fff" opacity="0.94" />
          <path className="fz-ss" fill="none" stroke="#3c5732" strokeDasharray="1.2 9" opacity="0.3" />
          <g className="fz-sh">
            <ellipse cx="3" cy="0" rx="14" ry="9.5" fill="#fff" />
            <circle cx="7" cy="-5" r="1.9" fill="#2f4627" />
            <circle cx="7" cy="5" r="1.9" fill="#2f4627" />
            <path className="fz-st" d="M17 0 H27 L31 -3.5 M27 0 L31 3.5" stroke="#f2a097" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0" />
          </g>
        </g>
      ))}
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z" />
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
  const hasMoreReviews = REVIEWS_TOTAL > TESTIMONIALS.length;

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
          --fz-star: #c98a1b;
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
        .fz-hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 1.75rem;
        }
        .fz-hero-text { flex: 1; min-width: 0; }
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
        .fz-hero-img {
          width: 220px;
          max-width: 38%;
          height: auto;
          border-radius: var(--fz-radius);
          object-fit: cover;
          flex-shrink: 0;
        }
        /* Desktop: titolo + logo mobile nello stesso contenitore, ma il logo mobile è nascosto */
        .fz-hero-top { display: block; }
        .fz-hero-img--mobile { display: none; }

        @media (max-width: 640px) {
          /* Smartphone: logo piccolo, di fianco al titolo, centrato verticalmente rispetto ad esso */
          .fz-hero { flex-direction: column; align-items: stretch; gap: 0.9rem; }
          .fz-hero-img--desktop { display: none; }
          .fz-hero-top {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 0.9rem;
          }
          .fz-hero-top h2 {
            flex: 1;
            min-width: 0;
            margin: 0;
            font-size: clamp(1.45rem, 6.4vw, 1.9rem);
          }
          .fz-hero-img--mobile {
            display: block;
            width: 90px;
            max-width: 90px;
            align-self: center;
          }
        }

        /* Social proof strip */
        .fz-proof {
          display: flex; flex-wrap: wrap; align-items: center; gap: 0.6rem 1.4rem;
          margin-bottom: 1.5rem; font-size: 0.88rem; color: var(--fz-muted);
        }
        .fz-proof-rating { display: inline-flex; align-items: center; gap: 0.45rem; color: var(--fz-ink); font-weight: 500; }
        .fz-stars { display: inline-flex; color: var(--fz-star); gap: 1px; }
        .fz-proof-item strong { color: var(--fz-ink); font-weight: 600; }

        /* Free session banner */
        .fz-free {
          display: flex;
          gap: 0.9rem;
          align-items: flex-start;
          background: var(--fz-green-tint);
          border: 1px solid var(--fz-green-line);
          border-radius: var(--fz-radius);
          padding: 1.1rem 1.3rem;
          margin: 0 0 3rem;
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

        /* Exam sets */
        .fz-sets {
          border: 1px solid var(--fz-green-line);
          background: var(--fz-green-tint);
          border-radius: var(--fz-radius);
          padding: 1.6rem 1.6rem 1.4rem;
          margin-bottom: 3rem;
        }
        .fz-sets-head { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-bottom: 0.4rem; }
        .fz-sets h3 { font-size: 1.15rem; font-weight: 600; margin: 0; letter-spacing: -0.01em; }
        .fz-sets-count {
          font-size: 0.78rem; font-weight: 500; color: #fff; background: var(--fz-green);
          padding: 3px 10px; border-radius: 20px; white-space: nowrap;
        }
        .fz-sets-lead { font-size: 0.92rem; color: var(--fz-muted); line-height: 1.55; margin: 0 0 1.1rem; max-width: 60ch; }
        .fz-sets-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
        @media (max-width: 640px) { .fz-sets-grid { grid-template-columns: 1fr; } }
        .fz-set-item { display: flex; gap: 0.7rem; background: var(--fz-panel); border: 1px solid var(--fz-green-line); border-radius: 10px; padding: 0.85rem 1rem; }
        .fz-set-item .fz-offer-icon {
          width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0;
          background: var(--fz-green-tint); color: var(--fz-green-deep);
          display: flex; align-items: center; justify-content: center; margin-top: 1px;
        }
        .fz-set-item strong { display: block; font-size: 0.9rem; font-weight: 600; margin-bottom: 2px; }
        .fz-set-item span { font-size: 0.83rem; color: var(--fz-muted); line-height: 1.45; }

        /* Included */
        .fz-included { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem 1.5rem; margin-bottom: 3rem; }
        @media (max-width: 640px) { .fz-included { grid-template-columns: 1fr; } }
        .fz-included li { list-style: none; display: flex; gap: 0.6rem; align-items: flex-start; font-size: 0.92rem; line-height: 1.45; }
        .fz-included li .fz-offer-icon {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
          background: var(--fz-green-tint); color: var(--fz-green-deep);
          display: flex; align-items: center; justify-content: center; margin-top: 1px;
        }
        .fz-included { padding: 0; margin-top: 0; }

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
        .fz-reviews-head { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-bottom: 0.9rem; }
        .fz-reviews-head .fz-block-label { margin-bottom: 0; }
        .fz-reviews-score { display: inline-flex; align-items: center; gap: 0.45rem; font-size: 0.85rem; color: var(--fz-muted); }
        .fz-reviews-score strong { color: var(--fz-ink); font-weight: 600; }
        .fz-testimonials { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; margin-bottom: 1.1rem; }
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

        /* Peek: pila di recensioni che si intravedono sotto */
        .fz-peek { position: relative; margin-bottom: 3rem; }
        .fz-peek-stack { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; max-height: 128px; overflow: hidden; }
        @media (max-width: 640px) { .fz-peek-stack { grid-template-columns: 1fr; max-height: 110px; } }
        .fz-peek-stack .fz-testi { border-left-color: var(--fz-line); }
        .fz-peek-fade {
          position: absolute; inset: 0;
          display: flex; align-items: flex-end; justify-content: center; padding-bottom: 0.2rem;
        }
        /* Nitido in alto, poi sfoca e sfuma verso il basso */
        .fz-peek-fade::before {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(to bottom, rgba(250,249,246,0) 35%, var(--fz-bg) 100%);
          -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px);
          -webkit-mask-image: linear-gradient(to bottom, transparent 30%, #000 65%);
          mask-image: linear-gradient(to bottom, transparent 30%, #000 65%);
        }
        .fz-peek-link { position: relative; }
        .fz-peek-link {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.88rem; font-weight: 500; color: var(--fz-green-deep);
          background: var(--fz-panel); border: 1px solid var(--fz-green-line);
          padding: 0.5rem 1rem; border-radius: 30px; text-decoration: none;
        }
        .fz-peek-link.is-static { cursor: default; user-select: none; }
        .fz-peek.is-solo { display: flex; justify-content: center; }
        .fz-peek.is-solo .fz-peek-fade { position: static; background: none; padding: 0; }
        

        /* Topics */
        .fz-topics { display: flex; flex-wrap: wrap; gap: 0.45rem; margin-bottom: 3rem; }
        .fz-topic {
          font-size: 0.8rem; padding: 0.32rem 0.7rem; border-radius: 20px;
          border: 1px solid var(--fz-line); color: var(--fz-muted); background: var(--fz-panel);
        }
        .fz-topic.is-base { color: var(--fz-green-deep); background: var(--fz-green-tint); border-color: var(--fz-green-line); }
        .fz-topic.is-adv { color: var(--fz-ink); border-color: #cfcdc3; }

        /* FAQ */
        .fz-faq { margin-bottom: 3.5rem; border-top: 1px solid var(--fz-line); }
        .fz-faq details { border-bottom: 1px solid var(--fz-line); padding: 0.95rem 0; }
        .fz-faq summary {
          cursor: pointer; font-size: 0.95rem; font-weight: 500; list-style: none;
          display: flex; justify-content: space-between; gap: 1rem; align-items: center;
        }
        .fz-faq summary::-webkit-details-marker { display: none; }
        .fz-faq summary::after { content: "+"; font-size: 1.2rem; color: var(--fz-green-deep); line-height: 1; }
        .fz-faq summary::after { transition: transform 0.2s ease; }
        .fz-faq details[open] summary::after { transform: rotate(45deg); }
        .fz-faq summary:focus-visible { outline: 2px solid var(--fz-green); outline-offset: 3px; border-radius: 4px; }
        .fz-faq details p { font-size: 0.88rem; color: var(--fz-muted); line-height: 1.6; margin: 0.6rem 0 0; max-width: 62ch; }

        /* Bio / trust footer */
        .fz-bio {
          display: flex; gap: 1.5rem; align-items: flex-start;
          border-top: 1px solid var(--fz-line); padding-top: 2rem; flex-wrap: wrap;
        }
        .fz-bio-img {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--fz-green-line);
          flex-shrink: 0;
        }
        .fz-bio-name { font-size: 1rem; font-weight: 600; margin-bottom: 2px; }
        .fz-bio-title { font-size: 0.86rem; color: var(--fz-green-deep); margin-bottom: 0.5rem; }
        .fz-bio-desc { font-size: 0.86rem; color: var(--fz-muted); line-height: 1.6; max-width: 54ch; }
        .fz-badges { display: flex; gap: 0.5rem; flex-wrap: wrap; width: 100%; }
        .fz-badge {
          font-size: 0.76rem; color: var(--fz-muted); background: #f2f1ec;
          border: 1px solid var(--fz-line); padding: 0.3rem 0.65rem; border-radius: 6px; white-space: nowrap;
        }
        .fz-badge.is-key { color: var(--fz-green-deep); background: var(--fz-green-tint); border-color: var(--fz-green-line); font-weight: 500; }

        /* Hero actions */
        .fz-hero-actions { display: flex; gap: 0.7rem; flex-wrap: wrap; align-items: center; margin-top: 1.25rem; }
        .fz-hero-actions .fz-cta-btn { padding: 1.05rem 1.8rem; font-size: 1.08rem; font-weight: 600; border-radius: 10px; box-shadow: 0 6px 16px rgba(60,87,50,0.28); }
        .fz-hero-actions .fz-cta-btn svg { width: 20px; height: 20px; }
        .fz-hero-note { display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 0.8rem; font-size: 0.82rem; color: var(--fz-muted); }
        .fz-urgent { display: inline-flex; align-items: center; gap: 0.4rem; color: #8a5a00; font-weight: 500; }
        .fz-urgent i { width: 7px; height: 7px; border-radius: 50%; background: var(--fz-star); display: inline-block; }

        /* Steps */
        .fz-steps { list-style: none; padding: 0; margin: 0 0 0.9rem; display: flex; align-items: stretch; gap: 0.5rem; }
        @media (max-width: 640px) { .fz-steps { flex-direction: column; align-items: stretch; } }
        .fz-steps li:not(.fz-arrow) { flex: 1; display: flex; gap: 0.8rem; background: var(--fz-panel); border: 1px solid var(--fz-line); border-radius: var(--fz-radius); padding: 1.1rem 1.2rem; }
        .fz-arrow { display: flex; align-items: center; justify-content: center; color: var(--fz-green); flex-shrink: 0; }
        @media (max-width: 640px) { .fz-arrow { transform: rotate(90deg); padding: 0.1rem 0; } }
        .fz-steps-note { font-size: 0.88rem; color: var(--fz-muted); line-height: 1.55; margin: 0 0 3rem; }
        .fz-steps-note strong { color: var(--fz-ink); font-weight: 600; }
        .fz-step-n {
          width: 26px; height: 26px; flex-shrink: 0; border-radius: 50%;
          background: var(--fz-green); color: #fff; font-size: 0.82rem; font-weight: 600;
          display: flex; align-items: center; justify-content: center;
        }
        .fz-steps strong { display: block; font-size: 0.95rem; font-weight: 600; margin-bottom: 3px; }
        .fz-steps span:not(.fz-step-n) { font-size: 0.84rem; color: var(--fz-muted); line-height: 1.5; }

        /* For you */
        .fz-foryou { background: var(--fz-panel); border: 1px solid var(--fz-line); border-radius: var(--fz-radius); padding: 1.4rem 1.6rem; margin-bottom: 3rem; }
        .fz-foryou h3 { font-size: 1.05rem; font-weight: 600; margin: 0 0 0.9rem; }
        .fz-foryou ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.6rem; }
        .fz-foryou li { display: flex; gap: 0.6rem; align-items: flex-start; font-size: 0.92rem; line-height: 1.45; }
        .fz-foryou .fz-offer-icon {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; margin-top: 1px;
          background: var(--fz-green-tint); color: var(--fz-green-deep);
          display: flex; align-items: center; justify-content: center;
        }

        /* Guarantee */
        .fz-guarantee {
          display: flex; flex-direction: column; gap: 2px; margin-bottom: 2rem;
          padding: 1rem 1.3rem; border: 1px dashed var(--fz-green); border-radius: var(--fz-radius); background: var(--fz-green-tint);
        }
        .fz-guarantee strong { font-size: 0.95rem; color: var(--fz-green-deep); }
        .fz-guarantee span { font-size: 0.88rem; color: var(--fz-muted); line-height: 1.5; }

        /* Exam trace */
        .fz-trace {
          display: flex; align-items: center; justify-content: space-between; gap: 1.25rem; flex-wrap: wrap;
          background: var(--fz-panel); border: 1px solid var(--fz-green-line); border-radius: var(--fz-radius);
          padding: 1.2rem 1.5rem; margin-bottom: 3rem;
        }
        .fz-trace > div { flex: 1; min-width: 220px; }
        .fz-trace strong { display: block; font-size: 0.98rem; font-weight: 600; margin-bottom: 3px; }
        .fz-trace span { font-size: 0.88rem; color: var(--fz-muted); line-height: 1.5; }

        /* Final CTA */
        .fz-final { text-align: center; background: var(--fz-green-deep); color: #fff; border-radius: var(--fz-radius); padding: 3.6rem 1.5rem; margin-bottom: 3rem; }
        .fz-final h3 { font-size: clamp(1.3rem, 3vw, 1.7rem); font-weight: 600; letter-spacing: -0.01em; line-height: 1.2; margin: 0 auto 0.6rem; max-width: 24ch; }
        .fz-final p { font-size: 0.95rem; color: #d4e2ca; margin: 0 auto 1.3rem; max-width: 46ch; line-height: 1.55; }
        .fz-final .fz-cta-btn { background: #fff; color: var(--fz-green-deep); padding: 0.85rem 1.5rem; font-size: 0.98rem; font-weight: 600; }
        .fz-final .fz-cta-btn:hover { background: var(--fz-green-tint); }
        .fz-final-note { margin-top: 0.8rem; font-size: 0.82rem; color: #d4e2ca; }

        /* Method band */
        .fz-method { border-left: 3px solid var(--fz-green); padding: 0.2rem 0 0.2rem 1.3rem; margin: 0 0 3rem; }
        .fz-method h3 { font-size: clamp(1.5rem, 3.5vw, 2rem); font-weight: 600; letter-spacing: -0.02em; margin: 0 0 0.4rem; color: var(--fz-green-deep); }
        .fz-method p { font-size: 1.05rem; color: var(--fz-ink); line-height: 1.5; margin: 0; max-width: 52ch; }

        .fz-method { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; }
        .fz-method-text { flex: 1; min-width: 0; }
        .fz-pc { width: 220px; flex-shrink: 0; }
        .fz-pc svg { display: block; overflow: visible; }
        .fz-pc-lines rect { transform-box: fill-box; transform-origin: left center; animation: fz-type 6s ease-in-out infinite; }
        .fz-pc-lines rect:nth-child(2) { animation-duration: 7s; animation-delay: -1.5s; }
        .fz-pc-lines rect:nth-child(3) { animation-duration: 5.5s; animation-delay: -3s; }
        .fz-pc-lines rect:nth-child(4) { animation-duration: 6.5s; animation-delay: -0.8s; }
        .fz-pc-lines rect:nth-child(5) { animation-duration: 7.5s; animation-delay: -2.4s; }
        .fz-pc-snake { transform-box: fill-box; transform-origin: 50% 100%; animation: fz-breathe 4s ease-in-out infinite; }
        .fz-pc-head { transform-box: fill-box; transform-origin: 30% 80%; animation: fz-nod 2.6s ease-in-out infinite; }
        .fz-pc-pupil { animation: fz-look 5s ease-in-out infinite; }
        .fz-pc-tongue { opacity: 0; animation: fz-flick 3.2s ease-in-out infinite; }
        @keyframes fz-type { 0% { transform: scaleX(0.08) } 45%,80% { transform: scaleX(1) } 100% { transform: scaleX(0.08) } }
        @keyframes fz-breathe { 0%,100% { transform: scaleY(1) } 50% { transform: scaleY(1.025) } }
        @keyframes fz-nod { 0%,100% { transform: translateY(0) rotate(0deg) } 30% { transform: translateY(1.5px) rotate(3deg) } 60% { transform: translateY(-1px) rotate(-2deg) } }
        @keyframes fz-look { 0%,100% { transform: translate(0,0) } 30% { transform: translate(0.8px,1px) } 65% { transform: translate(-0.4px,-0.8px) } }
        @keyframes fz-flick { 0%,70%,100% { opacity: 0 } 76%,88% { opacity: 1 } }
        @media (prefers-reduced-motion: reduce) {
          .fz-pc *, .fz-pc-snake, .fz-pc-head { animation: none !important; }
        }
        @media (max-width: 640px) {
          .fz-method { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .fz-pc { width: 190px; }
        }

        /* Tailored support */
        .fz-tailor { margin-top: 1.1rem; padding: 1rem 1.2rem; background: var(--fz-panel); border: 1px dashed var(--fz-green); border-radius: 10px; }
        .fz-tailor strong { display: block; font-size: 0.95rem; font-weight: 600; color: var(--fz-green-deep); margin-bottom: 4px; }
        .fz-tailor span { font-size: 0.88rem; color: var(--fz-muted); line-height: 1.6; }

        /* For you + animation */
        .fz-foryou { display: grid; grid-template-columns: 1fr 280px; gap: 1.6rem; align-items: center; }
        .fz-anim { filter: drop-shadow(0 10px 22px rgba(28,36,26,0.18)); animation: fz-float 6s ease-in-out infinite; }
        .fz-anim svg { display: block; }
        .fz-anim text, .fz-anim .fz-a-badge, .fz-anim .fz-a-cursor { opacity: 0; }
        .fz-a-l1 { animation: fz-k1 9s infinite; }
        .fz-a-l2 { animation: fz-k2 9s infinite; }
        .fz-a-l3 { animation: fz-k3 9s infinite; }
        .fz-a-l4 { animation: fz-k4 9s infinite; }
        .fz-anim .fz-a-badge { transform-box: fill-box; transform-origin: left center; animation: fz-kb 9s infinite; }
        .fz-anim .fz-a-cursor { animation: fz-blink 1s steps(2, start) infinite; }
        .fz-anim text:first-of-type { opacity: 1; }
        @keyframes fz-k1 { 0%,3% { opacity: 0 } 8%,92% { opacity: 1 } 98%,100% { opacity: 0 } }
        @keyframes fz-k2 { 0%,16% { opacity: 0 } 22%,92% { opacity: 1 } 98%,100% { opacity: 0 } }
        @keyframes fz-k3 { 0%,36% { opacity: 0 } 42%,92% { opacity: 1 } 98%,100% { opacity: 0 } }
        @keyframes fz-k4 { 0%,50% { opacity: 0 } 56%,92% { opacity: 1 } 98%,100% { opacity: 0 } }
        @keyframes fz-kb { 0%,62% { opacity: 0; transform: scale(0.85) } 70%,92% { opacity: 1; transform: scale(1) } 98%,100% { opacity: 0; transform: scale(1) } }
        @keyframes fz-blink { to { opacity: 0.9 } }
        @keyframes fz-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-5px) } }
        @media (prefers-reduced-motion: reduce) {
          .fz-anim, .fz-anim * { animation: none !important; }
          .fz-anim text, .fz-anim .fz-a-badge { opacity: 1 !important; }
          .fz-anim .fz-a-cursor { opacity: 0 !important; }
        }
        @media (max-width: 760px) {
          .fz-foryou { grid-template-columns: 1fr; }
          .fz-anim { max-width: 320px; margin: 0 auto; width: 100%; }
        }

        /* Final box graphics */
        .fz-final { position: relative; overflow: hidden; isolation: isolate; background: linear-gradient(135deg, #3c5732 0%, #2f4627 100%); }
        .fz-final-body { position: relative; z-index: 2; }
        .fz-final-grid {
          position: absolute; inset: 0; z-index: 0; opacity: 0.5;
          background-image: radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px); background-size: 18px 18px;
          -webkit-mask-image: radial-gradient(ellipse at center, transparent 30%, #000 100%);
          mask-image: radial-gradient(ellipse at center, transparent 30%, #000 100%);
        }
        .fz-snakefield { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none; }

        /* Mobile */
        @media (max-width: 640px) {
          .formazione-section { padding: 2.75rem 1rem 4.5rem; }
          .fz-hero { margin-bottom: 1.25rem; gap: 0.9rem; }
          .fz-hero p { font-size: 1rem; }
          .fz-hero-actions .fz-cta-btn { width: 100%; justify-content: center; padding: 1.1rem 1.2rem; }
          .fz-hero-note { font-size: 0.85rem; }
          .fz-proof { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem 1rem; font-size: 0.9rem; }
          .fz-proof-rating { grid-column: 1 / -1; }
          .fz-free, .fz-offers, .fz-sets, .fz-steps-note, .fz-foryou, .fz-included, .fz-pricing, .fz-method, .fz-trace, .fz-testimonials, .fz-topics, .fz-peek { margin-bottom: 2.25rem; }
          .fz-sets { padding: 1.2rem 1.1rem; }
          .fz-sets-head { align-items: flex-start; flex-direction: column; gap: 0.5rem; }
          .fz-offer, .fz-foryou { padding: 1.15rem 1.15rem; }
          .fz-offer p, .fz-set-item span, .fz-steps span:not(.fz-step-n), .fz-tailor span { font-size: 0.92rem; }
          .fz-steps li:not(.fz-arrow) { padding: 1rem; }
          .fz-cta { flex-direction: column; align-items: stretch; text-align: left; padding: 1.25rem; }
          .fz-cta .fz-cta-btn, .fz-trace .fz-cta-btn { justify-content: center; width: 100%; padding: 0.95rem 1rem; }
          .fz-trace { padding: 1.15rem; }
          .fz-reviews-head { flex-direction: column; align-items: flex-start; gap: 0.4rem; }
          .fz-topic { font-size: 0.85rem; padding: 0.4rem 0.75rem; }
          .fz-faq summary { padding: 0.25rem 0; min-height: 44px; font-size: 1rem; }
          .fz-faq details p { font-size: 0.93rem; }
          .fz-bio { flex-direction: column; align-items: center; text-align: center; }
          .fz-bio-desc { max-width: none; }
          .fz-badges { justify-content: center; }
          .fz-badge { white-space: normal; font-size: 0.8rem; }
          .fz-final { padding: 3.4rem 1.1rem; }
          .fz-final .fz-cta-btn { width: 100%; justify-content: center; }
          .fz-sticky-cta { bottom: calc(0.75rem + env(safe-area-inset-bottom, 0px)); }
          .fz-sticky-cta a { width: calc(100% - 0.5rem); justify-content: center; padding: 0.95rem 1rem; font-size: 0.98rem; }
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
          <div className="fz-hero-text">
            {/* Titolo + logo (il logo qui è visibile solo su smartphone, di fianco al titolo) */}
            <div className="fz-hero-top">
              <h2 id="formazione-heading">Esame di Python in arrivo? <em>Ti aiuto ad arrivarci pronto.</em></h2>
              <img className="fz-hero-img fz-hero-img--mobile" src={HERO_IMAGE} alt="" aria-hidden="true" />
            </div>
            <p>Lezioni private di programmazione, individuali o in piccolo gruppo, via Discord, dal tuo livello, al tuo ritmo. Preparazione esami, progetti e tesi di laurea.</p>
            <div className="fz-hero-actions">
              <a className="fz-cta-btn" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Prenota la sessione gratuita
              </a>
            </div>
            <div className="fz-hero-note">
              {SPOTS_LEFT > 0 && <span className="fz-urgent"><i aria-hidden="true" /> Ancora {SPOTS_LEFT} {SPOTS_LEFT === 1 ? "posto" : "posti"} questo mese</span>}
              <span>Risposta {REPLY_TIME}</span>
            </div>
          </div>
          {/* Logo desktop: a destra del blocco di testo, nascosto su smartphone */}
          <img className="fz-hero-img fz-hero-img--desktop" src={HERO_IMAGE} alt="Lezioni di Python" />
        </div>

        <div className="fz-proof">
          <span className="fz-proof-rating">
            <span className="fz-stars" aria-hidden="true">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </span>
            {RATING_AVERAGE}/5
          </span>
          <span className="fz-proof-item"><strong>{REVIEWS_TOTAL}</strong> recensioni</span>
          <span className="fz-proof-item"><strong>{STUDENTS_TOTAL}</strong> studenti seguiti</span>
          <span className="fz-proof-item"><strong>{EXAM_SETS_COUNT}</strong> set di esami pronti</span>
        </div>

        <div className="fz-free">
          <span className="fz-free-dot" aria-hidden="true" />
          <div>
            <strong>Prima sessione gratuita: 30 minuti, zero impegno</strong>
            <span>Capiamo insieme di cosa hai bisogno e come posso aiutarti, prima di deciderne insieme.</span>
          </div>
        </div>

        <div className="fz-method">
          <div className="fz-method-text">
            <h3>Studia con me</h3>
            <p>Un metodo efficace e testato, che ti fa risparmiare un sacco di tempo e di frustrazioni.</p>
          </div>
          <PythonAtComputer />
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

        <div className="fz-sets">
          <div className="fz-sets-head">
            <h3>Set di esami già pronti, da esercizi d'esame reali</h3>
            <span className="fz-sets-count">Programma tra i più completi in Italia</span>
          </div>
          <p className="fz-sets-lead">
            Non parti da zero e non perdi tempo a cercare esercizi: ho già pronti set di esami costruiti
            su esercizi presi da prove d'esame reali, utilizzabili fin dalla prima lezione. Negli anni ho accumulato
            tantissime esperienze di esami di tantissime facoltà, e il materiale cresce a ogni studente che seguo.
          </p>
          <div className="fz-sets-grid">
            {EXAM_SETS.map((s) => (
              <div className="fz-set-item" key={s.title}>
                <div className="fz-offer-icon"><CheckIcon /></div>
                <div>
                  <strong>{s.title}</strong>
                  <span>{s.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="fz-tailor">
            <strong>Più il supporto è su misura, meglio funziona</strong>
            <span>
              Per aiutarti nel modo più mirato possibile, ti invito a inviarmi le prove d'esame degli anni passati
              del tuo corso, possibilmente del tuo professore. Analizzo lo stile degli esercizi e le richieste che
              tornano più spesso, e costruisco le lezioni su quello che ti troverai davvero davanti.
            </span>
          </div>
        </div>

        <div id="fz-come-funziona">
          <div className="fz-block-label fz-mono">COME FUNZIONA</div>
          <ol className="fz-steps">
            {STEPS.map((st, i) => (
              <React.Fragment key={st.title}>
                <li>
                  <span className="fz-step-n" aria-hidden="true">{i + 1}</span>
                  <div><strong>{st.title}</strong><span>{st.desc}</span></div>
                </li>
                {i < STEPS.length - 1 && <li className="fz-arrow" aria-hidden="true"><ArrowIcon /></li>}
              </React.Fragment>
            ))}
          </ol>
          <p className="fz-steps-note">Seguo studenti di <strong>tutte le facoltà</strong> e di <strong>tutte le università</strong>: se c'è Python nel tuo programma, ci lavoriamo.</p>
        </div>

        <div className="fz-foryou">
          <div className="fz-foryou-text">
            <h3>Fa per te se…</h3>
            <ul>
              {FOR_YOU.map((f) => (
                <li key={f}><span className="fz-offer-icon"><CheckIcon /></span>{f}</li>
              ))}
            </ul>
          </div>
          <CodeAnimation />
        </div>

        <div>
          <div className="fz-block-label fz-mono">COSA È INCLUSO</div>
          <ul className="fz-included">
            {INCLUDED.map((item) => (
              <li key={item}>
                <span className="fz-offer-icon"><CheckIcon /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {GUARANTEE_TEXT && (
          <div className="fz-guarantee">
            <strong>Zero rischi</strong>
            <span>Prima sessione gratuita. {GUARANTEE_TEXT}</span>
          </div>
        )}

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
            <p>Scrivimi oggi: la prima sessione è gratis.</p>
            <p>Massimo 5 nuovi studenti al mese, rispondo appena posso.</p>
          </div>
          <a className="fz-cta-btn" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Scrivimi su WhatsApp
          </a>
        </div>

        <div className="fz-reviews-head">
          <div className="fz-block-label fz-mono">COSA DICONO GLI STUDENTI</div>
          <span className="fz-reviews-score">
            <span className="fz-stars" aria-hidden="true">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </span>
            <strong>{RATING_AVERAGE}/5</strong> su {REVIEWS_TOTAL} recensioni
          </span>
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

        {hasMoreReviews && (
          <div className={`fz-peek${MORE_TESTIMONIALS.length ? "" : " is-solo"}`}>
            {MORE_TESTIMONIALS.length > 0 && (
              <div className="fz-peek-stack" aria-hidden="true">
                {MORE_TESTIMONIALS.slice(0, 2).map((t) => (
                  <div className="fz-testi" key={t.who}>
                    <p>&ldquo;{t.quote}&rdquo;</p>
                    <div className="fz-who">{t.who}</div>
                    <span className="fz-meta">{t.meta}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="fz-peek-fade">
              <span className="fz-peek-link is-static">E molti altri</span>
            </div>
          </div>
        )}

        <div className="fz-trace">
          <div>
            <strong>Hai la traccia o il programma dell'esame?</strong>
            <span>Mandamela su WhatsApp, insieme alle prove passate del tuo corso se le hai: ti dico subito da dove partire e quali set ti servono per la {EXAM_SESSION_LABEL}.</span>
          </div>
          <a className="fz-cta-btn" href={WHATSAPP_EXAM_URL} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Mandami la traccia
          </a>
        </div>

        <div className="fz-block-label fz-mono">ARGOMENTI TRATTATI</div>
        <div className="fz-topics" aria-label="Argomenti trattati">
          {TOPICS.map((t) => (
            <span className={`fz-topic${t.level === "base" ? " is-base" : t.level === "adv" ? " is-adv" : ""}`} key={t.label}>{t.label}</span>
          ))}
        </div>

        <div className="fz-block-label fz-mono">DOMANDE FREQUENTI</div>
        <div className="fz-faq">
          {FAQ.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>

        <div className="fz-final">
          <SnakeField />
          <span className="fz-final-grid" aria-hidden="true" />
          <div className="fz-final-body">
          <h3>La {EXAM_SESSION_LABEL} si avvicina: ogni settimana conta.</h3>
          <p>Scrivimi oggi, la prima sessione è gratuita e ti lascia comunque un piano di studio concreto.</p>
          <a className="fz-cta-btn" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Prenota la sessione gratuita
          </a>
          {SPOTS_LEFT > 0 && <div className="fz-final-note">Ancora {SPOTS_LEFT} {SPOTS_LEFT === 1 ? "posto" : "posti"} per nuovi studenti questo mese</div>}
          </div>
        </div>

        <div className="fz-bio">
          <img className="fz-bio-img" src={PROFILE_IMAGE} alt="Lorenzo Arcioni" />
          <div style={{ flex: 1, minWidth: 220 }}>
            <div className="fz-bio-name">Lorenzo Arcioni</div>
            <div className="fz-bio-title">Laurea in Informatica 110L e lode, Sapienza, Roma</div>
            <p className="fz-bio-desc">
              Insegno programmazione online da oltre 10 anni, con un metodo strutturato e adattato al livello
              di ognuno. Ho esperienza accademica e ho collaborato alla pubblicazione di articoli scientifici
              con diversi gruppi di ricerca.
            </p>
          </div>
          <div className="fz-badges">
            {BADGES.map((b, i) => (
              <span className={`fz-badge${i < 3 ? " is-key" : ""}`} key={b}>{b}</span>
            ))}
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