"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen"
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow px-[2em] lg:px-[4em] py-12"
      >
        <h1 className="mb-8 text-3xl font-bold text-center text-teal-400">
          Contact Us
        </h1>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-slate-200"
              >
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                className="text-white bg-gray-800"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-slate-200"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="text-white bg-gray-800"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-1 text-sm font-medium text-slate-200"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="text-white bg-gray-800"
                rows={5}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-teal-400 hover:bg-teal-600"
            >
              Send Message
            </Button>
          </form>
        </div>
      </motion.section>
      <Footer />
    </motion.main>
  );
}
