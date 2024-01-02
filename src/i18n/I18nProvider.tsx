'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';

import initTranslations from '@/i18n/i18n';

import type { I18nInstance } from '@/i18n/types';
import type { i18n as I18n } from 'i18next';
import type { FC, PropsWithChildren } from 'react';

type I18nProviderProps = {
  readonly locale: string;
  readonly namespaces?: string | readonly string[];
};

export const I18nProvider: FC<PropsWithChildren<I18nProviderProps>> = ({ children, locale, namespaces }) => {
  const [instance, setInstance] = useState<I18nInstance | undefined>();
  const defaultNS = Array.isArray(namespaces) ? namespaces[0] : namespaces;

  useEffect(() => {
    const init = async (): Promise<void> => {
      if (!instance) {
        const newInstance = await initTranslations(locale, namespaces);
        setInstance(newInstance);
      } else {
        if (locale && instance.language !== locale) {
          console.log('changeLanguage', locale);
          await instance.changeLanguage(locale);
        }
      }
    };

    void init();
  }, [instance, locale, namespaces]);

  if (instance == null) {
    return null;
  }

  return (
    <I18nextProvider i18n={instance as I18n} defaultNS={defaultNS}>
      {children}
    </I18nextProvider>
  );
};
