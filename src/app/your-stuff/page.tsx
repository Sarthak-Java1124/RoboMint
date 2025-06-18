"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { img } from "framer-motion/client";

const robots = [
  {
    id: 1234,
    img : "https://cdn.prod.website-files.com/6849a9348eca7a8dbfd29a2d/6849a9358eca7a8dbfd29b14_animated-roboto.gif",
    bg: "bg-green-300"
  },
  {
    id: 1234,
    img : "https://cdn.prod.website-files.com/6849a9348eca7a8dbfd29a2d/6849a9358eca7a8dbfd29b21_animated-roboto%203.gif",
    bg: "bg-blue-300"
  },
  {
    id: 1234,
    img: "https://cdn.prod.website-files.com/6849a9348eca7a8dbfd29a2d/6849a9358eca7a8dbfd29b1a_animated-roboto%202.gif",
    bg: "bg-yellow-200"
  }
];

export default function YourStuff() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between" style={{backgroundColor:'#ffe066', backgroundImage:'repeating-radial-gradient(circle, #fff7c7 0px, #fff7c7 20px, transparent 21px, transparent 60px)'}}>
      <div className="w-full flex justify-center pt-4">
        <Navbar />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white rounded-2xl border-4 border-black shadow-xl p-8 w-full max-w-2xl flex flex-col items-center mt-8 mb-8">
          <h2 className="text-3xl font-extrabold text-black text-center mb-2 mt-2 tracking-tight">YOUR STUFF</h2>
          <p className="text-sm text-gray-800 font-mono text-center mb-6 mt-2">Here's a list of all robotos you own. Click to see the different assets.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {robots.map((robot, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center border-2 border-black rounded-2xl p-4 bg-white hover:shadow-2xl transition cursor-pointer shadow-2xl"
                style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.7)' }}
                initial={{ opacity: 0, scale: 0.7, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15, type: 'spring', stiffness: 120 }}
                whileHover={{ scale: 1.07, rotate: -2, boxShadow: '0 16px 48px 0 rgba(0,0,0,0.85)' }}
              >
                <div className={`w-72 h-72 rounded-xl flex items-center justify-center mb-2 ${robot.bg}`}>
                  <img src={robot.img} alt={`robot${robot.id}`} className="w-60 h-60 object-contain" />
                </div>
                <span className="font-bold text-black text-center text-xl mb-2">ROBOTO#{robot.id}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 