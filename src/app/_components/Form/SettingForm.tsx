"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSession } from "next-auth/react";
import GlobalLoading from "../loading/GlobalLoading";
import { resetUserPassword } from "@/api/ChangePassword.api"; // الفايل اللي في الصورة
import { ChangePasswordSchema } from "@/schemas/auth.schema";

export default function SettingsForm() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  // 1. إعداد react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof ChangePasswordSchema>>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      currentPassword: "", 
      newPassword: "",
      confirmPassword: "",
    },
  });

  // 2. دالة الإرسال
  const onSubmit = async (values: z.infer<typeof ChangePasswordSchema>) => {
    const userEmail = session?.user?.email;

    if (!userEmail) {
      return toast.error("User email not found. Please log in again.");
    }

    setIsLoading(true);
    try {
      
      const result = await resetUserPassword(userEmail, values.newPassword);

      if (result.ok) {
        toast.success("Password updated successfully!");
        reset(); 
      } else {
        toast.error(result.message || "Failed to update password");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-on-surface/2 p-6 rounded-2xl border border-on-surface/5">
      <div className="flex items-center gap-2 text-on-surface font-bold">
        <Lock size={18} />
        <h3>Change Password</h3>
      </div>

      <div className="grid gap-4">
        {/* Current Password */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-on-surface/80 ">Current Password</label>
          <input 
            {...register("currentPassword")}
            type="password" 
            placeholder="••••••••"
            className={`w-full px-4 py-2.5 bg-surface border rounded-xl focus:ring-2 focus:ring-primary outline-none text-on-surface transition-all ${
              errors.currentPassword ? "border-red-500" : "border-on-surface/10"
            }`}
          />
          {errors.currentPassword && <p className="text-red-500 text-xs mt-1">{errors.currentPassword.message}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* New Password */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-on-surface/80">New Password</label>
            <input 
              {...register("newPassword")}
              type="password" 
              placeholder="New password"
              className={`w-full px-4 py-2.5 bg-surface border rounded-xl focus:ring-2 focus:ring-primary outline-none text-on-surface transition-all ${
                errors.newPassword ? "border-red-500" : "border-on-surface/10"
              }`}
            />
            {errors.newPassword && <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>}
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-on-surface/80">Confirm New Password</label>
            <input 
              {...register("confirmPassword")}
              type="password" 
              placeholder="Confirm password"
              className={`w-full px-4 py-2.5 bg-surface border rounded-xl focus:ring-2 focus:ring-primary outline-none text-on-surface transition-all ${
                errors.confirmPassword ? "border-red-500" : "border-on-surface/10"
              }`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2
          ${isLoading 
            ? "bg-stone-700 cursor-not-allowed opacity-80" 
            : "bg-emerald-600 hover:bg-emerald-700 cursor-pointer shadow-lg shadow-emerald-900/20"
          }`}
      >
        {isLoading ? (
          <>
            <div className="relative w-6 h-6 overflow-hidden flex items-center justify-center">
              <div className="scale-[0.2] transform origin-center">
                <GlobalLoading />
              </div>
            </div>
            <span className="ml-2 font-bold text-white uppercase">Processing...</span>
          </>
        ) : (
          <span className="font-bold text-white uppercase tracking-wider">SAVE CHANGES</span>
        )}
      </button>
    </form>
  );
}