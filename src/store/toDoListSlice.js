import { createSlice } from "@reduxjs/toolkit";

const toDoListInitialState = {
  toDoList: [],
  id: 0,
  filterRender: "All",
};

const toDoListSlice = createSlice({
  name: "toDoList",
  initialState: toDoListInitialState,
  reducers: {
    setToDoList(state, actions) {
      state.toDoList = [...state.toDoList, actions.payload];
    },
    deleteFromToDoList(state, actions) {
      state.toDoList = state.toDoList.filter((item) => {
        return item.id !== actions.payload;
      });
    },
    increaseId(state) {
      state.id = state.id + 1;
    },
    setFilterRender(state, actions) {
      state.filterRender = actions.payload;
    },
  },
});

export const toDoListActions = toDoListSlice.actions;

export default toDoListSlice;
