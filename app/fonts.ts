import {
  Montserrat,
  Rubik,
  Space_Grotesk,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
  Syne,
  Unbounded,
} from "next/font/google";

export const montserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
  variable: "--Montserrat",
  display: "swap",
});

export const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
  variable: "--Rubik",
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});
