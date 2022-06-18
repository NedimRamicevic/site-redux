import { createSlice } from "@reduxjs/toolkit";

const sectionsSlice = createSlice({
  name: "sections",
  initialState: ["home", "about", "contact"],
  reducers: {
    addSection: (state, action) => {
      return [...state, action.payload];
    },
    removeSection: (state, action) => {
      return state.filter((section) => section.id !== action.payload);
    },
  },
});

export const { addSection, removeSection } = sectionsSlice.actions;
export default sectionsSlice.reducer;
