import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};
function logMessage(message) {
  if (process.env.NODE_ENV === 'production') {
    // In production, you might want to send this to a logging service instead
    // or simply disable verbose logging.
  } else {
    console.log(message);
  }
}


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
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  logMessage(`Hostname: ${hostname}, Path: ${path}`);

  // rewrite root application to `/home` folder
  if (
    hostname === "localhost:3000" ||
    hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
  ) {
    return NextResponse.rewrite(
      new URL(`/${path === "/" ? "" : path}`, req.url),
    );
  }

  // rewrite everything else to `/[domain]/[slug] dynamic route
  return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));

  // const response = NextResponse.next({
  //   request: {
  //     headers: request.headers,
  //   },
  // });
  //
  // return response;
}