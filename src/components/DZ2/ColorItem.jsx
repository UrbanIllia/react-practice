import css from "./ColorItem.module.css";
const ColorItem = ({ data: { color }, onClick }) => {
  return (
    <div
      className={css.button}
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      <span>{color}</span>
    </div>
  );
};

export default ColorItem;
