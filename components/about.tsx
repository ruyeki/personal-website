import { motion } from "framer-motion";
import Image from "next/image";

import FadeInCenter from "./animations/motion";

import profile from "@/assets/profile.jpg";
import { title, subtitle } from "@/components/primitives";

export default function About() {
  return (
    <div className="relative min-h-screen py-20 px-4">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-bl from-violet-500/5 via-transparent to-purple-500/5" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <FadeInCenter delay={1}>
            <motion.section
              className="flex-1 max-w-2xl"
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span
                className={
                  subtitle() +
                  " text-violet-400 uppercase tracking-wider text-sm font-semibold"
                }
              >
                INTRODUCTION
              </span>
              <h2 className={title({ color: "violet" }) + " mb-6"}>
                About Me.
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-gray-300">
                  I am a Software Engineer based in Davis, CA with a passion for
                  coding and building cool products. I specialize in full-stack
                  development, and I love turning creative ideas into useful,
                  user-friendly experiences.
                </p>
                <p className="text-gray-300">
                  In my personal life, sports have always been a constant since
                  I was a kid. I started playing basketball at the age of 5 and
                  continued throughout high school and recreationally in
                  college. Lately, I&apos;ve been diving into other sports as
                  well — from the MLB to boxing to the UFC — and I&apos;ve
                  really come to enjoy the community these sports bring.
                </p>
                <p className="text-gray-300">
                  When I&apos;m not working, you&apos;ll find me playing a game
                  of pickup basketball, working out, or in bed scrolling on
                  TikTok.
                </p>
              </div>
            </motion.section>
          </FadeInCenter>

          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {/* Gradient ring around image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-opacity duration-300" />

            <div className="relative">
              <Image
                alt="Profile picture"
                className="rounded-full object-cover border-4 border-gray-800 shadow-2xl relative z-10"
                height={380}
                src={profile}
                width={380}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
