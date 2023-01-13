import React from "react";

import { useDispatch } from "react-redux";
import { toDoListActions } from "../../store/toDoListSlice";

export default function FilterTitle(props) {
  const dispatch = useDispatch();
  const setFilterRender = (payload) => {
    dispatch(toDoListActions.setFilterRender(payload));
  };

  return (
    <h1
      className={`cursor-pointer ${props.font && props.font}`}
      onClick={() => setFilterRender(`${props.title}`)}
    >
      {props.title}
    </h1>
  );
}
