import Timeline from "@/components/timeline";
import { title, subtitle } from "@/components/primitives";
import { motion } from "framer-motion";

export default function Experience(){
    return(
      <div className="relative min-h-screen py-20 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-tl from-violet-500/5 via-transparent to-purple-500/5"></div>

        <section id="experience" className="relative max-w-6xl mx-auto mb-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className={subtitle() + " text-violet-400 uppercase tracking-wider text-sm font-semibold"}>WHAT I HAVE DONE SO FAR</span>
            <h2 className={title({ color: "violet" }) + " mt-2"}>Work Experiences.</h2>
          </motion.div>
        </section>

        <section className="flex flex-col items-center justify-center">
          <Timeline />
        </section>
      </div>
    );
}