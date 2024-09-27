"use client";
import React from "react";
import Carouselslider from "./Carousel";

function Hero() {
  return (
    <section className="flex flex-col-reverse bg-gradient-to-b from-background to-slate-900 justify-center gap-1 px-[2em] lg:px-[4em] pt-6 lg:pt-12 lg:flex-row lg:justify-center">
      <div className="flex flex-col w-full lg:w-1/2">
        <div className="flex flex-col pt-4">
          <h1 className="mb-4 text-2xl tracking-wide text-teal-200 lg:text-3xl xl:text-3xl font-monsterr">
            <span className="text-6xl text-tealDarkClr">E</span>levate
          </h1>
          <h1 className="self-center lg:mr-[8em] mb-4 text-2xl text-teal-200 lg:text-3xl xl:text-3xl font-monsterr tracking-wide">
            <span className="text-6xl text-tealDarkClr">A</span>ccelerate
          </h1>
          <h1 className="self-end lg:mr-[7em] mb-4 text-2xl text-teal-200 lg:text-3xl xl:text-3xl font-monsterr tracking-wide">
            <span className="text-6xl text-tealDarkClr">S</span>ucceed
          </h1>
        </div>

        <h2 className="mb-4 text-xl text-teal-400 glitch-text lg:text-2xl xl:text-2xl font-monsterr">
          Unleash Your <i>Projects</i> Potential
        </h2>
        <p className="mb-4 text-base lg:text-lg font-rubik">
          XYZ is a <span className="custom-gradient-text">Solana</span> based
          Launchpad
          <br />
          to showcase Projects and mint them.
        </p>
      </div>

      <div className="w-full lg:w-1/2">
        <Carouselslider />
      </div>
    </section>
  );
}

export default Hero;
