/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function NFTCreator() {
  const [nftName, setNftName] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [royaltyPercentage, setRoyaltyPercentage] = useState(5);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nftName || !description) {
      alert("Please fill in all fields");
      return;
    }

    const submitBtn = e.currentTarget.querySelector(
      'button[type="submit"]',
    ) as HTMLButtonElement;
    const originalText = submitBtn.innerText;
    submitBtn.innerText = "MINTING_ASSET...";
    submitBtn.disabled = true;

    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert(`NFT "${nftName}" Created Successfully! \n(This is a demo action)`);

    submitBtn.innerText = originalText;
    submitBtn.disabled = false;
  };

  return (
    <div className="flex flex-col min-h-screen bg-void pt-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radioactive-teal/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow container px-4 lg:px-8 mx-auto relative z-10"
      >
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-radioactive-teal border border-radioactive-teal/30 bg-radioactive-teal/5 rounded-full">
            :: SOLANA_SPL_TOKEN_STANDARD
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-clash text-white tracking-tight">
            NFT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-radioactive-teal to-blue-500">
              FORGE
            </span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Configuration Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-void/60 backdrop-blur-md border border-white/10 p-8 relative overflow-hidden group"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-radioactive-teal opacity-50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-radioactive-teal opacity-50" />

            <h3 className="text-xl font-clash text-white mb-6 flex items-center gap-2">
              <Icon
                icon="solar:settings-linear"
                className="text-radioactive-teal"
              />
              Asset Configuration
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="nftName"
                  className="font-mono text-xs text-radioactive-teal uppercase"
                >
                  Asset Name
                </Label>
                <Input
                  id="nftName"
                  value={nftName}
                  onChange={(e) => setNftName(e.target.value)}
                  placeholder="e.g. Cyber Samurai #001"
                  className="font-syne"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="description"
                  className="font-mono text-xs text-radioactive-teal uppercase"
                >
                  Metadata Description
                </Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Define asset properties and lore..."
                  className="min-h-[100px] font-syne"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="imageUpload"
                  className="font-mono text-xs text-radioactive-teal uppercase"
                >
                  Assets Upload
                </Label>
                <div className="relative group/upload">
                  <Input
                    id="imageUpload"
                    type="file"
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="flex items-center justify-center w-full h-24 bg-white/5 border border-dashed border-white/20 hover:border-radioactive-teal/50 hover:bg-white/10 transition-all rounded-sm">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon icon="solar:upload-minimalistic-linear" />
                      {imageFile
                        ? imageFile.name
                        : "Drag & Drop or Click to Upload"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-sm">
                  <div className="space-y-1">
                    <Label
                      htmlFor="animated"
                      className="font-mono text-xs text-radioactive-teal uppercase block"
                    >
                      Animation
                    </Label>
                    <span className="text-[10px] text-muted-foreground">
                      Enable dynamic rendering
                    </span>
                  </div>
                  <Switch
                    id="animated"
                    checked={isAnimated}
                    onCheckedChange={setIsAnimated}
                    className="data-[state=checked]:bg-radioactive-teal"
                  />
                </div>

                <div className="space-y-3 p-3 bg-white/5 border border-white/10 rounded-sm">
                  <div className="flex justify-between">
                    <Label
                      htmlFor="royalty"
                      className="font-mono text-xs text-radioactive-teal uppercase"
                    >
                      Royalties
                    </Label>
                    <span className="font-mono text-xs text-white">
                      {royaltyPercentage}%
                    </span>
                  </div>
                  <Slider
                    id="royalty"
                    min={0}
                    max={20}
                    step={0.5}
                    value={[royaltyPercentage]}
                    onValueChange={(value) => setRoyaltyPercentage(value[0])}
                    className="[&>.relative>.absolute]:bg-radioactive-teal"
                  />
                </div>
              </div>

              <Button className="w-full h-12 mt-4 bg-radioactive-teal text-black font-bold font-clash tracking-wider hover:bg-radioactive-teal/80 transition-all rounded-sm rounded-tr-xl">
                INITIALIZE_MINT_SEQUENCE
                <Icon
                  icon="solar:arrow-right-linear"
                  className="ml-2 w-4 h-4"
                />
              </Button>
            </form>
          </motion.div>

          {/* Preview Shard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center sticky top-32"
          >
            <div className="w-full max-w-sm relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-b from-radioactive-teal via-purple-500 to-transparent opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />

              <div className="bg-obsidian border border-white/10 overflow-hidden relative z-10">
                {/* Header Bar */}
                <div className="h-8 bg-white/5 border-b border-white/10 flex items-center justify-between px-3">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    PREVIEW_MODE
                  </span>
                </div>

                {/* Image Container */}
                <div className="aspect-square bg-grid-pattern relative flex items-center justify-center overflow-hidden bg-black/50">
                  {imageFile ? (
                    <Image
                      src={URL.createObjectURL(imageFile)}
                      alt="Preview"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex flex-col items-center text-white/20">
                      <Icon
                        icon="solar:gallery-wide-linear"
                        className="w-12 h-12 mb-2"
                      />
                      <span className="font-mono text-xs">NO_SIGNAL</span>
                    </div>
                  )}

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-xl font-bold font-clash truncate">
                      {nftName || "UNKNOWN_ASSET"}
                    </h4>
                    <div className="flex gap-2 mt-2">
                      <span className="text-[10px] font-mono bg-radioactive-teal/20 text-radioactive-teal px-2 py-0.5 rounded-sm border border-radioactive-teal/30">
                        SPL-20
                      </span>
                      {isAnimated && (
                        <span className="text-[10px] font-mono bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-sm border border-purple-500/30 flex items-center gap-1">
                          <div className="w-1 h-1 rounded-full bg-purple-400 animate-pulse" />
                          ANIMATED
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Details */}
                <div className="p-4 bg-white/5 border-t border-white/10 space-y-3">
                  <p className="text-xs text-muted-foreground font-mono line-clamp-2 h-8">
                    {description || "// Metadata description pending..."}
                  </p>
                  <div className="flex justify-between items-center text-xs font-mono font-bold pt-2 border-t border-white/5 text-white/50">
                    <span>ROYALTY_FEE</span>
                    <span className="text-white">{royaltyPercentage}%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
