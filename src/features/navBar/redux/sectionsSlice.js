import { createSlice } from "@reduxjs/toolkit";

const sectionsSlice = createSlice({
  name: "sections",
  initialState: [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Contact", link: "contact" },
  ],
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
