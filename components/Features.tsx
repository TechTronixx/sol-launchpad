import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Secure Transactions",
    description: "State-of-the-art encryption for all token transactions.",
    icon: "solar:lock-keyhole-linear",
  },
  {
    title: "Instant Swaps",
    description: "Lightning-fast token exchanges with minimal fees.",
    icon: "solar:bolt-linear",
  },
  {
    title: "Multi-Chain Support",
    description: "Launch your token on multiple blockchains effortlessly.",
    icon: "solar:link-linear",
  },
  {
    title: "Community Governance",
    description: "Empower your token holders with built-in voting mechanisms.",
    icon: "solar:chat-round-like-linear",
    comingSoon: true,
  },
  {
    title: "Token LP",
    description: "Easily create and manage liquidity pools for your tokens.",
    icon: "solar:wallet-money-linear",
  },
  {
    title: "NFT Art",
    description: "Create and mint unique NFT artworks on our platform.",
    icon: "solar:palette-linear",
  },
  {
    title: "Custom Setup",
    description:
      "Tailored project setup and assistance for your specific needs.",
    icon: "solar:settings-linear",
  },
  {
    title: "OTC Markets",
    description: "Access over-the-counter markets for token trading.",
    icon: "solar:chart-2-linear",
    comingSoon: true,
  },
  {
    title: "Staking Mechanism",
    description: "Staking features coming soon to boost token utility.",
    icon: "solar:layers-linear",
    comingSoon: true,
  },
];

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Features() {
  return (
    <section className="px-4 py-24 lg:px-8 bg-transparent relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-mono text-primary border border-primary/20 bg-primary/5 rounded-full">
            CORE_FEATURES
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-clash text-foreground tracking-tight">
            CORE CAPABILITIES
          </h2>
          <p className="text-lg text-muted-foreground font-space max-w-2xl mx-auto">
            Advanced tooling for the next generation of digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={index}
              className="group relative"
            >
              <div
                className={cn(
                  "h-full p-8 transition-all duration-300",
                  // Shape & Border
                  "rounded-sm border border-border/50 hover:border-primary/50",
                  // Background
                  "bg-card/40 backdrop-blur-md",
                  // Hover Effects
                  "hover:shadow-[0_0_30px_-10px_rgba(var(--primary-rgb),0.2)] dark:hover:shadow-[0_0_20px_rgba(45,212,191,0.1)]",
                  "hover:-translate-y-1",
                )}
              >
                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col h-full">
                  <div className="mb-6 inline-flex p-3 rounded-sm bg-primary/10 text-primary ring-1 ring-primary/20 group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                    <Icon icon={feature.icon} width={24} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-foreground font-syne uppercase tracking-wide">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground font-space text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>

                  {feature.comingSoon && (
                    <div className="mt-4 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                      </span>
                      <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest">
                        In Development
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
