import React, { useState } from "react";

export default function Toolkit() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="flex gap-x-4">
      {isDark ? (
        <span class="material-symbols-outlined">dark_mode</span>
      ) : (
        <span class="material-symbols-outlined">light_mode</span>
      )}
      <span class="material-symbols-outlined">notifications</span>{" "}
    </div>
  );
}
