import { en, type Dictionary } from '@/i18n/en'
import { fr } from '@/i18n/fr'

export type { Dictionary }
export type Locale = 'en' | 'fr'
export const locales: Locale[] = ['en', 'fr']

const dictionaries: Record<Locale, Dictionary> = { en, fr }

export function getDictionary(locale: string): Dictionary {
  return dictionaries[locale as Locale] ?? en
}
