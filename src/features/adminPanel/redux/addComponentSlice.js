// create ComponentSlice
import { createSlice } from "@reduxjs/toolkit";
import { ComponentModel } from "../../models/componentModel";

export const addComponentSlice = createSlice({
  name: "addComponent",
  initialState: {
    components: [
      new ComponentModel(
        "new component",
        "title",
        "https://via.placeholder.com/150",
        "new content",
        "home"
      ),
      new ComponentModel(
        "Home",
        "https://hoteliilidza.ba/wp-content/uploads/2017/02/mmm.jpg",
        "title",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tincidunt ex. Aenean feugiat justo ut mi posuere varius. Maecenas nunc est, fringilla id nisl ut, mollis fermentum lacus. Nunc posuere, diam mattis maximus pharetra, ligula elit pulvinar augue, in feugiat sem massa quis dolor. Nam quis diam dui. Integer malesuada condimentum dolor, nec feugiat justo vestibulum at. Nunc sodales nisl eget lacus facilisis suscipit. Fusce quis placerat felis. Cras faucibus accumsan ante ac interdum. In hac habitasse platea dictumst. Nunc et ipsum ut justo rutrum pulvinar. Vivamus eget hendrerit magna. Nunc ut ullamcorper erat.",
        "home"
      ),
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
