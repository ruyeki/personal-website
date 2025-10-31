"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeInCenter({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="justify-left text-left"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}
