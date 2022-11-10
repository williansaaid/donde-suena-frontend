import React from "react";

function SearchBar() {
  return (
    <div class="h-10 w-96 px-2 flex flex-row-reverse bg-customGray border border-white rounded-lg items-center">
      <img
        class="h-3/4"
        // src={require(`../../assets/img/HenrySearch.png`)}
        alt="search icon"
      />
      <input
        class="bg-customGray p-4 h-full w-full focus:outline-0 focus:text-white"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}
export default SearchBar;
