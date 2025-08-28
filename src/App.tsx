import { useState } from "react";
import PortfolioSummary from "./components/PortfolioSummary";
import FilterSortBar from "./components/FilterSortBar";
import { Crypto } from "./types/crypto";
import CryptoTable from "./components/CryptoTable";

export default function App() {
  const [filter, setFilter] = useState("");
  const [sortKey, setSortKey] = useState("price");

  
  
  // Yeh wapis dal diya
  const [cryptoData, setCryptoData] = useState<Crypto[]>([
    { id: 1, name: "Bitcoin", symbol: "BTC", price: 30000, change: 2 , marketCap: 600000000, volume24h: 20000000, circulatingSupply: 19000000, maxSupply: 21000000, ath: 69000, launchYear: 2009, rank: 1, algorithm: "SHA-256", change1h: 0.5, change24h: 1.2, change7d: 3.4 },
    { id: 2, name: "Ethereum", symbol: "ETH", price: 1800, change: -1, marketCap: 600000000, volume24h: 20000000, circulatingSupply: 19000000, maxSupply: 21000000, ath: 69000, launchYear: 2009, rank: 1, algorithm: "SHA-256", change1h: 0.5, change24h: 1.2, change7d: 3.4 }, 
    { id: 3, name: "Dogecoin", symbol: "DOGE", price: 0.07, change: 5, marketCap: 600000000, volume24h: 20000000, circulatingSupply: 19000000, maxSupply: 21000000, ath: 69000, launchYear: 2009, rank: 1, algorithm: "SHA-256", change1h: 0.5, change24h: 1.2, change7d: 3.4  },
  ]);

  const filteredData = cryptoData
    .filter(c => c.name.toLowerCase().includes(filter.toLowerCase()) || c.symbol.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      const aValue = a[sortKey as keyof Crypto];
      const bValue = b[sortKey as keyof Crypto];
      const aNum = typeof aValue === "number" ? aValue : 0;
      const bNum = typeof bValue === "number" ? bValue : 0;
      return bNum - aNum;
    });



  return (
    <div >
      <div className="container mx-auto px-4 py-6 bg-red-500">
        {/* <PortfolioSummary data={filteredData} /> */}
<CryptoTable cryptoTableData={filteredData} onDelete={id => setCryptoData(cryptoData.filter(c => c.id !== id))} />

      </div>
    </div>
  );
}

