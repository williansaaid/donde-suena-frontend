import React from "react";
import SearchBar from "../SearchBar/SearchBar";

function Navbar() {
  return (
    <nav class="bg-zinc-900 py-2 relative">
      <div class="container mx-auto flex justify-between items-center">
        <img
          class="h-20"
          src={require(`../../assets/img/HenryLogo.png`)}
          alt="logo"
        />
        <div class="flex items-center">
          <div class="my-9">
            <SearchBar></SearchBar>
          </div>
          <div class="text-orange-100 bg-red-600 rounded-lg ml-10 items-center p-2 flex h-10 gap-3">
            <img
              class="h-full"
              src={require(`../../assets/img/HenryCuenta.png`)}
              alt=""
            />
            <a href="#">Mi Cuenta</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
