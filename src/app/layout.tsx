import { Inter } from 'next/font/google'

import './globals.css'

import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'
import { PageProps } from '@/types'
import Head from 'next/head'
import { I18nProvider } from '@/i18n/I18nProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'projectname',
  description: 'Built using Ingeno Foundation',
}

const LocaleRootLayout: FC<PropsWithChildren<PageProps>> = async ({ children, params }) => {
  return (
    <html lang={params.locale}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet" />
      </Head>
      <body className={inter.className}>
        <I18nProvider locale={params.locale} namespaces={['home']}>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}

// eslint-disable-next-line import/no-default-export
export default LocaleRootLayout
