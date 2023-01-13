import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toDoListActions } from "../../store/toDoListSlice";

import FilterTitle from "./FilterTitle";

export default function Filter() {
  const dispatch = useDispatch();
  const setFilterRender = (payload) => {
    dispatch(toDoListActions.setFilterRender(payload));
  };

  const { toDoList, filterRender } = useSelector(
    (state) => state.toDoListSlice
  );

  return (
    <div className="flex gap-x-8">
      {filterRender == "All" ? (
        <FilterTitle title="All" font="font-bold" />
      ) : (
        <FilterTitle title="All" />
      )}

      {toDoList.filter((x) => x.status == "In Progress").length == 0 ? (
        <h1>In Progress</h1>
      ) : filterRender == "In Progress" ? (
        <FilterTitle title="In Progress" font="font-bold" />
      ) : (
        <FilterTitle title="In Progress" />
      )}

      {toDoList.filter((x) => x.status == "Plan").length == 0 ? (
        <h1>Plan</h1>
      ) : filterRender == "Plan" ? (
        <FilterTitle title="Plan" font="font-bold" />
      ) : (
        <FilterTitle title="Plan" />
      )}

      {toDoList.filter((x) => x.status == "Done").length == 0 ? (
        <h1>Done</h1>
      ) : filterRender == "Done" ? (
        <FilterTitle title="Done" font="font-bold" />
      ) : (
        <FilterTitle title="Done" />
      )}

      {toDoList.filter((x) => x.status == "Not Started").length == 0 ? (
        <h1>Not Started</h1>
      ) : filterRender == "Not Started" ? (
        <FilterTitle title="Not Started" font="font-bold" />
      ) : (
        <FilterTitle title="Not Started" />
      )}
    </div>
  );
}
