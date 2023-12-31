import { Menu } from '@/components/menu'
import initTranslations from '@/i18n/i18n'
import { PageProps } from '@/types'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fer & Jo Wedding ',
  description: 'Wedding for Fernanda & Jonathan',
}

type RootLayoutProps = {
  children: React.ReactNode
} & PageProps

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  const { t } = await initTranslations(locale, ['home'])

  return (
    <main className="bg-white">
      <Menu locale={locale}/>
      {children}
    </main>
  )
}
