import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Decrease from "./components/Decrease";
import Increase from "./components/Increase";
import Reset from "./components/Reset";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <Decrease count={count} setCount={setCount} />
        <span>{count}</span>
        <Increase count={count} setCount={setCount} />
        <Reset count={count} setCount={setCount} />
      </div>
    </>
  );
}

export default App;
