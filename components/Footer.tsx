import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-slate-200">
      <div className="container px-4 mx-auto">
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
                  href="/token-creator"
                  className="transition-colors hover:text-teal-400"
                >
                  Token Creator
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
            <h4 className="mb-4 text-lg font-semibold text-teal-500">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition-colors hover:text-teal-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-teal-400">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-teal-400">
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="mb-4 text-lg font-semibold text-teal-500">
              Newsletter
            </h4>
            <p className="mb-4 text-sm">
              Stay updated with our latest news and launches.
            </p>
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
