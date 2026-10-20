import { NextRequest, NextResponse } from 'next/server';

const CANONICAL_HOST = 'outsourcedservice.com';
const WWW_HOST = `www.${CANONICAL_HOST}`;

function originalScheme(request: NextRequest) {
  const cfVisitor = request.headers.get('cf-visitor');
  if (cfVisitor) {
    try {
      const parsed = JSON.parse(cfVisitor) as { scheme?: string };
      if (parsed.scheme) return parsed.scheme.toLowerCase();
    } catch {
      // Fall through to the standard proxy header.
    }
  }
  return request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim().toLowerCase()
    ?? request.nextUrl.protocol.replace(':', '').toLowerCase();
}

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0]?.toLowerCase();
  if (host !== CANONICAL_HOST && host !== WWW_HOST) return NextResponse.next();

  if (host === WWW_HOST || originalScheme(request) !== 'https') {
    const destination = new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${CANONICAL_HOST}`);
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
