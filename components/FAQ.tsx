import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

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
    <section className="px-[2em] lg:px-[4em] py-24 bg-transparent">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-clash text-foreground tracking-tight mb-2">
            FAQ
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <motion.div
          variants={faqVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 bg-card/20 backdrop-blur-sm rounded-sm px-4 data-[state=open]:border-primary/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-foreground hover:text-primary transition-colors font-syne text-lg py-6 underline-offset-4 decoration-primary/30">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-space leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
