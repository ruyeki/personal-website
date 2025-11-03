import { motion } from "framer-motion";

import Timeline from "@/components/timeline";
import { title, subtitle } from "@/components/primitives";

export default function Experience() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen bg-gradient-to-tl from-violet-500/5 via-transparent to-purple-500/5" />

      <section className="relative max-w-6xl mx-auto mb-12 px-4" id="experience">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span
            className={
              subtitle() +
              " text-violet-400 uppercase tracking-wider text-sm font-semibold"
            }
          >
            WHAT I HAVE DONE SO FAR
          </span>
          <h2 className={title({ color: "violet" }) + " mt-2"}>
            Work Experiences.
          </h2>
        </motion.div>
      </section>

      <section className="flex flex-col items-center justify-center px-4">
        <Timeline />
      </section>
    </div>
  );
}
