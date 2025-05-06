import css from "./FigureSkatingItem.module.css";
import getRandomColorLight from "../../utils/getRandomColorLight";
import clsx from "clsx";
const FigureSkatingItem = ({ data, handleClick, index }) => {
  return (
    <li>
      <button
        onClick={() => handleClick(data, index)}
        className={clsx("button", css.btn)}
        style={{ backgroundColor: getRandomColorLight() }}
      >
        Point: <span className={css.span}>{data}</span>
      </button>
    </li>
  );
};

export default FigureSkatingItem;
