import React, { useState, useEffect } from "react";
import CryptoRow from "./CryptoRow";
import "./../styles/tableStyles.css";

type Crypto = {
  id: number;
  name: string;
  symbol: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number | undefined;
  ath: number;
  launchYear: number;
  rank: number;
  algorithm: string;
  logo: string;
  chart: string;
};

export default function CryptoTable() {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]); // State for cryptocurrencies
  const [formData, setFormData] = useState({
    id: "",
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
      logo: "/logo.png", // Default logo
      chart: "/chart.png", // Default chart
    };
    setCryptoData([...cryptoData, newCrypto]); // Add new crypto to the table
    setFormData({
      id: "",
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

  return (
    <div className="table-container">
      <h1 className="text-2xl font-bold text-center my-4">Crypto Tracker</h1>

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
            <th>Logo</th>
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
          {cryptoData.map((item) => (
            <CryptoRow key={item.id} item={item} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
