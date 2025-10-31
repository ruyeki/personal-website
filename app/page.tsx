"use client"
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import Timeline from "@/components/timeline";
import About from "../components/about";
import Intro from "@/components/intro";
import Experience from "@/components/experience";
import Project from "@/components/project";
import Skills from "@/components/skills";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);

  return (
    <main className="container mx-auto max-w-7xl px-6 flex-grow">
      <Intro />
      <About />
      <Experience />
      <Project />
      <Skills />
      <div className="text-center py-8">
        <h3 className="text-4xl font-extrabold">MORE COMING SOON...</h3>
      </div>
    </main>
  );
}
