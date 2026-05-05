import { Atelier } from "@/components/sections/Atelier";
import { Cosmos } from "@/components/sections/Cosmos";
import { Garden } from "@/components/sections/Garden";
import { Hero } from "@/components/sections/Hero";
import { InnerImage } from "@/components/sections/InnerImage";
import { Invitation } from "@/components/sections/Invitation";
import { PlaygroundSection } from "@/components/sections/PlaygroundSection";

export default function Home() {
  return (
    <main className="relative z-10 overflow-hidden">
      <Hero />
      <InnerImage />
      <Atelier />
      <Garden />
      <Cosmos />
      <PlaygroundSection />
      <Invitation />
    </main>
  );
}
