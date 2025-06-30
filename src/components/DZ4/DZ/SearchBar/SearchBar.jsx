import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  return (
    <div className="my-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row gap-5 items-center justify-center my-3"
      >
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          placeholder="Введи шось бляха"
          className="px-3 py-2 w-[300px] border-cyan-400 bg-indigo-300 rounded-2xl outline-0"
          onChange={(event) => setQuery(event.target.value)}
        ></input>
        <button
          className="px-4 py-2 bg-indigo-400 text-indigo-950 rounded-2xl
           hover:bg-indigo-700 hover:text-indigo-200 flex justify-center 
           items-center cursor-pointer transition"
          type="submit"
        >
          Тут нажимати
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
