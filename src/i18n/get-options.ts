import { cookieName, defaultLocale, locales } from './config'

import type { InitOptions } from 'i18next'

export const getOptions = (lng = defaultLocale, namespace?: string | readonly string[]): InitOptions => {
  const defaultNS = Array.isArray(namespace) ? namespace[0] : namespace
  return {
    supportedLngs: locales,
    fallbackLng: defaultLocale,
    lng,
    defaultNS,
    ns: namespace,
    fallbackNS: defaultNS,
  }
}

export const i18nRouterConfig = {
  locales: Array.from(locales),
  defaultLocale,
  localeCookie: cookieName,
  prefixDefault: true,
}
