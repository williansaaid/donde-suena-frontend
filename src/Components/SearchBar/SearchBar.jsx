import React from "react";

function SearchBar() {
  return (
    <div className="h-10 w-96 px-2 flex flex-row-reverse bg-customGray border border-white rounded-lg items-center">
      <img
        className="h-3/4"
        src={"https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_Buscar_vx1rgr.png"}
        alt="search icon"
      />
      <input
        className="bg-customGray p-4 h-full w-full focus:outline-0 focus:text-white"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}
export default SearchBar;
