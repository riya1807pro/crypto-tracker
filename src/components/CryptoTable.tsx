import React, { useState, useEffect } from "react";
import CryptoRow from "./CryptoRow";
import { motion } from "framer-motion";
// import "./../styles/tableStyles.css";
import { Crypto } from "../types/crypto";

type FormData = {
  id: string;
  // logo: string;
  name: string;
  symbol: string;
  price: string;
  change1h: string;
  change24h: string;
  change7d: string;
  marketCap: string;
  volume24h: string;
  circulatingSupply: string;
  maxSupply: string;
  ath: string;
  launchYear: string;
  rank: string;
  algorithm: string;
};

type CryptoTableProps = {
  cryptoTableData: Crypto[];
  onDelete: (id: number) => void;
};

export default function CryptoTable({ cryptoTableData , onDelete }: CryptoTableProps) {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]); // State for cryptocurrencies
  const [formData, setFormData] = useState<FormData>({
    id: "",
    // logo: "",
    name: "",
    symbol: "",
    price: "",
    change1h: "",
    change24h: "",
    change7d: "",
    marketCap: "",
    volume24h: "",
    circulatingSupply: "",
    maxSupply: "",
    ath: "",
    launchYear: "",
    rank: "",
    algorithm: "",
  });

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("cryptoData");
    if (storedData) {
      setCryptoData(JSON.parse(storedData));
    }
  }, []);

  console.log("Loaded crypto data:", cryptoTableData, onDelete); // Debugging log

  // Save data to local storage whenever cryptoData changes
  useEffect(() => {
    console.log("Saving to local storage:", cryptoData); // Debugging log
    if (cryptoData.length > 0) {
      localStorage.setItem("cryptoData", JSON.stringify(cryptoData));
    }
  }, [cryptoData]);

  console.log(localStorage.getItem("cryptoData"));

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCrypto = {
      ...formData,
      id: cryptoData.length + 1, // Auto-increment ID
      // logo: "/logo.png", // Default logo
      price: parseFloat(formData.price),
      change1h: parseFloat(formData.change1h),
      change24h: parseFloat(formData.change24h),
      change7d: parseFloat(formData.change7d),
      marketCap: parseFloat(formData.marketCap),
      volume24h: parseFloat(formData.volume24h),
      circulatingSupply: parseFloat(formData.circulatingSupply),
      maxSupply: formData.maxSupply ? parseFloat(formData.maxSupply) : undefined,
      ath: parseFloat(formData.ath),
      launchYear: parseInt(formData.launchYear, 10),
      rank: parseInt(formData.rank, 10),
      algorithm: formData.algorithm,
      chart: "/chart.png", // Default chart
    };
    setCryptoData([...cryptoData, newCrypto]); // Add new crypto to the table
    setFormData({
      id: "",
      // logo: "",
      name: "",
      symbol: "",
      price: "",
      change1h: "",
      change24h: "",
      change7d: "",
      marketCap: "",
      volume24h: "",
      circulatingSupply: "",
      maxSupply: "",
      ath: "",
      launchYear: "",
      rank: "",
      algorithm: "",
    }); // Reset form
  };

  // Handle delete action
  const handleDelete = (id: number) => {
    const updatedData = cryptoData.filter((crypto) => crypto.id !== id);
    setCryptoData(updatedData);
  };

  // Portfolio summary calculation
  const totalMarketCap = cryptoData.reduce((sum, c) => sum + c.marketCap , 0);
  const totalAssets = cryptoData.length;

  return (
    <div className="table-container">
      <h1 className="text-2xl font-bold text-center my-4">Crypto Portfolio Showcase</h1>
      {/* Portfolio summary card */}
      <div className="flex justify-center mb-6">
        <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-md transition-colors duration-500">
          <h2 className="text-lg font-semibold mb-2">Portfolio Summary</h2>
          <div className="flex justify-between">
            <span>Total Market Cap:</span>
            <span className="font-bold">${totalMarketCap.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Assets:</span>
            <span className="font-bold">{totalAssets}</span>
          </div>
        </div>
      </div>

      {/* Form for user input */}
      <form className="crypto-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="symbol"
          placeholder="Symbol"
          value={formData.symbol}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="change1h"
          placeholder="1h %"
          value={formData.change1h}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="change24h"
          placeholder="24h %"
          value={formData.change24h}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="change7d"
          placeholder="7d %"
          value={formData.change7d}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="marketCap"
          placeholder="Market Cap"
          value={formData.marketCap}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="volume24h"
          placeholder="24h Volume"
          value={formData.volume24h}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="circulatingSupply"
          placeholder="Circulating Supply"
          value={formData.circulatingSupply}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="maxSupply"
          placeholder="Max Supply"
          value={formData.maxSupply}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="ath"
          placeholder="ATH"
          value={formData.ath}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="launchYear"
          placeholder="Launch Year"
          value={formData.launchYear}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="rank"
          placeholder="Rank"
          value={formData.rank}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="algorithm"
          placeholder="Algorithm"
          value={formData.algorithm}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Crypto</button>
      </form>

      {/* Table */}
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            {/* <th>Logo</th> */}
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>ATH</th>
            <th>Launch Year</th>
            <th>Rank</th>
            <th>Algorithm</th>
            <th>Chart</th>
            <th>Actions</th> {/* New column for delete button */}
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((item, idx) => (
            <motion.tr
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="crypto-row hover:scale-105 hover:shadow-xl transition-transform"
            >
              <CryptoRow item={item} onDelete={handleDelete} />
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
