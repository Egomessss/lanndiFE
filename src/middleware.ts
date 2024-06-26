import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
  ],
};


export function middleware(req: NextRequest) {
  /**
   * Check if there's a header with the custom domain,
   * and if not just use the host header.
   * If you're using approximated.app the default is to
   * inject the header 'apx-incoming-host' with the custom domain.
   */

  const url = req.nextUrl;

  // do something with the "domain"
  const searchParams = req.nextUrl.searchParams.toString();
  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ''
  }`;

  const session = cookies().get('isLoggedIn');

  const unprotectedRoutes = [
    '/login',
    '/register',
    '/verify-email',
    '/demo',
    '/forgot-password',
    '/password-reset'
  ];

  // app.lanndi.com and localhost - dashboard
  // not app and localhost - either subdomain or domain

  // Check if the current path is an unprotected route
  const isUnprotectedRoute = unprotectedRoutes.some(route => path.startsWith(route));
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL);

  if (!session && !isUnprotectedRoute) {
    return NextResponse.redirect(new URL('/login', req.url));
  } else if (session && (path === '/login' || path === '/register')) {
    console.log('Session exists, redirecting to /');
    return NextResponse.redirect(new URL('/', req.url));
  } else if (isUnprotectedRoute) {
    console.log('Accessing unprotected route:', path);
    return NextResponse.next(); // Proceed without redirecting
  }


}