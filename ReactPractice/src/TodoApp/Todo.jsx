import React, { useReducer } from "react";
import reducer from "./todo";
function Todo() {
  const [state, dispatch] = useReducer(reducer, {
    value: "",
    todos: [],
  });
  console.log(state);
  return (
    <>
      <h1>Todo App | Reducer</h1>

      <input
        type="text"
        value={state.value}
        onChange={(e) => {
          dispatch({
            value: e.target.value,
            type: "setValue",
          });
        }}
      />
      <button>Add</button>
      <ul style={{ listStyle: "none" }}>
        <li>
          elem
          <button style={{ marginLeft: "50px" }}>delete</button>
        </li>
      </ul>
    </>
  );
}

export default Todo;
