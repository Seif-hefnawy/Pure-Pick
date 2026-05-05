import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // هنا ممكن تضيف أي منطق إضافي لو حبيت
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // لو فيه توكن يبقى مسموح له يدخل
    },
    pages: {
      signIn: "/login", // لو مش مسجل يرجعه هنا
    },
  }
);

export const config = { 
  matcher: [
    "/profile/:path*", 
    "/orders/:path*", 
    "/wishlist/:path*",
    "/addresses/:path*"
  ] 
};