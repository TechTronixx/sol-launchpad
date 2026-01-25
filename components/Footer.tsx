import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="py-20 bg-void text-muted-foreground border-t border-white/5 font-jakarta relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-20 right-0 w-96 h-96 bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-wrap justify-between gap-y-12">
          {/* Brand Column */}
          <div className="w-full md:w-1/4">
            <h3 className="mb-6 text-2xl font-bold font-clash text-foreground tracking-wider">
              LAUNCHPAD_V1
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs font-mono">
              The terminal for decentralized deployment. <br />
              Secure. Scalable. Fast.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4">
            <h4 className="mb-6 text-sm font-bold text-foreground font-mono uppercase tracking-widest text-primary">
              {/* // Navigation */}
            </h4>
            <ul className="space-y-3 font-space">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 hover:text-primary transition-all hover:translate-x-1 duration-300 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Token Tools */}
          <div className="w-full md:w-1/4">
            <h4 className="mb-6 text-sm font-bold text-foreground font-mono uppercase tracking-widest text-primary">
              {/* // Modules */}
            </h4>
            <ul className="space-y-3 font-space">
              {[
                { name: "Token Creator", href: "/token-creator" },
                { name: "Pre-sale Creator", href: "/presale-creator" },
                { name: "NFT Creator", href: "/nft-creator" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 hover:text-primary transition-all hover:translate-x-1 duration-300 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="w-full md:w-1/4">
            <h4 className="mb-6 text-sm font-bold text-foreground font-mono uppercase tracking-widest text-primary">
              {/* // Uplink */}
            </h4>
            <div className="flex gap-4 mb-8">
              <Link
                href="#"
                className="p-3 bg-white/5 rounded-sm hover:bg-primary hover:text-white transition-all group border border-white/10"
              >
                <Icon
                  icon="logos:twitter"
                  className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all brightness-200"
                />
              </Link>
              <Link
                href="#"
                className="p-3 bg-white/5 rounded-sm hover:bg-primary hover:text-white transition-all group border border-white/10"
              >
                <Icon
                  icon="logos:discord-icon"
                  className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all brightness-200"
                />
              </Link>
              <Link
                href="mailto:info@tokenlaunchpad.com"
                className="p-3 bg-white/5 rounded-sm hover:bg-primary hover:text-white transition-all group border border-white/10"
              >
                <Icon icon="solar:letter-linear" className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent opacity-30 group-hover:opacity-70 blur transition duration-500 rounded-sm"></div>
              <div className="relative flex">
                <input
                  type="email"
                  placeholder="ENTER_EMAIL"
                  className="w-full px-4 py-3 bg-black border border-white/10 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all pr-12 text-sm text-foreground font-mono"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-primary/20 text-primary hover:bg-primary hover:text-black transition-colors rounded-sm"
                >
                  <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground/60">
            <div>OPERATIONAL</div>
            <div>
              © {new Date().getFullYear()} LAUNCHPAD_TERMINAL. ALL RIGHTS
              RESERVED.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
