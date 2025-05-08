import { useId } from "react";
import css from "./LangSwitcher.module.css";

const LangSwitcher = ({ value, onSelect }) => {
  const labelId = useId();
  //   const handleSelect = (event) => {
  //     setSelect(event.target.value);
  //   };
  return (
    <div>
      <label htmlFor={labelId}>Choose language</label>
      <select
        id={labelId}
        onChange={(event) => onSelect(event.target.value)}
        value={value}
      >
        <option value="en">en</option>
        <option value="uk">uk</option>
        <option value="ru">ru</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
