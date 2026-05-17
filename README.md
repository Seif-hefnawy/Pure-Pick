# 🚀 Pure-Pick | The Curated Sanctuary
[![Live Demo](https://img.shields.io/badge/demo-live-emerald.svg)](https://pure-pick-chi.vercel.app/)
**Pure-Pick** هو متجر إلكتروني عصري "Luxury E-commerce" مبني بأحدث تقنيات الـ Web، يجمع بين الأداء الخرافي وتجربة المستخدم الراقية. المشروع يطبق مفاهيم الـ Full-stack الحديثة مع إدارة ذكية للحالات والمزامنة اللحظية.

---

## 🛠️ Tech Stack & Tools

### 🏗️ Core Frameworks
- **Framework:** Next.js 15 (App Router & Turbopack enabled).
- **Library:** React 19 (React Compiler Optimized).
- **Language:** TypeScript (Strict Type Safety).

### 🔐 Authentication & Session
- **Next-Auth (Auth.js):** إدارة الجلسات (Sessions) بشكل آمن في السيرفر والكلاينت.
- **JWT Integration:** نظام تشفير التوكنات لتأمين نداءات الـ API الخاصة بالمستخدم.

### 📋 State Management & Forms
- **Zustand:** لإدارة حالة السلة (Global Cart State) والمزامنة اللحظية بين الـ Navbar والـ Checkout.
- **React Hook Form:** لتقديم نماذج (Forms) عالية الأداء.
- **Zod:** للتحقق من صحة البيانات (Schema Validation).

### 🎨 Styling & UI
- **Styling:** Tailwind CSS 4 مع نظام انيميشن `tailwindcss-animate`.
- **Icons:** Lucide React & React Icons.
- **Theme:** Next-Themes (دعم كامل للـ Dark & Light Mode).
- **Feedback:** React Hot Toast للتنبيهات التفاعلية.

---

## ✨ Key Features (Implemented)

- **Next-Gen Performance:** استغلال كامل لقدرات React 19 والـ React Compiler لتقليل الـ Re-renders.
- **Global Cart Sync:** نظام سلة مشتريات ذكي؛ عند إضافة منتج أو حذفه، يتحدث عداد السلة في الـ Navbar والـ Checkout أوتوماتيكياً.
- **Secure Flow:** جلب التوكنات مباشرة من الـ Server Session لضمان أمان البيانات وسرعة التحميل (SSR).
- **Dynamic Checkout:** صفحة دفع ديناميكية تتيح (زيادة/نقصان/حذف) المنتجات مع تحديث إجمالي السعر لحظياً بدون Refresh.
- **Luxury UI:** تصميم Responsive بالكامل، مع scrollbars مخفية، وتأثيرات بصرية تعطي إحساس الـ Mobile Apps الراقية.

---

## 🏗️ Architecture Inside

المشروع مبني على أسس هندسية منظمة:
- **API Layer:** فصل منطق الـ Backend في ملفات `Cart.api.ts` لسهولة الصيانة.
- **Hybrid Fetching:** استخدام `getServerSession` لجلب البيانات في السيرفر و `router.refresh()` لتحديث الـ UI فوراً بعد أي تعديل.
- **Optimized Assets:** استخدام تقنيات Next.js لضغط الصور وتحسين الـ LCP.

---

## 🛠️ Roadmap - Progress

- [x] **Registration UI & Logic:** نظام تسجيل كامل مع Zod Validation.
- [x] **Login System:** تكامل كامل مع Next-Auth و JWT.
- [x] **Shopping Cart:** نظام سلة متكامل (Add, Update, Remove).
- [x] **Dynamic Checkout:** ربط السلة بالبيانات الحقيقية للسيرفر.
- [ ] **Product Catalog:** تطوير نظام عرض المنتجات المتقدم.
- [ ] **Category Filtering:** فلاتر ذكية للمنتجات.

---

## 💻 Local Setup

عشان تشغل **Pure-Pick** عندك على الجهاز:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Seif-hefnawy/pure-pick.git](https://github.com/Seif-hefnawy/pure-pick.git)
   cd pure-pick