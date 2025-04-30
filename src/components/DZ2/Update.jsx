import { useState } from "react";
import css from "./Update.module.css";
import { MdOutlineTouchApp } from "react-icons/md";
import { IconContext } from "react-icons";

const Update = () => {
  const [values, setValues] = useState({ x: 0, y: 0 });
  const updateX = () => {
    setValues({ ...values, x: values.x + 1 });
  };
  const updateY = () => {
    setValues({ ...values, y: values.y + 1 });
  };
  return (
    <div className={css.btnWrap}>
      <button className={css.btn} onClick={updateX}>
        Click X =<span>{values.x}</span>
      </button>
      <IconContext.Provider value={{ color: "black", size: "50px" }}>
        <MdOutlineTouchApp className={css.icon} />
      </IconContext.Provider>
      <button className={css.btn} onClick={updateY}>
        Click Y =<span>{values.y}</span>
      </button>
    </div>
  );
};

export default Update;
