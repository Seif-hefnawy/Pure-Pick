"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";


type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: AnimationType;
  duration?: number;
  className?: string; 
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = "fade-up", 
  className = "will-change-transform" 
}: Props) {
  
  
  const variants = {
  hidden: { 
    opacity: 0, 
    y: 10, 
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
      
      transition={{ 
        duration: 0.3, 
        delay: delay, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}