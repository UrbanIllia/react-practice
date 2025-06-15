import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-toastify";
import css from "./Form.module.css";

function Form({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === "") {
      toast("Enter some text");
      return;
    }
    onSubmit(value);
    setValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input onChange={handleChange} value={value} className={css.input} />
        <button type="submit" className={css.button}>
          <FiSearch size="20px" />
        </button>
      </form>
    </>
  );
}
export default Form;
