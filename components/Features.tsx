import { motion } from "framer-motion";
import { MagicCard } from "@/components/magicui/magic-card";
import {
  Lock,
  Zap,
  Link,
  Vote,
  Coins,
  Palette,
  Wrench,
  BarChart2,
  Layers,
  Rocket,
} from "lucide-react";

const features = [
  {
    title: "Secure Transactions",
    description: "State-of-the-art encryption for all token transactions.",
    icon: <Lock color="white" />,
  },
  {
    title: "Instant Swaps",
    description: "Lightning-fast token exchanges with minimal fees.",
    icon: <Zap color="white" />,
  },
  {
    title: "Multi-Chain Support",
    description: "Launch your token on multiple blockchains effortlessly.",
    icon: <Link color="white" />,
  },
  {
    title: "Community Governance",
    description: "Empower your token holders with built-in voting mechanisms.",
    icon: <Vote color="white" />,
    comingSoon: true,
  },
  {
    title: "Token LP",
    description: "Easily create and manage liquidity pools for your tokens.",
    icon: <Coins color="white" />,
  },
  {
    title: "NFT Art",
    description: "Create and mint unique NFT artworks on our platform.",
    icon: <Palette color="white" />,
  },
  {
    title: "Custom Setup",
    description:
      "Tailored project setup and assistance for your specific needs.",
    icon: <Wrench color="white" />,
  },
  {
    title: "OTC Markets",
    description: "Access over-the-counter markets for token trading.",
    icon: <BarChart2 color="white" />,
    comingSoon: true,
  },
  {
    title: "Staking Mechanism",
    description: "Staking features coming soon to boost token utility.",
    icon: <Layers color="white" />,
    comingSoon: true,
  },
];

const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function Features() {
  return (
    <section className="px-4 py-12 lg:px-8 bg-gradient-to-b from-background to-slate-900">
      <h2 className="mb-12 text-4xl font-bold text-center text-teal-400 glitch-text">
        Our Features
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={featureVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <MagicCard
              className="h-full transition-all duration-300 hover:scale-105"
              gradientColor="rgba(20, 184, 166, 0.2)"
            >
              <div className="p-6">
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-teal-500">
                  {feature.title}
                </h3>
                <p className="text-slate-300">{feature.description}</p>
                {feature.comingSoon && (
                  <span className="inline-block px-2 py-1 mt-2 text-xs font-semibold text-teal-400 bg-teal-900 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
