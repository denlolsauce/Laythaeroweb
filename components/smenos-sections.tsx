"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE, Reveal, RevealWords, stagger, fadeUp } from "./motion";
import { Swarm } from "./swarm";

// next/image skips basePath when unoptimized; prefix it manually (matches next.config)
const GIF_SRC = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/smenos-logo.gif`;

/* --------------------------------- hero -------------------------------- */

export function SmenosHero() {
  return (
    <section className="grain relative overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_85%_at_50%_-10%,#0d1a26_0%,#06090f_45%,#04070c_100%)]" />
        <div className="ocean-grid absolute inset-0 animate-drift opacity-40 [mask-image:radial-gradient(circle_at_50%_25%,black,transparent_70%)]" />
        <div className="absolute -left-1/4 top-1/4 size-[46rem] rounded-full bg-signal/[0.05] blur-[130px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-24 lg:px-10 lg:pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
              className="eyebrow mb-7"
            >
              Product · Swarm VTOL system
            </motion.p>
            <h1 className="display text-[clamp(3.4rem,10vw,7.5rem)]">
              <RevealWords text="SMENOS" delay={0.15} className="block text-gradient-foam" />
              <RevealWords
                text="The swarm that never blinks."
                delay={0.5}
                className="mt-2 block font-serif italic text-[0.32em] text-signal/90"
              />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 1.05 }}
              className="mt-9 max-w-xl text-[1.0625rem] leading-relaxed text-mist"
            >
              Smenos is Layth&rsquo;s autonomous swarm VTOL system: a cell of
              long-endurance aircraft that launch vertically from any deck, fuse
              their sensors into one picture, and hold a stretch of ocean under
              continuous watch — for as long as the mission demands.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 1.2 }}
              className="mt-11 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/#contact"
                className="group relative overflow-hidden bg-foam px-7 py-3.5 font-mono text-[11px] tracking-[0.2em] text-abyss uppercase transition-colors hover:text-foam"
              >
                <span className="relative z-10">Request a brief</span>
                <span className="absolute inset-0 -translate-y-full bg-signal-deep transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
              </Link>
              <a
                href="#sequence"
                className="group flex items-center gap-2.5 px-1 font-mono text-[11px] tracking-[0.2em] text-mist uppercase transition-colors hover:text-foam"
              >
                How the cell works
                <span className="transition-transform duration-500 group-hover:translate-y-1">↓</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden border border-line bg-hull">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GIF_SRC}
                alt="Smenos animated emblem"
                width={960}
                height={540}
                className="block h-auto w-full"
              />
              <div className="pointer-events-none absolute inset-0 ocean-grid opacity-20" />
            </div>
            <div className="mt-4 flex items-center justify-between font-mono text-[9.5px] tracking-[0.18em] text-mist/70 uppercase">
              <span>Smenos · Swarm VTOL system</span>
              <span className="text-signal/80">Layth Aero</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- sequence ------------------------------ */

const SEQUENCE = [
  {
    num: "01",
    title: "Launch",
    body: "A cell lifts vertically from a helideck-sized footprint — no catapult, no runway, no recovery net. From alert to airborne in minutes.",
  },
  {
    num: "02",
    title: "Swarm",
    body: "Airframes link into a self-healing mesh, share tracks, and divide the search plan between themselves. Lose one link and eleven others carry the picture.",
  },
  {
    num: "03",
    title: "Persist",
    body: "Aircraft rotate on and off station so coverage never lapses. Days of continuous watch, sustained by a single operator on the ship.",
  },
  {
    num: "04",
    title: "Detect & hand off",
    body: "EO/IR and AIS contacts are fused into one track file and cued to the operator — or directly to the effector that needs it.",
  },
];

export function Sequence() {
  return (
    <section id="sequence" className="relative border-t border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="mb-16">
          <p className="eyebrow mb-7">Mission sequence</p>
          <h2 className="display max-w-3xl text-[clamp(2rem,4.6vw,3.6rem)] text-gradient-foam">
            One operator.{" "}
            <span className="font-serif italic text-signal/90">A swarm doing the work.</span>
          </h2>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid gap-px border border-line bg-line md:grid-cols-2 xl:grid-cols-4"
        >
          {SEQUENCE.map((s) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              className="group relative bg-hull px-7 py-9 transition-colors duration-500 hover:bg-slate-deep"
            >
              <div className="font-mono text-[10px] tracking-[0.22em] text-signal/70">{s.num}</div>
              <h3 className="mt-5 text-lg font-light text-foam">{s.title}</h3>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-mist">{s.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.1} className="mx-auto mt-20 max-w-3xl">
          <Swarm />
          <div className="mt-6 flex items-center justify-between border-t border-line pt-3 font-mono text-[9.5px] tracking-[0.18em] text-mist/70 uppercase">
            <span>Cell topology · Mesh linked</span>
            <span className="text-amber-alert/85">Contact held · TRK-033</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- specs ------------------------------- */

const SPECS: [string, string][] = [
  ["Role", "Persistent maritime ISR, autonomous swarm"],
  ["Configuration", "VTOL — vertical launch & recovery, no runway"],
  ["Cell size", "12 airframes, one operator"],
  ["Endurance", "20+ hours per airframe, rotating coverage"],
  ["Sensors", "Gimballed EO/IR, AIS, optional maritime radar"],
  ["Communications", "Self-healing mesh, 200 nm reach, SATCOM relay"],
  ["Launch footprint", "Helideck-sized, any vessel class"],
  ["Command", "Swarm-level tasking — supervise, don't pilot"],
];

export function Specs() {
  return (
    <section className="grain relative overflow-hidden border-t border-line">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(100%_90%_at_20%_100%,#0c1824_0%,#04070c_60%)]" />
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow mb-7">System</p>
            <h2 className="display text-[clamp(2rem,4.6vw,3.6rem)] text-gradient-foam">
              Engineered for the{" "}
              <span className="font-serif italic text-signal/90">worst day at sea.</span>
            </h2>
            <p className="mt-8 max-w-md text-[1.0625rem] leading-relaxed text-mist">
              Salt, spray, jamming and no margin for a missed contact. Smenos is
              specified around the conditions that ground everything else.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="border-t border-line">
              {SPECS.map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-line py-4.5 sm:grid-cols-[11rem_1fr]"
                >
                  <dt className="font-mono text-[10px] tracking-[0.2em] text-mist/70 uppercase leading-relaxed">
                    {k}
                  </dt>
                  <dd className="text-[0.95rem] leading-relaxed text-foam">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 font-mono text-[9.5px] tracking-[0.16em] text-mist/50 uppercase">
              Performance figures nominal · detailed datasheet under NDA
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
