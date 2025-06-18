"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import WalletDialog from './WalletDialog';

export default function Navbar(){
    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState<string | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        // Check if wallet is already connected
        if (typeof window !== 'undefined' && window.ethereum) {
            window.ethereum.request({ method: 'eth_accounts' })
                .then((accounts: string[]) => {
                    if (accounts.length > 0) {
                        setIsConnected(true);
                        setAccount(accounts[0]);
                    }
                })
                .catch(console.error);
        }
    }, []);

    const handleWalletConnect = (walletName: string) => {
        // Get the current account after successful connection
        if (typeof window !== 'undefined' && window.ethereum) {
            window.ethereum.request({ method: 'eth_accounts' })
                .then((accounts: string[]) => {
                    if (accounts.length > 0) {
                        setIsConnected(true);
                        setAccount(accounts[0]);
                        console.log(`Connected to ${walletName}:`, accounts[0]);
                    }
                })
                .catch(console.error);
        }
    };

    const disconnectWallet = () => {
        setIsConnected(false);
        setAccount(null);
    };

    const shortenAddress = (address: string) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    return (
        <>
            <nav className="bg-zinc-900 w-200 h-16 flex justify-center items-center rounded-2xl px-8 py-2">
              <div className="flex items-center divide-x divide-white">
                 <img src="https://cdn.prod.website-files.com/6849a9348eca7a8dbfd29a2d/6849a9358eca7a8dbfd29b05_icon-256w.png" className="w-10 h-10 mx-4" />
                 <Link href="/" className="text-white font-mono font-bold text-xl px-4 hover:text-orange-400 transition-colors">Roboto</Link>
                 <Link href="/your-stuff" className="text-white font-mono font-bold text-xl px-4 hover:text-orange-400 transition-colors">Your Stuff</Link>
                 <Link href="/rarity" className="text-white font-mono font-bold text-xl px-4 hover:text-orange-400 transition-colors">Rarity</Link>
                 <Link href="/faq" className="text-white font-mono font-bold text-xl px-4 hover:text-orange-400 transition-colors">FAQ</Link>
                 {!isConnected ? (
                   <motion.button
                     onClick={() => setIsDialogOpen(true)}
                     className="bg-gradient-to-r from-orange-400 to-pink-400 text-white font-bold px-6 py-2 rounded-lg shadow-lg border-2 border-orange-300 ml-4"
                     whileHover={{ 
                       scale: 1.05, 
                       boxShadow: "0 0 20px 5px rgba(251, 146, 60, 0.6), 0 8px 0 #ea580c",
                       y: -2
                     }}
                     whileTap={{ scale: 0.95 }}
                     animate={{ 
                       boxShadow: [
                         "0 0 0 0 rgba(251, 146, 60, 0.6), 0 8px 0 #ea580c",
                         "0 0 15px 3px rgba(251, 146, 60, 0.6), 0 8px 0 #ea580c",
                         "0 0 0 0 rgba(251, 146, 60, 0.6), 0 8px 0 #ea580c"
                       ]
                     }}
                     transition={{ 
                       duration: 2, 
                       repeat: Infinity, 
                       repeatType: 'loop'
                     }}
                   >
                     Connect
                   </motion.button>
                 ) : (
                   <div className="flex items-center gap-2 ml-4">
                     <span className="text-green-400 font-mono text-sm">
                       {account && shortenAddress(account)}
                     </span>
                     <motion.button
                       onClick={disconnectWallet}
                       className="bg-red-500 text-white font-bold px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                     >
                       Disconnect
                     </motion.button>
                   </div>
                 )}
              </div>
            </nav>
            
            <WalletDialog
              isOpen={isDialogOpen}
              onClose={() => setIsDialogOpen(false)}
              onConnect={handleWalletConnect}
            />
        </>
    );
}