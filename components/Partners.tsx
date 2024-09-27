import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Import dummy partner logos
import { partnerLogos } from "@/images";

const Partners = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-slate-900">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="mb-12 text-2xl font-bold text-center text-teal-400 glitch-text sm:text-3xl">
          Our Partners
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Image
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      width={200}
                      height={100}
                      className="object-contain w-full h-auto"
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
