import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { content, type Dict, type Lang } from './content'

const LANGS: Lang[] = ['fr', 'en', 'es']

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved && LANGS.includes(saved)) return saved
  } catch { /* storage bloqueado */ }
  const nav = navigator.language.slice(0, 2) as Lang
  return LANGS.includes(nav) ? nav : 'fr'
}

const Ctx = createContext<{ lang: Lang; t: Dict; setLang: (l: Lang) => void }>(null!)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)
  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch { /* noop */ }
  }, [lang])
  return <Ctx.Provider value={{ lang, t: content[lang], setLang }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
export { LANGS }
