import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Contact, Footer } from "@/components/sections";
import { Capabilities, Company, Product } from "@/components/home-sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Company />
        <Product />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
