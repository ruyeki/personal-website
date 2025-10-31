"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@heroui/button";

import FadeInCenter from "./animations/motion";

import { title } from "@/components/primitives";

export default function Intro() {
  return (
    <div className="relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-500/10 animate-gradient" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600/20 via-transparent to-transparent" />

      <FadeInCenter delay={0.5}>
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
          {/* CENTERED CONTENT */}
          <div className="flex min-h-screen items-center justify-center">
            <div className="inline-block max-w-4xl text-center -mt-40 px-6">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className={title()}>Hi, I&apos;m&nbsp;</span>
                <TypeAnimation
                  className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold"
                  repeat={Infinity}
                  sequence={[
                    "Ryan!",
                    1000,
                    "a Software Engineer.",
                    1000,
                    "a UC Davis graduate.",
                    1000,
                    "a sports enthusiast.",
                    1000,
                  ]}
                  speed={25}
                  style={{ fontSize: "3em", display: "inline-block" }}
                  wrapper="span"
                />
                <br />
                <span className={title()}>Welcome to my website.</span>
              </motion.div>

              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a className="group" href="#experience">
                  <Button className="px-10 py-6 text-lg font-semibold rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/50 hover:shadow-violet-500/70 hover:scale-105 transition-all duration-300">
                    <span className="relative z-10">View My Work</span>
                  </Button>
                </a>
                <a
                  download
                  className="group"
                  href="/Ryan%20Uyeki's%20Resume.pdf"
                >
                  <Button className="px-8 py-6 text-lg rounded-xl text-white bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:bg-gray-700 hover:border-violet-500 hover:scale-105 transition-all duration-300 shadow-lg">
                    Download Resume
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </FadeInCenter>
    </div>
  );
}
