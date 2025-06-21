import css from "./Select.module.css";
import { data } from "../data/data";
import Option from "../Option/Option";
const Select = ({ handleChange }) => {
  return (
    <>
      {Object.entries(data).map(([key, value]) => {
        return (
          <div key={key} className={css["form__inner-wrapper"]}>
            <label htmlFor={key}> Select a {key}</label>
            <select
              onChange={handleChange}
              className={css.select}
              name={key}
              id={key}
            >
              <Option valueArray={value} />
            </select>
          </div>
        );
      })}
    </>
  );
};

export default Select;
