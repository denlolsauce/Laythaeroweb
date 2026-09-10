"use client";

import { motion } from "framer-motion";

/**
 * Decorative swarm visual. Positions and timings are static so server and
 * client markup match; each drone drifts on its own cycle so the formation
 * reads as coordinated rather than rigid.
 */

type Drone = {
  id: string;
  /** percentage position within the frame */
  x: number;
  y: number;
  /** drift amplitude in px */
  dx: number;
  dy: number;
  duration: number;
  delay: number;
  scale: number;
  lead?: boolean;
};

const DRONES: Drone[] = [
  { id: "d1", x: 50, y: 22, dx: 6, dy: -8, duration: 9, delay: 0, scale: 1.15, lead: true },
  { id: "d2", x: 30, y: 34, dx: -8, dy: 7, duration: 11, delay: 0.6, scale: 0.95 },
  { id: "d3", x: 70, y: 34, dx: 8, dy: 6, duration: 10.5, delay: 0.3, scale: 0.95 },
  { id: "d4", x: 16, y: 52, dx: -6, dy: -9, duration: 12, delay: 1.1, scale: 0.85 },
  { id: "d5", x: 84, y: 52, dx: 7, dy: -7, duration: 11.5, delay: 0.9, scale: 0.85 },
  { id: "d6", x: 37, y: 66, dx: 5, dy: 8, duration: 10, delay: 1.4, scale: 0.8 },
  { id: "d7", x: 63, y: 66, dx: -5, dy: 9, duration: 12.5, delay: 0.2, scale: 0.8 },
];

/** Mesh links between drones that are near each other in formation. */
const LINKS: [string, string][] = [
  ["d1", "d2"],
  ["d1", "d3"],
  ["d2", "d3"],
  ["d2", "d4"],
  ["d3", "d5"],
  ["d2", "d6"],
  ["d3", "d7"],
  ["d6", "d7"],
];

const byId = new Map(DRONES.map((d) => [d.id, d]));

export function Swarm() {
  return (
    <div className="relative aspect-square w-full" aria-hidden="true">
      {/* sea-surface reference grid */}
      <div className="absolute inset-0 overflow-hidden rounded-sm">
        <div className="ocean-grid absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(circle_at_50%_45%,black,transparent_72%)]" />
      </div>

      {/* coverage footprint the swarm is holding */}
      <div className="absolute left-1/2 top-[46%] size-[74%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 rounded-full border border-signal/15" />
        <div className="absolute inset-[18%] rounded-full border border-signal/10" />
        <motion.div
          className="absolute inset-0 rounded-full bg-signal/[0.04]"
          animate={{ opacity: [0.35, 0.85, 0.35], scale: [0.97, 1.02, 0.97] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* mesh links */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full"
      >
        {LINKS.map(([a, b], i) => {
          const da = byId.get(a)!;
          const db = byId.get(b)!;
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={da.x}
              y1={da.y}
              x2={db.x}
              y2={db.y}
              stroke="rgba(79,214,208,0.5)"
              strokeWidth={0.18}
              strokeDasharray="1.4 1.4"
              animate={{ opacity: [0.15, 0.6, 0.15] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.35,
              }}
            />
          );
        })}
      </svg>

      {/* drones */}
      {DRONES.map((d) => (
        <motion.div
          key={d.id}
          className="absolute"
          style={{ left: `${d.x}%`, top: `${d.y}%` }}
          animate={{ x: [0, d.dx, 0, -d.dx * 0.6, 0], y: [0, d.dy, 0, -d.dy * 0.5, 0] }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: d.delay,
          }}
        >
          <div
            className="relative -translate-x-1/2 -translate-y-1/2"
            style={{ scale: d.scale }}
          >
            {/* sensor pulse */}
            <motion.span
              className={`absolute left-1/2 top-1/2 -ml-[13px] -mt-[13px] size-[26px] rounded-full ${
                d.lead ? "bg-signal/20" : "bg-signal/12"
              }`}
              animate={{ opacity: [0, 0.9, 0], scale: [0.5, 1.6, 1.9] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeOut",
                delay: d.delay * 1.3,
              }}
            />
            {/* airframe: swept flying-wing glyph */}
            <svg
              viewBox="0 0 24 14"
              className={`relative block w-[22px] ${
                d.lead ? "text-signal" : "text-signal/80"
              }`}
              style={{
                filter: d.lead
                  ? "drop-shadow(0 0 7px rgba(79,214,208,0.75))"
                  : "drop-shadow(0 0 5px rgba(79,214,208,0.45))",
              }}
            >
              <path
                d="M12 0.6 L23 11.2 L12 8.4 L1 11.2 Z"
                fill="currentColor"
                fillOpacity="0.9"
              />
              <path d="M12 0.6 L12 8.4" stroke="#04070c" strokeWidth="0.5" opacity="0.5" />
            </svg>
          </div>
        </motion.div>
      ))}

      {/* tracked surface contact the swarm is watching */}
      <motion.div
        className="absolute left-[46%] top-[84%]"
        animate={{ x: [-14, 16, -14] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <span className="absolute inset-0 -m-2 rounded-full bg-amber-alert/20 animate-pulse-ring" />
          <span className="block size-[7px] rotate-45 bg-amber-alert shadow-[0_0_12px_2px_rgba(255,182,72,0.55)]" />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[9px] tracking-[0.14em] text-amber-alert/85">
            TRK-033
          </span>
        </div>
      </motion.div>
    </div>
  );
}
