
import React from 'react';
// استيراد أيقونة Lucide (البكيدج)
import { Package } from 'lucide-react';

interface Props {
  title: string;          
  subtitle: string;      
  className?: string;      
  Icon?: React.ElementType; 
}

export default function DynamicSectionHeader({ title, subtitle, className = "", Icon = Package }: Props) {
  return (
    <div className={`container mx-auto px-6 md:px-12  mt-5 flex items-center gap-6 ${className}`}>
      
      {/* 1. المربع الملون اللي شايل الأيقونة */}
      <div className="p-4 rounded-3xl bg-primary/20 text-primary shrink-0">
        <Icon className="w-4 h-4" strokeWidth={3} />
      </div>

      {/* 2. العنوان الرئيسي والفرعي */}
      <div className="space-y-1">
        <h3 className="text-3xl md:text-4xl font-black tracking-tighter">
          {/* العنوان مقسوم لملون وعادي */}
          <span className="text-on-surface">{title}</span>{" "}
          <span className="text-primary">{subtitle}</span>
        </h3>
        <div className="w-24 h-1 bg-primary/20 rounded-full mt-1.5" />
      </div>

    </div>
  );
}