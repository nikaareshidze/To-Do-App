import React from "react";
import { useSelector } from "react-redux";

import Task from "./Task";
import MyTask from "./MyTask";

export default function MyTasks() {
  const { toDoList, filterRender } = useSelector(
    (state) => state.toDoListSlice
  );

  return (
    <div className="grid grid-flow-row grid-cols-3 gap-4 min-[1099px]:w-7/12 min-[1099px]:grid-cols-2 max-[500px]:grid-cols-1 max-[750px]:grid-cols-2">
      {filterRender == "All" && toDoList.map((task) => <Task task={task} />)}

      <MyTask title="Done" />
      <MyTask title="In Progress" />
      <MyTask title="Plan" />
      <MyTask title="Not Started" />
    </div>
  );
}
