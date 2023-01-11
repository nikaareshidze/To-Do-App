import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkModeSlice";

const store = configureStore({
  reducer: {
    darkModeSlice: darkModeSlice.reducer,
  },
});

export default store;
