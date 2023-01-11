import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkModeSlice";
import toDoListSlice from "./toDoListSlice";

const store = configureStore({
  reducer: {
    darkModeSlice: darkModeSlice.reducer,
    toDoListSlice: toDoListSlice.reducer,
  },
});

export default store;
