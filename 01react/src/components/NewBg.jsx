import React, { useState } from "react";

function BgProject() {
  const [backgroundColor, setBackgroundColor] = useState("blue");

  const colors = ["blue", "green", "red"];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white transition-all"
      style={{ backgroundColor }}
    >
      <h1 className="text-3xl font-bold underline mb-8">
        Color Change Project – Current Color: {backgroundColor}
      </h1>

      <div className="space-x-4">
        {colors.map((color) => (
          <button
            key={color}
            className={`bg-${color}-600 hover:bg-${color}-700 text-white font-semibold py-2 px-4 rounded`}
            onClick={() => setBackgroundColor(color)}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)} Color
          </button>
        ))}
      </div>
    </div>
  );
}

export default BgProject;
