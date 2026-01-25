/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-void pt-32 pb-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radioactive-teal/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10"
          >
            <div className="w-2 h-2 rounded-full bg-radioactive-teal animate-pulse" />
            <span className="text-xs font-mono text-radioactive-teal tracking-widest">
              ABOUT_US
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-clash text-white tracking-tight mb-6"
          >
            REVOLUTIONIZING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-radioactive-teal to-blue-500">
              DECENTRALIZED
            </span>{" "}
            SCALING
          </motion.h1>
        </div>

        {/* Glass Shard Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Architectural Border Elements */}
          <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-radioactive-teal" />
          <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-radioactive-teal" />

          <div className="bg-void/40 backdrop-blur-md border border-white/10 p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <p className="text-lg md:text-xl text-justify text-muted-foreground font-syne leading-relaxed">
                At{" "}
                <span className="text-white font-bold">Solana Launchpad</span>,
                we are architecting the infrastructure for the next generation
                of Web3 communities. Founded in the cryptographic trenches, our
                team combines elite engineering with avant-garde design to build
                tools that don't just function—they{" "}
                <span className="text-radioactive-teal">resonate</span>.
              </p>

              <div className="grid md:grid-cols-2 gap-8 py-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-clash font-semibold text-white flex items-center gap-2">
                    <Icon
                      icon="solar:target-linear"
                      className="text-radioactive-teal"
                    />
                    Our Mission
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                    To empower decentralized entities with military-grade
                    scaling solutions, fostering connections that are as
                    unbreakable as the blockchain itself.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-clash font-semibold text-white flex items-center gap-2">
                    <Icon
                      icon="solar:cpu-linear"
                      className="text-radioactive-teal"
                    />
                    The Technology
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                    Our flagship terminal offers automated reward systems,
                    real-time analytics, and seamless content integration—all
                    wrapped in a hyper-performance interface.
                  </p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 font-syne text-muted-foreground">
                  {[
                    "Customizable Reward Protocols",
                    "On-Chain Analytics Core",
                    "Gamified Engagement Layers",
                    "Cross-Chain Integration",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-radioactive-teal">::</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-base text-center md:text-left text-muted-foreground font-syne italic">
                  "We don't just predict the future. We code it."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
