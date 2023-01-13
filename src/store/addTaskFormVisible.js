import { createSlice } from "@reduxjs/toolkit";

const addTaskFormVisibleInitialState = {
  isVisible: false,
};

const addTaskFormVisibleSlice = createSlice({
  name: "addTaskForm",
  initialState: addTaskFormVisibleInitialState,
  reducers: {
    setIsVisible(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const addTaskFormVisibleActions = addTaskFormVisibleSlice.actions;

export default addTaskFormVisibleSlice;
