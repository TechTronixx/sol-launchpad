"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Token Creation",
    description: "Create your own custom token on the Solana blockchain.",
    link: "/token-creator",
  },
  {
    title: "Pre-sale Creation",
    description: "Set up and manage pre-sales for your token projects.",
    link: "/presale-creator",
  },
  {
    title: "Pre-sale Claim",
    description: "Allow users to claim tokens from completed pre-sales.",
    link: "/presale-claim",
  },
  {
    title: "NFT Creation",
    description: "Design and mint your own NFT collections on Solana.",
    link: "/nft-creator",
  },
  {
    title: "NFT Mint Page",
    description: "Create a custom minting page for your NFT collection.",
    link: "/nft-mint",
  },
];

const serviceVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function Services() {
  return (
    <section className="px-[2em] lg:px-[4em] h-[70vh] pt-6">
      <h2 className="mb-10 text-3xl font-bold text-center text-teal-400">
        Our Services
      </h2>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-teal-500">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <p className="mb-4 text-slate-200">{service.description}</p>
                <Link href={service.link}>
                  <Button
                    variant="outline"
                    className="w-full text-teal-400 transition-colors hover:bg-teal-400 hover:text-background"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
