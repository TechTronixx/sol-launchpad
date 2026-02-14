/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Icon } from "@iconify/react";
import Footer from "@/components/Footer";

export default function PresaleCreator() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-grow container px-4 lg:px-8 mx-auto relative z-10"
      >
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-primary border border-primary/30 bg-primary/5 rounded-full">
            Liquidity Injection
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-clash text-foreground tracking-tight">
            PRESALE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              TERMINAL
            </span>
          </h1>
          <p className="mt-4 text-muted-foreground font-syne max-w-xl">
            Configure automated token distribution rounds with vesting schedules
            and whitelist protocols.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-card/60 backdrop-blur-md border border-border p-8 md:p-12 relative overflow-hidden group"
        >
          {/* Corner Accents */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/30" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-primary/30" />

          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider font-clash flex items-center gap-2">
                  <Icon
                    icon="solar:box-minimalistic-bold-duotone"
                    className="text-primary"
                  />
                  Target Asset
                </h3>
                <div className="space-y-4">
                  <Input placeholder="Token Address (Mint ID)" />
                  <div className="flex gap-4">
                    <Input placeholder="Total Presale Amount" type="number" />
                    <Input placeholder="Softcap (SOL)" type="number" />
                  </div>
                  <Input placeholder="Hardcap (SOL)" type="number" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider font-clash flex items-center gap-2">
                  <Icon
                    icon="solar:clock-circle-bold-duotone"
                    className="text-primary"
                  />
                  Timeline & Vesting
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-muted-foreground">
                        START_TIME
                      </label>
                      <Input type="datetime-local" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-muted-foreground">
                        END_TIME
                      </label>
                      <Input type="datetime-local" />
                    </div>
                  </div>
                  <Input placeholder="Vesting Schedule (e.g. 40% TGE, 10% Monthly)" />
                  <Input placeholder="Minimum Buy (SOL)" type="number" />
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider font-clash">
                Project Details
              </h3>
              <Textarea
                placeholder="Describe your project utility and roadmap..."
                className="font-syne"
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button className="w-full md:w-auto px-8 h-12 bg-primary text-primary-foreground font-bold font-clash tracking-wider hover:bg-primary/80 transition-all rounded-sm flex items-center gap-2">
                Create Presale
                <Icon icon="solar:rocket-2-bold-duotone" className="w-5 h-5" />
              </Button>
            </div>
          </form>
        </motion.div>
      </motion.div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
