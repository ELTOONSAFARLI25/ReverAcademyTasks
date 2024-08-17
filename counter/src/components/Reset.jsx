import React from "react";

function Reset({ count, setCount }) {
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();

          count = 0;
          setCount(count);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Reset;
