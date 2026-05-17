# 🚀 Pure-Pick | The Curated Sanctuary
[![Live Demo](https://img.shields.io/badge/demo-live-emerald.svg)](https://pure-pick-chi.vercel.app/)
Pure-Pick: A high-performance luxury e-commerce experience built with Next.js 15, featuring real-time state synchronization and seamless full-stack integration.
---

## 🛠️ Tech Stack & Tools

### 🏗️ Core Frameworks
- **Framework:** Next.js 15 (App Router & Turbopack enabled)
- **Library:** React 19 (React Compiler Optimized)
- **Language:** TypeScript (Strict Type Safety)

### 🔐 Authentication & Session
- **Next-Auth (Auth.js):** Secure session management across Server and Client components
- **JWT Integration:** Token-based authentication for secure backend API communication

### 📋 State Management & Forms
- **Zustand:** Global cart state management with real-time sync between Navbar and Checkout
- **React Hook Form:** High-performance, flexible form handling
- **Zod:** TypeScript-first schema declaration and data validation

### 🎨 Styling & UI
- **Styling:** Tailwind CSS 4 with `tailwindcss-animate` for premium transitions
- **Icons:** Lucide React & React Icons
- **Theme:** Next-Themes (Flawless Dark/Light mode support)
- **Feedback:** React Hot Toast for interactive user notifications

---

## ✨ Key Features (Implemented)

- **Next-Gen Performance:** Fully utilizing React 19 and the React Compiler to minimize re-renders and maximize speed
- **Global Cart Sync:** Intelligent cart system where adding or removing items updates the Navbar counter and Checkout summary instantly
- **Secure Data Flow:** Fetching session tokens directly from the Server to ensure data security and fast Server-Side Rendering (SSR)
- **Dynamic Checkout:** A streamlined checkout page allowing users to update quantities or remove items with real-time price recalculation (Zero Refresh)
- **Luxury Responsive UI:** Mobile-first approach with hidden scrollbars and custom aesthetics for a premium, app-like feel

---

## 🏗️ Architecture Inside

The project follows a clean, modular engineering approach:
- **API Layer:** Backend logic is isolated within `api/` modules (e.g., `Cart.api.ts`) for maintainability
- **Hybrid Fetching:** Leveraging `getServerSession` for secure data fetching and `router.refresh()` for instant UI synchronization after mutations
- **Optimized Assets:** Advanced Next.js image optimization to ensure lightning-fast Largest Contentful Paint (LCP)

---

## 🗺️ Roadmap

| Status | Feature |
|--------|---------|
| ✅ | Registration UI & Logic - Secure system with Zod schema validation |
| ✅ | Login System - Full integration with Next-Auth and JWT persistence |
| ✅ | Shopping Cart - Complete management system (Add, Update, Remove) |
| ✅ | Dynamic Checkout - Real-time synchronization with the backend API |
| ✅ | Product Catalog - Advanced dynamic product grid implementation |
| ✅ | Category Filtering - Smart sorting and filtering for enhanced discovery |
| ✅ | Order History - Track past purchases and order status |
| ✅ | Wishlist - Save favorite items for later |

---

## 🔐 Environment Variables