"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Token Creation",
    description: "Create your own custom token on the Solana blockchain.",
    link: "/token-creator",
    icon: "solar:wallet-money-linear",
  },
  {
    title: "Pre-sale Creation",
    description: "Set up and manage pre-sales for your token projects.",
    link: "/presale-creator",
    icon: "solar:rocket-2-linear",
  },
  {
    title: "Pre-sale Claim",
    description: "Allow users to claim tokens from completed pre-sales.",
    link: "/presale-claim",
    icon: "solar:gift-linear",
  },
  {
    title: "NFT Creation",
    description: "Design and mint your own NFT collections on Solana.",
    link: "/nft-creator",
    icon: "solar:paint-roller-linear",
  },
  {
    title: "NFT Mint Page",
    description: "Create a custom minting page for your NFT collection.",
    link: "/mint-NFT",
    icon: "solar:palette-linear",
  },
];

const serviceVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Services() {
  return (
    <section className="px-4 pb-32 lg:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-mono text-primary border border-primary/20 bg-primary/5 rounded-full">
            :: DEPLOYMENT_ZONES
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-clash text-foreground tracking-tight text-balance">
            SERVICES & TOOLS
          </h2>
        </div>

        <div className="grid grid-cols-6 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={serviceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index}
              className={cn(
                "group relative overflow-hidden transition-all duration-500",
                // Shape
                "rounded-sm border border-border/50",
                // Background
                "bg-card/40 backdrop-blur-md dark:bg-zinc-900/40 light:bg-white/60",
                // Grid Logic
                index === 0
                  ? "col-span-6 md:col-span-4"
                  : "col-span-6 md:col-span-2",
                index % 2 === 0 ? "row-span-1" : "row-span-1 md:row-span-2",
                // Hover
                "hover:border-primary/40 hover:shadow-[0_0_30px_-10px_rgba(var(--primary-rgb),0.15)]",
              )}
            >
              {/* Decorative Tech Lines */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-50" />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full justify-between p-8">
                <div>
                  <div className="flex items-center mb-6 space-x-4">
                    <div className="p-3 rounded-sm bg-primary/10 border border-primary/20 text-primary group-hover:scale-105 transition-transform duration-300">
                      <Icon icon={service.icon} width={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground font-syne uppercase tracking-wider">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mb-8 text-muted-foreground font-space text-pretty leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={service.link}
                  className="inline-block mt-auto w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full justify-between text-primary border-primary/20 bg-primary/5 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 rounded-sm py-6 group/btn"
                  >
                    <span className="font-semibold font-mono tracking-wider">
                      INITIATE
                    </span>
                    <Icon
                      icon="solar:arrow-right-linear"
                      className="w-5 h-5 transition-transform group-hover/btn:translate-x-1"
                    />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
