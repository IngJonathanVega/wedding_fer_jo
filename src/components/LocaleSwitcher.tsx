'use client'
import type { Locales } from '@/i18n/config'
import type { FC } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export const LocaleSwitcher: FC = () => {
  const router = useRouter()
  const currentPathname = usePathname()

  const changeLocale = (locale: Locales): void => {
    router.push(`/${locale}`)
    router.refresh()
  }

  return (
    <div className="flex space-x-2">
      <div className="cursor-pointer pr-2" onClick={() => changeLocale('en')}>
        English
      </div>
      <div className="cursor-pointer " onClick={() => changeLocale('es')}>
        Español
      </div>
    </div>
  )
}
