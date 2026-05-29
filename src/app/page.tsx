import Hero from "@/components/Hero";
import Works from "@/components/Works";
import VisualArchive from "@/components/VisualArchive";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <Hero />
      <Works />
      <VisualArchive />
      <About />
      <Contact />
    </main>
  );
}
