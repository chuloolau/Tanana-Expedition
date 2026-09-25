import { useCallback, useEffect, useState } from 'react'
import { useLang } from '../i18n'
import { img } from '../assets'
import { A } from './Header'

const DURATION = 7000

export function Hero() {
  const { t } = useLang()
  const slides = t.slides
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const go = useCallback((d: number) => setI((v) => (v + d + slides.length) % slides.length), [slides.length])

  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => go(1), DURATION)
    return () => clearTimeout(id)
  }, [i, paused, go])

  return (
    <section id="top" className="relative h-[100svh] min-h-[560px] overflow-hidden bg-brand-dark text-white"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-roledescription="carousel">
      {slides.map((s, k) => (
        <div key={k} className={`absolute inset-0 transition-opacity duration-[1400ms] ${k === i ? 'opacity-100' : 'pointer-events-none opacity-0'}`} aria-hidden={k !== i}>
          <img src={img.slides[k]} alt="" className={`h-full w-full object-cover ${k === i ? 'kenburns' : ''}`} fetchPriority={k === 0 ? 'high' : 'auto'} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/55" />
          {k === i && (
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-20 text-center">
              <p className="rise font-script text-[clamp(3.4rem,10vw,7.5rem)] leading-none drop-shadow-[0_2px_16px_rgba(0,0,0,.35)]">{s.script}</p>
              <h1 className="rise mt-3 max-w-4xl font-head text-[clamp(1.4rem,3.6vw,3rem)] font-semibold uppercase tracking-wide drop-shadow" style={{ animationDelay: '.15s' }}>{s.title}</h1>
              {s.text && <p className="rise mt-5 max-w-2xl text-lg text-white/90 md:text-xl" style={{ animationDelay: '.3s' }}>{s.text}</p>}
              <div className="rise mt-9 flex flex-wrap justify-center gap-3" style={{ animationDelay: '.45s' }}>
                {s.buttons.map((b, bi) => (
                  <A key={b.href} href={b.href} className={`btn ${bi === 0 ? 'btn-light' : 'btn-ghost'}`}>{b.label} <span aria-hidden>›</span></A>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Flechas y puntos */}
      <button onClick={() => go(-1)} aria-label="Previous" className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full text-4xl font-thin text-white/80 transition hover:bg-white/10 hover:text-white md:grid">‹</button>
      <button onClick={() => go(1)} aria-label="Next" className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full text-4xl font-thin text-white/80 transition hover:bg-white/10 hover:text-white md:grid">›</button>
      <div className="absolute inset-x-0 bottom-8 flex justify-center gap-2">
        {slides.map((_, k) => (
          <button key={k} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} className="h-1 w-10 overflow-hidden rounded-full bg-white/35">
            <span className="block h-full bg-white" style={k === i ? { animation: paused ? 'none' : `progress ${DURATION}ms linear both`, width: paused ? '100%' : undefined } : { width: k < i ? '100%' : '0%' }} />
          </button>
        ))}
      </div>
      <style>{'@keyframes progress{from{width:0}to{width:100%}}'}</style>
    </section>
  )
}
