// "use client";
// import React from "react";
// import Link from "next/link";
// import { FC, useEffect, useState, useRef } from "react";
// import { useWallet, useConnection } from "@solana/wallet-adapter-react";
// import {
//   WalletMultiButton,
//   WalletDisconnectButton,
// } from "@solana/wallet-adapter-react-ui";
// import {
//   PublicKey,
//   clusterApiUrl,
//   Connection,
//   Keypair,
//   SystemProgram,
//   Transaction,
// } from "@solana/web3.js";

// type Props = {};

// const SolanaButton = (props: Props) => {
//   const { connection } = useConnection();
//   console.log("Connection", connection);
//   const wallet = useWallet();
//   console.log("Wallet", wallet);

//   if (wallet.connected) {
//     return <WalletMultiButton />;
//   } else {
//     return <WalletDisconnectButton />;
//   }
// };

// export default SolanaButton;
