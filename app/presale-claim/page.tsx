/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Footer from "@/components/Footer";

export default function PresaleClaim() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-grow container px-4 lg:px-8 mx-auto relative z-10"
      >
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-primary border border-primary/30 bg-primary/5 rounded-full">
            Asset Redemption
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-clash text-foreground tracking-tight">
            CLAIM{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              PORTAL
            </span>
          </h1>
          <p className="mt-4 text-muted-foreground font-syne max-w-xl">
            Retrieve your vested allocations securely. Connect wallet to scan
            for claimable assets.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card/60 backdrop-blur-md border border-border p-8 md:p-12 relative overflow-hidden group">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />

            <div className="space-y-8">
              <div className="flex items-center gap-4 p-4 bg-secondary/30 border border-border rounded-sm">
                <div className="p-3 bg-card border border-border rounded-full text-primary">
                  <Icon
                    icon="solar:wallet-money-bold-duotone"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="text-foreground font-bold font-clash">
                    Wallet Status
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    Scanning Network...
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <Input
                  placeholder="Enter Presale Address (Optional)"
                  className="font-mono text-sm"
                />

                <Button className="w-full h-14 bg-secondary/30 hover:bg-secondary/50 border border-border text-foreground font-bold font-clash tracking-wider transition-all rounded-sm group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Check Allocations
                    <Icon
                      icon="solar:scanner-bold-duotone"
                      className="w-5 h-5 group-hover:rotate-12 transition-transform"
                    />
                  </span>
                  <div className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Button>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground font-mono">
                  *Gas fees apply for claiming transactions. <br /> Ensure you
                  have sufficient SOL balance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
