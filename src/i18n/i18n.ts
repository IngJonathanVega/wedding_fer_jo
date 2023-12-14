import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

import { getOptions } from '@/i18n/get-options'

// eslint-disable-next-line import/no-default-export
export default async function initTranslations(
  locale: string,
  namespace?: string | readonly string[]
): Promise<ReturnType<typeof createInstance>> {
  const i18nInstance = createInstance()

  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(async (lng: string, namespace: string) => await import(`@/locales/${lng}/${namespace}.json`))
    )
    .init(getOptions(locale, namespace))

  return i18nInstance
}
