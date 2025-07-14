export interface Crypto {
  id: number;
  name: string;
  symbol: string;
  price: number;
  marketCap: number;
  volume24h: number;
  ath: number;
  launchYear: number;
  // logo: string;
  algorithm: string;
  rank: number;
  maxSupply?: number;
  circulatingSupply?: number;
  change?: number;
  change1h: number;
  change24h: number;
  change7d: number;
  chart?: string;
  history?: number[];
}
