/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { HeroImg } from "@images";

export default function TokenCreatorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-void pt-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-grow px-4 lg:px-8 pb-20 relative z-10"
      >
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-radioactive-teal border border-radioactive-teal/30 bg-radioactive-teal/5 rounded-full">
            :: DEPLOYMENT_MODULE
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-clash text-white tracking-tight">
            TOKEN{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-radioactive-teal to-blue-500">
              GENERATOR
            </span>
          </h1>
          <p className="mt-4 text-muted-foreground font-syne max-w-xl">
            Deploy distinct SPL assets on the Solana network with automated
            security configurations.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto space-y-20"
        >
          {/* Main Creator Form Shard */}
          <div className="p-8 md:p-10 bg-void/60 backdrop-blur-md border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-radioactive-teal/5 rounded-full blur-[50px] pointer-events-none" />
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-white/20" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-white/20" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <span className="text-xs font-mono text-radioactive-teal uppercase tracking-widest">
                  Core Parameters
                </span>
                <div className="space-y-4">
                  <Input placeholder="Token Name (e.g. Galactic Credits)" />
                  <Input placeholder="Symbol (e.g. CRED)" />
                  <Input
                    placeholder="Decimals (6 for Utility, 9 for SOL standard)"
                    type="number"
                  />
                  <Input placeholder="Total Supply" type="number" />
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-xs font-mono text-radioactive-teal uppercase tracking-widest">
                  Metadata & Identity
                </span>
                <div className="space-y-4">
                  <div className="relative group/upload h-12">
                    <Input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />
                    <div className="flex items-center justify-center h-full bg-white/5 border border-dashed border-white/20 hover:border-radioactive-teal/50 transition-colors">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Icon icon="solar:upload-minimalistic-linear" />
                        Upload Logo (PNG)
                      </span>
                    </div>
                  </div>
                  <Textarea placeholder="Project Description..." />
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 space-y-4 pt-4 border-t border-white/5">
                <span className="text-xs font-mono text-radioactive-teal uppercase tracking-widest">
                  Social Links (Optional)
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-white/5 border border-white/10 px-3">
                    <Icon
                      icon="solar:globe-linear"
                      className="text-muted-foreground"
                    />
                    <Input
                      placeholder="Website"
                      className="border-0 bg-transparent focus-visible:ring-0"
                    />
                  </div>
                  <div className="flex items-center bg-white/5 border border-white/10 px-3">
                    <Icon
                      icon="logos:twitter"
                      className="text-muted-foreground w-4 h-4 opacity-50 grayscale"
                    />
                    <Input
                      placeholder="Twitter / X"
                      className="border-0 bg-transparent focus-visible:ring-0"
                    />
                  </div>
                  <div className="flex items-center bg-white/5 border border-white/10 px-3">
                    <Icon
                      icon="logos:telegram"
                      className="text-muted-foreground w-4 h-4 opacity-50 grayscale"
                    />
                    <Input
                      placeholder="Telegram"
                      className="border-0 bg-transparent focus-visible:ring-0"
                    />
                  </div>
                  <div className="flex items-center bg-white/5 border border-white/10 px-3">
                    <Icon
                      icon="logos:discord-icon"
                      className="text-muted-foreground w-4 h-4 opacity-50 grayscale"
                    />
                    <Input
                      placeholder="Discord"
                      className="border-0 bg-transparent focus-visible:ring-0"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 pt-6">
                <h3 className="mb-4 text-sm font-bold text-white uppercase tracking-wider font-clash flex items-center gap-2">
                  <Icon
                    icon="solar:shield-check-linear"
                    className="text-radioactive-teal"
                  />
                  Security Authorities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      label: "Immutable Metadata",
                      desc: "Prevents future updates",
                    },
                    { label: "Revoke Mint", desc: "Fixed supply forever" },
                    {
                      label: "Revoke Freeze",
                      desc: "Required for Liquidity Pools",
                    },
                  ].map((opt, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 hover:border-radioactive-teal/30 transition-colors"
                    >
                      <Switch
                        id={`opt-${i}`}
                        className="mt-1 data-[state=checked]:bg-radioactive-teal"
                      />
                      <div>
                        <label
                          htmlFor={`opt-${i}`}
                          className="text-sm font-bold text-white block"
                        >
                          {opt.label}
                        </label>
                        <span className="text-[10px] text-muted-foreground font-mono">
                          +0.1 SOL
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-1 md:col-span-2">
                <Button className="w-full h-14 bg-gradient-to-r from-radioactive-teal to-teal-600 text-black font-bold font-clash text-lg tracking-wider hover:brightness-110 transition-all rounded-sm">
                  INITIALIZE DEPLOYMENT
                </Button>
              </div>
            </div>
          </div>

          {/* Liquidity Pool Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white font-clash">
                Liquidity Pool Manager
              </h2>
              <p className="text-muted-foreground font-syne text-sm leading-relaxed">
                To create a Liquidity Pool, you must Revoke Freeze Authority.
                Revoking Mint Authority increases investor trust.
              </p>
              <div className="p-6 bg-white/5 border border-white/10 rounded-sm space-y-4">
                <Input placeholder="Token Address" className="font-mono" />
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10 hover:text-radioactive-teal hover:border-radioactive-teal/50"
                  >
                    Revoke Freeze
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10 hover:text-radioactive-teal hover:border-radioactive-teal/50"
                  >
                    Revoke Mint
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-8 bg-void/40 border border-white/10 relative">
              <h3 className="text-lg font-bold text-white mb-6 font-clash">
                Deployment Guide
              </h3>
              <ul className="space-y-4">
                {[
                  "Connect Solana Wallet",
                  "Define Name & Symbol",
                  "Set Decimals (6 or 9)",
                  "Upload PNG Assets",
                  "Configure Security Options",
                  "Sign Transaction (0.5 SOL)",
                ].map((step, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-sm text-muted-foreground"
                  >
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white/5 text-radioactive-teal font-mono text-xs border border-white/10">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
