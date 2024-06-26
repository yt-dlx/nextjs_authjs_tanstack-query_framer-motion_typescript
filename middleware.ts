import { auth } from "./auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;

  if (
    (req.nextUrl.pathname.startsWith("/client") || req.nextUrl.pathname.startsWith("/server")) &&
    !isLoggedIn
  ) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }
});

export const config = { matcher: ["/client/:path*", "/server/:path*"] };
