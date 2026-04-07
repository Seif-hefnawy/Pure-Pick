'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { DotLoader } from "react-spinners";

export default function GlobalLoading() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-md z-9999 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <DotLoader 
          color="#528968" 
          loading={loading} 
          size={70} 
        />
      </div>
    </div>
  );
}