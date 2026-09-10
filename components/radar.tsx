"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EASE } from "./motion";

type Contact = {
  id: string;
  /** polar position, r in 0..1 of scope radius */
  r: number;
  theta: number;
  label: string;
  hostile?: boolean;
};

const CONTACTS: Contact[] = [
  { id: "TRK-014", r: 0.42, theta: -32, label: "SURFACE" },
  { id: "TRK-021", r: 0.68, theta: 118, label: "SURFACE" },
  { id: "TRK-033", r: 0.79, theta: 206, label: "UNKNOWN", hostile: true },
  { id: "TRK-047", r: 0.3, theta: 268, label: "AIS MATCH" },
  { id: "TRK-052", r: 0.86, theta: 58, label: "SURFACE" },
];

/**
 * Decorative maritime scope. The sweep is CSS-driven so it keeps running
 * cheaply, while contact acquisition is timed to feel like a live feed.
 */
export function Radar() {
  const [acquired, setAcquired] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setAcquired((n) => (n >= CONTACTS.length ? 1 : n + 1));
    }, 1400);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="relative aspect-square w-full" aria-hidden="true">
      {/* range rings */}
      <div className="absolute inset-0 rounded-full border border-signal/15" />
      <div className="absolute inset-[12%] rounded-full border border-signal/12" />
      <div className="absolute inset-[28%] rounded-full border border-signal/10" />
      <div className="absolute inset-[46%] rounded-full border border-signal/10" />
      <div className="absolute inset-[68%] rounded-full border border-signal/[0.08]" />

      {/* crosshairs */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-signal/10" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-signal/10" />

      {/* sweep */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div
          className="absolute inset-0 animate-sweep"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(79,214,208,0) 0deg, rgba(79,214,208,0) 260deg, rgba(79,214,208,0.05) 320deg, rgba(79,214,208,0.28) 356deg, rgba(79,214,208,0.62) 360deg)",
          }}
        />
      </div>

      {/* contacts */}
      {CONTACTS.map((c, i) => {
        const rad = (c.theta * Math.PI) / 180;
        const x = 50 + Math.cos(rad) * c.r * 47;
        const y = 50 + Math.sin(rad) * c.r * 47;
        const visible = i < acquired;

        return (
          <motion.div
            key={c.id}
            className="absolute"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={false}
            animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.4 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="relative -translate-x-1/2 -translate-y-1/2">
              <span
                className={`absolute inset-0 -m-2 rounded-full ${
                  c.hostile ? "bg-amber-alert/25" : "bg-signal/25"
                } ${visible ? "animate-pulse-ring" : ""}`}
              />
              <span
                className={`block size-[7px] rounded-full ${
                  c.hostile
                    ? "bg-amber-alert shadow-[0_0_12px_2px_rgba(255,182,72,0.6)]"
                    : "bg-signal shadow-[0_0_12px_2px_rgba(79,214,208,0.5)]"
                }`}
              />
              <span
                className={`absolute left-3.5 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[9px] tracking-[0.14em] ${
                  c.hostile ? "text-amber-alert/85" : "text-signal/70"
                }`}
              >
                {c.id}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* own-ship marker */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="size-2 rotate-45 border border-foam/70 bg-foam/20" />
      </div>
    </div>
  );
}
