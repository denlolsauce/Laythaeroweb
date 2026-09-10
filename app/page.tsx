import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Contact, Footer } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
