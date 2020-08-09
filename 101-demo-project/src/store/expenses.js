import { expenses, contacts } from "./initialState.js";
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "expenses",
  initialState: expenses,
  reducers: {
    expenseUpdated: (expenses, action) => {
      const index = expenses.findIndex(
        (expense) => expense.expense_id === action.payload.expense_id
      );
      expenses[index].status = "split";
      expenses[index].contact_ids = action.payload.contact_ids;
    },
  },
});

export const getNonSplitExpenses = createSelector(
  (store) => store.expenses,
  (expenses) => expenses.filter((expense) => expense.status === "non-split")
);

// export const getContactsForAnExpenseSplitByExpenseId = createSelector(
//   (store) => store.expenses,
//   (store) => store.contacts,
//   (expenses, contacts) =>
//     expenses.filter((expense) => expense.status === "split")
// );

export const { expenseUpdated } = slice.actions;
export default slice.reducer;
