import React from "react";
import { Crypto } from "../types/crypto";

interface CryptoCardProps {
  item: Crypto;
  onClick: () => void;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ item, onClick }) => {
  return (
    <div className="crypto-card" onClick={onClick}>
      <img
        src={item.logo || "/logo.png"}
        alt={item.symbol || "Default Logo"}
        className="crypto-logo"
      />
      <h3 className="crypto-name">{item.name}</h3>
      <p className="crypto-symbol">{item.symbol}</p>
      <p className="crypto-price">{formatCurrency(item.price)}</p>
      <p className={`crypto-change ${color(item.change1h)}`}>
        {item.change1h}%
      </p>
      <p className="crypto-market-cap">
        Market Cap: {item.marketCap.toLocaleString()}
      </p>
    </div>
  );
};

function formatCurrency(num: number) {
  return "$" + num.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

const color = (val: number) => (val >= 0 ? "positive" : "negative");

export default CryptoCard;