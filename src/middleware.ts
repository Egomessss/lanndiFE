import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { useAuth } from '@/hooks/auth';
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

  const hostname = req.headers.has('apx-incoming-host')
    ? req.headers.get('apx-incoming-host')
    : req.headers.get('host');


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
    '/home',
  ];

  if (hostname !== `app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}` && hostname !== 'localhost:3000') {
    console.log('Accessing domains', hostname);
    return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
  }

  // app.lanndi.com and localhost - dashboard
  // not app and localhost - either subdomain or domain

  // Check if the current path is an unprotected route
  const isUnprotectedRoute = unprotectedRoutes.includes(path);
  if (hostname === `app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}` || hostname === 'localhost:3000') {
    // Allow access to unprotected routes without session
    if (isUnprotectedRoute) {
      console.log('Accessing unprotected route:', path);
      return NextResponse.next(); // Proceed without redirecting
    }

    // Redirect to login if there's no session and trying to access protected routes
    if (!session && !isUnprotectedRoute) {
      console.log('No session, redirecting to /login');
      return NextResponse.redirect(new URL('/login', req.url));
    }

    // Redirect to home if there's a session and trying to access login/register
    if (session && (path === '/login' || path === '/register')) {
      console.log('Session exists, redirecting to /');
      return NextResponse.redirect(new URL('/', req.url));
    }

    console.log('Rewritten');
    return NextResponse.rewrite(new URL(`/dashboard${path === '/' ? '' : path}`, req.url));
  }

}