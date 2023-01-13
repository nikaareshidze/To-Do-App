import React from "react";
import { useSelector } from "react-redux";
import FilterTitle from "./FilterTitle";

export default function FilterComponent({ title }) {
  const { toDoList, filterRender } = useSelector(
    (state) => state.toDoListSlice
  );

  const { isDark } = useSelector((state) => state.darkModeSlice);
  const textColor = isDark ? "text-white" : "text-black";

  return (
    <>
      {toDoList.filter((task) => task.status == title).length == 0 ? (
        <h1 className={textColor}>{title}</h1>
      ) : filterRender == title ? (
        <FilterTitle title={title} font="font-bold" textColor={textColor} />
      ) : (
        <FilterTitle title={title} textColor={textColor} />
      )}
    </>
  );
}
