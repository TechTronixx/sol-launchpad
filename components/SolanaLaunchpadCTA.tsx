"use client";

import { Rocket } from "lucide-react";
import React from "react";
import GradualSpacing from "./ui/gradual-spacing";
import { cn } from "@/lib/utils";
import { AnimatedList } from "./ui/animated-list";

interface LaunchpadItem {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const launchpadItems: LaunchpadItem[] = [
  {
    name: "Project Submitted",
    description: "New Solana project",
    time: "15m ago",
    icon: "🚀",
    color: "#00C9A7",
  },
  {
    name: "Funding Milestone",
    description: "Project X reached 50%",
    time: "10m ago",
    icon: "💰",
    color: "#FFB800",
  },
  {
    name: "Community Update",
    description: "Project Y AMA session",
    time: "5m ago",
    icon: "👥",
    color: "#FF3D71",
  },
  {
    name: "Launch Countdown",
    description: "Project Z launches in 24h",
    time: "2m ago",
    icon: "⏳",
    color: "#1E86FF",
  },
];

const LaunchpadNotification = ({
  name,
  description,
  icon,
  color,
  time,
}: LaunchpadItem) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-gradient-to-b from-background to-slate-900 border border-teal-500 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex items-center justify-center size-10 rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="p-1 text-lg bg-white border-2 border-teal-500 rounded-full">
            {icon}
          </span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-slate-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-slate-50/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const SolanaLaunchpadCTA = () => {
  return (
    <section className="min-h-screen px-4 py-10 bg-gradient-to-b from-background to-slate-900 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center w-full pt-20">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold -tracking-widest text-slate-50 dark:text-white md:text-7xl md:leading-[5rem]"
          text="Solana Launchpad"
        />
      </div>
      <div className="flex flex-col items-center justify-center py-4">
        <span className="flex items-center px-4 py-3 transition-all duration-300 ease-in-out border border-teal-500 rounded-full group text-slate-50 hover:bg-teal-500/10">
          <Rocket className="w-4 h-4 mr-2 text-teal-500 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12" />
          <span className="transition-all duration-300 ease-in-out group-hover:scale-105">
            Launch Your Project
          </span>
        </span>
      </div>
      <div className="max-w-3xl mx-auto mt-8">
        <AnimatedList className="bg-transparent border-none shadow-none">
          {launchpadItems.map((item, idx) => (
            <LaunchpadNotification {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>
    </section>
  );
};

export default SolanaLaunchpadCTA;
