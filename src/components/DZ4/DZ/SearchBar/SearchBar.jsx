import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  return (
    <div className="flex flex-row justify-center items-center py-5 gap-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row justify-center items-center gap-6"
      >
        <input
          type="text"
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 border-2 bg-amber-100 rounded-lg outline-0"
        ></input>
        <button
          type="submit"
          className="bg-amber-900 text-amber-300 p-5 rounded-3xl cursor-pointer
           hover:bg-amber-200 hover:text-amber-900 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
