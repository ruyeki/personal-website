"use client";

import { title, subtitle } from "@/components/primitives";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import FadeInCenter from "./animations/motion";
import { TypeAnimation } from 'react-type-animation';


export default function Intro() {


  return (

        <FadeInCenter delay = {1}>
        <div className="inline-block max-w-4xl text-center justify-center">
            <span className={title()}>Hi, I&apos;m&nbsp;</span>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Ryan!',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'a Software Engineer.',
                    1000,
                    'a UC Davis graduate.',
                    1000,
                    'a sports enthusiast.',
                    1000
                ]}
                wrapper="span"
                speed={25}
                style={{ fontSize: '3em', display: 'inline-block', color: 'violet'}}
                repeat={Infinity}
                />
                        <br />
            <span className={title()}>
            Welcome to my website.
            </span>
        </div>

        </FadeInCenter>

        

  );
}
