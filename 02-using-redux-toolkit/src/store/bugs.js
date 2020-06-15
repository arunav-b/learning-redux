import { createAction, createReducer } from "@reduxjs/toolkit";

// Action creators from redux-toolkit
export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");

// Reducers has to be default export in Ducks Pattern
//CreateReducer takes in 2 params -
// initial state
// actions Map
let lastId = 0;
export default createReducer([], {
  // key-value in actions map is defined as -
  // actions : functions (event / action (key)   =>   event-handler / reducer (value))
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  [bugRemoved.type]: (bugs, action) => {
    const bugIndex = bugs.findIndex((bug) => bug.id === action.payload.id);
    console.log(bugs[bugIndex]);
    bugs.splice(bugIndex, 1);
  },
  [bugResolved.type]: (bugs, action) => {
    const bugIndex = bugs.findIndex((bug) => bug.id === action.payload.id);
    console.log(bugs[bugIndex]);
    bugs[bugIndex].resolved = true;
  },
});
