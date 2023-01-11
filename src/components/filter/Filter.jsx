import React from "react";

export default function Filter() {
  return (
    <div className="flex gap-x-8">
      <h1 className="cursor-pointer">All</h1>
      <h1 className="cursor-pointer">Ongoing</h1>
      <h1 className="cursor-pointer">Plan</h1>
      <h1 className="cursor-pointer">Finished</h1>
    </div>
  );
}
