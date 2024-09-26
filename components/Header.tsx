"use client";
import { Logo } from "@images";
import Image from "next/image";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Home, Info, Menu, Mail, FileText } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

type Props = {};

const Header = (props: Props) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-10 flex justify-between w-full gap-8 px-4 py-2 bg-background font-monsterr">
      <Image src={Logo} alt="PRNT" width={50} height={50} />

      <div className="flex items-center justify-between lg:w-full">
        <nav className="hidden gap-4 lg:flex">
          <Link
            href="/"
            className="duration-500 cursor-pointer delay-600 animate-in fade-in zoom-in hover:text-tealClr"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="duration-500 cursor-pointer delay-600 animate-in fade-in zoom-in hover:text-tealClr"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="duration-500 cursor-pointer delay-600 animate-in fade-in zoom-in hover:text-tealClr"
          >
            Contact
          </Link>
          <Link
            href="/token-creator"
            className="duration-500 cursor-pointer delay-600 animate-in fade-in zoom-in hover:text-tealClr"
          >
            Token Creator
          </Link>
          <Link
            href="/nft-creator"
            className="duration-500 cursor-pointer delay-600 animate-in fade-in zoom-in hover:text-tealClr"
          >
            NFT Creator
          </Link>
        </nav>

        <div className="flex items-center justify-center gap-4">
          <nav className="hidden gap-4 lg:flex">
            {/* <!-- Twitter SVG--> */}
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <svg
                width="23"
                height="23"
                viewBox="0 0 300 300"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="duration-500 cursor-pointer delay-600 animate-in fade-in zoom-in hover:text-tealClr"
              >
                <path
                  d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"
                  fill="currentColor"
                />
              </svg>
            </Link>

            {/* <!-- Discord SVG --> */}
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="duration-500 cursor-pointer delay-600 animate-in fade-in zoom-in hover:text-tealClr"
              >
                <path
                  d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                  stroke="#000000"
                  strokeWidth="0.4"
                ></path>
              </svg>
            </Link>
          </nav>

          <WalletMultiButton />

          <Sheet open={showSidebar} onOpenChange={setShowSidebar}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu size={30} />
              </Button>
            </SheetTrigger>

            <SheetContent className="w-[400px] sm:w-[540px]">
              <nav className="flex flex-col gap-4 text-[1.5em] mt-8">
                <Link
                  onClick={() => setShowSidebar(false)}
                  className="SidebarLink"
                  href="/"
                >
                  <Home size={28} />
                  <div className="text-[0.8em] ">Home</div>
                </Link>
                <Link
                  onClick={() => setShowSidebar(false)}
                  className="SidebarLink"
                  href="/about"
                >
                  <Info size={28} />
                  <div className="text-[0.8em]">About</div>
                </Link>
                <Link
                  onClick={() => setShowSidebar(false)}
                  className="SidebarLink"
                  href="/contact"
                >
                  <Mail size={28} />
                  <div className="text-[0.8em]">Contact</div>
                </Link>
                <Link
                  onClick={() => setShowSidebar(false)}
                  className="SidebarLink"
                  href="/token-creator"
                >
                  <FileText size={28} />
                  <div className="text-[0.8em]">Token Creator</div>
                </Link>
                <Link
                  onClick={() => setShowSidebar(false)}
                  className="SidebarLink"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 300 300"
                    version="1.1"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"
                      fill="currentColor"
                    />
                  </svg>
                  <div className=" text-[0.8em]">Twitter</div>
                </Link>

                {/* <!-- Discord SVG --> */}
                <Link
                  onClick={() => setShowSidebar(false)}
                  className="SidebarLink"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                      stroke="#000000"
                      fill="currentColor"
                      strokeWidth="0.4"
                    ></path>
                  </svg>
                  <div className="text-[0.8em]">Discord</div>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
