import React, { useState } from "react";
import { Crypto } from "../types/crypto";
import CryptoRow from "./CryptoRow";
import CryptoModal from "./CryptoModal";
import FilterSortBar from "./FilterSortBar";
import ThemeToggle from "./ThemeToggle";
import "./crypto-table.css";

interface CryptoTableProps {
  data: Crypto[];
  onDelete: (id: number) => void;
}

export default function CryptoTable({ data, onDelete }: CryptoTableProps) {
  const [selectedCrypto, setSelectedCrypto] = useState<Crypto | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filter, setFilter] = useState<string>("");

  const handleRowClick = (crypto: Crypto) => {
    setSelectedCrypto(crypto);
  };

  const handleCloseModal = () => {
    setSelectedCrypto(null);
  };

  const filteredData = data.filter(crypto => 
    crypto.name.toLowerCase().includes(filter.toLowerCase()) || 
    crypto.symbol.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    const comparison = a.price - b.price;
    return sortOrder === "asc" ? comparison : -comparison;
  });

  return (
    <div className="crypto-table-container">
      <ThemeToggle />
      <FilterSortBar 
        filter={filter} 
        setFilter={setFilter} 
        sortOrder={sortOrder} 
        setSortOrder={setSortOrder} 
      />
      <table className="crypto-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change (1h)</th>
            <th>Change (24h)</th>
            <th>Change (7d)</th>
            <th>Market Cap</th>
            <th>Volume (24h)</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>ATH</th>
            <th>Launch Year</th>
            <th>Rank</th>
            <th>Algorithm</th>
            <th>Chart</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map(item => (
            <tr key={item.id} onClick={() => handleRowClick(item)}>
              <CryptoRow item={item} onDelete={onDelete} />
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCrypto && (
        <CryptoModal 
          crypto={selectedCrypto} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}