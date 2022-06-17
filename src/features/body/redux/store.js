import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import counterReducer from "./counterSlice";
import sectionsReducer from "./sectionsSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    sections: sectionsReducer,
  },
});

export default store;
