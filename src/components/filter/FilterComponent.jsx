import React from "react";
import { useSelector } from "react-redux";
import FilterTitle from "./FilterTitle";

export default function FilterComponent({ title }) {
  const { toDoList, filterRender } = useSelector(
    (state) => state.toDoListSlice
  );

  return (
    <>
      {toDoList.filter((task) => task.status == title).length == 0 ? (
        <h1>{title}</h1>
      ) : filterRender == title ? (
        <FilterTitle title={title} font="font-bold" />
      ) : (
        <FilterTitle title={title} />
      )}
    </>
  );
}
