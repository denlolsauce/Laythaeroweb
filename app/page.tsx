import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import {
  Autonomy,
  Capability,
  Company,
  Contact,
  Footer,
  Platform,
  Thesis,
  Ticker,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Thesis />
        <Platform />
        <Capability />
        <Autonomy />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
