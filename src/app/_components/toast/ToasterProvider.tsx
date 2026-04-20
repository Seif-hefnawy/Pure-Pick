"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster 
      position="bottom-right"
      toastOptions={{
        duration: 4000,
        style: {
          borderRadius: '12px',
          background: '#1c1917', // الخلفية الغامقة الأساسية
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.1)',
        },
        // هنا السحر: هنخصص الستايل لكل حالة
        success: {
          style: {
            background: '#064e3b', // أخضر غامق (Emerald 900)
            border: '1px solid #10b981', // أخضر فاتح للبوردر
          },
        },
        error: {
          style: {
            background: '#7f1d1d', // أحمر غامق (Red 900)
            border: '1px solid #ef4444', // أحمر فاتح للبوردر
          },
        },
      }}
    />
  );
}