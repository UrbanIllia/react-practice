import { useState } from "react";
import css from "./ClickCounter.module.css";

const ClickCounter = ({ children }) => {
  const [clicks, setClicks] = useState(0);
  const [color, setcolor] = useState("gold");
  const [colorSpan, setcolorSpan] = useState("red");
  const handleOnClick = () => {
    setClicks(clicks + 1);
    setcolor(color === "gold" ? "red" : "gold");
    setcolorSpan(colorSpan === "red" ? "gold" : "red");
  };

  return (
    <div className={css.wrapp} style={{ backgroundColor: color }}>
      <button className={css.btn} onClick={handleOnClick}>
        Push me! {children}
      </button>
      <span style={{ color: colorSpan }}> Clicks: {clicks}</span>
    </div>
  );
};

export default ClickCounter;
