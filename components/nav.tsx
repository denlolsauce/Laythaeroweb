"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { EASE } from "./motion";
import { Mark } from "./mark";

const LINKS = [
  { href: "/#company", label: "Company" },
  { href: "/smenos", label: "Smenos" },
  { href: "/#capabilities", label: "Capabilities" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);

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
          <Link href="/" className="group flex items-center gap-2.5">
            <Mark className="h-[16px] w-auto text-foam transition-colors group-hover:text-signal" />
            <span className="font-mono text-[12px] tracking-[0.26em] text-foam">
              LAYTH<span className="text-mist">AERO</span>
            </span>
          </Link>

          <div className="flex items-center gap-7">
            <div className="hidden items-center gap-7 md:flex">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-mono text-[11px] tracking-[0.18em] text-mist uppercase transition-colors hover:text-foam"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <Link
              href="/#contact"
              className="border border-line px-4 py-2 font-mono text-[11px] tracking-[0.18em] text-foam uppercase transition-all duration-300 hover:border-signal/60 hover:bg-signal/5 hover:text-signal"
            >
              Request Brief
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
