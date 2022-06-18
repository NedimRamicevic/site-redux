import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/body/redux/counterSlice";
import sectionReducer from "../../features/navBar/redux/sectionsSlice";
import addPageReducer from "../../features/adminPanel/redux/addPageSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    sections: sectionReducer,
    addPage: addPageReducer,
  },
});

export default store;
