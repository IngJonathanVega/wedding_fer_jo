import { i18nRouter } from 'next-i18n-router'

import { i18nRouterConfig } from '@/i18n/get-options'

import type { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest): NextResponse {
  return i18nRouter(request, i18nRouterConfig)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
}
