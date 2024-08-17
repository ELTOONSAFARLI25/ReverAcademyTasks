import React from "react";

function Decrease({ count, setCount }) {
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();

          if (count > 0) {
            count--;
          }
          setCount(count);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default Decrease;
