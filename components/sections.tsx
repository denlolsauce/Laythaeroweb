"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EASE, Reveal, RevealWords } from "./motion";
import { Mark } from "./mark";

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="mb-14 flex items-baseline gap-4 border-b border-line pb-4">
      <span className="font-mono text-[10px] tracking-[0.2em] text-signal/70">{index}</span>
      <span className="eyebrow">{children}</span>
    </div>
  );
}

/* ------------------------------- marquee ------------------------------- */

const TICKER = [
  "PERSISTENT ISR",
  "AUTONOMOUS SWARMING",
  "DECK-INDEPENDENT LAUNCH",
  "GPS-DENIED NAVIGATION",
  "MULTI-SHIP TASKING",
  "EO/IR + SAR FUSION",
  "AIS CORRELATION",
  "SEA STATE 5 RECOVERY",
];

export function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-hull/60 py-4">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center">
            {TICKER.map((t) => (
              <span key={`${dup}-${t}`} className="flex items-center">
                <span className="px-7 font-mono text-[10.5px] tracking-[0.24em] text-mist/60">
                  {t}
                </span>
                <span className="size-1 rotate-45 bg-signal/40" />
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-abyss to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-abyss to-transparent" />
    </div>
  );
}

/* ------------------------------- thesis -------------------------------- */

export function Thesis() {
  return (
    <section className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
      <SectionLabel index="01">The Problem</SectionLabel>
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal>
          <h2 className="display text-[clamp(1.9rem,4vw,3.15rem)] text-foam">
            <RevealWords text="Ninety percent of trade moves by sea." />{" "}
            <span className="font-serif italic text-mist">
              Almost none of it is watched.
            </span>
          </h2>
        </Reveal>
        <div className="space-y-7 text-[1.0625rem] leading-relaxed text-mist">
          <Reveal delay={0.08}>
            <p>
              Crewed maritime patrol is the most expensive way to look at empty
              water. A P-8 sortie costs tens of thousands of dollars per hour and
              leaves station the moment it runs low on fuel. Satellites revisit on
              a schedule an adversary can read off a calendar.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p>
              The gap is <span className="text-foam">persistence</span> — the
              ability to keep sensors over a contested strait continuously, at a
              cost that scales to the size of an ocean rather than the size of a
              defense budget.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="rule my-9" />
            <p className="font-serif text-[1.35rem] leading-snug text-foam italic">
              &ldquo;Deterrence is a function of what you can see. We are building
              the layer that never blinks.&rdquo;
            </p>
            <p className="mt-4 font-mono text-[10px] tracking-[0.2em] text-mist/70 uppercase">
              Layth Aero · Founding thesis
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- platform ------------------------------ */

const SPECS = [
  { k: "Wingspan", v: "6.4 m" },
  { k: "MTOW", v: "185 kg" },
  { k: "Payload", v: "34 kg" },
  { k: "Endurance", v: "42 hr" },
  { k: "Cruise", v: "78 kt" },
  { k: "Ceiling", v: "18,000 ft" },
  { k: "Launch", v: "Rail / VTOL" },
  { k: "Recovery", v: "Net / arrest" },
];

export function Platform() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section id="platform" className="relative border-t border-line bg-hull/40">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <SectionLabel index="02">The Platform</SectionLabel>

        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow mb-5 text-signal/80">LA-1 · Tern</p>
              <h2 className="display text-[clamp(2.1rem,4.6vw,3.6rem)] text-foam">
                One airframe.
                <br />
                <span className="font-serif italic text-mist">Any deck.</span>
              </h2>
              <p className="mt-8 max-w-lg text-[1.0625rem] leading-relaxed text-mist">
                Tern launches from a 12-metre rail or vertically from a helipad,
                needs no runway, no catapult and no host-nation basing. A composite
                airframe with a heavy-fuel engine gives it two days aloft on the
                fuel already in a ship&rsquo;s tanks. Fly one, or fly twelve as a
                single coordinated swarm.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-4 lg:grid-cols-2">
                {SPECS.map((s) => (
                  <div key={s.k} className="group bg-abyss p-4 transition-colors hover:bg-slate-deep">
                    <dt className="font-mono text-[9px] tracking-[0.18em] text-mist/60 uppercase">
                      {s.k}
                    </dt>
                    <dd className="mt-2 font-light text-lg text-foam transition-colors group-hover:text-signal">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* airframe schematic */}
          <div ref={ref} className="relative flex items-center justify-center">
            <motion.div style={{ y, rotate }} className="relative w-full max-w-[30rem]">
              <div className="absolute -inset-10 rounded-full bg-signal/[0.045] blur-[90px]" />
              <svg viewBox="0 0 400 300" className="relative w-full" aria-label="LA-1 Tern airframe schematic">
                <defs>
                  <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1d2836" />
                    <stop offset="100%" stopColor="#0b1119" />
                  </linearGradient>
                </defs>
                {/* wing */}
                <path
                  d="M200 92 L376 150 L376 162 L212 150 L212 214 L228 246 L200 238 L172 246 L188 214 L188 150 L24 162 L24 150 Z"
                  fill="url(#skin)"
                  stroke="#4fd6d0"
                  strokeOpacity="0.45"
                  strokeWidth="1.1"
                />
                {/* fuselage highlight */}
                <path d="M200 92 L200 238" stroke="#4fd6d0" strokeOpacity="0.3" strokeWidth="0.8" />
                {/* sensor turret */}
                <circle cx="200" cy="196" r="11" fill="#04070c" stroke="#4fd6d0" strokeOpacity="0.7" strokeWidth="1.1" />
                <circle cx="200" cy="196" r="4" fill="#4fd6d0" fillOpacity="0.8" />
                {/* nose */}
                <path d="M200 92 L194 104 L206 104 Z" fill="#4fd6d0" fillOpacity="0.5" />
                {/* span dimension, held above the airframe so it never overlaps the wing */}
                <g stroke="#4fd6d0" strokeOpacity="0.3" strokeWidth="0.7">
                  <path d="M24 62 L152 62" />
                  <path d="M248 62 L376 62" />
                  <path d="M24 55 L24 69" />
                  <path d="M376 55 L376 69" />
                  <path d="M24 66 L24 146" strokeOpacity="0.14" strokeDasharray="2 3" />
                  <path d="M376 66 L376 146" strokeOpacity="0.14" strokeDasharray="2 3" />
                  {/* turret leader */}
                  <path d="M211 196 L266 196" />
                </g>
                <g fontFamily="var(--font-mono)" fontSize="7.5" fill="#8fa3b8" letterSpacing="1.4">
                  <text x="272" y="199">EO/IR + SAR TURRET</text>
                  <text x="200" y="65" textAnchor="middle">6.4 M SPAN</text>
                </g>
              </svg>

              {/* scan line */}
              <div className="pointer-events-none absolute inset-x-8 top-0 h-24 animate-scan bg-gradient-to-b from-transparent via-signal/10 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ capability ----------------------------- */

const CAPS = [
  {
    n: "01",
    t: "Persistent ISR",
    d: "Two-day sorties with continuous EO/IR and maritime radar coverage. Hand-off between airframes keeps a station occupied indefinitely.",
  },
  {
    n: "02",
    t: "Dark-vessel detection",
    d: "Onboard fusion correlates radar returns against AIS. Anything transmitting a false position — or nothing at all — is flagged and tracked.",
  },
  {
    n: "03",
    t: "GPS-denied navigation",
    d: "Visual-inertial and celestial navigation hold a track to within metres through sustained jamming and spoofing.",
  },
  {
    n: "04",
    t: "Swarm tasking",
    d: "Airframes fly as one distributed sensor. The swarm self-allocates a search area, closes coverage gaps and re-tasks in flight — any authorised vessel in the group can command it, and losing an aircraft degrades resolution rather than the mission.",
  },
];

export function Capability() {
  return (
    <section id="capability" className="relative border-t border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <SectionLabel index="03">Capability</SectionLabel>
        <Reveal>
          <h2 className="display mb-16 max-w-3xl text-[clamp(1.9rem,4.2vw,3.15rem)] text-foam">
            Built for the mission the fleet cannot staff.
          </h2>
        </Reveal>

        <div className="grid gap-px border border-line bg-line md:grid-cols-2 [&>*]:h-full">
          {CAPS.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.07} className="h-full">
              <div className="group relative h-full bg-abyss p-8 transition-colors duration-500 hover:bg-slate-deep lg:p-11">
                <span className="absolute right-7 top-7 font-mono text-[10px] tracking-[0.2em] text-mist/30 transition-colors group-hover:text-signal/60">
                  {c.n}
                </span>
                <h3 className="pr-14 text-xl font-light tracking-tight text-foam">
                  {c.t}
                </h3>
                <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-mist">
                  {c.d}
                </p>
                <span className="mt-8 block h-px w-10 bg-signal/40 transition-all duration-500 group-hover:w-24" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- autonomy ------------------------------ */

const STACK = [
  { k: "Perception", v: "Multi-sensor detection, classification and track formation at the edge." },
  { k: "Reasoning", v: "Mission autonomy that re-plans around weather, fuel and threat without a link." },
  { k: "Coordination", v: "Swarm consensus divides a search area between airframes and rejoins coverage gaps without an operator in the loop." },
  { k: "Assurance", v: "Deterministic flight envelope, logged decisions, human authority on every effect." },
];

export function Autonomy() {
  return (
    <section id="autonomy" className="relative border-t border-line bg-hull/40">
      <div className="hairline-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(circle_at_70%_40%,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <SectionLabel index="04">Autonomy</SectionLabel>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <h2 className="display text-[clamp(1.9rem,4.2vw,3.15rem)] text-foam">
              The aircraft is the
              <span className="font-serif italic text-signal/90"> cheap part.</span>
            </h2>
            <p className="mt-8 text-[1.0625rem] leading-relaxed text-mist">
              Hull software runs the mission end to end — flight, sensing,
              classification and swarm coordination — with the link treated as a
              convenience rather than a dependency. Every airframe that joins the
              swarm inherits the same stack on day one.
            </p>
          </Reveal>

          <div className="divide-y divide-line border-y border-line">
            {STACK.map((s, i) => (
              <Reveal key={s.k} delay={i * 0.06}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="group flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:gap-10"
                >
                  <span className="w-40 shrink-0 font-mono text-[10px] tracking-[0.2em] text-signal/70 uppercase">
                    {s.k}
                  </span>
                  <span className="text-[0.98rem] leading-relaxed text-mist transition-colors group-hover:text-foam">
                    {s.v}
                  </span>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- company ------------------------------- */

const PRINCIPLES = [
  { t: "Flight hours over slideware", d: "We ship to sea trials, not to conference demos." },
  { t: "Attritable by design", d: "Cost per airframe low enough to risk where it matters." },
  { t: "Allied by default", d: "Built to be operated and sustained by partner navies." },
];

export function Company() {
  return (
    <section id="company" className="relative border-t border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <SectionLabel index="05">Company</SectionLabel>
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <Reveal>
            <h2 className="display text-[clamp(1.9rem,4.2vw,3.15rem)] text-foam">
              A small team,
              <br />
              <span className="font-serif italic text-mist">deliberately.</span>
            </h2>
            <p className="mt-8 max-w-lg text-[1.0625rem] leading-relaxed text-mist">
              Layth Aero is engineers from naval aviation, autonomy research and
              high-rate manufacturing, building in one facility with a test range
              on the water. We design, fly and iterate in the same week.
            </p>
            <div className="mt-11 flex flex-wrap gap-x-12 gap-y-6">
              {[
                { v: "2023", l: "Founded" },
                { v: "48", l: "Engineers" },
                { v: "1,400+", l: "Flight hours" },
              ].map((m) => (
                <div key={m.l}>
                  <div className="font-light text-3xl tracking-tight text-foam">{m.v}</div>
                  <div className="mt-1.5 font-mono text-[9.5px] tracking-[0.2em] text-mist/70 uppercase">
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="space-y-px bg-line">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.07}>
                <div className="group bg-abyss p-7 transition-colors duration-500 hover:bg-slate-deep">
                  <div className="flex items-start gap-5">
                    <Mark className="mt-1 h-3.5 w-auto shrink-0 text-signal/60 transition-colors group-hover:text-signal" />
                    <div>
                      <h3 className="text-lg font-light tracking-tight text-foam">{p.t}</h3>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-mist">{p.d}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- contact ------------------------------ */

export function Contact() {
  return (
    <section id="contact" className="grain relative overflow-hidden border-t border-line">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_120%_at_50%_120%,#0e2029_0%,#04070c_62%)]" />
      <div className="ocean-grid absolute inset-0 -z-10 animate-drift opacity-30 [mask-image:radial-gradient(circle_at_50%_100%,black,transparent_68%)]" />

      <div className="mx-auto max-w-[1400px] px-6 py-32 lg:px-10 lg:py-44">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-7">Engagement</p>
          <h2 className="display text-[clamp(2.1rem,5.4vw,4.2rem)] text-gradient-foam">
            Bring us your hardest
            <span className="font-serif italic text-signal/90"> stretch of water.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-mist">
            We work with navies, coast guards and prime integrators on persistent
            surveillance programmes. Briefings are available under NDA.
          </p>

          <form
            className="mx-auto mt-12 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="email">
              Work email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Work email"
              className="min-w-0 flex-1 border border-line bg-abyss/70 px-4 py-3.5 font-mono text-[11px] tracking-[0.12em] text-foam placeholder:text-mist/50 focus:border-signal/60 focus:outline-none"
            />
            <button
              type="submit"
              className="group relative overflow-hidden border border-foam bg-foam px-6 py-3.5 font-mono text-[11px] tracking-[0.2em] text-abyss uppercase transition-colors hover:text-foam"
            >
              <span className="relative z-10">Request brief</span>
              <span className="absolute inset-0 -translate-y-full bg-signal-deep transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            </button>
          </form>
          <p className="mt-8 text-[0.95rem] text-mist">
            Or reach us directly at{" "}
            <a
              href="mailto:info@laythaero.com"
              className="border-b border-signal/40 pb-0.5 font-mono text-[0.9rem] tracking-[0.06em] text-signal transition-colors hover:border-signal hover:text-foam"
            >
              info@laythaero.com
            </a>
          </p>
          <p className="mt-5 font-mono text-[9.5px] tracking-[0.16em] text-mist/50 uppercase">
            ITAR-controlled material shared only through approved channels
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- footer ------------------------------- */

export function Footer() {
  return (
    <footer className="border-t border-line bg-hull/60">
      <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <Mark className="h-4 w-auto text-foam" />
              <span className="font-mono text-[12px] tracking-[0.26em] text-foam">
                LAYTH<span className="text-mist">AERO</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed text-mist/80">
              Persistent maritime surveillance in autonomous swarms, built for the
              open ocean.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-3 sm:grid-cols-3">
            {[
              { h: "Platform", l: ["LA-1 Tern", "Payloads", "Ground segment"] },
              { h: "Company", l: ["About", "Careers", "Press"] },
            ].map((col) => (
              <div key={col.h}>
                <div className="mb-3.5 font-mono text-[9.5px] tracking-[0.2em] text-mist/60 uppercase">
                  {col.h}
                </div>
                <ul className="space-y-2.5">
                  {col.l.map((item) => (
                    <li key={item}>
                      <a
                        href="#top"
                        className="text-[0.9rem] text-mist transition-colors hover:text-signal"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <div className="mb-3.5 font-mono text-[9.5px] tracking-[0.2em] text-mist/60 uppercase">
                Contact
              </div>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:info@laythaero.com"
                    className="text-[0.9rem] text-mist transition-colors hover:text-signal"
                  >
                    info@laythaero.com
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[0.9rem] text-mist transition-colors hover:text-signal"
                  >
                    Request a brief
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[9.5px] tracking-[0.16em] text-mist/50 uppercase sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Layth Aero. All rights reserved.</span>
          <span>Designed for those who hold station.</span>
        </div>
      </div>
    </footer>
  );
}
