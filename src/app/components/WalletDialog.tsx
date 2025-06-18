"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface WalletDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (walletName: string) => void;
}

interface Wallet {
  name: string;
  icon: string;
  isAvailable: boolean;
  connect: () => Promise<string | null>;
}

export default function WalletDialog({ isOpen, onClose, onConnect }: WalletDialogProps) {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [isConnecting, setIsConnecting] = useState<string | null>(null);

  useEffect(() => {
    console.log('WalletDialog useEffect - isOpen:', isOpen);
    if (isOpen) {
      console.log('WalletDialog is opening - detecting wallets');
      // Add a small delay to ensure this only happens when dialog is explicitly opened
      const timer = setTimeout(() => {
        detectWallets();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const detectWallets = () => {
    console.log('detectWallets called - checking for available wallets');
    const detectedWallets: Wallet[] = [];

    // Check for any Ethereum provider
    if (typeof window !== 'undefined' && window.ethereum) {
      const ethereum = window.ethereum;
      console.log('Ethereum provider found:', {
        isMetaMask: ethereum.isMetaMask,
        isCoinbaseWallet: ethereum.isCoinbaseWallet,
        isTrust: ethereum.isTrust,
        isBinanceWallet: ethereum.isBinanceWallet,
        isPhantom: ethereum.isPhantom
      });

      // MetaMask
      if (ethereum.isMetaMask) {
        detectedWallets.push({
          name: 'MetaMask',
          icon: '🦊',
          isAvailable: true,
          connect: async () => {
            try {
              console.log('Attempting to connect to MetaMask');
              const accounts = await ethereum.request({
                method: 'eth_requestAccounts'
              });
              console.log('MetaMask connection successful:', accounts[0]);
              return accounts[0] || null;
            } catch (error) {
              console.error('MetaMask connection failed:', error);
              return null;
            }
          }
        });
      }

      // Coinbase Wallet
      if (ethereum.isCoinbaseWallet) {
        detectedWallets.push({
          name: 'Coinbase Wallet',
          icon: '🪙',
          isAvailable: true,
          connect: async () => {
            try {
              const accounts = await ethereum.request({
                method: 'eth_requestAccounts'
              });
              return accounts[0] || null;
            } catch (error) {
              console.error('Coinbase Wallet connection failed:', error);
              return null;
            }
          }
        });
      }

      // Trust Wallet
      if (ethereum.isTrust) {
        detectedWallets.push({
          name: 'Trust Wallet',
          icon: '🛡️',
          isAvailable: true,
          connect: async () => {
            try {
              const accounts = await ethereum.request({
                method: 'eth_requestAccounts'
              });
              return accounts[0] || null;
            } catch (error) {
              console.error('Trust Wallet connection failed:', error);
              return null;
            }
          }
        });
      }

      // Binance Wallet
      if (ethereum.isBinanceWallet) {
        detectedWallets.push({
          name: 'Binance Wallet',
          icon: '🟡',
          isAvailable: true,
          connect: async () => {
            try {
              const accounts = await ethereum.request({
                method: 'eth_requestAccounts'
              });
              return accounts[0] || null;
            } catch (error) {
              console.error('Binance Wallet connection failed:', error);
              return null;
            }
          }
        });
      }

      // Phantom Wallet (if it supports Ethereum)
      if (ethereum.isPhantom) {
        detectedWallets.push({
          name: 'Phantom',
          icon: '👻',
          isAvailable: true,
          connect: async () => {
            try {
              const accounts = await ethereum.request({
                method: 'eth_requestAccounts'
              });
              return accounts[0] || null;
            } catch (error) {
              console.error('Phantom connection failed:', error);
              return null;
            }
          }
        });
      }

      // Generic Ethereum Provider (for any other wallet)
      if (!ethereum.isMetaMask && !ethereum.isCoinbaseWallet && !ethereum.isTrust && !ethereum.isBinanceWallet && !ethereum.isPhantom) {
        detectedWallets.push({
          name: 'Browser Wallet',
          icon: '🌐',
          isAvailable: true,
          connect: async () => {
            try {
              const accounts = await ethereum.request({
                method: 'eth_requestAccounts'
              });
              return accounts[0] || null;
            } catch (error) {
              console.error('Browser wallet connection failed:', error);
              return null;
            }
          }
        });
      }
    }

    // Check for multiple providers (some browsers have multiple wallet extensions)
    if (typeof window !== 'undefined') {
      // Check if there are multiple providers
      const providers = (window as any).ethereum?.providers || [];
      if (providers.length > 1) {
        providers.forEach((provider: any, index: number) => {
          if (provider.isMetaMask) {
            detectedWallets.push({
              name: `MetaMask ${index + 1}`,
              icon: '🦊',
              isAvailable: true,
              connect: async () => {
                try {
                  const accounts = await provider.request({
                    method: 'eth_requestAccounts'
                  });
                  return accounts[0] || null;
                } catch (error) {
                  console.error('MetaMask connection failed:', error);
                  return null;
                }
              }
            });
          }
        });
      }
    }

    // Always add WalletConnect as an option
    detectedWallets.push({
      name: 'WalletConnect',
      icon: '🔗',
      isAvailable: true,
      connect: async () => {
        alert('WalletConnect integration requires additional setup. Please use a browser wallet for now.');
        return null;
      }
    });

    // If no wallets detected, add a generic option
    if (detectedWallets.length === 1) { // Only WalletConnect
      detectedWallets.unshift({
        name: 'Connect Wallet',
        icon: '🔌',
        isAvailable: true,
        connect: async () => {
          try {
            if (typeof window !== 'undefined' && window.ethereum) {
              const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
              });
              return accounts[0] || null;
            }
            return null;
          } catch (error) {
            console.error('Wallet connection failed:', error);
            return null;
          }
        }
      });
    }

    setWallets(detectedWallets);
  };

  const handleWalletConnect = async (wallet: Wallet) => {
    setIsConnecting(wallet.name);
    try {
      const account = await wallet.connect();
      if (account) {
        onConnect(wallet.name);
        onClose();
      } else {
        alert(`Failed to connect to ${wallet.name}. Please try again.`);
      }
    } catch (error) {
      console.error(`Error connecting to ${wallet.name}:`, error);
      alert(`Failed to connect to ${wallet.name}. Please try again.`);
    } finally {
      setIsConnecting(null);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-zinc-900 rounded-2xl p-8 max-w-md w-full mx-4 border-2 border-orange-400"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Connect Wallet</h2>
              <p className="text-gray-400">Choose your preferred wallet to connect</p>
            </div>

            <div className="space-y-3">
              {wallets.length > 0 ? (
                wallets.map((wallet, index) => (
                  <motion.button
                    key={wallet.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleWalletConnect(wallet)}
                    disabled={isConnecting !== null}
                    className="w-full flex items-center justify-between p-4 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-orange-400 hover:bg-zinc-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{wallet.icon}</span>
                      <span className="text-white font-semibold">{wallet.name}</span>
                    </div>
                    {isConnecting === wallet.name ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-orange-400 text-sm">Connecting...</span>
                      </div>
                    ) : (
                      <span className="text-green-400">✓</span>
                    )}
                  </motion.button>
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🔍</div>
                  <p className="text-gray-400 mb-4">No wallets detected</p>
                  <p className="text-sm text-gray-500">
                    Please install MetaMask or another Web3 wallet extension
                  </p>
                  <a
                    href="https://metamask.io/download/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Install MetaMask
                  </a>
                </div>
              )}
            </div>

            <motion.button
              onClick={onClose}
              className="w-full mt-6 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Cancel
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 