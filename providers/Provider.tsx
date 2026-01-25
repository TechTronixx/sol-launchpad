"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClientWalletProvider from "./ClientWalletProvider";

export default function Provider({
  children,
  ...props
}: React.ComponentProps<typeof ThemeProvider>) {
  return (
    <ThemeProvider {...props}>
      <ClientWalletProvider>{children}</ClientWalletProvider>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
}
