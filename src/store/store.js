import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkModeSlice";
import toDoListSlice from "./toDoListSlice";
import addTaskFormVisibleSlice from "./addTaskFormVisible";

const store = configureStore({
  reducer: {
    darkModeSlice: darkModeSlice.reducer,
    toDoListSlice: toDoListSlice.reducer,
    addTaskFormVisibleSlice: addTaskFormVisibleSlice.reducer,
  },
});

export default store;
