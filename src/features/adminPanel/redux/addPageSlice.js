import { createSlice } from "@reduxjs/toolkit";

const addPageSlice = createSlice({
  name: "addPage",
  initialState: [
    { name: "Home", title: "title", content: "content", link: "home" },
    { name: "About", title: "title", content: "content", link: "about" },
    { name: "Contact", title: "title", content: "content", link: "contact" },
  ],
  reducers: {
    addPage: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addPage } = addPageSlice.actions;
export default addPageSlice.reducer;
