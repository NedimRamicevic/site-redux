// create ComponentSlice
import { createSlice } from "@reduxjs/toolkit";

export const addComponentSlice = createSlice({
  name: "addComponent",
  initialState: {
    components: [
      {
        name: "new component",
        title: "title",
        img: "https://via.placeholder.com/150",
        content: "new content",
      },
    ],
  },
  reducers: {
    addComponent: (state, action) => {
      return { ...state, components: [...state.components, action.payload] };
    },
  },
});
export const { addComponent } = addComponentSlice.actions;
export default addComponentSlice.reducer;
