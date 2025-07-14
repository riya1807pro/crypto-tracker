import { Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import { Crypto } from "../types/crypto";
import CryptoChart from "./CryptoChart";

interface CryptoModalProps {
  item: Crypto;
  onClose: () => void;
  theme?: "light" | "dark";
}

export default function CryptoModal({ item, onClose, theme = "light" }: CryptoModalProps) {
  // Example chart data (replace with real data)
  const chartData = item.history || [item.price, item.price * 0.98, item.price * 1.02, item.price * 1.01];

  return (
    <Dialog open={true} onClose={onClose} as={Fragment}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <Dialog.Panel className={`relative bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-6 w-full max-w-md mx-4 transition-colors duration-500 ${theme}`}>
          <button
            className="absolute top-4 right-6 text-xl font-bold text-gray-500 hover:text-red-500"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
          <div className="flex flex-col items-center">
            <img src={item.logo || "/logo.png"} alt={item.name} className="w-16 h-16 mb-2 rounded-full" />
            <h2 className="text-2xl font-bold mb-1">{item.name} <span className="text-base text-gray-500">{item.symbol}</span></h2>
            <p className="mb-2">Price: <span className="font-semibold">${item.price.toLocaleString()}</span></p>
            <p className="mb-2">Market Cap: <span className="font-semibold">${item.marketCap.toLocaleString()}</span></p>
            <p className="mb-2">Volume 24h: <span className="font-semibold">${item.volume24h.toLocaleString()}</span></p>
            <p className="mb-2">ATH: <span className="font-semibold">${item.ath.toLocaleString()}</span></p>
            <p className="mb-2">Launch Year: <span className="font-semibold">{item.launchYear}</span></p>
            <p className="mb-2">Algorithm: <span className="font-semibold">{item.algorithm || "N/A"}</span></p>
            <div className="w-full mt-4">
              <CryptoChart data={chartData} />
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}