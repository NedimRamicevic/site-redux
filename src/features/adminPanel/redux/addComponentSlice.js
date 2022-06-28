// create ComponentSlice
import { createSlice } from "@reduxjs/toolkit";
import { ComponentModel } from "../models/componentModel";

const initialState = [
  new ComponentModel("Home", "title", "Home page", "home", 1, true),
];

export const addComponentSlice = createSlice({
  name: "addComponent",
  initialState: initialState,
  reducers: {
    addComponent: (state, action) => {
      return { ...state, components: [...state.components, action.payload] };
    },
  },
});
export const { addComponent } = addComponentSlice.actions;
export default addComponentSlice.reducer;
