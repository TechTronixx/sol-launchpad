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
    <div className="flex flex-col min-h-screen bg-background pt-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-grow container mx-auto px-4 lg:px-8 relative z-10"
      >
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-primary border border-primary/30 bg-primary/5 rounded-full">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-clash text-foreground tracking-tight">
            ESTABLISH <span className="text-primary">CONNECTION</span>
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
            <div className="p-8 bg-card/50 backdrop-blur-md border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/5 to-transparent -mr-8 -mt-8 rotate-45" />

              <h3 className="text-xl font-clash text-foreground mb-6">
                Transmission Channels
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/50 border border-border rounded-sm text-primary">
                    <Icon icon="solar:letter-linear" className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                      Email Protocol
                    </p>
                    <a
                      href="mailto:contact@solana-launchpad.com"
                      className="text-lg text-foreground hover:text-primary transition-colors font-syne"
                    >
                      contact@solana-launchpad.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/50 border border-border rounded-sm text-primary">
                    <Icon
                      icon="ri:twitter-x-fill"
                      className="w-5 h-5 opacity-80"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                      X-Comms
                    </p>
                    <a
                      href="#"
                      className="text-lg text-foreground hover:text-primary transition-colors font-syne"
                    >
                      @SolanaLaunchpad
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/50 border border-border rounded-sm text-primary">
                    <Icon
                      icon="logos:discord-icon"
                      className="w-5 h-5 opacity-80"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                      DAO Frequency
                    </p>
                    <a
                      href="#"
                      className="text-lg text-foreground hover:text-primary transition-colors font-syne"
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
            className="p-8 bg-card/50 backdrop-blur-md border border-border relative"
          >
            {/* Decorative corners */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary/20" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary/20" />

            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-mono text-primary tracking-widest uppercase"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name..."
                  className="font-syne"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-mono text-primary tracking-widest uppercase"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="font-syne"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-mono text-primary tracking-widest uppercase"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Type your message..."
                  className="font-syne min-h-[150px] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 bg-primary text-primary-foreground font-bold font-clash tracking-wider hover:bg-primary/90 transition-all rounded-sm relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <Icon
                    icon="solar:plain-linear"
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
