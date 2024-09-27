import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a token launchpad?",
    answer:
      "A token launchpad is a platform that helps projects launch and distribute their tokens to early supporters and investors.",
  },
  {
    question: "How do I create my own token?",
    answer:
      "You can create your own token using our Token Creator page. The process is simple and guided, allowing you to customize your token's features and distribution.",
  },
  {
    question: "What blockchains do you support?",
    answer:
      "We currently support Ethereum, Binance Smart Chain, and Polygon. More chains will be added in the future.",
  },
  {
    question: "How are token sales conducted?",
    answer:
      "Token sales can be conducted through various mechanisms such as fixed price sales, Dutch auctions, or bonding curves. You can choose the best method for your project.",
  },
];

const faqVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FAQ() {
  return (
    <section className="px-[2em] lg:px-[4em] py-12 bg-gradient-to-b from-background to-slate-900">
      <h2 className="mb-8 text-3xl font-bold text-center text-teal-400 glitch-text">
        Frequently Asked Questions
      </h2>
      <motion.div
        variants={faqVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-teal-500">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-200">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
