"use client";
import React from 'react'
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
export default function LogoutBtn() {

  return <>
  <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="flex items-center gap-3 p-3 rounded-2xl text-red-400 hover:bg-red-500/10 transition-all w-full text-left font-medium mt-auto cursor-pointer"
    >
      <LogOut size={20} strokeWidth={1.5} />
      <span className="text-sm">Sign Out</span>
    </button>
  
  
  
  </>
}
