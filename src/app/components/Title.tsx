"use client";
import { motion } from 'framer-motion';

export default function Title() {
    const letters = [
        { text: 'R', className: 'char-r text-white group-ro' },
        { text: 'O', className: 'char-o text-white group-ro' },
        { text: 'B', className: 'char-b text-blue-500 group-bot' },
        { text: 'O', className: 'char-o2 text-blue-500 group-bot' },
        { text: 'T', className: 'char-t text-blue-500 group-bot' },
        { text: 'O', className: 'char-o3 text-white group-os' },
        { text: 'S', className: 'char-s text-white group-os' }
    ];

    return (
        <div className="flex-grow flex items-center justify-center relative">
            <h1 className="font-extrabold tracking-tight leading-none z-30 flex" style={{ fontSize: '10vw', marginTop: '0', position: 'relative' }}>
                {letters.map((l, i) => (
                    <motion.span
                        key={i}
                        className={l.className}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: i * 0.1,
                            duration: 0.5,
                            ease: "easeOut"
                        }}
                        whileHover={{
                            scale: 1.1,
                            color: "#FFD700",
                            textShadow: "0 0 10px #FFD700"
                        }}
                        style={{ 
                            textShadow: '0.05em 0.05em 0px rgba(0,0,0,0.8)', 
                            display: 'inline-block', 
                            position: 'relative', 
                            zIndex: 30,
                            cursor: 'pointer'
                        }}
                    >
                        <motion.span
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                                delay: i * 0.1 + 0.5,
                                duration: 1,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "reverse",
                                repeatDelay: 1
                            }}
                        >
                            {l.text}
                        </motion.span>
                    </motion.span>
                ))}
            </h1>
        </div>
    );
}