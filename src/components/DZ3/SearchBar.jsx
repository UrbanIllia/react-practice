import clsx from "clsx";
import css from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = () => {
  const [valueInput, setValueInput] = useState("");
  const handleChangeValue = (event) => {
    setValueInput(event.target.value);
  };
  return (
    <div>
      <div className={clsx("flexRow")}>
        <input type="text" onChange={handleChangeValue} />
        <p>{valueInput}</p>
      </div>
    </div>
  );
};

export default SearchBar;
