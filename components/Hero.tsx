"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

interface NotificationProps {
  name: string;
  action: string;
  time: string;
  amount: string;
  icon: string;
  color: string;
}

const Notification = ({
  name,
  action,
  time,
  amount,
  icon,
  color,
}: NotificationProps) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden",
        "transition-all duration-200 hover:scale-[101%]",
        // Glass Shard Style - Asymmetric Border
        "backdrop-blur-md shadow-lg",
        "bg-white/5 dark:bg-white/5",
        // Asymmetric borders: Top/Left lighter, Bottom/Right darker (handled by shadows or specific borders)
        "border-t border-white/10",
        "border-r border-black/20",
        "border-b border-black/20",
        // Left border width handled by style for color
        "px-3 py-3",
        // Sharp corners
        "rounded-sm",
      )}
      style={{ borderLeft: `3px solid ${color}` }}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/5 ring-1 ring-white/10">
          <Icon icon={icon} className="text-lg" style={{ color: color }} />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-sm font-medium text-foreground">
            <span className="text-xs text-muted-foreground font-mono mr-2">
              {name}
            </span>
            <span className="text-xs text-muted-foreground/30">·</span>
            <span className="text-xs text-muted-foreground ml-1">{action}</span>
          </figcaption>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-[10px] font-mono text-muted-foreground/70">
              {time}
            </p>
            <p className="text-xs font-mono font-bold text-foreground/90">
              {amount}
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
};

// Fake Data for the Feed
const notifications = [
  {
    name: "0x3a...8b2",
    action: "Minted Token",
    time: "12ms ago",
    amount: "2.5 SOL",
    icon: "solar:bolt-bold-duotone",
    color: "#2dd4bf", // Teal
  },
  {
    name: "0x8f...c91",
    action: "Liquidity Add",
    time: "45ms ago",
    amount: "150.0 SOL",
    icon: "solar:graph-up-bold-duotone",
    color: "#00ffa3", // Radioactive Teal
  },
  {
    name: "0x1d...e44",
    action: "Project Launch",
    time: "1s ago",
    amount: "NEW",
    icon: "solar:rocket-bold-duotone",
    color: "#a855f7", // Hyper Violet
  },
  {
    name: "0x9c...2a1",
    action: "Wallet Connect",
    time: "2s ago",
    amount: "-",
    icon: "solar:wallet-bold-duotone",
    color: "#3b82f6", // Blue
  },
  {
    name: "0x4b...77f",
    action: "Token Deploy",
    time: "3s ago",
    amount: "0.5 SOL",
    icon: "solar:code-bold-duotone",
    color: "#ef4444", // Red
  },
];

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 pt-24 overflow-visible bg-transparent">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* Aurora Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-primary/10 blur-[120px] rounded-[100%]" />
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col items-start text-left space-y-8">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-mono text-primary tracking-wider uppercase">
              Platform Live
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-clash font-semibold tracking-tight leading-[0.9]"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-foreground/50">
                Solana Launchpad
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed pt-4"
            >
              The advanced launchpad for Web3 projects. Create tokens, manage
              presales, and mint NFTs with ease and security.
            </motion.p>
          </div>

          {/* CTA - Holographic Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="group relative">
              <button className="relative flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-medium tracking-wide transition-all duration-300 shadow-lg shadow-primary/20">
                Launch Your Project
                <Icon
                  icon="solar:arrow-right-linear"
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Activity Feed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex h-[500px] w-full flex-col justify-start overflow-hidden p-6"
        >
          {/* Feed Header */}
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-sm font-medium text-muted-foreground">
              Recent Activity
            </span>
          </div>

          {/* The List using Notification Cards */}
          <AnimatedList delay={1500}>
            {notifications.map((item, idx) => (
              <Notification {...item} key={idx} />
            ))}
          </AnimatedList>

          {/* Fade Overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
