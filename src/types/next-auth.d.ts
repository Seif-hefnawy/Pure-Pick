import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  // 1. بنعرف شكل الـ User اللي بيرجع من الـ authorize
  interface User {
    id: string;
    token: string;
  }

  // 2. بنعرف شكل الـ Session عشان لما تستخدم useSession تلاقي البيانات دي
  interface Session {
    user: {
      id: string;
      token: string;
    } & DefaultSession["user"]; // بنحافظ على البيانات الأساسية زي الإيميل والصورة
  }
}

declare module "next-auth/jwt" {
  // 3. بنعرف شكل الـ Token اللي بيتحفظ في الكوكيز
  interface JWT {
    id: string;
    token: string;
  }
}