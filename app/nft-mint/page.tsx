/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import HeroImg from "../../images/heroImg.jpg";

export default function NFTMint() {
  const [file, setFile] = useState<File | null>(null);

  const handleMint = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement backend integration for minting NFT
    //   const { toast } = useToast();
    //   toast({
    //     title: "NFT Minted!",
    //     description: "Your NFT has been successfully minted.",
    //   });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container px-4 py-8 mx-auto"
    >
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-full md:w-2/3">
          <h1 className="mb-2 text-3xl font-bold text-teal-400">
            Bored Ape Yacht Club
          </h1>
          <p className="mb-4 text-slate-200">Powered by Solana</p>
          <p className="mb-4 text-slate-200">
            The new Bored Ape Yacht Club is here!
          </p>
          <div className="flex-col items-center gap-2 mb-4 ">
            <span className="font-mono text-slate-200">
              January 1st at{" "}
              <span className="font-mono text-teal-400">8:00 PM UTC</span>
            </span>
            {/* Add icons for X, Discord, and other platforms */}
            {/* Discord */}
            <div className="flex gap-2 px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M19.303 5.337A17.3 17.3 0 0 0 14.963 4c-.191.329-.403.775-.552 1.125a16.6 16.6 0 0 0-4.808 0C9.454 4.775 9.23 4.329 9.05 4a17 17 0 0 0-4.342 1.337C1.961 9.391 1.218 13.35 1.59 17.255a17.7 17.7 0 0 0 5.318 2.664a13 13 0 0 0 1.136-1.836c-.627-.234-1.22-.52-1.794-.86c.149-.106.297-.223.435-.34c3.46 1.582 7.207 1.582 10.624 0c.149.117.287.234.435.34c-.573.34-1.167.626-1.793.86a13 13 0 0 0 1.135 1.836a17.6 17.6 0 0 0 5.318-2.664c.457-4.52-.722-8.448-3.1-11.918M8.52 14.846c-1.04 0-1.889-.945-1.889-2.101s.828-2.102 1.89-2.102c1.05 0 1.91.945 1.888 2.102c0 1.156-.838 2.1-1.889 2.1m6.974 0c-1.04 0-1.89-.945-1.89-2.101s.828-2.102 1.89-2.102c1.05 0 1.91.945 1.889 2.102c0 1.156-.828 2.1-1.89 2.1"
                />
              </svg>
              {/* X/Twitter */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
                />
              </svg>
              {/* Website */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1m3.241 10.5c-.1-2.708-.992-4.904-1.89-6.452a14 14 0 0 0-1.304-1.88L12 3.11l-.047.059c-.354.425-.828 1.06-1.304 1.88c-.898 1.547-1.79 3.743-1.89 6.451Zm-12.728 0h4.745c.1-3.037 1.1-5.49 2.093-7.204c.39-.672.78-1.233 1.119-1.673C6.11 3.329 2.746 7 2.513 11.5m18.974 0C21.254 7 17.89 3.329 13.53 2.623c.339.44.729 1.001 1.119 1.673c.993 1.714 1.993 4.167 2.093 7.204ZM8.787 13c.182 2.478 1.02 4.5 1.862 5.953q.574.993 1.304 1.88l.047.057l.047-.059c.354-.425.828-1.06 1.304-1.88c.842-1.451 1.679-3.471 1.862-5.951Zm-1.504 0H2.552a9.505 9.505 0 0 0 7.918 8.377a16 16 0 0 1-1.119-1.673C8.413 18.085 7.47 15.807 7.283 13m9.434 0c-.186 2.807-1.13 5.085-2.068 6.704c-.39.672-.78 1.233-1.118 1.673A9.506 9.506 0 0 0 21.447 13Z"
                />
              </svg>
            </div>
          </div>

          <Card className="mb-4 bg-slate-800 text-slate-200">
            <CardHeader>
              <CardTitle className="font-mono text-teal-400">
                GUARANTEED PREMINT
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-2">
                <span>Platform + Metaplex Fees:</span>
                <span className="flex items-center">
                  0.12{" "}
                  <Image
                    src="https://solana.com/src/img/branding/solanaLogoMark.svg"
                    alt="Solana Logo"
                    width={16}
                    height={16}
                    className="inline-block ml-1"
                  />
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Ending in:</span>
                <span className="font-mono text-teal-400">37m 41s</span>
              </div>
              <Button className="w-full text-white bg-teal-500 hover:bg-teal-600">
                Mint
              </Button>
            </CardContent>
          </Card>

          <Card className="mb-4 bg-slate-800 text-slate-200">
            <CardHeader>
              <CardTitle className="font-mono text-teal-400">
                WHITELIST MINT
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-2">
                <span>Platform + Metaplex Fees:</span>
                <span className="flex items-center">
                  0.052{" "}
                  <Image
                    src="https://solana.com/src/img/branding/solanaLogoMark.svg"
                    alt="Solana Logo"
                    width={16}
                    height={16}
                    className="inline-block ml-1"
                  />
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Starting in:</span>
                <span className="font-mono text-teal-400">38m 11s</span>
              </div>
              <Button
                className="w-full text-white bg-teal-500 hover:bg-teal-600"
                disabled
              >
                Mint
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-1/3">
          <Card className="bg-slate-800 text-slate-200">
            <CardContent className="p-4">
              <Image
                src={HeroImg}
                alt="Bored Ape Yacht Club"
                width={500}
                height={500}
                className="w-full h-auto mb-4 rounded-lg"
              />
              <div className="mb-4 text-center">
                <h2 className="text-xl font-bold text-teal-400">
                  Minted NFTs:
                </h2>
                <p className="text-2xl font-bold">449/5555</p>
              </div>
              <Progress value={8} className="w-full" />
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
