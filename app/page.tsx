"use client";

import About from "../components/about";

import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Project from "@/components/project";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="container mx-auto max-w-7xl px-6 flex-grow">
      <Intro />
      <About />
      <Experience />
      <Project />
      <Skills />
    </main>
  );
}
