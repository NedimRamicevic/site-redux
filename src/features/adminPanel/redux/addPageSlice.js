import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Home",
    content: [
      {
        title: "title",
        img: "https://via.placeholder.com/150",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tincidunt ex. Aenean feugiat justo ut mi posuere varius. Maecenas nunc est, fringilla id nisl ut, mollis fermentum lacus. Nunc posuere, diam mattis maximus pharetra, ligula elit pulvinar augue, in feugiat sem massa quis dolor. Nam quis diam dui. Integer malesuada condimentum dolor, nec feugiat justo vestibulum at. Nunc sodales nisl eget lacus facilisis suscipit. Fusce quis placerat felis. Cras faucibus accumsan ante ac interdum. In hac habitasse platea dictumst. Nunc et ipsum ut justo rutrum pulvinar. Vivamus eget hendrerit magna. Nunc ut ullamcorper erat.",
      },
    ],
    link: "home",
  },
  {
    name: "About",
    title: "title",
    content: [
      {
        title: "title",
        img: "https://via.placeholder.com/150",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tincidunt ex. Aenean feugiat justo ut mi posuere varius. Maecenas nunc est, fringilla id nisl ut, mollis fermentum lacus. Nunc posuere, diam mattis maximus pharetra, ligula elit pulvinar augue, in feugiat sem massa quis dolor. Nam quis diam dui. Integer malesuada condimentum dolor, nec feugiat justo vestibulum at. Nunc sodales nisl eget lacus facilisis suscipit. Fusce quis placerat felis. Cras faucibus accumsan ante ac interdum. In hac habitasse platea dictumst. Nunc et ipsum ut justo rutrum pulvinar. Vivamus eget hendrerit magna. Nunc ut ullamcorper erat.",
      },
    ],
    link: "about",
  },
  {
    name: "Contact",
    title: "title",
    content: [
      {
        title: "title",
        img: "https://via.placeholder.com/150",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tincidunt ex. Aenean feugiat justo ut mi posuere varius. Maecenas nunc est, fringilla id nisl ut, mollis fermentum lacus. Nunc posuere, diam mattis maximus pharetra, ligula elit pulvinar augue, in feugiat sem massa quis dolor. Nam quis diam dui. Integer malesuada condimentum dolor, nec feugiat justo vestibulum at. Nunc sodales nisl eget lacus facilisis suscipit. Fusce quis placerat felis. Cras faucibus accumsan ante ac interdum. In hac habitasse platea dictumst. Nunc et ipsum ut justo rutrum pulvinar. Vivamus eget hendrerit magna. Nunc ut ullamcorper erat.",
      },
    ],
    link: "contact",
  },
];

const addPageSlice = createSlice({
  name: "addPage",
  initialState: initialState,
  reducers: {
    addPage: (state, action) => {
      return [...state, action.payload];
    },
    addComponent: (state, action) => {
      state = state.map((page) => {
        if (page.name === action.payload.page) {
          page.content.push({
            title: action.payload.title,
            img: action.payload.image,
            content: action.payload.content,
          });
        }
        return state;
      });
    },
  },
});

export const { addPage, addComponent } = addPageSlice.actions;
export default addPageSlice.reducer;
