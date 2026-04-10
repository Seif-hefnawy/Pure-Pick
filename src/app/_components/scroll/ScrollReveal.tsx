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
  className = "" 
}: Props) {
  
  // تعريف الحركات بناءً على الـ direction
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "fade-up" ? 10 : direction === "fade-down" ? -10 : 0,
      x: direction === "fade-left" ? 10 : direction === "fade-right" ? -10 : 0,
      scale: direction === "zoom-in" ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false , margin: "0px" , amount : 0.1}}
      variants={variants}
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