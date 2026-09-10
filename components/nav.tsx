"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { EASE } from "./motion";
import { Mark } from "./mark";

const LINKS = [
  { href: "#platform", label: "Platform" },
  { href: "#capability", label: "Capability" },
  { href: "#autonomy", label: "Autonomy" },
  { href: "#company", label: "Company" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 24));

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: EASE, delay: 0.15 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          solid
            ? "border-b border-line/70 bg-abyss/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-10">
          <a href="#top" className="group flex items-center gap-2.5">
            <Mark className="h-[18px] w-auto text-foam transition-colors group-hover:text-signal" />
            <span className="font-mono text-[12px] tracking-[0.26em] text-foam">
              LAYTH<span className="text-mist">AERO</span>
            </span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative font-mono text-[11px] tracking-[0.18em] text-mist uppercase transition-colors hover:text-foam"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-signal transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="border border-line px-4 py-2 font-mono text-[11px] tracking-[0.18em] text-foam uppercase transition-all duration-300 hover:border-signal/60 hover:bg-signal/5 hover:text-signal"
            >
              Request Brief
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="flex size-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-px w-5 bg-foam transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-foam transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="overflow-hidden border-b border-line bg-abyss/95 backdrop-blur-xl md:hidden"
      >
        <div className="flex flex-col px-6 py-4">
          {[...LINKS, { href: "#contact", label: "Request Brief" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line-soft py-3.5 font-mono text-[11px] tracking-[0.2em] text-mist uppercase last:border-0 hover:text-foam"
            >
              {l.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
