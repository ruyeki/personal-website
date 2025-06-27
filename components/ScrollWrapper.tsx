"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
  const smoother = useRef<ScrollSmoother | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    smoother.current = ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });

    return () => {
      smoother.current?.kill();
    };
  }, []);

  return <>{children}</>;
}
