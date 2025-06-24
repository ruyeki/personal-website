"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeInCenter({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className = "justify-center text-center"
    >
      {children}
    </motion.div>
  );
}
