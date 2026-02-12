import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isProtected =
    req.nextUrl.pathname.startsWith("/favorites") ||
    req.nextUrl.pathname.startsWith("/profile");

  if (isProtected && !req.auth) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/favorites/:path*", "/profile/:path*"],
};
