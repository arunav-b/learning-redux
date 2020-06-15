import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        description: action.payload.description,
      });
    },
  },
});

export default slice.reducer;
export const { projectAdded } = slice.actions;
