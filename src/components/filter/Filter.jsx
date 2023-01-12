import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toDoListActions } from "../../store/toDoListSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const setFilterRender = (payload) => {
    dispatch(toDoListActions.setFilterRender(payload));
  };

  const { filterRender } = useSelector((state) => state.toDoListSlice);

  return (
    <div className="flex gap-x-8">
      {filterRender == "All" ? (
        <h1
          className="cursor-pointer font-bold"
          onClick={() => setFilterRender("All")}
        >
          All
        </h1>
      ) : (
        <h1 className="cursor-pointer" onClick={() => setFilterRender("All")}>
          All
        </h1>
      )}

      {filterRender == "In Progress" ? (
        <h1
          className="cursor-pointer font-bold"
          onClick={() => setFilterRender("In Progress")}
        >
          In Progress
        </h1>
      ) : (
        <h1
          className="cursor-pointer"
          onClick={() => setFilterRender("In Progress")}
        >
          In Progress
        </h1>
      )}

      {filterRender == "Plan" ? (
        <h1
          className="cursor-pointer font-bold"
          onClick={() => setFilterRender("Plan")}
        >
          Plan
        </h1>
      ) : (
        <h1 className="cursor-pointer" onClick={() => setFilterRender("Plan")}>
          Plan
        </h1>
      )}

      {filterRender == "Done" ? (
        <h1
          className="cursor-pointer font-bold"
          onClick={() => setFilterRender("Done")}
        >
          Done
        </h1>
      ) : (
        <h1 className="cursor-pointer" onClick={() => setFilterRender("Done")}>
          Done
        </h1>
      )}

      {filterRender == "Not Started" ? (
        <h1
          className="cursor-pointer font-bold"
          onClick={() => setFilterRender("Not Started")}
        >
          Not Started
        </h1>
      ) : (
        <h1
          className="cursor-pointer"
          onClick={() => setFilterRender("Not Started")}
        >
          Not Started
        </h1>
      )}
    </div>
  );
}
