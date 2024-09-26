"use client";
import Image from "next/image";
import { HeroImg } from "@images";
import Hero from "@components/Hero";
import { Separator } from "@/components/ui/separator";
import { Button } from "@components/ui/button";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Partners from "@/components/Partners";
import Services from "@/components/Services";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />

      <Separator className="w-[90%] mx-auto mt-10 lg:mt-20" />

      {/* Overview section */}
      <section className="flex flex-col lg:flex-row justify-center items-start gap-4 px-[2em] lg:px-[4em] py-4 w-full">
        <div className="relative flex flex-col h-full gap-4 lg:w-1/2">
          <h1 className="text-[2em] font-bold text-teal-500">Overview</h1>
          <Image
            src={HeroImg}
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
            <h2 className="text-[1.6em] font-bold mb-4 text-teal-400">
              Project Title
            </h2>
            <p className="text-justify text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, expedita alias repellat fuga aperiam officiis quidem
              fugiat eveniet harum non quo, nostrum dolor, cum sequi cupiditate
              odio tempora voluptate dignissimos.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Laudantium.
            </p>
            <h4 className="text-[1.1em] font-extralight mb-4 mt-6 text-tealClr font-monsterr">
              • Total Supply :
            </h4>
            <h3 className="text-[1.1em] font-extralight mb-4 text-tealClr font-monsterr">
              • Minting Price :
            </h3>
            <h3 className="text-[1.1em] font-extralight text-tealClr mb-4 font-monsterr">
              • Remaining supply :
            </h3>
          </div>

          <div className="text-slate-200">
            <h3 className="text-[1.6em] font-bold mb-4 text-teal-400">
              Utility
            </h3>
            <ul className="pl-6 space-y-2 list-disc">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, expedita alias repellat fuga aperiam officiis quidem
                fugiat eveniet harum non quo,
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, expedita alias repellat fuga aperiam officiis quidem
                fugiat eveniet harum non quo,
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, expedita alias repellat fuga aperiam officiis quidem
                fugiat eveniet harum non quo,
              </li>
            </ul>
          </div>

          <div className="relative flex items-center justify-center w-full gap-4">
            <Separator className="shrink" />
            <Button variant={"outline"} className="text-teal-400 min-w-max">
              Mint Now
            </Button>
            <Separator className="shrink" />
          </div>
        </div>
      </section>

      <Separator className="w-[90%] mx-auto my-10 lg:my-20" />

      {/* Features section */}
      <Features />

      <Separator className="w-[90%] mx-auto my-10 lg:my-20" />

      {/* Services section */}
      <Services />

      <Separator className="w-[90%] mx-auto my-10 lg:my-20" />

      {/* FAQ section */}
      <FAQ />

      <Separator className="w-[90%] mx-auto my-10 lg:my-20" />

      {/* Partners section */}
      <Partners />

      <Separator className="w-[90%] mx-auto my-10 lg:my-20" />

      <Footer />
    </motion.main>
  );
}
