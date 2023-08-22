import Image from "next/image";
import { Logo } from "@images";
import Hero from "@components/Hero";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <Hero />

      <Separator className="w-[90%] mt-20 mx-auto" />
    </main>
  );
}
