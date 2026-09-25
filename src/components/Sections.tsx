import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import { brand, gallery, img, GALLERY_PREVIEW } from '../assets'
import { A } from './Header'

/** Título de sección con el trazo de ola bajo el texto. */
function Title({ children, light = false, center = false }: { children: string; light?: boolean; center?: boolean }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <h2 className={`font-head text-[clamp(1.8rem,3.4vw,2.6rem)] font-light uppercase tracking-[.12em] ${light ? 'text-white' : 'text-brand'}`}>{children}</h2>
      <svg viewBox="0 0 120 12" className={`mt-3 h-3 w-24 ${center ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-brand/60'}`} aria-hidden>
        <path d="M0 6c10-6 20-6 30 0s20 6 30 0 20-6 30 0 20 6 30 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  )
}

export function Intro() {
  const { t } = useLang()
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="text-xl leading-relaxed text-ink/80 md:text-2xl">{t.intro.text}</p>
        <p className="mt-6 font-script text-4xl text-brand md:text-5xl">{t.intro.strong}</p>
      </div>
    </section>
  )
}

function Region({ tone, title, text, cards, images, id }: {
  tone: 'south' | 'north'; title: string; text: string; id?: string
  cards: { title: string; text: string; href: string }[]; images: string[]
}) {
  const { t } = useLang()
  const bg = tone === 'south' ? 'bg-brand' : 'bg-north'
  const single = cards.length === 1
  return (
    <div id={id} className="scroll-mt-24 grid gap-5 lg:grid-cols-4">
      <div className={`reveal flex flex-col justify-center rounded-2xl ${bg} p-8 text-white shadow-lg md:p-10`}>
        <img src={brand.picto} alt="" className="mb-5 h-14 w-14" />
        <h3 className="font-head text-3xl font-light uppercase tracking-[.14em]">{title}</h3>
        <p className="mt-4 leading-relaxed text-white/85">{text}</p>
      </div>
      <div className={`no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 lg:mx-0 lg:px-0 ${single ? 'lg:col-span-3' : 'lg:col-span-3 lg:grid lg:grid-cols-3 lg:overflow-visible'}`}>
        {cards.map((c, k) => (
          <A key={c.title} href={c.href}
            className={`reveal group relative flex shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-lg ${single ? 'w-full' : 'w-[80vw] sm:w-[340px] lg:w-auto'}`}>
            <div className={`overflow-hidden ${single ? 'aspect-[4/3] lg:aspect-[21/9]' : 'aspect-[4/3]'}`}>
              <img src={images[k]} alt={c.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h4 className="font-head text-xl font-bold">{c.title}</h4>
              <p className="mt-2 flex-1 leading-relaxed text-ink/70">{c.text}</p>
              <span className={`mt-4 font-head text-xs font-semibold uppercase tracking-[.14em] ${tone === 'south' ? 'text-brand' : 'text-north'}`}>
                {t.moment.cta} <span className="inline-block transition group-hover:translate-x-1">›</span>
              </span>
            </div>
          </A>
        ))}
      </div>
    </div>
  )
}

export function Destinations() {
  const { t } = useLang()
  return (
    <section id="destinations" className="scroll-mt-20 px-4 pb-24 md:px-8">
      <div className="mx-auto max-w-7xl space-y-5">
        <Region tone="south" title={t.south.title} text={t.south.text} cards={t.south.cards} images={img.south} />
        <Region tone="north" title={t.north.title} text={t.north.text} cards={t.north.cards} images={img.north} />
      </div>
    </section>
  )
}

export function Boat() {
  const { t } = useLang()
  const b = t.boat
  return (
    <section id="bateau" className="scroll-mt-20 bg-white px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2 md:gap-20">
        <div className="reveal">
          <Title>{b.title}</Title>
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-ink/80">
            {b.p.map((p, k) => <p key={k}>{p}</p>)}
          </div>
          <A href="/le-bateau" className="btn btn-brand mt-9">{b.cta} <span aria-hidden>›</span></A>
        </div>
        <div className="reveal relative pb-16 pl-10 md:pl-16">
          <img src={img.boat} alt="Tánana" loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-2xl" />
          <img src={img.boat2} alt="" loading="lazy" className="absolute bottom-0 left-0 aspect-[4/3] w-1/2 rounded-2xl border-[6px] border-white object-cover shadow-xl" />
        </div>
      </div>
      <div className="reveal mx-auto mt-16 flex max-w-4xl flex-col items-center gap-6 rounded-2xl bg-paper p-6 text-center sm:flex-row sm:text-left md:p-8">
        <img src={brand.rif} alt="RIF — Registre International Français" className="h-20 w-20 shrink-0 rounded-lg object-contain" />
        <p className="font-head text-lg text-ink/80">{b.rif}</p>
      </div>
    </section>
  )
}

const moreLabel = {
  fr: { more: 'Voir toutes les photos', less: 'Voir moins' },
  en: { more: 'See all photos', less: 'Show less' },
  es: { more: 'Ver todas las fotos', less: 'Ver menos' },
}

export function Expeditions() {
  const { t, lang } = useLang()
  const e = t.expeditions
  const [open, setOpen] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    if (open === null) return
    const key = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') setOpen(null)
      if (ev.key === 'ArrowRight') setOpen((v) => (v! + 1) % gallery.length)
      if (ev.key === 'ArrowLeft') setOpen((v) => (v! - 1 + gallery.length) % gallery.length)
    }
    window.addEventListener('keydown', key)
    return () => window.removeEventListener('keydown', key)
  }, [open])

  return (
    <section id="expeditions" className="scroll-mt-20 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2 md:gap-20">
        <div className="reveal order-2 md:order-1">
          <img src={img.expeditions} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl" />
        </div>
        <div className="reveal order-1 md:order-2">
          <Title>{e.title}</Title>
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-ink/80">
            {e.p.slice(0, -1).map((p, k) => <p key={k}>{p}</p>)}
            <p className="font-head text-xl font-semibold text-brand">{e.p[e.p.length - 1]}</p>
          </div>
          <A href="#destinations" className="btn btn-brand mt-9">{e.cta} <span aria-hidden>›</span></A>
        </div>
      </div>

      {/* Galería de experiencias */}
      <div className="mx-auto mt-24 max-w-7xl">
        <div className="reveal mb-8 text-center">
          <p className="font-script text-4xl text-brand md:text-5xl">{e.gallery}</p>
          <p className="mt-2 text-sm uppercase tracking-[.2em] text-mute">{e.galleryHint}</p>
        </div>
        <div className="columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
          {(showAll ? gallery : gallery.slice(0, GALLERY_PREVIEW)).map((g, k) => (
            // Las fotos extra no llevan .reveal: se montan después del observer y quedarían invisibles
            <button key={g.src} onClick={() => setOpen(k)} className={`${k < GALLERY_PREVIEW ? 'reveal ' : 'rise '}group relative mb-3 block w-full overflow-hidden rounded-xl md:mb-4`}>
              <img src={g.src} alt={g.cap[lang]} loading="lazy" className="w-full transition duration-700 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-10 text-left text-sm text-white opacity-0 transition group-hover:opacity-100">{g.cap[lang]}</span>
            </button>
          ))}
        </div>
        {gallery.length > GALLERY_PREVIEW && (
          <div className="mt-8 text-center">
            <button onClick={() => setShowAll(!showAll)} className="btn btn-brand">
              {showAll ? moreLabel[lang].less : `${moreLabel[lang].more} (${gallery.length})`} <span aria-hidden>{showAll ? '˄' : '˅'}</span>
            </button>
          </div>
        )}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <figure className="max-h-full max-w-5xl" onClick={(ev) => ev.stopPropagation()}>
            <img src={gallery[open].src} alt={gallery[open].cap[lang]} className="max-h-[80vh] w-auto rounded-lg" />
            <figcaption className="mt-3 text-center text-white/85">{gallery[open].cap[lang]}</figcaption>
          </figure>
          <button className="absolute right-4 top-4 text-3xl text-white/80 hover:text-white" aria-label="Close" onClick={() => setOpen(null)}>×</button>
          <button className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-5xl font-thin text-white/70 hover:text-white" aria-label="Previous"
            onClick={(ev) => { ev.stopPropagation(); setOpen((open - 1 + gallery.length) % gallery.length) }}>‹</button>
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-5xl font-thin text-white/70 hover:text-white" aria-label="Next"
            onClick={(ev) => { ev.stopPropagation(); setOpen((open + 1) % gallery.length) }}>›</button>
        </div>
      )}
    </section>
  )
}

export function Moment() {
  const { t } = useLang()
  const m = t.moment
  return (
    <section className="bg-brand px-4 py-24 text-white md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div className="reveal overflow-hidden rounded-2xl shadow-2xl">
          <video src={img.momentVideo} poster={img.momentPoster} autoPlay muted loop playsInline preload="metadata"
            aria-label={m.title} className="aspect-video w-full object-cover" />
        </div>
        <div className="reveal">
          <Title light>{m.kicker}</Title>
          <p className="mt-8 font-script text-6xl md:text-7xl">{m.title}</p>
          <p className="mt-5 font-head text-xl font-medium">{m.lead}</p>
          <p className="mt-4 text-lg leading-relaxed text-white/85">{m.text}</p>
          <A href="/antarctique" className="btn btn-light mt-9">{m.cta} <span aria-hidden>›</span></A>
        </div>
      </div>
    </section>
  )
}

export function Reviews() {
  const { t } = useLang()
  const r = t.reviews
  const [expanded, setExpanded] = useState<number | null>(null)
  return (
    <section id="avis" className="scroll-mt-20 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal"><Title center>{r.title}</Title></div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {r.items.map((it, k) => (
            <figure key={it.who} className="reveal flex flex-col rounded-2xl bg-white p-8 shadow-lg" style={{ transitionDelay: `${k * 100}ms` }}>
              <span className="font-script text-7xl leading-none text-brand/30" aria-hidden>“</span>
              <blockquote className={`-mt-6 leading-relaxed text-ink/80 ${expanded === k ? '' : 'line-clamp-6'}`}>{it.text}</blockquote>
              <button onClick={() => setExpanded(expanded === k ? null : k)} className="mt-3 self-start text-sm font-semibold text-brand hover:underline">
                {expanded === k ? r.less : r.more}
              </button>
              <figcaption className="mt-auto border-t border-black/5 pt-5">
                <span className="block font-head text-lg font-bold">{it.who}</span>
                <span className="text-sm text-mute">{it.trip}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 text-center"><A href="/avis" className="btn btn-brand">{r.readAll} <span aria-hidden>›</span></A></div>
      </div>
    </section>
  )
}

/** Quiénes somos + el skipper Patrick (contenido de la página "Qui sommes-nous" del sitio actual). */
export function Skipper() {
  const { t } = useLang()
  const s = t.skipper
  // Resalta el nombre de la compañía en negrita, como en el sitio original
  const bold = (txt: string) =>
    txt.split(/(TÁNANA EXP[ÉE]DI(?:TION|CIÓN)|TÁNANA)/).map((part, k) => (k % 2 ? <strong key={k} className="font-semibold text-ink">{part}</strong> : part))
  return (
    <section id="skipper" className="scroll-mt-20 px-4 py-24 md:px-8 md:py-32">
      <div className="reveal mx-auto max-w-3xl text-center">
        <Title center>{s.about}</Title>
        <p className="mt-8 font-script text-3xl text-brand md:text-4xl">{s.story[0]}</p>
        <p className="mt-4 text-lg leading-relaxed text-ink/80">{s.story[1]}</p>
      </div>

      <div className="reveal mx-auto mt-16 grid max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-[1fr_1.5fr]">
        <div className="flex flex-col items-center justify-center bg-brand px-8 py-14 text-center text-white">
          <p className="font-head text-2xl font-light">{s.kicker}</p>
          <p className="font-head text-3xl font-bold uppercase tracking-wide">{s.name}</p>
          <img src={brand.patrick} alt="Patrick Jeandidier — IAATO Antarctic Ambassador" loading="lazy"
            className="mt-8 aspect-square w-64 rounded-full object-cover shadow-2xl ring-4 ring-white/20 md:w-72" />
        </div>
        <div className="px-8 py-12 text-center md:px-14 md:py-16">
          <p className="text-lg leading-relaxed text-ink/80">{s.bio}</p>
          <blockquote className="relative mt-8 space-y-4 text-lg leading-relaxed text-ink/80">
            <span className="absolute -left-2 -top-8 font-script text-7xl leading-none text-brand/20" aria-hidden>“</span>
            {s.quote.map((q, k) => <p key={k} className="italic">{bold(q)}</p>)}
          </blockquote>
          <p className="mt-8 font-head text-lg text-brand">{s.flaw}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 border-t border-black/5 pt-8 sm:flex-row">
            <p className="text-ink/80">{s.sef}</p>
            <a href="https://www.societe-explorateurs.org" target="_blank" rel="noopener" className="shrink-0">
              <img src={brand.sef} alt="Société des Explorateurs Français" loading="lazy" className="h-24 w-24 object-contain" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
