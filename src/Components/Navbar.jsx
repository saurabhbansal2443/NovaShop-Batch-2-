import React from "react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Nova Shop</div>
      <SearchBar />

      <div className="navbar-right">
        <div className="cart">
          🛒
          <span className="cart-text">Cart</span>
          <span className="cart-count">2</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
