import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "../../features/navBar/redux/sectionsSlice";
import userReducer from "../../features/authentication/redux/userSlice";
import categoryReducer from "../../features/adminPanel/redux/categorySlice";

const store = configureStore({
  reducer: {
    sections: sectionReducer,
    users: userReducer,
    categories: categoryReducer,
  },
});

export default store;
