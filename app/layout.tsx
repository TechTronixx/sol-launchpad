import "./globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import type { Metadata } from "next";
import {
  montserrat,
  rubik,
  spaceGrotesk,
  jakarta,
  jetbrainsMono,
  syne,
  unbounded,
} from "./fonts";
import Provider from "@/providers/Provider";
import Header from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import Loader from "@/components/Loader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// ... (keep metadata)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${montserrat.variable} ${rubik.variable} ${spaceGrotesk.variable} ${jakarta.variable} ${jetbrainsMono.variable} ${syne.variable} ${unbounded.variable} font-jakarta relative`}
      >
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://avatars.githubusercontent.com" />
        <Provider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mesh-gradient-bg min-h-screen">
            <Header />
            {children}
            <ScrollToTop />
            <Loader />
            <Analytics />
            <SpeedInsights />
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Solana Launchpad",
                url: "https://solana-launchpad.vercel.app",
                description:
                  "A premier Solana Launchpad to showcase projects and launch tokens.",
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://solana-launchpad.vercel.app/?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Solana Launchpad",
                url: "https://solana-launchpad.vercel.app",
                logo: "https://solana-launchpad.vercel.app/logo.png",
                sameAs: [
                  "https://twitter.com/TechTronixx",
                  "https://github.com/TechTronixx",
                ],
              }),
            }}
          />
        </Provider>
      </body>
    </html>
  );
}
