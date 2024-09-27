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
import { MagicCard } from "@/components/magicui/magic-card";
import { HeroImg } from "@images";

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
    },
    whitelist: {
      name: "Whitelist",
      progress: 60,
      price: 0.05,
      timeRemaining: "1d 12h 45m",
    },
    public: {
      name: "Public",
      progress: 100,
      price: 0.05,
      timeRemaining: "5h 15m",
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen bg-black"
    >
      <section className="flex-grow px-[2em] lg:px-[4em] py-12 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="mb-8 text-3xl font-bold text-center text-teal-400">
            NFT Mint
          </h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Mint Stages */}
            <div className="space-y-6">
              {Object.entries(stageInfo).map(([stage, info]) => (
                <MagicCard key={stage} className="p-6">
                  <h2 className="mb-4 text-2xl font-bold text-teal-400">
                    {info.name} Stage
                  </h2>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Price:</span>
                    <span className="font-semibold text-teal-400">
                      {info.price} SOL
                    </span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="gap-2 text-slate-300">
                      Time Remaining:{" "}
                      <span className="font-semibold text-teal-400">
                        {info.timeRemaining}
                      </span>
                    </span>
                  </div>
                  <Button
                    onClick={() =>
                      setCurrentStage(
                        stage as "public" | "whitelist" | "presale"
                      )
                    }
                    className="w-full bg-teal-500 hover:bg-teal-600"
                    disabled={currentStage !== stage}
                  >
                    {currentStage === stage ? "Mint Now" : "Coming Soon"}
                  </Button>
                </MagicCard>
              ))}
            </div>

            {/* NFT Info */}
            <MagicCard className="p-6">
              <Image
                src={HeroImg}
                alt="NFT Preview"
                width={400}
                height={400}
                className="w-full mb-4 rounded-lg"
              />
              <h2 className="mb-2 text-2xl font-bold text-teal-400">
                Project XYZ
              </h2>
              <p className="mb-4 text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Progress value={progress} className="mb-2" />
              <p className="text-sm text-slate-400">{progress}% minted</p>
            </MagicCard>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12"
          >
            <h2 className="mb-6 text-2xl font-bold text-center text-teal-400">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-2xl mx-auto"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-teal-500">
                  How do I mint an NFT?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  To mint an NFT, connect your wallet and click the "Mint Now"
                  button during the appropriate stage. Follow the prompts to
                  complete the transaction.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-teal-500">
                  What is the difference between stages?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  The pre-sale is for early supporters, the whitelist is for
                  approved addresses, and the public sale is open to everyone.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-teal-500">
                  What if the transaction fails?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  If a transaction fails, please check your wallet balance and
                  network connection. If issues persist, contact our support
                  team.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </motion.div>
      </section>
    </motion.main>
  );
}
