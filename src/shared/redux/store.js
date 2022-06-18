import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/body/redux/counterSlice";
import sectionReducer from "../../features/navBar/redux/sectionsSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    sections: sectionReducer,
  },
});

export default store;
