import Image from "next/image";
import { ShieldCheck, Truck, Star, BadgeCheck, User } from "lucide-react"; // استيراد أيقونات Lucide

import RegisterForm from "@/app/_components/Form/RegisterForm";



export default function Register() {

  return (
    <div className="relative min-h-screen w-full overflow-hidden ">
      {/* 1. الخلفية الثابتة */}
      <div className="fixed inset-0 z-[-1]">
        <Image
          src="/RegHero.png"
          alt="Curated Collection"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-stone-950/85 md:bg-linear-to-r md:from-stone-950 md:via-stone-950/30 md:to-transparent" />
      </div>

      {/* 2. المحتوى الرئيسي */}
      <div className="relative z-10 flex min-h-screen flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 md:py-0 gap-10 md:gap-24">
        {/* الجانب الأيسر: نفس تفاصيل الصورة (FreshCart Style) */}
        <section className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white">
              Welcome to <span className="text-primary">PurePick</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-300 font-medium mb-10">
              Join thousands of happy customers who enjoy fresh essentials
              delivered right to their doorstep.
            </p>

            {/* القائمة (Features List) بنفس ستايل الصورة */}
            <div className="space-y-4 md:space-y-8 mb-8 md:mb-12">
              {/* Feature 1 */}
              <div className="flex items-start gap-3 md:gap-4 text-left">
                <div className="p-2 md:p-3 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <BadgeCheck
                    className="w-5 h-5 md:w-7 md:h-7"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-white leading-tight">
                    Premium Quality
                  </h3>
                  <p className="text-stone-400 text-xs md:text-sm">
                    Premium quality products sourced from trusted suppliers.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3 md:gap-4 text-left">
                <div className="p-2 md:p-3 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <Truck className="w-5 h-5 md:w-5 md:h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-white leading-tight">
                    Fast Delivery
                  </h3>
                  <p className="text-stone-400 text-xs md:text-sm">
                    Same-day delivery available in most areas.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3 md:gap-4 text-left">
                <div className="p-2 md:p-3 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <ShieldCheck
                    className="w-5 h-5 md:w-5 md:h-5"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-white leading-tight">
                    Secure Shopping
                  </h3>
                  <p className="text-stone-400 text-xs md:text-sm">
                    Your data and payments are completely secure.
                  </p>
                </div>
              </div>
            </div>

            {/* كارد التقييم (Sarah Johnson Card) - أكثر نحافة في الموبايل */}
            <div className="bg-white/5 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/10 shadow-xl text-left">
              <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                <div className="p-2 md:p-3 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <User className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs md:text-sm">
                    Mark{" "}
                  </h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={10}
                        className="md:w-[12px]"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-stone-300 italic text-[11px] md:text-sm leading-snug md:leading-relaxed">
                "PurePick has transformed my shopping experience. Outstanding
                quality and on-time delivery."
              </p>
            </div>
          </div>
        </section>

        {/* الجانب الأيمن: الفورم (بدون تغيير في المحتوى) */}
        <section className="w-full md:w-1/2 flex justify-center md:justify-end ">
  <div className="w-full max-w-md bg-stone-900/60 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
    <div className="mb-8 text-center md:text-left">
      <h2 className="text-2xl font-bold text-white">Create Account</h2>
      <p className="text-stone-400 text-xs">
        Join our exclusive community.
      </p>
    </div>

    <RegisterForm/>
    
    <p className="mt-6 text-center text-[11px] text-stone-500">
      Already have an account? <span className="text-white font-bold hover:text-primary cursor-pointer transition-colors ml-1">Log In</span>
    </p>
  </div>
</section>
      </div>
    </div>
  );
}
