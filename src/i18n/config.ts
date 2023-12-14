export const defaultLocale = 'es'
export const locales = [defaultLocale, 'en'] as const
export type Locales = (typeof locales)[number]
export const cookieName = 'i18n-locale'
