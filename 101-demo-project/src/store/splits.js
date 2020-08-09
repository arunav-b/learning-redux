import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 300;

const slice = createSlice({
  name: "splits",
  initialState: [],
  reducers: {
    splitInitiated: (splits, action) => {
      splits.push({
        split_id: ++lastId,
        contact_id: action.payload.contact_id,
        split_amount: action.payload.split_amount,
        status: "initiated",
      });
    },

    splitProcessed: (splits, action) => {
      const index = splits.findIndex(
        (split) => split.split_id === action.payload.split_id
      );
      splits[index].status = "processed";
      // store.balance += store.splits[index].split_amount;
    },
  },
});

export const getAmountBySplitId = (splits, split_id) => {
  return splits[splits.findIndex((split) => split.split_id === split_id)]
    .split_amount;
};

export const getInitiatedSplits = createSelector(
  (store) => store.splits,
  (splits) => splits.filter((split) => split.status === "initiated")
);

export const { splitInitiated, splitProcessed } = slice.actions;
export default slice.reducer;
