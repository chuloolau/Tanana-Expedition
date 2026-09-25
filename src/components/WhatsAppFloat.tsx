import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import type { Lang } from '../i18n/content'

export const WHATSAPP_NUMBER = '33611583695'

const MESSAGE: Record<Lang, string> = {
  fr: 'Bonjour Patrick, je souhaiterais des informations sur les expéditions à bord de Tánana.',
  en: 'Hello Patrick, I would like some information about the expeditions aboard Tánana.',
  es: 'Hola Patrick, me gustaría recibir información sobre las expediciones a bordo de Tánana.',
}

const LABEL: Record<Lang, string> = { fr: 'Écrire sur WhatsApp', en: 'Chat on WhatsApp', es: 'Escribir por WhatsApp' }

export const whatsappHref = (lang: Lang) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE[lang])}`

// Glifo oficial de WhatsApp, un solo color
export function WhatsAppIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill={color} aria-hidden>
      <path d="M16.004 0C7.166 0 0 7.165 0 16c0 2.82.738 5.566 2.137 7.99L0 32l8.21-2.155A15.927 15.927 0 0 0 16.004 32C24.842 32 32 24.835 32 16S24.842 0 16.004 0Zm0 29.336a13.31 13.31 0 0 1-6.79-1.857l-.486-.29-4.873 1.28 1.302-4.753-.317-.5A13.252 13.252 0 0 1 2.67 16c0-7.349 5.987-13.332 13.334-13.332C23.348 2.668 29.336 8.651 29.336 16c0 7.347-5.988 13.336-13.332 13.336Zm7.301-9.99c-.4-.2-2.366-1.168-2.732-1.302-.366-.135-.633-.2-.9.2-.266.4-1.034 1.302-1.267 1.568-.234.267-.467.3-.867.1-2.366-1.184-3.92-2.115-5.484-4.797-.414-.713.414-.663 1.184-2.202.13-.267.066-.5-.033-.7-.1-.2-.9-2.169-1.233-2.97-.325-.78-.654-.674-.9-.687a16.7 16.7 0 0 0-.767-.014c-.267 0-.7.1-1.067.5-.366.4-1.4 1.368-1.4 3.337 0 1.969 1.433 3.87 1.633 4.137.2.267 2.82 4.305 6.832 6.038 2.547 1.1 3.544 1.193 4.817 1.003.776-.115 2.366-.967 2.7-1.901.332-.934.332-1.735.232-1.901-.1-.166-.366-.267-.766-.467Z" />
    </svg>
  )
}

/** Botón flotante de WhatsApp (mismo patrón que Hilux / F-150). Aparece tras bajar un 30% de pantalla. */
export function WhatsAppFloat() {
  const { lang } = useLang()
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const on = () => setVisible(window.scrollY > window.innerHeight * 0.3)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <a
      href={whatsappHref(lang)}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={LABEL[lang]}
      title={LABEL[lang]}
      className={`group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-500 hover:scale-110 sm:bottom-6 sm:right-6 sm:h-15 sm:w-15 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      style={{ backgroundColor: '#25D366', boxShadow: '0 10px 30px -6px rgba(37,211,102,0.5), 0 0 0 4px rgba(37,211,102,0.15)' }}
    >
      <WhatsAppIcon size={28} color="#FFFFFF" />
      <span className="pointer-events-none absolute inset-0 rounded-full" style={{ animation: 'wa-pulse 2.4s ease-out infinite' }} />
      {/* Etiqueta al pasar el mouse (solo escritorio) */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-white px-4 py-2 font-head text-sm font-semibold text-ink opacity-0 shadow-lg transition group-hover:opacity-100 md:block">
        {LABEL[lang]}
      </span>
      <style>{`@keyframes wa-pulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,.55)}70%{box-shadow:0 0 0 18px rgba(37,211,102,0)}100%{box-shadow:0 0 0 0 rgba(37,211,102,0)}}`}</style>
    </a>
  )
}
