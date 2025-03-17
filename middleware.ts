import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const user = request.cookies.get("user")?.value;
  const path = request.nextUrl.pathname;

  // If no user is logged in and trying to access protected routes
  if (
    !user &&
    (path.startsWith("/facility") || path.startsWith("/professional"))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (user) {
    const userData = JSON.parse(user);

    // Redirect facility users trying to access professional routes
    if (
      userData.role === "healthcare_facility" &&
      path.startsWith("/professional")
    ) {
      return NextResponse.redirect(new URL("/facility/dashboard", request.url));
    }

    // Redirect professional users trying to access facility routes
    if (
      userData.role === "healthcare_professional" &&
      path.startsWith("/facility")
    ) {
      return NextResponse.redirect(
        new URL("/professional/dashboard", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/facility/:path*", "/professional/:path*"],
};
