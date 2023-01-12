import React from "react";
import { useSelector } from "react-redux";

import Task from "./Task";

export default function MyTasks() {
  const { toDoList, filterRender } = useSelector(
    (state) => state.toDoListSlice
  );

  return (
    <div className="w-7/12 grid grid-cols-2 grid-flow-row gap-4">
      {filterRender == "All" && toDoList.map((task) => <Task task={task} />)}

      {filterRender == "Done" &&
        toDoList
          .filter((x) => x.status == "Done")
          .map((task) => <Task task={task} />)}

      {filterRender == "In Progress" &&
        toDoList
          .filter((x) => x.status == "In Progress")
          .map((task) => <Task task={task} />)}

      {filterRender == "Plan" &&
        toDoList
          .filter((x) => x.status == "Plan")
          .map((task) => <Task task={task} />)}

      {filterRender == "Not Started" &&
        toDoList
          .filter((x) => x.status == "Not Started")
          .map((task) => <Task task={task} />)}
    </div>
  );
}
