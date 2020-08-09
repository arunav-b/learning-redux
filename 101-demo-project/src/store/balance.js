import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "balances",
  initialState: { prepaid: 25000 },
  reducers: {
    balanceIncreased: (balances, action) => {
      balances.prepaid = balances.prepaid + action.payload.amount;
    },
    balanceDecreased: (balances, action) => {
      balances.prepaid = balances.prepaid - action.payload.amount;
    },
  },
});

export const { balanceIncreased, balanceDecreased } = slice.actions;
export default slice.reducer;
