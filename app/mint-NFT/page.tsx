/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeroImg } from "@images";
import { Icon } from "@iconify/react";
import Footer from "@/components/Footer";

export default function NFTMintPage() {
  const [currentStage, setCurrentStage] = useState<
    "public" | "whitelist" | "presale"
  >("presale");
  const [progress, setProgress] = useState(30);

  const stageInfo = {
    presale: {
      name: "Pre-sale",
      progress: 30,
      price: 0.05,
      timeRemaining: "2d 5h 30m",
      status: "ACTIVE",
    },
    whitelist: {
      name: "Whitelist",
      progress: 60,
      price: 0.05,
      timeRemaining: "1d 12h 45m",
      status: "LOCKED",
    },
    public: {
      name: "Public",
      progress: 100,
      price: 0.05,
      timeRemaining: "5h 15m",
      status: "LOCKED",
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pt-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-grow container px-4 lg:px-8 mx-auto relative z-10"
      >
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-primary border border-primary/30 bg-primary/5 rounded-full">
            Genesis Drop
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-clash text-foreground tracking-tight">
            ASSET{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              MINT
            </span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column: Stages */}
          <div className="space-y-6">
            {Object.entries(stageInfo).map(([stage, info]) => (
              <div
                key={stage}
                className={`p-6 border transition-all duration-300 relative overflow-hidden group ${
                  currentStage === stage
                    ? "bg-secondary/40 border-primary/50"
                    : "bg-secondary/20 border-border opacity-60 hover:opacity-80"
                }`}
              >
                {currentStage === stage && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-[0_0_10px_2px_rgba(45,212,191,0.5)]" />
                )}

                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold font-clash text-foreground uppercase tracking-wide">
                    {info.name} Stage
                  </h2>
                  <span
                    className={`text-[10px] font-mono px-2 py-1 border rounded-sm ${
                      currentStage === stage
                        ? "text-primary border-primary/30 bg-primary/10 animate-pulse"
                        : "text-muted-foreground border-border"
                    }`}
                  >
                    [{info.status}]
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                  <div className="space-y-1">
                    <p className="text-[10px] text-muted-foreground font-mono">
                      Unit Price
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {info.price} SOL
                    </p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-[10px] text-muted-foreground font-mono">
                      Time Remaining
                    </p>
                    <p className="text-lg font-bold text-foreground font-mono">
                      {info.timeRemaining}
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() => setCurrentStage(stage as any)}
                  disabled={currentStage !== stage}
                  className={`w-full h-12 font-bold font-clash tracking-wider uppercase rounded-sm ${
                    currentStage === stage
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary/20 text-muted-foreground hover:bg-secondary/40 border border-border"
                  }`}
                >
                  {currentStage === stage
                    ? "Mint Access"
                    : "Awaiting Authorization"}
                </Button>
              </div>
            ))}
          </div>

          {/* Right Column: Preview */}
          <div className="sticky top-32">
            <div className="bg-card border border-border p-1 relative group">
              {/* Holo Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity" />

              <div className="relative bg-background border border-border/50 aspect-square flex items-center justify-center overflow-hidden mb-4">
                <Image
                  src={HeroImg}
                  alt="NFT Preview"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full mix-blend-overlay opacity-50 absolute inset-0"
                />
                <Image
                  src={HeroImg}
                  alt="NFT Preview"
                  width={450}
                  height={450}
                  priority
                  className="object-contain relative z-10 transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              </div>

              <div className="p-6 space-y-4 bg-secondary/30">
                <h2 className="text-2xl font-bold font-clash text-foreground">
                  Project XYZ
                </h2>
                <p className="text-sm text-muted-foreground font-syne line-clamp-2">
                  A next-generation collection of digital artifacts secured on
                  the Solana blockchain.
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-primary">
                    <span>Mint Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress
                    value={progress}
                    className="h-2 bg-background border border-border"
                    indicatorClassName="bg-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground font-clash mb-12 flex items-center justify-center gap-3">
            <Icon
              icon="solar:chat-round-line-bold-duotone"
              className="text-primary"
            />
            Protocol FAQ
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "How do I participate in the Mint?",
                a: "Connect your compatible Solana wallet (Phantom, Solflare) and confirm the transaction during your eligible stage.",
              },
              {
                q: "What defines the stage parameters?",
                a: "Presale (Early Access), Whitelist (Verified Wallets), and Public (Open Enrollment).",
              },
              {
                q: "Transaction Failure Protocols?",
                a: "Verify SOL balance covers gas fees + mint price. Force-refresh node connection if issues persist.",
              },
            ].map((item, i) => (
              <AccordionItem
                value={`item-${i}`}
                key={i}
                className="border border-border bg-secondary/20 px-4 rounded-sm data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-foreground hover:text-primary font-syne hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-mono text-xs">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
