import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

let userId = 0;

// Creating an Action using createAction() of redux-toolkit
export const userAdded = createAction("userAdded");

// createReducer() of redux-toolkit takes in 2 params -
// initial state
// actions Map
export default createReducer([], {
  // key-value in actions map is defined as -
  // actions : functions (event / action (key)   =>   event-handler / reducer (value))
  [userAdded.type]: (state, action) => {
    state.push({
      id: ++userId,
      name: action.payload.name,
    });
  },
});

// The above code can be replaced by the below createSlice code
//
// const slice = createSlice({
//   name: "users",
//   initialState: [],
//   reducers: {
//     userAdded: (users, action) => {
//       users.push({
//         id: ++userId,
//         name: action.payload.name,
//       });
//     },
//   },
// });
// export default slice.reducer;
// export const { userAdded } = slice.actions;
