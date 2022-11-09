import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">

      <div className="navLogo">
        <img src= {require ("../../assets/img/HenryLogo.png")} alt="logo" />
      </div>

      <div className="divButtonSearch">
      <div className="SearchBar">
        <SearchBar></SearchBar>
      </div>

      <div className="divButton">
        <button>Mi Cuenta</button>
      </div>

      </div>
    </div>
  );
}

export default Navbar;
