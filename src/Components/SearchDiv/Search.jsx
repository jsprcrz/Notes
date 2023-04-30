import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // Handle user input in search bar
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  // Clear search query
  const handleClearInput = () => {
    setQuery("");
    onSearch("");
  };

  const handleSearch = (event) => {
    // Prevent search when enter key is pressed
    if (event.key === "Enter") {
      event.preventDefault();
      return;
    }
  };

  return (
    <div
      id="search"
      className="searchDiv grid gp-10 bg-greyIsh rounded-[10px] p-[3rem]"
    >
      <form action="">
        <div
          className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] 
          bg-white p-5 shadow-lg shadow-greyIsh-700"
        >
          <div className="flex flex-auto gap-2 items-center ">
            <AiOutlineSearch className="text-[25px] icon" />

            <input
              type="text"
              className="bg-transparent text-blue-900 focus:outline-none w-[100%]"
              placeholder="Search notes by course name or code"
              value={query}
              onChange={handleQueryChange}
              onKeyPress={handleSearch}
            />

            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-red-500 icon"
              onClick={handleClearInput}
            />
          </div>
        </div>
      </form>

      {/* <div className="secDiv flex items-center gap-10 pt-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            Sort by:
          </label>

          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="term" className="text-[#808080] font-semibold">
            Term:
          </label>

          <select
            name=""
            id="term"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Winter 2023</option>
            <option value="">Fall 2022</option>
            <option value="">Spring 2022</option>
            <option value="">Winter 2022</option>
            <option value="">Fall 2021</option>
            <option value="">Winter 2021</option>
          </select>
        </div>

        <span className="text-[#808080] cursor-pointer">Clear All</span>
      </div> */}
    </div>
  );
};

export default Search;
