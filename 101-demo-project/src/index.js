import configureStore from "./store/configureStore";
import {
  sendInitiated,
  sendRefunded,
  getActiveSends,
  getRefunds,
  getAmountBySendId,
} from "./store/sends";
import { expenseUpdated, getNonSplitExpenses } from "./store/expenses";
import {
  splitInitiated,
  splitProcessed,
  getInitiatedSplits,
  getAmountBySplitId,
} from "./store/splits";
import { balanceIncreased, balanceDecreased } from "./store/balance";

const store = configureStore();
// Subscribing to the store state. Whenever the dispatch() function is called, the state changes
store.subscribe(() => {
  // console.log("Store changed=", store.getState());
});

console.log("SENDS");
console.log("-----");

// Sends
// -----
console.log("Initial Store=", store.getState());
store.dispatch(
  sendInitiated({
    contact_id: 1,
    amount: 1000,
    upid: "upid1",
    e2e_id: "e2e_id1",
  })
);
store.dispatch(balanceDecreased({ amount: 1000 }));
store.dispatch(
  sendInitiated({
    contact_id: 2,
    amount: 2000,
    upid: "upid2",
    e2e_id: "e2e_id2",
  })
);
store.dispatch(balanceDecreased({ amount: 2000 }));
store.dispatch(
  sendInitiated({
    contact_id: 3,
    amount: 3000,
    upid: "upid3",
    e2e_id: "e2e_id3",
  })
);
store.dispatch(balanceDecreased({ amount: 3000 }));
store.dispatch(
  sendInitiated({
    contact_id: 4,
    amount: 4000,
    upid: "upid4",
    e2e_id: "e2e_id4",
  })
);
store.dispatch(balanceDecreased({ amount: 4000 }));

console.log("Store after sends=", store.getState());
console.log("Active Sends=", getActiveSends(store.getState()));

store.dispatch(sendRefunded({ send_id: 103 }));
store.dispatch(
  balanceIncreased({ amount: getAmountBySendId(store.getState().sends, 103) })
);

console.log("Store after refund=", store.getState());
console.log("Refunds=", getRefunds(store.getState()));
console.log("Active Sends=", getActiveSends(store.getState()));

// Expenses
// --------
console.log("EXPENSES");
console.log("--------");

console.log("Store before expense split=", store.getState());

store.dispatch(expenseUpdated({ expense_id: 201, contact_ids: [3, 4, 5] }));

console.log("All expenses after expense is split=", store.getState().expenses);
console.log("Non-Split Expenses=", getNonSplitExpenses(store.getState()));

// Splits
// -----
console.log("SPLITS");
console.log("------");

console.log("Store before Split initiation=", store.getState());

store.dispatch(splitInitiated({ contact_id: 3, split_amount: 110 }));
store.dispatch(splitInitiated({ contact_id: 4, split_amount: 220 }));
store.dispatch(splitInitiated({ contact_id: 5, split_amount: 330 }));
store.dispatch(splitInitiated({ contact_id: 6, split_amount: 440 }));
store.dispatch(splitProcessed({ split_id: 302 }));
store.dispatch(
  balanceIncreased({ amount: getAmountBySplitId(store.getState().splits, 302) })
);

console.log("Store after Split initiation=", store.getState());
console.log("Initiated Splits=", getInitiatedSplits(store.getState()));
console.log("Final Store=", store.getState());
