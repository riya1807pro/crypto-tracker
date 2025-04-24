import { createSlice } from "@reduxjs/toolkit";
import { Crypto } from "../../types/crypto";
import { sampleData } from "../../data/sampleData";



const initialState: CryptoState = {
  data: sampleData,
};

interface CryptoState {
  data: Crypto[];
}

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateCryptoData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { updateCryptoData } = cryptoSlice.actions;
export default cryptoSlice.reducer;
