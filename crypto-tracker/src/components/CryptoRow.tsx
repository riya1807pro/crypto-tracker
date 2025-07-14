// filepath: /workspaces/crypto-tracker/src/components/CryptoRow.tsx
import { useState } from "react";
import { Crypto } from "../types/crypto";
import CryptoModal from "./CryptoModal";

function formatCurrency(num: number) {
  return "$" + num.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

export default function CryptoRow({ item, onDelete }: { item: Crypto; onDelete: (id: number) => void }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const color = (val: number) => (val >= 0 ? "positive" : "negative");

  const handleRowClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <tr onClick={handleRowClick} className="cursor-pointer">
        <td>{item.id}</td>
        <td>
          <img
            src={item.logo || "/logo.png"}
            alt={item.symbol || "Default Logo"}
            className="crypto-logo hover:scale-105 transition-transform"
          />
        </td>
        <td className="crypto-name">
          {item.name} <span className="crypto-symbol">{item.symbol}</span>
        </td>
        <td>{item.symbol}</td>
        <td>{formatCurrency(item.price)}</td>
        <td className={`${color(item.change1h)} transition-colors duration-500`}>{item.change1h}%</td>
        <td className={`${color(item.change24h)} transition-colors duration-500`}>{item.change24h}%</td>
        <td className={`${color(item.change7d)} transition-colors duration-500`}>{item.change7d}%</td>
        <td>{item.marketCap.toLocaleString()}</td>
        <td>{item.volume24h.toLocaleString()}</td>
        <td>{item.circulatingSupply}B</td>
        <td>{item.maxSupply ? `${item.maxSupply}B` : "N/A"}</td>
        <td>{formatCurrency(item.ath)}</td>
        <td>{item.launchYear}</td>
        <td>{item.rank || "N/A"}</td>
        <td>{item.algorithm || "N/A"}</td>
        <td>
          <img
            src={item.chart || "/chart.png"}
            alt="Chart"
            className="crypto-chart hover:scale-105 transition-transform"
          />
        </td>
        <td>
          <button className="delete-button" onClick={(e) => { e.stopPropagation(); onDelete(item.id); }}>
            Delete
          </button>
        </td>
      </tr>
      {isModalOpen && (
        <CryptoModal item={item} onClose={handleCloseModal} />
      )}
    </>
  );
}