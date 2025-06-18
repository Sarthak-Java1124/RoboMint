"use client";
import { motion } from 'framer-motion';

export default function MintButton() {
    return (
        <div className="flex flex-col items-center mt-8 z-20 relative">
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 30px 10px #B6E3E0, 0 8px 0 #222, 0 12px 24px rgba(0,0,0,0.7), 0 2px 8px #000' 
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                '0 0 0 0 #B6E3E0, 0 8px 0 #222, 0 12px 24px rgba(0,0,0,0.7), 0 2px 8px #000',
                '0 0 20px 5px #B6E3E0, 0 8px 0 #222, 0 12px 24px rgba(0,0,0,0.7), 0 2px 8px #000',
                '0 0 0 0 #B6E3E0, 0 8px 0 #222, 0 12px 24px rgba(0,0,0,0.7), 0 2px 8px #000'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="bg-[#B6E3E0] text-black font-extrabold text-3xl px-16 py-4 rounded-lg border-8 border-[#222] tracking-wide transition-transform duration-200 ease-in-out"
            style={{
              letterSpacing: '0.05em',
              background: 'linear-gradient(180deg, #B6E3E0 80%, #8bb8b5 100%)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <span className="relative z-10">MINT ROBOTOS</span>
            <span className="absolute left-0 top-0 w-full h-full pointer-events-none z-0" style={{background: 'linear-gradient(120deg, transparent 60%, #fff 100%)', opacity: 0.2, mixBlendMode: 'screen'}}></span>
          </motion.button>
          <img src="https://cdn.prod.website-files.com/6849a9348eca7a8dbfd29a2d/6849a9358eca7a8dbfd29ac8_hero-image06.svg" alt="mint robot" className="w-32 h-32 mt-4 mb-2" />
          <div className="mt-6 text-white font-mono font-bold text-2xl text-center">
            8,208 of 9,999 available<br/>
            <span className="text-lg font-normal">0.05 ETH per roboto</span>
          </div>
          <motion.img
            src="https://cdn.prod.website-files.com/6849a9348eca7a8dbfd29a2d/6849a9358eca7a8dbfd29adc_hero-image02.svg"
            alt="bouncing robot"
            className="w-32 h-32 mt-4 mb-2"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
          />
          <motion.img
            src="https://cdn.prod.website-files.com/6849a9348eca7a8dbfd29a2d/6849a9358eca7a8dbfd29ad3_hero-image03.svg"
            alt="left robot"
            className="w-64 h-64 absolute left-16 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
            whileHover={{ scale: 1.15, rotate: -10 }}
          />
          <motion.img
            src="https://cdn.prod.website-files.com/6849a9348eca7a8dbfd29a2d/6849a9358eca7a8dbfd29aca_hero-image09.svg"
            alt="right robot"
            className="w-64 h-64 absolute right-16 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
            whileHover={{ scale: 1.15, rotate: 10 }}
          />
        </div>
    );
}