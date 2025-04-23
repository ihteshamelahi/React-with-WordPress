import { useState } from "react";

function Hooks() {
  const [counter, setCounter] = useState(7);
  const [message, setMessage] = useState("");

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      setMessage(""); // clear message if valid
    } else {
      setMessage("Value not allowed more than 20");
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setMessage(""); // clear message if valid
    } else {
      setMessage("Value not allowed less than 0");
    }
  };

  return (
    <>
      <button className="border pl-6 pr-6" onClick={addValue}>
        Add Value {counter}
      </button>
      <button className="border pl-6 pr-6 ml-5" onClick={removeValue}>
        Remove Value {counter}
      </button>
      <p>{message}</p>
    </>
  );
}

export default Hooks;
