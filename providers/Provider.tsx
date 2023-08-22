"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClientWalletProvider from "./ClientWalletProvider";

const Provider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ThemeProvider {...props}>
      <ClientWalletProvider>
        {children}

        <ToastContainer
          position="bottom-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ClientWalletProvider>
    </ThemeProvider>
  );
};

export default Provider;
