import React from "react";

function Increase({ count, setCount }) {
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          count++;
          setCount(count++);
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default Increase;
