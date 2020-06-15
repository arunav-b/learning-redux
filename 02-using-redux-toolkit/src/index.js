import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, bugRemoved } from "./store/bugs";

const store = configureStore();
// Subscribing to the store state. Whenever the dispatch() function is called, the state changes
store.subscribe(() => {
  console.log("Store changed=", store.getState());
});

// Dispatching the store
store.dispatch(bugAdded("Bug1"));
store.dispatch(bugRemoved(1));
store.dispatch(bugAdded("Bug2"));
store.dispatch(bugAdded("Bug3"));
store.dispatch(bugResolved(3));
store.dispatch(bugAdded("Bug4"));

console.log(store.getState());
