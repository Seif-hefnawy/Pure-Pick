"use client";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import React from "react";
import { useForm } from "react-hook-form";

import { RegisterSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterForm() {
    
  const form = useForm({
    resolver:zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      
    },
  });
const { register, handleSubmit, formState: { errors } } = form;
  function handleRegister(data: any) {
    console.log(data);
  }
  return (
    <>
      <form onSubmit={form.handleSubmit(handleRegister)}>
        {/* Inputs Group */}
        <div className="space-y-3">
          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold uppercase tracking-widest text-stone-400 ml-1">
              Enter your name
            </label>
            <input
              {...form.register("name")}
              type="text"
              className={`w-full bg-stone-800/50 border ${errors.name ? 'border-red-500/50' : 'border-white/5'} rounded-xl px-4 py-3.5 text-white outline-none focus:ring-1 focus:ring-primary/50 text-sm transition-all`}
              placeholder="Ahmed"
            />
            {errors.name && <span className="text-red-500 text-[10px] ml-1">{errors.name.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold uppercase tracking-widest text-stone-400 ml-1">
              Enter your email
            </label>
            <input
              {...form.register("email")}
              type="email"
              className={`w-full bg-stone-800/50 border ${errors.email ? 'border-red-500/50' : 'border-white/5'} rounded-xl px-4 py-3.5 text-white outline-none focus:ring-1 focus:ring-primary/50 text-sm transition-all`}
              placeholder="ahmed@example.com"
              autoComplete="new-email"
            />
            {errors.email && <span className="text-red-500 text-[10px] ml-1">{errors.email.message}</span>}
          </div>

          <div className="grid grid-cols-2 gap-3 text-left">
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
                className={`bg-stone-800/50 border ${errors.password ? 'border-red-500/50' : 'border-white/5'} rounded-xl px-4 py-3.5 text-white outline-none focus:ring-1 focus:ring-primary/50 text-sm transition-all`}
                placeholder="****"
                autoComplete="new-password"
                type="password"
              />
              {errors.password && <span className="text-red-500 text-[10px] ml-1">{errors.password.message}</span>}
            </div>

            {/* العمود الثاني: التأكيد */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirmPassword"
                className="text-[11px] font-bold uppercase tracking-widest text-stone-400 ml-1"
              >
                Confirm Password
              </label>
              <input
                {...form.register("rePassword")}
                className={`bg-stone-800/50 border ${errors.rePassword ? 'border-red-500/50' : 'border-white/5'} rounded-xl px-4 py-3.5 text-white outline-none focus:ring-1 focus:ring-primary/50 text-sm transition-all`}
                placeholder="****"
                autoComplete="new-password"
                type="password"
              />
              {errors.rePassword && <span className="text-red-500 text-[10px] ml-1">{errors.rePassword.message}</span>}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold uppercase tracking-widest text-stone-400 ml-1">
              Phone Number
            </label>
            <input
            {...form.register("phone")}
              type="tel"
              className={`w-full bg-stone-800/50 border ${errors.phone ? 'border-red-500/50' : 'border-white/5'} rounded-xl px-4 py-3.5 text-white outline-none focus:ring-1 focus:ring-primary/50 text-sm transition-all`}
              placeholder="887-857-4388"
            />
            {errors.phone && <span className="text-red-500 text-[10px] ml-1">{errors.phone.message}</span>}
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
          className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all text-xs uppercase tracking-widest"
        >
          Sign Up Now
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
