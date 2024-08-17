import React from "react";
import Lightmode from "./Lightmode";

function Button({ mode }) {
  return (
    <div>
      <button
        onClick={() => {
          console.log("light mode");
          <Lightmode />;
        }}
      >
        Change mode
      </button>
    </div>
  );
}

export default Button;
