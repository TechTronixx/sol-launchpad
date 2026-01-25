"use client";

import { Icon } from "@iconify/react";
import React from "react";
import GradualSpacing from "./ui/gradual-spacing";
import { cn } from "@/lib/utils";
import { AnimatedList } from "./magicui/animated-list";

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
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden",
        "transition-all duration-200 hover:scale-[101%]",
        // Glass Shard Style
        "bg-zinc-900/40 backdrop-blur-md",
        "border-l-2 border-r-0 border-y-0",
        // Sharp corners
        "rounded-sm",
        // Text
        "p-3",
      )}
      style={{ borderLeftColor: color }}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-black/50 ring-1 ring-white/10">
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center font-medium whitespace-pre text-foreground font-space">
            <span className="text-sm font-bold text-white uppercase">
              {name}
            </span>
            <span className="mx-1 text-zinc-600">·</span>
            <span className="text-xs text-muted-foreground font-mono">
              {time}
            </span>
          </figcaption>
          <p className="text-sm font-normal text-muted-foreground font-jakarta truncate">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const SolanaLaunchpadCTA = () => {
  return (
    <section className="min-h-[60vh] px-4 py-20 bg-transparent relative overflow-hidden sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col items-center justify-center w-full relative z-10 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-sm font-mono text-primary/80 tracking-widest">
            :: READY_TO_LAUNCH?
          </span>
          <h2 className="text-5xl md:text-7xl font-bold font-clash text-foreground tracking-tighter">
            START YOUR JOURNEY
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center relative z-10">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary opacity-30 blur group-hover:opacity-75 transition duration-500 rounded-full"></div>
            <button className="relative flex items-center px-8 py-4 bg-background/80 backdrop-blur-md rounded-full border border-primary/50 text-primary font-bold tracking-wide transition-all duration-300 group-hover:scale-105 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]">
              <Icon
                icon="solar:rocket-2-bold-duotone"
                className="w-6 h-6 mr-2 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
              />
              <span className="text-lg">LAUNCH PROJECT_V1</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-sm mx-auto mt-16 relative z-10">
        <AnimatedList className="w-full">
          {launchpadItems.map((item, idx) => (
            <LaunchpadNotification {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>
    </section>
  );
};

export default SolanaLaunchpadCTA;
