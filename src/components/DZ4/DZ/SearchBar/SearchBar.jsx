import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <header>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row gap-5 justify-center my-5"
      >
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Wright something here..."
          onChange={(event) => setQuery(event.target.value)}
          className=" bg-amber-200 px-3 py-3 w-sm border border-amber-800 rounded-md
           text-amber-700 outline-0 hover:bg-amber-400 hover:text-amber-900 transition-all"
        ></input>
        <button
          type="submit"
          className="px-5 py-3 bg-amber-300 rounded-md text-amber-900 hover:text-amber-200
           hover:bg-amber-700 transition-all cursor-pointer"
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
