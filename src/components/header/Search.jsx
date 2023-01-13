import React from "react";
import { useSelector } from "react-redux";

export default function Search() {
  const { isDark } = useSelector((state) => state.darkModeSlice);
  const textColor = isDark ? "text-white" : "text-black";
  const borderColor = isDark ? "border-white" : "border-black";

  return (
    <input
      type="search"
      placeholder="Search"
      className={`bg-transparent text-black font-bold border ${borderColor} pl-2 placeholder:${textColor}`}
    />
  );
}
