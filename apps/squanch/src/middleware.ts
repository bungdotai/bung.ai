import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

const protectedPaths = ["/log"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (protectedPaths.some((p) => pathname.startsWith(p))) {
    const token = await getToken({ req: request });
    if (!token) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/log/:path*"],
};
