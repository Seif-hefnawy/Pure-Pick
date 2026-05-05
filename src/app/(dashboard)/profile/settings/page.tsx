import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { User, Mail, ShieldCheck } from "lucide-react";
import { redirect } from "next/navigation";
import SettingsForm from "@/app/_components/Form/SettingForm";


export default async function SettingsPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="space-y-10">
      {/* الـ Header ثابت سيرفر */}
      <div>
        <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
          <ShieldCheck className="text-primary" /> Account Settings
        </h2>
      </div>

      {/* البيانات الشخصية ثابتة سيرفر */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-on-surface font-bold border-b border-on-surface/5 pb-2">
          <User size={18} />
          <h3>Personal Information</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-on-surface/80">Full Name</label>
            <div className="relative">
              <input 
                type="text"
                disabled
                defaultValue={session?.user?.name || ""}
                className="w-full pl-10 pr-4 py-2.5 bg-on-surface/5 border border-on-surface/5 rounded-xl text-on-surface/40 cursor-not-allowed"
              />
              <User className="absolute left-3 top-3 text-on-surface/40" size={18} />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-on-surface/80">Email Address</label>
            <div className="relative">
              <input 
                type="email" 
                disabled
                value={session?.user?.email || ""}
                className="w-full pl-10 pr-4 py-2.5 bg-on-surface/5 border border-on-surface/5 rounded-xl text-on-surface/40 cursor-not-allowed"
              />
              <Mail className="absolute left-3 top-3 text-on-surface/20" size={18} />
            </div>
            <p className="text-[10px] text-primary/60 font-medium italic">* Email is managed via your provider</p>
          </div>
        </div>
      </section>

      {/* هنا بنحط الكلاينت كومبوننت بتاعنا */}
      <SettingsForm />
    </div>
  );
}