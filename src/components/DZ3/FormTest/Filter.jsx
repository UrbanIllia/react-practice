import css from "./Filter.module.css";

const Filter = ({ value, onFilter }) => {
  return (
    <div className={css.div}>
      <p className={css.text}>Search by name</p>
      <input
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
        className={css.input}
      />
    </div>
  );
};

export default Filter;
