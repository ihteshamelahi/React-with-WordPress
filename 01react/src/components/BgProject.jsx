import React from "react";
import { useState } from "react";

function BgProject() {
  let [backgroundColor, setBackgroundColor] = useState("Blue");

  const blueColor = () => {
    setBackgroundColor("Blue");
  };

  const greenColor = () => {
    setBackgroundColor("Green");
  };
  const redColor = () => {
    setBackgroundColor("Red");
  };
  return (
    <>
      <div className="full-body" style={{ backgroundColor: backgroundColor }}>
        <div className="heading">
          <h1 className="text-3xl font-bold underline mb-5">
            Color Change Project, Current Color {backgroundColor}
          </h1>
        </div>
        <div className="button-outer">
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            onClick={blueColor}
          >
            Blue Color
          </button>

          <button
            class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded ml-5"
            onClick={greenColor}
          >
            Green Color
          </button>

          <button
            class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded ml-5"
            onClick={redColor}
          >
            Red Color
          </button>
        </div>
      </div>
    </>
  );
}

export default BgProject;
