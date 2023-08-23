import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Rubik } from "next/font/google";
import Provider from "@providers/Provider";
import Header from "@components/Header";

require("@solana/wallet-adapter-react-ui/styles.css");
require("../app/globals.css");

export const montserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--Montserrat",
});

export const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--Rubik",
});

export const metadata: Metadata = {
  title: "PRNT | Launchpad",
  description: "A Solana Launchpad site to showcase Projects and mint them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${rubik.variable} font-rubik`}>
        <Provider
          attribute="data-theme"
          storageKey="sol-launchpad-theme"
          defaultTheme="dark"
        >
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
