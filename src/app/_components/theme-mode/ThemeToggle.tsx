"use client";
import { Moon, Sun , } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timeout);
  }, []);
  if (!mounted) {
    return <div className="p-4 w-10 h-10" />; 
  }
  return (
    <button className="cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      
    >
      {theme === "dark" ? <Moon size={15}/> : <Sun size={15}/>}
    </button>
  );
}
