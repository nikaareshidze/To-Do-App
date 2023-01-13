import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { darkModeActions } from "../../store/darkModeSlice";

export default function Toolkit() {
  const { isDark } = useSelector((state) => state.darkModeSlice);

  const dispatch = useDispatch();
  const setIsDark = () => {
    dispatch(darkModeActions.setIsDark());
  };

  return (
    <div className="flex gap-x-4">
      {isDark ? (
        <span
          class="material-symbols-outlined cursor-pointer"
          onClick={() => {
            setIsDark();
          }}
          style={{ color: "white" }}
        >
          dark_mode
        </span>
      ) : (
        <span
          class="material-symbols-outlined cursor-pointer"
          onClick={() => {
            setIsDark();
          }}
        >
          light_mode
        </span>
      )}
    </div>
  );
}
