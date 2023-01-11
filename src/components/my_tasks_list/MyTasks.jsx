import React from "react";
import { useSelector } from "react-redux";

import Task from "./Task";

export default function MyTasks() {
  const { toDoList } = useSelector((state) => state.toDoListSlice);

  return (
    <div className="w-7/12 grid grid-cols-2 grid-flow-row gap-4">
      {toDoList.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
}
