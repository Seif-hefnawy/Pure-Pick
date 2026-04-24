import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// 1. تعريف شكل البيانات اللي راجعة من الـ API بتاع Route
interface UserResponse {
  message: string;
  user: {
    name: string;
    email: string;
    role: string;
    _id: string; // الـ ID في الـ API ده بيبدأ بـ underscore
    createdAt: string;
  };
  token: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password
          }),
          headers: { "Content-Type": "application/json" }
        });

        const data: UserResponse = await res.json();

        // التأكد من نجاح عملية تسجيل الدخول بناءً على رد الـ API
        if (res.ok && data.message === "success") {
          return {
            id: data.user._id, 
            name: data.user.name,
            email: data.user.email,
            token: data.token // بنمرر الـ token عشان نحفظه في الـ Session
          };
        }
        return null;
      }
    })
  ],

  callbacks: {
    // حفظ الـ id والـ token جوه الـ JWT عشان يفضلوا معانا
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.token = user.token;
      }
      return token;
    },
    // نقل الـ id والـ token للـ session عشان نقدر نستخدمهم في الـ Frontend
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.token = token.token as string;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET, 
  pages: {
    signIn: '/login', // الصفحة اللي اليوزر هيروح لها لو الـ Auth فشل
  },
  session: {
    strategy: "jwt", // بنستخدم الـ JWT كطريقة لإدارة الجلسة
  }
};