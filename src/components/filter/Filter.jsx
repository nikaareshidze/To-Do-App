import React from "react";
import { useSelector } from "react-redux";

import FilterTitle from "./FilterTitle";
import FilterComponent from "./FilterComponent";

export default function Filter() {
  const { filterRender } = useSelector((state) => state.toDoListSlice);

  return (
    <div className="flex gap-x-8">
      {filterRender == "All" ? (
        <FilterTitle title="All" font="font-bold" />
      ) : (
        <FilterTitle title="All" />
      )}

      <FilterComponent title="In Progress" />
      <FilterComponent title="Plan" />
      <FilterComponent title="Done" />
      <FilterComponent title="Not Started" />
    </div>
  );
}
