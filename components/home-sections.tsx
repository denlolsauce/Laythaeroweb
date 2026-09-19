"use client";

import Link from "next/link";
import { Reveal, stagger, fadeUp } from "./motion";
import { motion } from "framer-motion";
import { Swarm } from "./swarm";

/* -------------------------------- company ------------------------------ */

const STATS = [
  { value: "20+ hr", label: "Endurance on station" },
  { value: "0", label: "Runway required" },
  { value: "12", label: "Airframes per cell" },
  { value: "200 nm", label: "Mesh comms reach" },
];

export function Company() {
  return (
    <section id="company" className="relative border-t border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <p className="eyebrow mb-7">The company</p>
          <h2 className="display max-w-4xl text-[clamp(2rem,5vw,3.9rem)] text-gradient-foam">
            Layth builds the swarm VTOLs that hold the water —{" "}
            <span className="font-serif italic text-signal/90">
              so no vessel crosses it unseen.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <p className="max-w-xl text-[1.0625rem] leading-relaxed text-mist">
              We are a defense company with a single focus: persistent maritime
              surveillance from autonomous aircraft. Our vehicles launch
              vertically from any deck, fold into coordinated swarms, and stay
              airborne long after manned crews rotate home.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-xl text-[1.0625rem] leading-relaxed text-mist">
              Every airframe, autonomy stack and mesh radio is designed in-house
              around one question: what does it take to understand a contested
              stretch of ocean, continuously, without putting people at risk?
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-20 grid grid-cols-2 border border-line md:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className={`px-6 py-8 ${i > 0 ? "border-l border-line max-md:border-l-0" : ""} ${i % 2 === 1 ? "max-md:border-l max-md:border-line" : ""} ${i > 1 ? "max-md:border-t max-md:border-line" : ""}`}
            >
              <div className="display text-3xl text-foam lg:text-4xl">{s.value}</div>
              <div className="mt-3 font-mono text-[9.5px] tracking-[0.18em] text-mist/70 uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------- product ------------------------------- */

export function Product() {
  return (
    <section id="platform" className="grain relative overflow-hidden border-t border-line">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(100%_90%_at_80%_0%,#0c1824_0%,#04070c_60%)]" />
      <div className="ocean-grid absolute inset-0 -z-10 animate-drift opacity-25 [mask-image:radial-gradient(circle_at_80%_20%,black,transparent_65%)]" />

      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-7">The platform</p>
            <h2 className="display text-[clamp(2.4rem,6vw,4.8rem)] text-gradient-foam">
              Smenos
              <span className="mt-1 block font-serif italic text-[0.55em] text-signal/90">
                the swarm VTOL system.
              </span>
            </h2>
            <p className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-mist">
              Smenos is a cell of long-endurance VTOL aircraft that launch from a
              ship&rsquo;s deck, share one sensor picture across a mesh network,
              and task themselves against the contacts that matter. One operator
              commands the swarm; the swarm does the rest.
            </p>
            <ul className="mt-9 space-y-3.5">
              {[
                "Vertical launch and recovery from any vessel",
                "Distributed tasking — no single point of failure",
                "Fused EO/IR and AIS picture, tracked for days",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3.5 text-[0.95rem] text-mist">
                  <span className="mt-[7px] block size-[5px] rotate-45 bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/smenos"
              className="group mt-11 inline-flex items-center gap-3 border border-line px-6 py-3.5 font-mono text-[11px] tracking-[0.2em] text-foam uppercase transition-all duration-300 hover:border-signal/60 hover:bg-signal/5 hover:text-signal"
            >
              Explore Smenos
              <span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
            <Swarm />
            <div className="mt-6 flex items-center justify-between border-t border-line pt-3 font-mono text-[9.5px] tracking-[0.18em] text-mist/70 uppercase">
              <span>Smenos cell · 12 airframes</span>
              <span className="text-signal/80">Autonomous</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- capabilities ---------------------------- */

const CAPABILITIES = [
  {
    num: "01",
    title: "Deck-launched VTOL",
    body: "No runway, no catapult, no recovery net. A Smenos cell operates from a helideck-sized footprint on vessels that were never designed to carry aircraft.",
  },
  {
    num: "02",
    title: "Swarm autonomy",
    body: "Airframes share tracks, divide search patterns and re-plan around losses in flight. The swarm degrades gracefully — it never stops working.",
  },
  {
    num: "03",
    title: "Persistent ISR",
    body: "Long-endurance airframes rotate on and off station so coverage never lapses. Weeks of continuous watch, sustained by a crew of one.",
  },
  {
    num: "04",
    title: "Contested comms",
    body: "A self-healing mesh links every airframe to the ship. Jamming one link reroutes the picture through eleven others.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative border-t border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-7">Capabilities</p>
            <h2 className="display max-w-2xl text-[clamp(2rem,4.6vw,3.6rem)] text-gradient-foam">
              Built for the open ocean,{" "}
              <span className="font-serif italic text-signal/90">not the brochure.</span>
            </h2>
          </div>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid gap-px border border-line bg-line md:grid-cols-2"
        >
          {CAPABILITIES.map((c) => (
            <motion.div
              key={c.num}
              variants={fadeUp}
              className="group bg-hull px-8 py-10 transition-colors duration-500 hover:bg-slate-deep"
            >
              <div className="font-mono text-[10px] tracking-[0.22em] text-signal/70">
                {c.num}
              </div>
              <h3 className="mt-5 text-xl font-light tracking-[-0.01em] text-foam">
                {c.title}
              </h3>
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-mist">
                {c.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
