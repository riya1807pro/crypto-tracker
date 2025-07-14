import { Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import { Crypto } from "../types/crypto";
// import CryptoChart from "./CryptoChart";

interface CryptoModalProps {
  item: Crypto;
  onClose: () => void;
  theme?: "light" | "dark";
}

export default function CryptoModal({  onClose, theme = "light" }: CryptoModalProps) {
  // Example chart data (replace with real data)
  // const chartData = item.history || [item.price, item.price * 0.98, item.price * 1.02, item.price * 1.01];

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
         
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}