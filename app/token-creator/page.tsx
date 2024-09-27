/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Upload } from "lucide-react";
import Image from "next/image";
import { HeroImg } from "@images";

export default function TokenCreatorPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen bg-gradient-to-b from-background to-slate-900"
    >
      <section className="flex-grow px-[2em] lg:px-[4em] py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="mb-8 text-3xl font-bold text-center text-teal-400">
            Token Creator
          </h1>
          <p className="mb-8 text-sm text-center text-white">
            Create your own Solana token with ease. Customize your token's
            properties and launch it on the Solana blockchain.
          </p>

          <div className="p-6 bg-opacity-50 border rounded-lg bg-slate-800 backdrop-blur-sm border-teal-400/20">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Input placeholder="Put the name of your token" label="Name" />
              <Input
                placeholder="Put the symbol of your token"
                label="Symbol"
              />
              <Input
                placeholder="Put the decimals of your token"
                label="Decimals"
                type="number"
              />
              <div className="relative">
                <Input placeholder="Upload Image" disabled />
                <Button className="absolute top-0 bottom-0 right-0 text-white bg-teal-400 hover:bg-teal-500 border-teal-400/50">
                  <Upload className="w-4 h-4 mr-2" /> Upload Image
                </Button>
              </div>
              <Input
                placeholder="Put the supply of your token"
                label="Supply"
                type="number"
              />
              <div></div>
              <Textarea
                placeholder="Enter Epic Description here"
                className="col-span-2"
              />
              <Input placeholder="https://" label="Website" />
              <Input placeholder="https://twitter.com/" label="Twitter" />
              <Input placeholder="https://t.me/" label="Telegram" />
              <Input placeholder="https://discord.gg/" label="Discord" />

              <div className="col-span-2">
                <h3 className="mb-4 text-lg font-semibold text-teal-400">
                  Token Options:
                </h3>
                <div className="flex flex-wrap justify-between gap-4">
                  {["Immutable", "Revoke Freeze", "Revoke Mint"].map(
                    (option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Switch id={option} />
                        <label htmlFor={option} className="text-white">
                          {option}
                        </label>
                        <span className="text-sm text-gray-400">
                          (+0.1 SOL)
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <Input
                placeholder="OWNER WALLET ADDRESS"
                className="col-span-2"
              />

              <Button className="col-span-2 px-4 py-2 font-bold text-white bg-gradient-to-r from-teal-600 to-teal-400 hover:from-teal-500 hover:to-teal-300">
                Create Token
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Liquidity Pool Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h2 className="mb-6 text-2xl font-bold text-center text-teal-400">
            Create a Liquidity Pool
          </h2>
          <p className="mb-8 text-sm text-center text-white">
            If you want to create a liquidity pool, you will need to Revoke
            Freeze Authority of the Token. You can also Revoke the Mint
            Authority to get the people reliability. You can do both here, each
            one costs 0.1 SOL.
          </p>
          <div className="p-6 bg-opacity-50 border rounded-lg bg-slate-800 backdrop-blur-sm border-teal-400/20">
            <Input placeholder="Put your token address" className="mb-4" />
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                className="text-white bg-teal-400 hover:bg-teal-500 border-teal-400/50"
              >
                Revoke Freeze Authority
              </Button>
              <Button
                variant="outline"
                className="text-white bg-teal-400 hover:bg-teal-500 border-teal-400/50"
              >
                Revoke Mint Authority
              </Button>
            </div>
          </div>
        </motion.div>

        {/* How to use Solana Token Creator Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h2 className="mb-6 text-2xl font-bold text-center text-teal-400">
            How to use Solana Token Creator
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-6 space-y-4 bg-opacity-50 border rounded-lg bg-slate-800 backdrop-blur-sm border-teal-400/20">
              <ol className="space-y-2 text-white list-decimal list-inside">
                <li>Connect your Solana wallet</li>
                <li>Write the name you want for your Token</li>
                <li>Indicate the symbol (max 8 characters)</li>
                <li>
                  Select the decimals quantity (0 for Whitelist Token, 6 for
                  utility token)
                </li>
                <li>Write the description you want for your SPL Token</li>
                <li>Upload the image for your token (PNG)</li>
                <li>Put the Supply of your Token</li>
                <li>
                  Click on create, accept the transaction and wait until your
                  token is ready
                </li>
              </ol>
              <p className="mt-4 text-sm text-slate-300">
                The cost of creating the Token is 0.5 SOL, it includes all fees
                needed for the SPL Token Creation. The creation process will
                start and will take some seconds. After that you will receive
                the total supply of the token in the wallet you chose. Check
                here a whole blog post about how to create a Solana Token.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={HeroImg}
                alt="hero-image"
                className="h-auto max-w-full border rounded-lg shadow-lg border-teal-400/20"
              />
            </div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </motion.main>
  );
}
