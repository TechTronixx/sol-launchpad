import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Import dummy partner logos
import { partnerLogos } from "@/images";

const Partners = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="container px-4 mx-auto sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-mono text-primary border border-primary/20 bg-primary/5 rounded-full">
            :: NETWORK_VALIDATORS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-clash text-foreground tracking-tight">
            TRUSTED_BY
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 items-center justify-items-center max-w-5xl mx-auto">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full h-32 flex items-center justify-center bg-card/20 rounded-sm border border-border/50"
                >
                  <div className="w-1/2 h-8 bg-muted/50 rounded-sm animate-pulse" />
                </div>
              ))
            : partnerLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="w-full group"
                >
                  <div className="h-32 flex items-center justify-center p-8 rounded-sm bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 relative overflow-hidden">
                    {/* Corner Markers */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/20 group-hover:border-primary/50 transition-colors" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/20 group-hover:border-primary/50 transition-colors" />

                    <Image
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      width={160}
                      height={80}
                      className="object-contain w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-300 dark:brightness-200 dark:grayscale group-hover:dark:grayscale-0 dark:invert-0 invert dark:invert-0"
                    />
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
