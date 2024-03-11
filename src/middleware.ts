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

  if (hostname === `app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    if (!session && path !== '/login') {
      console.log('no session');
      return NextResponse.redirect(new URL('/login', req.url));
    } else if (session && path == '/login') {
      console.log(' session');
      return NextResponse.redirect(new URL('/', req.url));
    }
    console.log('rewriten');
    return NextResponse.rewrite(
      new URL(`/app${path === '/' ? '' : path}`, req.url),
    );
  }

  if (hostname === 'localhost:3000') {
    if (!session && path !== '/login') {
      console.log('no session');
      return NextResponse.redirect(new URL('/login', req.url));
    } else if (session && path == '/login') {
      console.log(' session');
      return NextResponse.redirect(new URL('/', req.url));
    }

  }

  // // rewrite root application to `/home` folder
  // if (
  //   hostname === 'localhost:3000' ||
  //   hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
  // ) {
  //   console.log('local host rewritten');
  //   return NextResponse.rewrite(
  //     new URL(`/${path === '/' ? '' : path}`, req.url),
  //   );
  // }
  //

  // // rewrite everything else to `/[domain]/[slug] dynamic route
  if (hostname !== `app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
  }

}