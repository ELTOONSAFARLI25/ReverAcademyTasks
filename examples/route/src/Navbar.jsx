import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/basket">Basket</Link>
      <Link to="/wishlist">Wishlist</Link>
    </>
  );
}

export default Navbar;
