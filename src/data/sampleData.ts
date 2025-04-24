import { Crypto } from "../types/crypto";

export const sampleData: Crypto[] = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC", // Ensure this is correct
    price: 93759.48,
    change1h: -0.43,
    change24h: 0.93,
    change7d: -11.11,
    marketCap: 1861618902186,
    volume24h: 4374950947,
    circulatingSupply: 19.85,
    maxSupply: 21,
    logo: "/btc.png",
    chart: "/charts/btc.svg",
    ath: 69000,
    launchYear: 2009,
    rank: 1,
    algorithm: "SHA-256",
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH", // Ensure this is correct
    price: 1802.46,
    change1h: 0.6,
    change24h: 3.21,
    change7d: 13.68,
    marketCap: 217581279327,
    volume24h: 2347469307,
    circulatingSupply: 120.71,
    maxSupply: undefined,
    logo: "/eth.png",
    chart: "/charts/eth.svg",
    ath: 4878,
    launchYear: 2015,
    rank: 2,
    algorithm: "Ethash",
  },
];
