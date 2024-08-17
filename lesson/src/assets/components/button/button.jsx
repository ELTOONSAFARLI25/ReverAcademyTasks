import React from "react";

export default function Button() {
  function click() {
    console.log("CLICK");
  }
  return (
    <>
      <button className="btn" onClick={click}>
        Click
      </button>
    </>
  );
}
