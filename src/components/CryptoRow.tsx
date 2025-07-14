import { useState } from "react";
import { Crypto } from "../types/crypto";
import CryptoModal from "./CryptoModal";
import { motion } from "framer-motion";
import CryptoChart from "./CryptoChart";
import { TrashIcon } from "@heroicons/react/24/outline";
import { toast } from 'react-toastify';

function formatCurrency(num: number) {
  return "$" + num.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

export default function CryptoRow({
  item,
  onDelete,
  theme = "light",
}: {
  item: Crypto;
  onDelete: (id: number) => void;
  theme?: "light" | "dark";
}) {
  const [showModal, setShowModal] = useState(false);

  const changeTag = (val: number | undefined) =>
    typeof val !== "number"
      ? "bg-gray-100 text-gray-700 border-gray-400"
      : val > 0
      ? "bg-green-100 text-green-700 border-green-400"
      : val < 0
      ? "bg-red-100 text-red-700 border-red-400"
      : "bg-gray-100 text-gray-700 border-gray-400";

  // Example chart data (replace with real data)
  const chartData = item.history || [item.price, item.price * 0.98, item.price * 1.02, item.price * 1.01];

  return (
    <>
      {/* Desktop/Table view */}
      <motion.tr
        className={`crypto-row hidden md:table-row hover:scale-105 hover:shadow-xl transition-transform cursor-pointer ${theme}`}
        tabIndex={0}
        onClick={() => setShowModal(true)}
        onKeyDown={e => {
          if (e.key === "Enter" || e.key === " ") setShowModal(true);
        }}
        aria-label={`Show details for ${item.name}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <td>
          <span className="font-bold">{item.id}</span>
        </td>
        <td>
        
        </td>
        <td>
          <span className="font-bold">{item.name}</span>
        </td>
        <td>
          <span className="ml-2 text-xs text-gray-500">{item.symbol}</span>
        </td>
        <td>{formatCurrency(item.price)}</td>
        <td>
          <span className={`px-2 py-1 rounded border ${changeTag(item.change1h)} transition-colors duration-500`}>
            {item.change1h}%
          </span>
        </td>
        <td>
          <span className={`px-2 py-1 rounded border ${changeTag(item.change24h)} transition-colors duration-500`}>
            {item.change24h ?? "N/A"}%
          </span>
        </td>
        <td>
          <span className={`px-2 py-1 rounded border ${changeTag(item.change7d)} transition-colors duration-500`}>
            {item.change7d}%
          </span>
        </td>
        <td>{formatCurrency(item.marketCap)}</td>
        <td>{formatCurrency(item.volume24h)}</td>
        <td>{item.circulatingSupply}B</td>
        <td>{item.maxSupply ? `${item.maxSupply}B` : "N/A"}</td>
        <td>{formatCurrency(item.ath)}</td>
        <td>{item.launchYear}</td>
        <td>{item.rank || "N/A"}</td>
        <td>{item.algorithm || "N/A"}</td>
        <td>
          <div className="w-24 h-12">
            <CryptoChart data={chartData} />
          </div>
        </td>
        <td>
          <button
            className="delete-button px-3 py-1 rounded bg-red-500 text-white hover:bg-red-700 transition-colors"
            onClick={e => {
              e.stopPropagation();
              onDelete(item.id);
              toast.success("Deleted!");
            }}
          >
            <TrashIcon className="w-5 h-5 inline" />
          </button>
        </td>
      </motion.tr>

      {/* Mobile/Card view */}
      <motion.div
        className={`crypto-card md:hidden bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 mb-4 flex flex-col gap-2 hover:scale-105 hover:shadow-xl transition-transform cursor-pointer ${theme}`}
        tabIndex={0}
        onClick={() => setShowModal(true)}
        onKeyDown={e => {
          if (e.key === "Enter" || e.key === " ") setShowModal(true);
        }}
        aria-label={`Show details for ${item.name}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      > 
      </motion.div>

      {/* Modal for details */}
      {showModal && (
        <CryptoModal
          item={item}
          onClose={() => setShowModal(false)}
          theme={theme}
        />
      )}
    </>
  );
}
