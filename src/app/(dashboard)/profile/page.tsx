import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { Package, MapPin, Heart, Clock } from "lucide-react";
import { redirect } from "next/navigation";


export default async function ProfileDashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
      redirect("/login");
    }

  const stats = [
    { label: "Total Orders", value: "05", icon: Package, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Saved Addresses", value: "02", icon: MapPin, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Wishlist Items", value: "12", icon: Heart, color: "text-red-600", bg: "bg-red-50" },
  ];

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-2xl font-bold text-primary">Welcome back, {session?.user?.name}! 👋</h2>
        <p className="text-on-surface text-sm mt-1">From your account dashboard, you can easily check & view your recent orders.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="p-5  rounded-2xl flex items-center gap-4 shadow-lg shadow-primary/10 hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-on-surface text-xs font-medium uppercase tracking-wider">{stat.label}</p>
              <p className="text-xl font-bold text-on-surface">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" rounded-2xl overflow-hidden">
        <div className="p-4  bg-primary flex items-center gap-2">
          <Clock size={18} className="text-gray-800" />
          <h3 className="font-bold text-gray-800">Recent Orders</h3>
        </div>
        <div className="p-10 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
            <Package size={30} className="text-on-surface" />
          </div>
          <p className="text-on-surface text-sm">You haven't placed any orders yet.</p>
          <button className="mt-4 text-emerald-600 font-bold text-sm hover:underline">
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
}