import colors from "./data/colors.json";
import css from "./ColorPicker.module.css";
import ColorItem from "./ColorItem";
import { useState } from "react";
import { IoColorFillOutline } from "react-icons/io5";

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("white");
  const handleClick = (color) => {
    setCurrentColor(color);
  };
  return (
    <section className={css.colorWrap}>
      <div className={css.palette} style={{ backgroundColor: currentColor }}>
        <IoColorFillOutline size={36} className={css.icon} />
        <h2>Current color: {currentColor}</h2>
        <ul className={css.list}>
          {colors.map((color) => {
            return (
              <li key={color.id}>
                <ColorItem
                  data={color}
                  onClick={() => handleClick(color.color)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ColorPicker;
