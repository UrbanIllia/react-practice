import { useState } from "react";

const SearchBar = ({ onChangeQuery }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onChangeQuery(query);
    setQuery("");
  };
  return (
    <div>
      <form
        className="flex flex-row gap-5 justify-center items-center my-5"
        onSubmit={handleSubmit}
      >
        <input
          className="px-2 py-2 w-[260px] bg-slate-300 rounded-3xl outline-0"
          placeholder="Wright here..."
          type="text"
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        ></input>
        <button
          type="submit"
          className="px-7 py-2 bg-slate-700 text-slate-200 rounded-2xl
           hover:bg-slate-200 hover:text-slate-700 transition cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
