import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  bugRemoved,
  getUnresolvedBugs,
} from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();
// Subscribing to the store state. Whenever the dispatch() function is called, the state changes
store.subscribe(() => {
  console.log("Store changed=", store.getState());
});

// Dispatching bugs
store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugRemoved({ id: 1 }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugResolved({ id: 2 }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugAdded({ description: "Bug 4" }));

// Dispatching projects
store.dispatch(projectAdded({ description: "Project 1" }));
store.dispatch(projectAdded({ description: "Project 2" }));

console.log(store.getState());

// Fetching unresolved bugs
const call1 = getUnresolvedBugs(store.getState());
const call2 = getUnresolvedBugs(store.getState());

console.log(call1 === call2);
