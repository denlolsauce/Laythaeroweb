"use client";

import { Reveal } from "./motion";
import { Mark } from "./mark";

/* -------------------------------- contact ------------------------------ */

export function Contact() {
  return (
    <section id="contact" className="grain relative overflow-hidden border-t border-line">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_120%_at_50%_120%,#0e2029_0%,#04070c_62%)]" />
      <div className="ocean-grid absolute inset-0 -z-10 animate-drift opacity-30 [mask-image:radial-gradient(circle_at_50%_100%,black,transparent_68%)]" />

      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-28">
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
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
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
                  href="/#contact"
                  className="text-[0.9rem] text-mist transition-colors hover:text-signal"
                >
                  Request a brief
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[9.5px] tracking-[0.16em] text-mist/50 uppercase sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Layth Aero. All rights reserved.</span>
          <span>Designed for those who hold station.</span>
        </div>
      </div>
    </footer>
  );
}
