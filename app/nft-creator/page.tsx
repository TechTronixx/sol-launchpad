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
// import { useToast } from "@/hooks/use-toast";

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
    // TODO: Implement backend integration for NFT creation
    // This is where you'd send the form data to your backend
    // const { toast } = useToast();
    // toast({
    //   title: "NFT Creation Initiated",
    //   description: "Your NFT is being created. Please wait for confirmation.",
    // });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container px-4 py-8 mx-auto bg-opacity-50 border rounded-lg bg-slate-800 backdrop-blur-sm border-teal-400/20"
    >
      <h1 className="mb-4 text-3xl font-bold text-teal-400">NFT Creation</h1>
      <p className="mb-6 text-slate-200">
        Design and mint your own NFT collections on Solana.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="nftName">NFT Name</Label>
          <Input
            id="nftName"
            value={nftName}
            onChange={(e) => setNftName(e.target.value)}
            placeholder="Enter NFT name"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your NFT"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="imageUpload">Upload Image</Label>
          <Input
            id="imageUpload"
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            className="mt-1"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="animated"
            checked={isAnimated}
            onCheckedChange={setIsAnimated}
          />
          <Label htmlFor="animated">Animated NFT</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="royalty">Royalty Percentage</Label>
          <Slider
            id="royalty"
            min={0}
            max={10}
            step={0.5}
            value={[royaltyPercentage]}
            onValueChange={(value) => setRoyaltyPercentage(value[0])}
            className="mt-1"
          />
          <p className="mt-1 text-sm text-slate-400">{royaltyPercentage}%</p>
        </div>

        <Button className="mt-4 bg-teal-400 hover:bg-teal-600" type="submit">
          Create NFT
        </Button>
      </form>

      {/* TODO: Add preview component for the NFT */}
      {/* This is where you can show a preview of the NFT based on user input */}
    </motion.div>
  );
}
