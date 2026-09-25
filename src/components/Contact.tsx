import { useState, type FormEvent } from 'react'
import { useLang } from '../i18n'
import { brand, img } from '../assets'
import { A, EMAIL, Icon, PHONE, PHONE_TEL, SOCIAL } from './Header'
import { WhatsAppIcon, whatsappHref } from './WhatsAppFloat'
import { Devices } from './Devices'

export function Contact() {
  const { t, lang } = useLang()
  const c = t.contact
  const [f, setF] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value })

  // Prototipo sin backend: arma el mail listo para enviar a info@tanana-expedition.com
  const submit = (ev: FormEvent) => {
    ev.preventDefault()
    const body = `${c.name}: ${f.name}\n${c.email}: ${f.email}\n${c.phone}: ${f.phone}\n\n${f.message}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(f.subject || 'Tánana Expédition')}&body=${encodeURIComponent(body)}`
  }

  const field = 'w-full rounded-lg border border-black/10 bg-paper px-4 py-3 text-base outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20'
  return (
    <section id="contact" className="scroll-mt-20 bg-white px-4 py-24 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl shadow-2xl md:grid-cols-[1fr_1.2fr]">
        <div className="relative min-h-[320px] text-white">
          <img src={img.contact} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-brand-dark/20" />
          <div className="relative flex h-full flex-col justify-end p-8 md:p-12">
            <img src={brand.logoWhite} alt="Tánana Expédition" className="mb-auto h-24 w-auto self-start" />
            <h2 className="mt-10 font-head text-3xl font-light leading-tight md:text-4xl">{c.title[0]}<br />{c.title[1]}</h2>
            <p className="mt-2 font-script text-4xl">{c.cta}</p>
            <div className="mt-6 space-y-2 text-white/90">
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:underline">{Icon.phone} {PHONE}</a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:underline">{Icon.mail} {EMAIL}</a>
            </div>
            <a href={whatsappHref(lang)} target="_blank" rel="noreferrer noopener"
              className="btn mt-6 self-start bg-[#25D366] text-white hover:bg-[#1ebe5b]">
              <WhatsAppIcon size={20} color="#fff" /> WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="grid gap-4 bg-white p-8 sm:grid-cols-2 md:p-12">
          <p className="text-ink/70 sm:col-span-2">{c.text}</p>
          <label className="block"><span className="mb-1.5 block text-sm font-semibold">{c.name}</span><input required value={f.name} onChange={set('name')} className={field} autoComplete="name" /></label>
          <label className="block"><span className="mb-1.5 block text-sm font-semibold">{c.email}</span><input required type="email" value={f.email} onChange={set('email')} className={field} autoComplete="email" /></label>
          <label className="block"><span className="mb-1.5 block text-sm font-semibold">{c.phone}</span><input type="tel" value={f.phone} onChange={set('phone')} className={field} autoComplete="tel" /></label>
          <label className="block"><span className="mb-1.5 block text-sm font-semibold">{c.subject}</span><input value={f.subject} onChange={set('subject')} className={field} /></label>
          <label className="block sm:col-span-2"><span className="mb-1.5 block text-sm font-semibold">{c.message}</span><textarea required rows={5} value={f.message} onChange={set('message')} className={`${field} resize-none`} /></label>
          <label className="flex items-start gap-3 text-sm text-ink/70 sm:col-span-2">
            <input required type="checkbox" className="mt-1 h-4 w-4 accent-[#2e5086]" /> {c.consent}
          </label>
          <button type="submit" className="btn btn-brand justify-center sm:col-span-2">{c.send} <span aria-hidden>›</span></button>
        </form>
      </div>
    </section>
  )
}

export function Footer() {
  const { t } = useLang()
  const n = t.nav
  const links: [string, string][] = [
    ['#top', n.home], ['#bateau', n.boat], ['#destinations', n.destinations], ['/dates', n.program],
    ['/privatisation', n.charter], ['#avis', n.reviews], ['#skipper', n.about], ['#contact', t.topbar.contact],
  ]
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-[1fr_1.25fr_1.45fr]">
        <div>
          <img src={brand.logoWhite} alt="Tánana Expédition" className="h-24 w-auto" />
          <address className="mt-6 space-y-1.5 text-sm not-italic text-white/85">
            <p className="font-head font-semibold tracking-wide text-white">TÁNANA EXPÉDITION</p>
            <p>13 rue du Général Lionel de Marmier — 31300 Toulouse</p>
            <p><a href={`mailto:${EMAIL}`} className="hover:underline">{EMAIL}</a></p>
            <p><a href={`tel:${PHONE_TEL}`} className="hover:underline">{PHONE}</a></p>
          </address>
          <img src={brand.rif} alt="RIF" className="mt-8 h-16 w-16 rounded-lg bg-white object-contain p-1" />
        </div>
        <div>
          <p className="leading-relaxed text-white/85">{t.footer.about}</p>
          <p className="mt-8 font-head text-xs font-semibold uppercase tracking-[.2em] text-white/60">{t.footer.links}</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {links.map(([h, l]) => <li key={h}><A href={h} className="text-white/85 hover:text-white hover:underline">{l}</A></li>)}
          </ul>
        </div>
        {/* Dispositivos + redes, como el bloque del footer del sitio actual */}
        <div className="flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
          <Devices className="max-w-md" />
          <p className="mt-8 font-head text-xl font-light">{t.footer.follow}</p>
          <div className="mt-4 flex gap-4">
            <a href={SOCIAL.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="grid h-12 w-12 place-items-center rounded-full bg-white text-brand transition hover:scale-110">{Icon.instagram}</a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="grid h-12 w-12 place-items-center rounded-full bg-white text-brand transition hover:scale-110">{Icon.facebook}</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-4 py-5 text-xs text-white/60 md:px-8">
          <p>© {new Date().getFullYear()} Tánana Expédition — {t.footer.rights}</p>
          <p className="flex gap-4"><A href="/mentions-l%C3%A9gales" className="hover:text-white">{t.footer.legal}</A><A href="/confidentialite" className="hover:text-white">{t.footer.privacy}</A></p>
        </div>
      </div>
    </footer>
  )
}
