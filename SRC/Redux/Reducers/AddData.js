import {createSlice} from '@reduxjs/toolkit';

const myCryptoData = createSlice({
  name: 'mycryptoData',
  initialState: {
    cryptoData: [],
  },
  reducers: {
    addToArray: (state, action) => {
      const index = state.cryptoData.findIndex(item => item?.data?.symbol?.symbol == action.payload?.data.symbol.symbol);
      if (index !== -1) {
        if (state.cryptoData[index].data?.last_price != action.payload?.data.last_price) {
          state.cryptoData[index] = action.payload;
        }
      } else {
        state.cryptoData.push(action.payload);
      }
    },
  },
});

export const {addToArray} = myCryptoData.actions;
export default myCryptoData.reducer;
