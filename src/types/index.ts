import { Locales } from "@/i18n/config"

export interface PageProps {
  readonly params: {
    readonly locale: Locales
  }
}