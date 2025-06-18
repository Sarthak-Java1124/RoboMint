"use client";
import { motion } from "framer-motion";

const faqs = [
  {
    icon: "😎",
    question: "What are Robotos?",
    answer:
      "Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley and minted as NFTs on the Ethereum blockchain. Each Roboto is unique, and some are rarer than others!",
  },
  {
    icon: "🎨",
    question: "What do I get?",
    answer:
      "You get different image assets of your Roboto, including an animated GIF, PNG, and SVG files (with no metadata fees).",
  },
  {
    icon: "🛒",
    question: "How do I get my stuff?",
    answer:
      "The assets & token metadata will be released after Roboto NFT's mint. You can download them from our website or Discord.",
  },
  {
    icon: "⚡",
    question: "Why Robotos?",
    answer:
      "By collecting Robotos you'll have a voice in the community and help guide the project into the future!",
  },
  {
    icon: "🗺️",
    question: "What's on the roadmap?",
    answer:
      "Roboto's journey: new characters, collabs, and more! Join our Discord to have a voice in our roadmap.",
  },
  {
    icon: "💎",
    question: "What's an NFT?",
    answer:
      "NFT stands for 'Non-Fungible Token', which means that it's a unique, digital item. This allows you to own, sell, or trade your Roboto!",
  },
];

export default function FAQ() {
  return (
    <div className="relative w-full min-h-screen bg-blue-100 flex justify-center items-center py-16 overflow-x-hidden">
      {/* Removed side images */}
      <div className="w-full max-w-2xl mx-auto bg-transparent flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-black text-center mb-8 mt-4">FAQ</h2>
        <div className="bg-white/80 rounded-2xl border-4 border-black shadow-xl p-8 w-full flex flex-col gap-8">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl">{faq.icon}</span>
                <span className="font-bold text-lg md:text-xl text-black">{faq.question}</span>
              </div>
              <span className="text-gray-800 text-sm md:text-base ml-8">{faq.answer}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 