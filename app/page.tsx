import Image from "next/image";
import { Logo } from "@images";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Image src={Logo} alt="PRNT" width={150} height={150} />
          <h1 className="mt-8 text-4xl font-bold text-center">
            PRNT LaunchPad
          </h1>
        </div>
        <p className="mt-8 text-xl text-center">
          Welcome to PRNT LaunchPad, a site to showcase NFT Projects and mint
          them.
        </p>
      </div>
    </main>
  );
}
