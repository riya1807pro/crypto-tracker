import React from 'react';
import { Crypto } from '../types/crypto';

interface CryptoModalProps {
  isOpen: boolean;
  onClose: () => void;
  cryptoData: Crypto | null;
}

const CryptoModal: React.FC<CryptoModalProps> = ({ isOpen, onClose, cryptoData }) => {
  if (!isOpen || !cryptoData) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{cryptoData.name} ({cryptoData.symbol})</h2>
        <img src={cryptoData.logo || "/logo.png"} alt={cryptoData.symbol} />
        <p>Price: {cryptoData.price}</p>
        <p>Market Cap: {cryptoData.marketCap.toLocaleString()}</p>
        <p>24h Change: {cryptoData.change24h}%</p>
        <p>All-Time High: {cryptoData.ath}</p>
        <p>Launch Year: {cryptoData.launchYear}</p>
        <p>Algorithm: {cryptoData.algorithm || "N/A"}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CryptoModal;