export type Crypto = {
  id: number;
  name: string;
  symbol: string;
  logo?: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply?: number;
  ath: number;
  launchYear: number;
  rank?: number;
  algorithm?: string;
  chart?: string;
};