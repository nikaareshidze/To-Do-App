import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

export default function MyTask({ title }) {
  const { toDoList, filterRender } = useSelector(
    (state) => state.toDoListSlice
  );

  return (
    <>
      {filterRender == title &&
        toDoList
          .filter((x) => x.status == title)
          .map((task) => <Task task={task} />)}
    </>
  );
}
