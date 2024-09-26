import { motion } from "framer-motion";
import { MagicCard } from "@/components/magicui/magic-card";
import { Lock, Zap, Link, Vote } from "lucide-react";

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
    <section className="px-4 py-12 lg:px-8 bg-inherit from-slate-900 to-slate-800">
      <h2 className="mb-12 text-4xl font-bold text-center text-teal-400">
        Our Features
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
              </div>
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
