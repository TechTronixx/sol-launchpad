import Image from "next/image";
import { HeroImg1, Logo } from "@images";
import Hero from "@components/Hero";
import { Separator } from "@/components/ui/separator";
import { Button } from "@components/ui/button";

export default function Home() {
  return (
    <main>
      <Hero />

      <Separator className="w-[90%] mx-auto mt-10 lg:mt-20" />

      <section className="flex flex-col lg:flex-row justify-center items-start gap-4 px-[2em] lg:px-[4em] py-4 w-full">
        <div className="flex flex-col gap-4 lg:w-1/2 h-full relative">
          <h1 className="text-[2em] font-bold">Overview</h1>
          <Image
            src={HeroImg1}
            alt={""}
            style={{
              objectFit: "cover",
              width: "100%",
              borderRadius: "10px",
            }}
          />
        </div>

        <div className="flex flex-col items-start gap-8 lg:w-1/2 lg:mt-[2em]">
          <div>
            <h2 className="text-[1.6em] font-bold mb-4">Project Title</h2>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita alias repellat fuga aperiam officiis quidem fugiat eveniet harum non quo, nostrum dolor, cum sequi cupiditate odio tempora voluptate dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita alias repellat fuga aperiam officiis quidem fugiat eveniet harum non quo, nostrum dolor, cum sequi cupiditate odio tempora voluptate dignissimos.</p>
          </div>

          <div>
            <h3 className="text-[1.3em] font-bold mb-4">Utility</h3>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita alias repellat fuga aperiam officiis quidem fugiat eveniet harum non quo,</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita alias repellat fuga aperiam officiis quidem fugiat eveniet harum non quo,</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita alias repellat fuga aperiam officiis quidem fugiat eveniet harum non quo,</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita alias repellat fuga aperiam officiis quidem fugiat eveniet harum non quo,</li>
          </div>

          <div className="flex justify-center items-center gap-4 relative w-full">
            <Separator className="shrink" />
            <Button variant={"outline"} className="min-w-max">Mint Now</Button>
            <Separator className="shrink" />
          </div>
        </div>
      </section>
    </main>
  );
}
