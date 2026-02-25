import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'fr']

function getLocaleFromPath(pathname: string): string {
  if (pathname.startsWith('/fr')) return 'fr'
  if (pathname.startsWith('/en')) return 'en'
  return 'en'
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    const locale = getLocaleFromPath(pathname)
    const response = NextResponse.next()
    response.headers.set('x-locale', locale)
    return response
  }

  // Detect browser preferred language
  const acceptLanguage = request.headers.get('accept-language') ?? ''
  const preferFrench = acceptLanguage.toLowerCase().startsWith('fr')
  const locale = preferFrench ? 'fr' : 'en'

  request.nextUrl.pathname = `/${locale}${pathname}`
  const response = NextResponse.redirect(request.nextUrl)
  response.headers.set('x-locale', locale)
  return response
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
