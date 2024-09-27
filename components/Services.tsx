"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Coins,
  Rocket,
  Gift,
  PaintBucket,
  Palette,
} from "lucide-react";

const services = [
  {
    title: "Token Creation",
    description: "Create your own custom token on the Solana blockchain.",
    link: "/token-creator",
    icon: Coins,
  },
  {
    title: "Pre-sale Creation",
    description: "Set up and manage pre-sales for your token projects.",
    link: "/presale-creator",
    icon: Rocket,
  },
  {
    title: "Pre-sale Claim",
    description: "Allow users to claim tokens from completed pre-sales.",
    link: "/presale-claim",
    icon: Gift,
  },
  {
    title: "NFT Creation",
    description: "Design and mint your own NFT collections on Solana.",
    link: "/nft-creator",
    icon: PaintBucket,
  },
  {
    title: "NFT Mint Page",
    description: "Create a custom minting page for your NFT collection.",
    link: "/mint-NFT",
    icon: Palette,
  },
];

const serviceVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function Services() {
  return (
    <section className="px-4 pb-20 lg:px-8 bg-gradient-to-b from-background to-slate-900">
      <h2 className="mb-12 text-4xl font-bold text-center text-teal-400 glitch-text">
        Our Services
      </h2>
      <div className="grid max-w-6xl grid-cols-6 gap-4 mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            className={`bg-slate-800 p-6 rounded-lg border border-teal-400/30 flex flex-col justify-between transition-all duration-300 hover:border-teal-400 group ${
              index === 0
                ? "col-span-6 md:col-span-4"
                : "col-span-6 md:col-span-2"
            } ${index % 2 === 0 ? "row-span-1" : "row-span-2"}`}
          >
            <div>
              <div className="flex items-center mb-4 space-x-3">
                <service.icon className="w-8 h-8 text-teal-500" />
                <h3 className="text-xl font-bold text-teal-500">
                  {service.title}
                </h3>
              </div>
              <p className="mb-6 text-slate-200">{service.description}</p>
            </div>
            <Link href={service.link}>
              <Button
                variant="outline"
                className="w-full text-teal-400 transition-colors border-teal-400 group-hover:bg-teal-400 group-hover:text-background"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
