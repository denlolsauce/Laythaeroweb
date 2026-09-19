import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Contact, Footer } from "@/components/sections";
import { Sequence, SmenosHero, Specs } from "@/components/smenos-sections";

export const metadata: Metadata = {
  title: "Smenos — Swarm VTOL System | Layth Aero",
  description:
    "Smenos is Layth Aero's autonomous swarm VTOL system for persistent maritime surveillance — deck-launched, mesh-linked, and built to hold station for days.",
};

export default function SmenosPage() {
  return (
    <>
      <Nav />
      <main>
        <SmenosHero />
        <Sequence />
        <Specs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
