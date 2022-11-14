import React from "react";
import SearchBar from "../SearchBar/SearchBar";

function Navbar() {
  return (
    <nav class="bg-customGray relative w-full">
      <div class="container mx-auto flex justify-between items-center">
        <img
          class="h-20"
          src={"https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_Logo_mwreht.png"}
          alt="logo"
        />
        <div className="flex items-center">
          <div className="my-9">
            <SearchBar/>
          </div>
          <div className="text-white bg-customRed rounded-lg ml-10 items-center p-2 flex h-10 gap-3">
            <img
              className="h-full"
              src={"https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_Mi_cuenta_tdlcab.png"}
              alt="account icon"
            />
            <a href="##">Mi Cuenta</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

