export interface Crypto {
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
  maxSupply?: number; // New Field
  logo?: string;
  chart?: string;
  ath: number; // All-Time High
  launchYear: number; // Launch Year
  rank?: number; // New Field
  algorithm?: string; // New Field
}
