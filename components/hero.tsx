"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EASE, RevealWords } from "./motion";
import { Radar } from "./radar";

const STATS = [
  { value: "42", unit: "hr", label: "On-station endurance" },
  { value: "1,900", unit: "km", label: "Combat radius" },
  { value: "SEA 5", unit: "", label: "Launch & recovery" },
  { value: "12+", unit: "", label: "Airframes per swarm" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="top" ref={ref} className="grain relative min-h-[100svh] overflow-hidden">
      {/* layered ocean backdrop */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_85%_at_50%_-10%,#0d1a26_0%,#06090f_45%,#04070c_100%)]" />
        <div className="ocean-grid absolute inset-0 animate-drift opacity-[0.5] [mask-image:radial-gradient(circle_at_50%_35%,black,transparent_72%)]" />
        <div className="absolute -left-1/4 top-1/3 size-[52rem] rounded-full bg-signal/[0.055] blur-[130px]" />
        <div className="absolute -right-1/5 top-1/4 size-[40rem] rounded-full bg-signal-deep/[0.07] blur-[120px]" />
        {/* horizon */}
        <div className="absolute inset-x-0 bottom-[22%] h-px bg-gradient-to-r from-transparent via-signal/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-abyss via-abyss/85 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-center px-6 pt-28 pb-16 lg:px-10"
      >
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-signal/70" />
                <span className="relative size-1.5 rounded-full bg-signal" />
              </span>
              <span className="eyebrow">Maritime Domain Awareness</span>
            </motion.div>

            <h1 className="display text-[clamp(2.6rem,7.4vw,5.6rem)]">
              <RevealWords
                text="The ocean is too large to watch."
                delay={0.2}
                className="block text-gradient-foam"
              />
              <RevealWords
                text="So we never stop watching it."
                delay={0.55}
                className="mt-1 block font-serif italic text-signal/90"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 1.1 }}
              className="mt-9 max-w-xl text-[1.0625rem] leading-relaxed text-mist"
            >
              Layth Aero builds long-endurance autonomous aircraft that launch from
              the deck of any vessel and operate in coordinated swarms, holding
              station for days — turning open water into a monitored, understood,
              and defensible domain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 1.25 }}
              className="mt-11 flex flex-wrap items-center gap-4"
            >
              <a
                href="#platform"
                className="group relative overflow-hidden bg-foam px-7 py-3.5 font-mono text-[11px] tracking-[0.2em] text-abyss uppercase transition-colors hover:text-foam"
              >
                <span className="relative z-10">Explore the platform</span>
                <span className="absolute inset-0 -translate-y-full bg-signal-deep transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-2.5 px-1 font-mono text-[11px] tracking-[0.2em] text-mist uppercase transition-colors hover:text-foam"
              >
                Talk to our team
                <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
            </motion.div>
          </div>

          {/* scope */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: EASE, delay: 0.7 }}
            className="relative mx-auto w-full max-w-[26rem] lg:max-w-none"
          >
            <Radar />
            <div className="mt-6 flex items-center justify-between border-t border-line pt-3 font-mono text-[9.5px] tracking-[0.18em] text-mist/70 uppercase">
              <span>Sector 7 · Strait Transit</span>
              <span className="text-signal/80">Feed live</span>
            </div>
          </motion.div>
        </div>

        {/* stat rail */}
        <motion.dl
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 1.45 }}
          className="mt-20 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 lg:mt-24 lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="font-mono text-[9.5px] tracking-[0.2em] text-mist/70 uppercase">
                {s.label}
              </dt>
              <dd className="mt-2.5 font-light text-[clamp(1.6rem,3vw,2.3rem)] tracking-tight text-foam">
                {s.value}
                {s.unit ? (
                  <span className="ml-1 text-base text-mist">{s.unit}</span>
                ) : null}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
