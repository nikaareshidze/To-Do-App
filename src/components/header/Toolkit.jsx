import React from "react";
import { useSelector } from "react-redux";

export default function Toolkit() {
  const { isDark } = useSelector((state) => state.toDoListSlice);

  return (
    <div className="flex gap-x-4">
      {isDark ? (
        <span class="material-symbols-outlined">dark_mode</span>
      ) : (
        <span class="material-symbols-outlined">light_mode</span>
      )}
      <span class="material-symbols-outlined">notifications</span>
    </div>
  );
}
