import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"


export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      // ... الكود اللي فات
      async authorize(credentials) {
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password
          }),
          headers: { "Content-Type": "application/json" }
        })

        const data = await res.json()

        // الـ API بتاع Route بيرجع كلمة success في الـ message
        if (res.ok && data.message === "success") {
          return {
            id: data.user._id, // ركز إنها _id في الـ API ده
            name: data.user.name,
            email: data.user.email,
            token: data.token
          }
        }
        return null 
      }
    })
  ],
  // ضيف السطر ده تحت الـ providers عشان يربط بالـ .env
  secret: process.env.NEXTAUTH_SECRET, 
  pages: {
    signIn: '/login', // عشان لو حصل مشكلة يرجعك هنا
  }
}
