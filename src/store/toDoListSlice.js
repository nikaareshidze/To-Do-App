import { createSlice } from "@reduxjs/toolkit";

const toDoListInitialState = {
  toDoList: [
    {
      title:
        "Clean out your closet and donate any clothes you no longer wear to a local charity.",
      status: "Done",
    },
    {
      title:
        "Write a short story about a character who goes on an unexpected adventure.",
      status: "In Progress",
    },
    {
      title:
        "Create a budget plan for the next month, including your income, expenses, and savings goals.",
      status: "Not Started",
    },
    {
      title: "Learn a new recipe and cook a meal from scratch.",
      status: "Not Started",
    },
  ],
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
