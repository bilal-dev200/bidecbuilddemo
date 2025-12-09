// import { NextResponse } from "next/server";

// // Only protect these routes
// const protectedRoutes = new Set([
//   "/listing",
//   "/account",
// ]);

// export async function middleware(request) {
//   const { pathname } = request.nextUrl;

//   // Only run middleware for protected routes
//   if (!protectedRoutes.has(pathname)) {
//     return NextResponse.next();
//   }

//   const token = request.cookies.get("auth-token")?.value;

//   // If no token, redirect to login
//   if (!token) {
//     const loginUrl = new URL("/login", request.url);
//     loginUrl.searchParams.set("redirect", pathname);
//     return NextResponse.redirect(loginUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/listing/:path*",
//     "/account/:path*",
//   ],
// };
import { NextResponse } from "next/server";

// Only protect these routes
const protectedRoutes = new Set([
  "/listing",
  "/account",
]);

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // 1️⃣ Allow static files to load normally
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/public") ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/docs") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/api") ||
    pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|webp|json)$/)
  ) {
    return NextResponse.next();
  }

  // 2️⃣ Protect only specific routes
  if (protectedRoutes.has(pathname)) {
    const token = request.cookies.get("auth-token")?.value;

    if (!token) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"], // ⭐ Apply middleware to all routes (required)
};
