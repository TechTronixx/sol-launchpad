"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Icon } from "@iconify/react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-void pt-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-grow container mx-auto px-4 lg:px-8 relative z-10"
      >
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-radioactive-teal border border-radioactive-teal/30 bg-radioactive-teal/5 rounded-full">
            :: SECURE_UPLINK
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-clash text-white tracking-tight">
            ESTABLISH <span className="text-radioactive-teal">CONNECTION</span>
          </h1>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Shard */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="p-8 bg-void/50 backdrop-blur-md border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent -mr-8 -mt-8 rotate-45" />

              <h3 className="text-xl font-clash text-white mb-6">
                Transmission Channels
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-radioactive-teal">
                    <Icon icon="solar:letter-linear" className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                      Email Protocol
                    </p>
                    <a
                      href="mailto:contact@solana-launchpad.com"
                      className="text-lg text-white hover:text-radioactive-teal transition-colors font-syne"
                    >
                      contact@solana-launchpad.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-radioactive-teal">
                    <Icon
                      icon="logos:twitter"
                      className="w-5 h-5 grayscale opacity-80"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                      X-Comms
                    </p>
                    <a
                      href="#"
                      className="text-lg text-white hover:text-radioactive-teal transition-colors font-syne"
                    >
                      @SolanaLaunchpad
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-radioactive-teal">
                    <Icon
                      icon="logos:discord-icon"
                      className="w-5 h-5 grayscale opacity-80"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                      DAO Frequency
                    </p>
                    <a
                      href="#"
                      className="text-lg text-white hover:text-radioactive-teal transition-colors font-syne"
                    >
                      Join Server
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Shard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 bg-void/50 backdrop-blur-md border border-white/10 relative"
          >
            {/* Decorative corners */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-white/20" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-white/20" />

            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-mono text-radioactive-teal tracking-widest uppercase"
                >
                  User_ID
                </label>
                <Input
                  id="name"
                  placeholder="Identify yourself..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-radioactive-teal/50 transition-colors h-12 font-syne"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-mono text-radioactive-teal tracking-widest uppercase"
                >
                  Reply_Vector
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Where to send the response..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-radioactive-teal/50 transition-colors h-12 font-syne"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-mono text-radioactive-teal tracking-widest uppercase"
                >
                  Data_Packet
                </label>
                <Textarea
                  id="message"
                  placeholder="Initialize message sequence..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-radioactive-teal/50 transition-colors min-h-[150px] font-syne resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 bg-radioactive-teal/90 text-black font-bold font-clash tracking-wider hover:bg-radioactive-teal transition-all rounded-sm relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  TRANSMIT_DATA
                  <Icon
                    icon="lucide:send"
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
