import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Basket from "./pages/Basket";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </>
  );
}

export default App;
