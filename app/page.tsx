"use client";
import Image from "next/image";
import { HeroImg } from "@images";
import Hero from "@components/Hero";
import { Separator } from "@/components/ui/separator";
import { Button } from "@components/ui/button";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import SolanaLaunchpadCTA from "@/components/SolanaLaunchpadCTA";
import Services from "@/components/Services";
import { FAQ, Features, Footer, Partners } from "@/lib/dynamic-imports";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SolanaLaunchpadCTA />
      <Hero />
      <section className="flex flex-col lg:flex-row justify-center bg-background items-center gap-12 px-6 lg:px-16 py-12 w-full max-w-7xl mx-auto">
        <div className="relative flex flex-col h-full gap-4 lg:w-1/2 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="relative">
            <h1 className="text-4xl font-bold font-clash text-foreground mb-6">
              Platform <span className="text-primary">Overview</span>
            </h1>
            <Image
              src={HeroImg}
              alt="Platform Overview"
              style={{
                objectFit: "cover",
                width: "100%",
                borderRadius: "0px",
              }}
              className="border border-border"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-clash text-foreground">
              The <span className="text-primary">Launchpad</span> Ecosystem
            </h2>
            <p className="text-justify text-muted-foreground font-syne leading-relaxed">
              Solana Launchpad is the premier ecosystem for deploying, managing,
              and scaling decentralized assets on the Solana network. We provide
              a unified terminal for SPL token creation, NFT minting, and
              automated presale liquidity generation.
            </p>
            <div className="mt-8 space-y-4">
              {/* Removed mock metrics per user request */}
            </div>
          </div>

          <div className="text-muted-foreground w-full">
            <h3 className="text-xl font-bold mb-4 font-clash text-foreground">
              Core Utilities
            </h3>
            <ul className="space-y-3 font-syne">
              {[
                "Instant SPL Token Deployment (Zero Code)",
                "Automated Liquidity Pool Management",
                "Vestings & Team Token Locks",
                "Whitelisted Presale Rounds",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Icon
                    icon="solar:check-circle-bold-duotone"
                    className="text-primary min-w-[1.25rem]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex items-center w-full gap-4 mt-4">
            <Button className="h-12 px-8 bg-primary text-primary-foreground font-bold font-clash tracking-wider hover:bg-primary/90 transition-all rounded-sm flex items-center gap-2">
              Start Launching
              <Icon icon="solar:rocket-2-bold-duotone" className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="h-12 px-8 border-border text-foreground hover:bg-secondary/40 font-bold font-clash tracking-wider rounded-sm"
            >
              Read Docs
            </Button>
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
      <Footer />
    </motion.main>
  );
}
