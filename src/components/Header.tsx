import { useEffect, useState, type ReactNode } from 'react'
import { useLang, LANGS } from '../i18n'
import { siteBase, type Lang } from '../i18n/content'
import { brand } from '../assets'

export const PHONE = '+33 (0)6 11 58 36 95'
export const PHONE_TEL = '+33611583695'
export const EMAIL = 'info@tanana-expedition.com'
export const SOCIAL = { instagram: 'https://www.instagram.com/tanana.expedition/', facebook: 'https://www.facebook.com/TananaExpedition' }

/** Link que resuelve anclas internas (#) o páginas del sitio actual (/ruta) según el idioma. */
export function A({ href, className, children, onClick }: { href: string; className?: string; children: ReactNode; onClick?: () => void }) {
  const { lang } = useLang()
  const ext = href.startsWith('/')
  return (
    <a href={ext ? siteBase[lang] + href : href} className={className} onClick={onClick} {...(ext ? { target: '_blank', rel: 'noopener' } : {})}>
      {children}
    </a>
  )
}

const Flag = ({ l }: { l: Lang }) => (
  <svg viewBox="0 0 3 2" className="h-3 w-[18px] rounded-[2px] shadow-sm" aria-hidden>
    {l === 'fr' && (<><rect width="1" height="2" fill="#002395" /><rect x="1" width="1" height="2" fill="#fff" /><rect x="2" width="1" height="2" fill="#ED2939" /></>)}
    {l === 'es' && (<><rect width="3" height="2" fill="#AA151B" /><rect y=".5" width="3" height="1" fill="#F1BF00" /></>)}
    {l === 'en' && (<><rect width="3" height="2" fill="#012169" /><path d="M0 0L3 2M3 0L0 2" stroke="#fff" strokeWidth=".4" /><path d="M0 0L3 2M3 0L0 2" stroke="#C8102E" strokeWidth=".15" /><path d="M1.5 0V2M0 1H3" stroke="#fff" strokeWidth=".6" /><path d="M1.5 0V2M0 1H3" stroke="#C8102E" strokeWidth=".35" /></>)}
  </svg>
)

export const Icon = {
  phone: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" /></svg>,
  instagram: <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>,
  facebook: <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden><path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.87.25-1.46 1.5-1.46h1.6V4.46A21 21 0 0 0 14.3 4.3c-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21z" /></svg>,
  mail: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>,
  chevron: <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="m6 9 6 6 6-6" /></svg>,
}

export function Header() {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const n = t.nav
  const dest = [
    ['#destinations', n.dest.antarctica], ['/norvege-lofoten', n.dest.lofoten], ['/norvege-ski-voile', n.dest.skiSail], ['/spitzberg', n.dest.spitsbergen],
  ]
  const links: [string, string][] = [['#top', n.home], ['#bateau', n.boat], ['#destinations', n.destinations], ['/dates', n.program], ['/privatisation', n.charter], ['#avis', n.reviews]]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Barra superior azul, como en el sitio actual */}
      <div className={`bg-brand text-white transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden' : 'h-9'}`}>
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-[12px] md:px-8">
          <div className="flex items-center gap-1" role="group" aria-label="Language">
            {LANGS.map((l) => (
              <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
                className={`flex items-center gap-1.5 rounded px-2 py-1 uppercase tracking-wide transition ${lang === l ? 'bg-white/20' : 'opacity-70 hover:opacity-100'}`}>
                <Flag l={l} /> {l}
              </button>
            ))}
          </div>
          <a href={`tel:${PHONE_TEL}`} className="hidden items-center gap-2 hover:underline sm:flex">{t.topbar.contact} {Icon.phone} {PHONE}</a>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline">{t.topbar.follow}</span>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="hover:opacity-80">{Icon.instagram}</a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="hover:opacity-80">{Icon.facebook}</a>
          </div>
        </div>
      </div>

      {/* Menú principal */}
      <div className={`transition-all duration-300 ${scrolled || open ? 'bg-white/95 text-ink shadow-[0_6px_24px_-16px_rgba(0,0,0,.4)] backdrop-blur' : 'bg-gradient-to-b from-black/45 to-transparent text-white'}`}>
        <nav className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 md:px-8 ${scrolled ? 'h-16' : 'h-24'}`}>
          <a href="#top" aria-label="Tánana Expédition" onClick={() => setOpen(false)}>
            <img src={scrolled || open ? brand.logo : brand.logoWhite} alt="Tánana Expédition" className={`w-auto transition-all duration-300 ${scrolled ? 'h-12' : 'h-[76px]'}`} />
          </a>
          <ul className="hidden items-center gap-7 font-head text-[14px] font-medium lg:flex">
            {links.map(([h, l]) =>
              h === '#destinations' ? (
                <li key={h} className="group relative">
                  <a href={h} className="flex items-center gap-1 py-6 transition hover:text-brand group-hover:opacity-100">{l} {Icon.chevron}</a>
                  <ul className="invisible absolute left-1/2 top-full min-w-56 -translate-x-1/2 translate-y-2 rounded-lg bg-white py-2 text-ink opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {dest.map(([dh, dl]) => (
                      <li key={dh}><A href={dh} className="block px-5 py-2.5 text-[14px] hover:bg-paper hover:text-brand">{dl}</A></li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={h}><A href={h} className="py-6 transition hover:text-brand">{l}</A></li>
              ),
            )}
            <li><A href="#skipper" className="py-6 transition hover:text-brand">{n.about}</A></li>
          </ul>
          <button className="p-2 lg:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className={`block h-0.5 w-6 bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`mt-1.5 block h-0.5 w-6 bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span className={`mt-1.5 block h-0.5 w-6 bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </nav>

        {open && (
          <div className="max-h-[calc(100svh-6rem)] overflow-y-auto border-t border-black/5 px-4 pb-6 lg:hidden">
            <ul className="font-head text-lg">
              {links.map(([h, l]) => (
                <li key={h} className="border-b border-black/5">
                  <A href={h} onClick={() => setOpen(false)} className="block py-3.5">{l}</A>
                  {h === '#destinations' && (
                    <ul className="-mt-1 mb-3 space-y-1 pl-4 text-base text-mute">
                      {dest.map(([dh, dl]) => <li key={dh}><A href={dh} onClick={() => setOpen(false)} className="block py-1">{dl}</A></li>)}
                    </ul>
                  )}
                </li>
              ))}
              <li><A href="#skipper" onClick={() => setOpen(false)} className="block py-3.5">{n.about}</A></li>
            </ul>
            <a href={`tel:${PHONE_TEL}`} className="mt-4 flex items-center gap-2 text-brand">{Icon.phone} {PHONE}</a>
          </div>
        )}
      </div>
    </header>
  )
}
