import { createSlice } from "@reduxjs/toolkit";

const toDoListInitialState = {
  toDoList: [],
};

const toDoListSlice = createSlice({
  name: "toDoList",
  initialState: toDoListInitialState,
  reducers: {
    setToDoList(state, actions) {
      state.toDoList = [...state.toDoList, actions.payload];
    },
  },
});

export const toDoListActions = toDoListSlice.actions;

export default toDoListSlice;
