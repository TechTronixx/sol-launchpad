"use client";
import Image from "next/image";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Icon } from "@iconify/react";
import { ModeToggle } from "./mode-toggle";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Logo } from "@images";

const navLinks = [
  { name: "Home", href: "/", icon: "solar:home-2-linear" },
  { name: "About", href: "/about", icon: "solar:info-circle-linear" },
  { name: "Contact", href: "/contact", icon: "solar:letter-linear" },
  {
    name: "Token",
    href: "/token-creator",
    icon: "solar:document-text-linear",
  },
  {
    name: "NFT",
    href: "/nft-creator",
    icon: "solar:gallery-bold-duotone",
  },
  {
    name: "Presale",
    href: "/presale-creator",
    icon: "solar:rocket-2-linear",
  },
  {
    name: "Mint",
    href: "/mint-NFT",
    icon: "solar:cart-large-minimalistic-linear",
  },
  {
    name: "Claim",
    href: "/presale-claim",
    icon: "solar:wallet-money-linear",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500",
        scrolled ? "pt-4" : "pt-8",
      )}
    >
      <div className="relative group rounded-full">
        {/* Double Border Gradient Container */}
        <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 blur-sm group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-20" />

        {/* Main Glass Container */}
        <nav
          className={cn(
            "relative flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-full",
            "bg-void/80 backdrop-blur-xl border border-white/5 shadow-2xl overflow-hidden",
            "before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] before:opacity-20 before:pointer-events-none",
          )}
        >
          {/* Logo - Crystalline LED Effect */}
          <Link
            href="/"
            className="relative z-10 group/logo flex items-center gap-3 pr-4"
          >
            <div className="relative flex items-center justify-center size-10 rounded-lg bg-obsidian border border-white/10 shadow-inner overflow-hidden group-hover/logo:border-radioactive-teal/50 transition-colors duration-300">
              <motion.div className="absolute inset-0 bg-radioactive-teal/20 blur-md opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300" />
              <Image
                src={Logo}
                alt="Launchpad"
                className="w-8 h-8 object-contain z-10 transition-transform duration-300 group-hover/logo:scale-110"
              />
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="font-clash font-semibold text-lg tracking-wider text-white group-hover/logo:text-radioactive-teal transition-colors duration-300">
                LAUNCHPAD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Monospace Decoders */}
          <div className="hidden xl:flex items-center gap-6 font-mono z-10">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className={cn(
                  "relative text-xs font-medium transition-colors duration-300 uppercase tracking-widest",
                  pathname === link.href
                    ? "text-radioactive-teal"
                    : "text-silver/60 hover:text-white",
                )}
              >
                <div className="flex items-center gap-1 group/link">
                  <span
                    className={cn(
                      "inline-block opacity-0 -translate-x-2 transition-all duration-300 font-bold text-radioactive-teal",
                      (hoveredLink === link.href || pathname === link.href) &&
                        "opacity-100 translate-x-0",
                    )}
                  >
                    [
                  </span>
                  <span>{link.name}</span>
                  <span
                    className={cn(
                      "inline-block opacity-0 translate-x-2 transition-all duration-300 font-bold text-radioactive-teal",
                      (hoveredLink === link.href || pathname === link.href) &&
                        "opacity-100 translate-x-0",
                    )}
                  >
                    ]
                  </span>
                </div>
                {pathname === link.href && (
                  <motion.div
                    layoutId="active-nav-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-radioactive-teal rounded-full shadow-[0_0_8px_2px_rgba(0,255,163,0.5)]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Actions - The Jewel */}
          <div className="flex items-center gap-4 z-10 pl-4 border-l border-white/5">
            {/* Socials - Hidden on small screens */}
            <div className="hidden md:flex gap-2">
              <a
                href="#"
                className="p-2 text-white/40 hover:text-white transition-colors hover:bg-white/5 rounded-md"
              >
                <Icon
                  icon="logos:twitter"
                  width="18"
                  className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                />
              </a>
            </div>

            <div className="hidden lg:block h-4 w-[1px] bg-white/10" />

            {/* Mode Toggle */}
            <div className="hidden sm:block">
              <ModeToggle />
            </div>

            {/* Select Wallet Jewel CTA */}
            <div className="relative group/wallet">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-radioactive-teal to-hyper-violet opacity-30 group-hover/wallet:opacity-75 blur transition duration-500 rounded-xl" />
              <div className="relative bg-obsidian rounded-xl p-[1px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover/wallet:opacity-100 transition-opacity duration-500" />
                <WalletMultiButton className="!bg-transparent !h-9 !px-4 !font-mono !text-xs !font-bold !text-white hover:!text-radioactive-teal transition-colors !rounded-xl" />
              </div>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger className="xl:hidden text-white/80 hover:text-white transition-colors">
                <Icon icon="solar:hamburger-menu-linear" width="24" />
              </SheetTrigger>
              <SheetContent className="bg-void/95 backdrop-blur-xl border-l-white/10 text-white">
                <div className="flex flex-col gap-8 mt-12 font-mono">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-xl font-medium hover:text-radioactive-teal transition-colors flex items-center gap-4 group"
                    >
                      <span className="text-white/20 group-hover:text-radioactive-teal transition-colors">
                        0{navLinks.indexOf(link) + 1}.
                      </span>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
