"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

// حددنا أنواع الـ Animation اللي ممكن تحتاجها في الموقع كله
type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: AnimationType;
  duration?: number;
  className?: string; // عشان لو حبيت تضيف تنسيق زيادة من بره
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = "fade-up", 
  className = "will-change-transform" 
}: Props) {
  
  // تعريف الحركات بناءً على الـ direction
  const variants = {
  hidden: { 
    opacity: 0, 
    y: 10, // قلل القيمة دي لـ 10 بدل 20 أو 50
    transition: { duration: 0.3 } 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    } 
  }
};

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false , margin: "0px" , amount : 0.1}}
      // variants={variants}
      transition={{ 
        duration: 0.3, 
        delay: delay, 
        ease: [0.25, 0.1, 0.25, 1.0] // حركة Professional جداً
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}