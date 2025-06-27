"use client";

import { title, subtitle } from "@/components/primitives";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import FadeInCenter from "./animations/motion";
import { TypeAnimation } from 'react-type-animation';
import { Button } from "@heroui/button";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { RetroGrid } from "@/components/magicui/retro-grid";

export default function Intro() {


  return (
<FadeInCenter delay={0.5}>
  <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">


    {/* CENTERED CONTENT */}
    <div className="flex min-h-screen items-center justify-center">
      <div className="inline-block max-w-4xl text-center -mt-40">
        <span className={title()}>Hi, I&apos;m&nbsp;</span>
        <TypeAnimation
          sequence={[
            'Ryan!',
            1000,
            'a Software Engineer.',
            1000,
            'a UC Davis graduate.',
            1000,
            'a sports enthusiast.',
            1000,
          ]}
          wrapper="span"
          speed={25}
          style={{ fontSize: '3em', display: 'inline-block', color: 'violet' }}
          repeat={Infinity}
        />
        <br />
        <span className={title()}>Welcome to my website.</span>
        <br />
        <a href="#experience">
          <Button className="mt-10 mr-5 px-10 py-6 text-lg font-semibold rounded-xl bg-violet-600 text-white hover:bg-violet-700">
            View My Work
          </Button>
        </a>
        <a href="/Ryan%20Uyeki's%20Resume.pdf" download>
          <Button className="px-8 py-6 text-lg rounded-xl text-white bg-gray-800 hover:bg-gray-900">
            Download Resume
          </Button>
        </a>
      </div>
    </div>
    </div>

</FadeInCenter>

        

  );
}
