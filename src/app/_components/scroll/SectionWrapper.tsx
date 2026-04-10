"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} // يبدأ مختفي ومن تحت شوية
      whileInView={{ opacity: 1, y: 0 }} // يظهر لما يدخل الشاشة
      viewport={{ 
        once: false,      // لو عاوزه يختفي ويظهر كل ما تسكرول خليه false
        amount: 0.2       // يشتغل لما 20% من السكشن يدخل الشاشة
      }}
      transition={{ 
        duration: 0.9, 
        ease: [0.25, 0.1, 0.25, 1.0]  // حركة ناعمة جداً
      }}
      className="min-h-fit w-full"
    >
      {children}
    </motion.section>
  );
}