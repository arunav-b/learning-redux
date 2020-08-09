import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 100;

const slice = createSlice({
  name: "sends",
  initialState: [],
  reducers: {
    sendInitiated: (sends, action) => {
      sends.push({
        send_id: ++lastId,
        contact_id: action.payload.contact_id,
        amount: action.payload.amount,
        upid: action.payload.upid,
        e2e_id: action.payload.e2e_id,
        status: "active",
      });
      // store.balance -= action.payload.amount;
    },

    sendRefunded: (sends, action) => {
      const index = sends.findIndex(
        (send) => send.send_id === action.payload.send_id
      );
      sends[index].status = "refunded";
      // store.balance += store.sends[index].amount;
    },
  },
});

export const getAmountBySendId = (sends, send_id) => {
  return sends[sends.findIndex((send) => send.send_id === send_id)].amount;
};

export const getActiveSends = createSelector(
  (store) => store.sends,
  (sends) => sends.filter((send) => send.status === "active")
);

export const getRefunds = createSelector(
  (store) => store.sends,
  (sends) => sends.filter((send) => send.status === "refunded")
);

export const { sendInitiated, sendRefunded } = slice.actions;
export default slice.reducer;
