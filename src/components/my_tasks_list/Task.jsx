import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { toDoListActions } from "../../store/toDoListSlice";

export default function Task({ task }) {
  const [isDeleteButtonShown, setIsDeleteButtonShown] = useState(false);

  const dispatch = useDispatch();
  const deleteFromToDoList = (payload) => {
    dispatch(toDoListActions.deleteFromToDoList(payload));
  };

  const deleteItem = (e) => {
    e.preventDefault();
    deleteFromToDoList(task.id);
  };

  return (
    <div
      className="bg-white h-fit rounded-lg p-4"
      onMouseEnter={() => {
        setIsDeleteButtonShown(true);
      }}
      onMouseLeave={() => {
        setIsDeleteButtonShown(false);
      }}
    >
      <h1 className="font-bold text-lg">{task.title}</h1>
      <h1 className="my-4">{task.description}</h1>
      <div className="flex justify-between items-center">
        <h1>
          Deadline: <span className="underline">{task.deadline}</span>
        </h1>
        {task.status == "Done" ? (
          <h1 className="font-light text-green-700 text-sm">{task.status}</h1>
        ) : task.status == "Plan" ? (
          <h1 className="font-light text-yellow-700 text-sm">{task.status}</h1>
        ) : task.status == "Not Started" ? (
          <h1 className="font-light text-red-700 text-sm">{task.status}</h1>
        ) : task.status == "In Progress" ? (
          <h1 className="font-light text-blue-700 text-sm">{task.status}</h1>
        ) : (
          ""
        )}
      </div>
      {isDeleteButtonShown && (
        <h1
          className="mt-4 text-red-900 underline cursor-pointer"
          onClick={deleteItem}
        >
          Delete
        </h1>
      )}
    </div>
  );
}
