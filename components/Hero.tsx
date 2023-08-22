"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Carouselslider from "./Carousel";
import { Separator } from "@radix-ui/react-separator";

function Hero() {
  return (
    <>
      <div className="flex flex-col-reverse items-center justify-between gap-1 px-[2em] lg:px-[4em] pt-12 lg:flex-row lg:justify-center">
        <div className="flex flex-col w-full lg:w-1/2">
          <h1 className="mb-4 text-2xl text-teal-200 lg:text-4xl xl:text-5xl font-monsterr">
            Unleash Your <i>Projects</i> Potential - <br />
            <i>Elevate, Accelerate, Succeed !</i>
          </h1>
          <p className="mb-4 text-base lg:text-lg font-rubik ">
            XYZ is a <span className="custom-gradient-text">Solana</span> based
            Launchpad to showcase Projects and mint them.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <Carouselslider />
        </div>
      </div>
      {/* <Separator className="w-full h-[1px] bg-secondary" /> */}
    </>
  );
}

export default Hero;
