import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// استيراد أيقونات Lucide
import { 
  Phone, 
  Mail, 
  MapPin, 
  Truck, 
  RefreshCw, 
  ShieldCheck, 
  HeadphonesIcon,
  Send
} from 'lucide-react';

const footerSections = [
  {
    title: "Shop",
    links: [
      { name: "All Products", href: "/shop" },
      { name: "Categories", href: "/categories" },
      { name: "Brands", href: "/brands" },
      { name: "Electronics", href: "/electronics" },
      { name: "Men's Fashion", href: "/mens-fashion" },
      { name: "Women's Fashion", href: "/womens-fashion" },
    ],
  },
  {
    title: "Account",
    links: [
      { name: "My Account", href: "/account" },
      { name: "Order History", href: "/account/orders" },
      { name: "Wishlist", href: "/wishlist" },
      { name: "Shopping Cart", href: "/cart" },
      { name: "Sign In", href: "/signin" },
      { name: "Create Account", href: "/signup" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Help Center", href: "/help" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Returns & Refunds", href: "/returns" },
      { name: "Track Order", href: "/track" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] pt-20 pb-6 mt-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* الجزء العلوي: المميزات (الأيقونات الأربعة) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 pb-12 border-b border-white/5">
          {[
            { icon: Truck, title: 'Free Shipping', desc: 'On orders over 500 EGP' },
            { icon: RefreshCw, title: 'Easy Returns', desc: '14-day return policy' },
            { icon: ShieldCheck, title: 'Secure Payment', desc: '100% secure checkout' },
            { icon: HeadphonesIcon, title: '24/7 Support', desc: 'Contact us anytime' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="p-3 rounded-2xl bg-white/5 group-hover:bg-primary/10 transition-colors">
                <item.icon className="text-primary w-6 h-6" />
              </div>
              <div>
                <h5 className="text-on-surface font-bold text-sm">{item.title}</h5>
                <p className="text-on-surface-variant text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* الجزء الأوسط: الروابط والمعلومات */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          {/* البراند والوصف */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-black text-primary tracking-tighter italic">PurePick</h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Your one-stop destination for quality products. From fashion to electronics, we bring the best brands at competitive prices.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <Phone size={16} className="text-primary" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <Mail size={16} className="text-primary" />
                <span>support@purepick.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <MapPin size={16} className="text-primary" />
                <span>123 Commerce St, NY 10001</span>
              </div>
            </div>
          </div>

          {/* الروابط الديناميكية */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h4 className="text-on-surface font-bold mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-on-surface-variant text-sm hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter الاشتراك */}
          <div className="lg:col-span-1 w-full">
             <h4 className="text-on-surface font-bold mb-6">Newsletter</h4>
             <p className="text-on-surface-variant text-sm mb-4">Get the latest updates and offers.</p>
             <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email.." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button className="absolute right-2 top-1.5 p-1.5 bg-primary rounded-lg text-black hover:bg-primary/80 transition-colors">
                  <Send size={16} />
                </button>
             </div>
          </div>
        </div>

        {/* الجزء السفلي: السوشيال ميديا والحقوق */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-on-surface-variant text-xs italic">
            &copy; {new Date().getFullYear()} PurePick. Built with ❤️ by Seif.
          </p>
          {/* <div className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <Link key={i} href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-on-surface-variant hover:bg-primary hover:text-black transition-all duration-300">
                <Icon size={18} />
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}