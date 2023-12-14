export const defaultLocale = 'es'
export const locales = [defaultLocale, 'es'] as const
export type Locales = (typeof locales)[number]
export const cookieName = 'i18n-locale'
