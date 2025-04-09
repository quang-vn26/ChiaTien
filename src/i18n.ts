import { getRequestConfig } from 'next-intl/server'
import { getUserLocale } from './lib/locale'

export const localeLabels = {
  'vi-VN': 'Tiếng Việt',
  'en-US': 'English',
 
} as const

export const locales: (keyof typeof localeLabels)[] = Object.keys(
  localeLabels,
) as any
export type Locale = keyof typeof localeLabels
export type Locales = ReadonlyArray<Locale>
export const defaultLocale: Locale = 'vi-VN'

export default getRequestConfig(async () => {
  const locale = await getUserLocale()

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
