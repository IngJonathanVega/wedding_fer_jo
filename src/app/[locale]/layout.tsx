import { LocaleSwitcher } from '@/components/LocaleSwitcher'
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
      <nav className="flex flex-col md:flex-row justify-between p-3 bg-white fixed w-full top-0 z-10">
        <div className="flex items-center">
          <span className="font-semibold text-lg underline underline-offset-4 font-courgette">Fer & Jo</span>
        </div>
        <div className="flex text-sm space-x-6 mt-4 md:mt-0">
          <a href="#responsive-home" className="block md:inline">
            {t('nav.home')}
          </a>
          <a href="#responsive-our-story" className="block md:inline">
            {t('nav.out_story')}
          </a>
          <a href="#responsive-the-girls" className="block md:inline">
            {t('nav.the_girls')}
          </a>
          <a href="#responsive-the-boys" className="block md:inline">
            {t('nav.the_boys')}
          </a>
          <a href="#responsive-the-day" className="block md:inline">
            {t('nav.the_day')}
          </a>
          <a href="#responsive-faqs" className="block md:inline">
            {t('nav.faqs')}
          </a>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="flex font-courgette"><LocaleSwitcher /></div>
        </div>
      </nav>
      {children}
    </main>
  )
}
