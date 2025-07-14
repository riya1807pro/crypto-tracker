import { Crypto } from "../types/crypto";

export default function PortfolioSummary({ data }: { data: Crypto[] }) {
  const totalMarketCap = data.reduce((sum, c) => sum + c.marketCap, 0);
  const totalAssets = data.length;
  return (
    <div className="bg-white dark:bg-gray-500 shadow-xl rounded-lg p-6 mb-6 flex justify-between items-center transition-colors duration-500">
      <div>
        <div className="text-lg font-semibold">Portfolio Summary</div>
        <div>Total Market Cap: <span className="font-bold">${totalMarketCap.toLocaleString()}</span></div>
        <div>Total Assets: <span className="font-bold">{totalAssets}</span></div>
      </div>
    </div>
  );
}