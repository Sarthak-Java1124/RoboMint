"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full min-h-[60vh] flex flex-col items-center justify-center py-16 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #232427 60%, #7f5af0 100%)'}}>
      {/* Animated gradient background overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{background: 'radial-gradient(circle at 70% 30%, #7f5af0 0%, transparent 70%)'}}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
      />
      {/* Animated text */}
      <motion.h1
        className="text-white font-extrabold text-center leading-none z-10 drop-shadow-lg"
        style={{ fontSize: '8vw', letterSpacing: '-0.05em' }}
        animate={{ scale: [1, 1.05, 1], color: ["#fff", "#ffe066", "#fff"] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
      >
        DOMO<br />ARIGATO
      </motion.h1>
      {/* Animated glowing button */}
      <motion.button
        className="mt-8 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white font-extrabold text-lg px-12 py-4 rounded-xl shadow-2xl tracking-wide transition-all z-10 border-4 border-white"
        whileHover={{ scale: 1.1, boxShadow: "0 0 40px 10px #ffe066, 0 8px 0 #7f5af0" }}
        animate={{ boxShadow: [
          "0 0 0 0 #ffe066, 0 8px 0 #7f5af0",
          "0 0 40px 10px #ffe066, 0 8px 0 #7f5af0",
          "0 0 0 0 #ffe066, 0 8px 0 #7f5af0"
        ]}}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
      >
        MINT ROBOTOS
      </motion.button>
      <motion.div
        className="mt-6 text-white text-xs font-mono text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Follow Robotos on Twitter or Discord<br />
        <span className="font-bold underline cursor-pointer text-yellow-300 hover:text-pink-400 transition-colors">Smart Contract</span>
      </motion.div>
    </footer>
  );
} 