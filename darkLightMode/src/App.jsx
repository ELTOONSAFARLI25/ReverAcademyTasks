import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Lightmode from "./components/Lightmode";

function App() {
  const [mode, setMode] = useState("");
  return (
    <>
      <Lightmode />
    </>
  );
}

export default App;
