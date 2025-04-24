import { AppDispatch } from "../../app/store";
import { updateCryptoData } from "./cryptoSlice"; // update path as needed
import { sampleData } from "../../data/sampleData"; // path updated
// import { Crypto } from "../../types/crypto";

function randomChange(value: number, factor = 0.01) {
  const change = value * (Math.random() * factor * (Math.random() > 0.5 ? 1 : -1));
  return +(value + change).toFixed(2);
}

export function startMockSocket(dispatch: AppDispatch) {
  setInterval(() => {
    const updated = sampleData.map((coin) => ({
      ...coin,
      price: randomChange(coin.price, 0.01),
      change1h: randomChange(coin.change1h, 0.05),
      change24h: randomChange(coin.change24h, 0.05),
      volume24h: randomChange(coin.volume24h, 0.02),
    }));
    dispatch(updateCryptoData(updated));
  }, 2000);
}
