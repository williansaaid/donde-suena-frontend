import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

function Navbar () {
    return (
        <div className="nav">
            <img src="https://images-ext-2.discordapp.net/external/0pucSF2Nb6L3uB8QZpiQOJwq2naNIlht-1pKk7DX4rA/https/m.media-amazon.com/images/M/MV5BYjM0MmQzNzItZmE3NC00YWVmLWI2ZmItMWEyNWNhYTVmNjQwXkEyXkFqcGdeQXVyNjU0ODkwMTU%40._V1_.jpg" alt="logo" />
            <SearchBar></SearchBar>
          <button>Mi Cuenta</button>
        </div>
    )
}

export default Navbar