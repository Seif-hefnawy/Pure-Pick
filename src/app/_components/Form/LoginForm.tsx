"use client";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";
import GlobalLoading from "../loading/GlobalLoading";
import { loginrUser } from "@/app/api/login.api";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    formState: { errors },
  } = form;
  async function handleRegister(data: LoginSchemaType) {
    setIsLoading(true);
    toast.dismiss();

    try {
      const result = await loginrUser(data);
      // نجاح
      toast.success(`Welcome to PurePick!`);
      setTimeout(() => {
                router.push("/"); 
            }, 1500);
      // هنا ممكن تعمل Redirect بعد النجاح
    } catch (error: any) {
      // فشل
      toast.error(error.message || "Login failed");
    } finally {
      setIsLoading(false); // 2. وقف اللودينج في الحالتين
    }
    
  }

  return (
    <>
      <form onSubmit={form.handleSubmit(handleRegister)}>
        {/* Inputs Group */}
        <div className="space-y-9">
          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold uppercase tracking-widest text-stone-400 ml-1">
              Enter your email
            </label>
            <input
              {...form.register("email")}
              type="email"
              className={`w-full bg-stone-800/50 border ${errors.email ? "border-red-500/50" : "border-white/5"} rounded-xl px-4 py-3.5 text-white outline-none focus:ring-1 focus:ring-primary/50 text-sm transition-all`}
              placeholder="ahmed@example.com"
              autoComplete="new-email"
            />
            {errors.email && (
              <span className="text-red-500 text-[10px] ml-1">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            {/* العمود الأول: الباسورد */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-[11px] font-bold uppercase tracking-widest text-stone-400 ml-1"
              >
                Password
              </label>
              <input
                {...form.register("password")}
                id="password"
                className={`bg-stone-800/50 border ${errors.password ? "border-red-500/50" : "border-white/5"} rounded-xl px-4 py-3.5 text-white outline-none focus:ring-1 focus:ring-primary/50 text-sm transition-all`}
                placeholder="****"
                autoComplete="new-password"
                type="password"
              />
              {errors.password && (
                <span className="text-red-500 text-[10px] ml-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* العمود الثاني: التأكيد */}
          </div>
        </div>

        {/* Checkbox Section */}
        <div className="flex flex-col gap-1">
          <div className="flex items-start gap-3 py-2">
            <input
              //   {...form.register("terms")}
              type="checkbox"
              id="terms"
              className="mt-1 w-4 h-4 rounded border-white/10 bg-stone-800 text-primary focus:ring-primary/50 focus:ring-offset-0"
            />
            <label
              htmlFor="terms"
              className="text-[13px] text-stone-400 leading-tight pt-1 cursor-pointer select-none"
            >
              I agree to the{" "}
              <span className="text-primary hover:underline cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-primary hover:underline cursor-pointer">
                Privacy Policy
              </span>
            </label>
          </div>
          {/* {errors.terms && <span className="text-red-500 text-[10px] ml-1">{errors.terms.message}</span>} */}
        </div>

        <button
          type="submit"
          disabled={isLoading} // 3. بيمنع الكليك ويخلي الزرار disabled
          className={`w-full py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2
    ${
      isLoading
        ? "bg-stone-700 cursor-not-allowed opacity-80" // 4. شكل الزرار والماوس وقت اللودينج
        : "bg-emerald-600 hover:bg-emerald-700 cursor-pointer"
    }`}
        >
          {isLoading ? (
            <>
              {/* الحاوية دي هي اللي هتحجم اللودينج بتاعك بالعافية */}
              <div className="relative w-6 h-6 overflow-hidden flex items-center justify-center">
                <div className="scale-[0.2] transform origin-center">
                  <GlobalLoading />
                </div>
              </div>
              <span className="ml-2">Processing...</span>
            </>
          ) : (
            "SIGN IN NOW"
          )}
        </button>

        {/* Divider */}
        <div className="relative flex items-center py-2">
          <div className="grow border-t border-white/5"></div>
          <span className="shrink mx-4 text-[10px] uppercase tracking-widest text-stone-500 font-bold">
            Or continue with
          </span>
          <div className="grow border-t border-white/5"></div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 rounded-xl text-white text-xs font-semibold hover:bg-white/10 transition-all active:scale-[0.98]"
          >
            <FaGoogle className="text-[14px] text-white" />
            Google
          </button>

          {/* Facebook Button */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 rounded-xl text-white text-xs font-semibold hover:bg-white/10 transition-all active:scale-[0.98]"
          >
            <FaFacebookF className="text-[14px] text-[#1877F2]" />
            Facebook
          </button>
        </div>
      </form>
    </>
  );
}
