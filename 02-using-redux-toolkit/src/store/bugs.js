import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

// createSlice takes in 3 params which is being set in their properties -
// name of the slice
// initialState of the slice
// list of reducers in a key-value map of event -> event-handler
let lastId = 0;
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const bugIndex = bugs.findIndex((bug) => bug.id === action.payload.id);
      console.log(bugs[bugIndex]);
      bugs[bugIndex].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      const bugIndex = bugs.findIndex((bug) => bug.id === action.payload.id);
      console.log(bugs[bugIndex]);
      bugs.splice(bugIndex, 1);
    },
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const bugIndex = bugs.findIndex((bug) => bug.id === bugId);
      bugs[bugIndex].userId = userId;
    },
  },
});

// Reducers has to be default export in Ducks Pattern
export default slice.reducer;
export const {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
} = slice.actions;

// Selectors
// export const getUnresolvedBugs = (state) => {
//   return state.entities.bugs.filter((bug) => !bug.resolved);
// };

// Memoization
// bugs => fetch from cache if state is not changed. reselect maintains the cache
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );

export const getUnassignedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.userId)
);
