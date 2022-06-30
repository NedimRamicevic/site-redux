import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [
    {
      id: 1,
      name: "admin",
      password: "admin",
      role: "admin",
    },
    {
      id: 2,
      name: "user",
      password: "user",
      role: "user",
    },
  ],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    removeUser: (state, action) => {
      state.splice(action.payload, 1);
    },
    checkUser: (state, action) => {
      state.forEach((user) => {
        if (user.name === action.payload.name) {
          if (user.password === action.payload.password) {
            return user;
          }
        }
      });
      return null;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
