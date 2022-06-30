import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/body/redux/counterSlice";
import sectionReducer from "../../features/navBar/redux/sectionsSlice";
import addPageReducer from "../../features/adminPanel/redux/addPageSlice";
import addComponentReducer from "../../features/adminPanel/redux/addComponentSlice";
import userReducer from "../../features/authentication/redux/userSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    sections: sectionReducer,
    addPage: addPageReducer,
    addComponent: addComponentReducer,
    users: userReducer,
  },
});

export default store;
