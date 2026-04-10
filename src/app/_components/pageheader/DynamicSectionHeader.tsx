
import React from 'react';
// استيراد أيقونة Lucide (البكيدج)
import { Package } from 'lucide-react';

interface Props {
  title: string;          // الكلمة الأولى (المقترحة باللون الأساسي)
  subtitle: string;       // الكلمة الثانية (اللون العادي)
  className?: string;      // عشان تزود مسافات من برا
  // اختياري: لو عاوز تبعت أيقونة مختلفة في صفحة تانية، وإلا هتستخدم الـ Package
  Icon?: React.ElementType; 
}

export default function DynamicSectionHeader({ title, subtitle, className = "", Icon = Package }: Props) {
  return (
    <div className={`container mx-auto px-6 md:px-12 mb-10 mt-20 flex items-center gap-6 ${className}`}>
      
      {/* 1. المربع الملون اللي شايل الأيقونة */}
      <div className="p-4 rounded-3xl bg-primary/20 text-primary flex-shrink-0">
        <Icon className="w-4 h-4" strokeWidth={3} />
      </div>

      {/* 2. العنوان الرئيسي والفرعي */}
      <div className="space-y-1">
        <h3 className="text-3xl md:text-4xl font-black tracking-tighter">
          {/* العنوان مقسوم لملون وعادي */}
          <span className="text-primary">{title}</span>{" "}
          <span className="text-on-surface">{subtitle}</span>
        </h3>
        
        {/* اختياري: خط رفيع تحت العنوان يزود الشياكة والـ البراند */}
        <div className="w-24 h-1 bg-primary/20 rounded-full mt-1.5" />
      </div>

    </div>
  );
}