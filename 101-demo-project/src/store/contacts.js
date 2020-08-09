import { contacts } from "./initialState.js";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: contacts,
  reducers: {},
});

export default slice.reducer;
