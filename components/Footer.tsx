import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-slate-200">
      <Separator className="my-4" />
      <div className="container px-4 py-4 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full mb-6 md:w-1/4 md:mb-0">
            <h3 className="mb-4 text-2xl font-bold text-teal-400">
              Token Launchpad
            </h3>
            <p className="text-sm">
              Empowering the next generation of decentralized projects.
            </p>
          </div>
          <div className="w-full mb-6 md:w-1/4 md:mb-0">
            <h4 className="mb-4 text-lg font-semibold text-teal-500">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-teal-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-teal-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-teal-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full mb-6 md:w-1/4 md:mb-0">
            <h4 className="mb-4 text-lg font-semibold text-teal-500">Tokens</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/token-creator"
                  className="transition-colors hover:text-teal-400"
                >
                  Token Creator
                </Link>
              </li>
              <li>
                <Link
                  href="/presale-creator"
                  className="transition-colors hover:text-teal-400"
                >
                  Pre-sale Creator
                </Link>
              </li>
              <li>
                <Link
                  href="/presale-claim"
                  className="transition-colors hover:text-teal-400"
                >
                  Pre-sale Claim
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full mb-6 md:w-1/4 md:mb-0">
            <h4 className="mb-4 text-lg font-semibold text-teal-500">
              NFT Mints
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/nft-creator"
                  className="transition-colors hover:text-teal-400"
                >
                  NFT Creator
                </Link>
              </li>
              <li>
                <Link
                  href="/nft-mint"
                  className="transition-colors hover:text-teal-400"
                >
                  NFT Mint Page
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full mb-6 md:w-1/4 md:mb-0">
            <h4 className="mb-4 text-lg font-semibold text-teal-500">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.303 5.337A17.3 17.3 0 0 0 14.963 4c-.191.329-.403.775-.552 1.125a16.6 16.6 0 0 0-4.808 0C9.454 4.775 9.23 4.329 9.05 4a17 17 0 0 0-4.342 1.337C1.961 9.391 1.218 13.35 1.59 17.255a17.7 17.7 0 0 0 5.318 2.664a13 13 0 0 0 1.136-1.836c-.627-.234-1.22-.52-1.794-.86c.149-.106.297-.223.435-.34c3.46 1.582 7.207 1.582 10.624 0c.149.117.287.234.435.34c-.573.34-1.167.626-1.793.86a13 13 0 0 0 1.135 1.836a17.6 17.6 0 0 0 5.318-2.664c.457-4.52-.722-8.448-3.1-11.918M8.52 14.846c-1.04 0-1.889-.945-1.889-2.101s.828-2.102 1.89-2.102c1.05 0 1.91.945 1.888 2.102c0 1.156-.838 2.1-1.889 2.1m6.974 0c-1.04 0-1.89-.945-1.89-2.101s.828-2.102 1.89-2.102c1.05 0 1.91.945 1.889 2.102c0 1.156-.828 2.1-1.89 2.1"
                  ></path>
                </svg>
              </Link>
              <Link href="#" className="hover:opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
                  ></path>
                </svg>
              </Link>
              <Link href="#" className="hover:opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-9.642-2.618q-1.458.607-5.831 2.513q-.711.282-.744.552c-.038.304.343.424.862.587l.218.07c.51.166 1.198.36 1.555.368q.486.01 1.084-.4q4.086-2.76 4.218-2.789c.063-.014.149-.032.207.02c.059.052.053.15.047.177c-.038.161-1.534 1.552-2.308 2.271q-.344.324-.683.653c-.474.457-.83.8.02 1.36c.861.568 1.73 1.134 2.57 1.733c.414.296.786.56 1.246.519c.267-.025.543-.276.683-1.026c.332-1.77.983-5.608 1.133-7.19a1.8 1.8 0 0 0-.017-.393a.42.42 0 0 0-.142-.27c-.12-.098-.305-.118-.387-.117c-.376.007-.953.207-3.73 1.362"
                  ></path>
                </svg>
              </Link>
              <Link
                href="mailto:info@tokenlaunchpad.com"
                className="hover:opacity-80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="mb-4 text-lg font-semibold text-teal-500">
              Subscribe to Our Newsletter
            </h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 text-white bg-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white transition-colors bg-teal-500 rounded-r-md hover:bg-teal-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="text-sm text-center">
          © {new Date().getFullYear()} Solana Launchpad. All rights reserved.
          <br />
          Made with ❤️ by{" "}
          <Link href="https://github.com/TechTronixx" target="_blank">
            <span className="font-bold text-teal-400">TechTronixx</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
