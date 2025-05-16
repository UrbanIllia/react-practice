import css from "./SearchBox.module.css";

const SearchBox = ({ onChange, value }) => {
  return (
    <div className={css.inputWrap}>
      <input
        type="text"
        className={css.input}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </div>
  );
};

export default SearchBox;
