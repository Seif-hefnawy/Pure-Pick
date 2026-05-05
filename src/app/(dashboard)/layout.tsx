import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { User, MapPin, Settings, ChevronRight } from "lucide-react";
import { authOptions } from "@/app/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const menuItems = [
  { label: "My Profile", icon: User, href: "/profile" },
  { label: "My Addresses", icon: MapPin, href: "/profile/addresses" },
  { label: "Settings", icon: Settings, href: "/profile/settings" },
];

  return (
    <div className="min-h-screen bg-surface pb-10">
      {/* الجزء الأخضر العلوي (Hero Section) */}
      <div className="bg-primary pt-28 pb-16 px-4">
        <div className="container mx-auto flex items-center gap-4">
          <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center text-primary">
            <User size={32} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">My Account</h1>
            <p className="text-emerald-50 text-sm">
              Manage your addresses and account settings
            </p>
          </div>
        </div>
      </div>

      {/* الجزء السفلي (Sidebar + Content) */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="bg-surface rounded-xl shadow-sm  p-2">
              <h3 className="px-4 py-3 text-sm font-bold text-on-surface">
                My Account
              </h3>
              <nav className="space-y-1">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-sm text-on-surface hover:bg-primary/5 hover:text-primary rounded-lg transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={18} />
                      {item.label}
                    </div>
                    <ChevronRight
                      size={14}
                      className="opacity-50 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <div className="bg-surface  rounded-xl shadow-lg  p-6 min-h-100">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
