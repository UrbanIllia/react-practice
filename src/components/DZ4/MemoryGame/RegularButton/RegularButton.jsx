import css from "./RegularButton.module.css";
import clsx from "clsx";
const RegularButton = ({ type = "button", children, handleClick, style }) => {
  return (
    <button
      className={clsx(css.btn, { [css[style]]: style })}
      onClick={type === "button" ? handleClick : null}
      type={type}
    >
      {children}
    </button>
  );
};

export default RegularButton;
