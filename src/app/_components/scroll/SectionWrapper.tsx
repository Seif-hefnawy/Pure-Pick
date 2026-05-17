"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ 
        once: false,    
        amount: 0.2      
      }}
      transition={{ 
        duration: 0.9, 
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      className="min-h-fit w-full"
    >
      {children}
    </motion.section>
  );
}