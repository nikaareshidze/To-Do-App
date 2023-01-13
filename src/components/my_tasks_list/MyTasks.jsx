import React from "react";
import { useSelector } from "react-redux";

import Task from "./Task";
import MyTask from "./MyTask";

export default function MyTasks() {
  const { toDoList, filterRender } = useSelector(
    (state) => state.toDoListSlice
  );

  return (
    <div className="w-7/12 grid grid-cols-2 grid-flow-row gap-4">
      {filterRender == "All" && toDoList.map((task) => <Task task={task} />)}

      <MyTask title="Done" />
      <MyTask title="In Progress" />
      <MyTask title="Plan" />
      <MyTask title="Not Started" />
    </div>
  );
}
