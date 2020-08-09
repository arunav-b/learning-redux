import { combineReducers } from "redux";
import sendsReducer from "./sends";
import splitsReducer from "./splits";
import expensesReducer from "./expenses";
import balanceReducer from "./balance";
import contactsReducer from "./contacts";

export default combineReducers({
  sends: sendsReducer,
  splits: splitsReducer,
  expenses: expensesReducer,
  balance: balanceReducer,
  contacts: contactsReducer,
});
