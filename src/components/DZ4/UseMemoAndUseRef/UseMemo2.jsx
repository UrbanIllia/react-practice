import { useMemo, useState } from "react";
import Heading from "../../Heading/Heading";
import css from "./UseMemo2.module.css";
import { IoColorPalette } from "react-icons/io5";

const UseMemo2 = () => {
  const [count, setCount] = useState(0);
  const [colored, setColored] = useState(false);

  // Hard logic
  const heavyCompute = (num) => {
    console.log("heavyCompute called");
    let i = 0;
    while (i < 1_000_000) i++;
    return num * num;
  };

  const style = {
    color: colored ? "tomato" : "black",
  };

  const result = useMemo(() => {
    return heavyCompute(count);
  }, [count]);

  return (
    <div className={css.wrap}>
      <Heading text="UseMemo2" />
      <IoColorPalette size={100} color="red" />
      <div className={css.wrap2}>
        <h2>useMemo Example</h2>
        <p style={style} className={css.text}>
          Result: {result}
        </p>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className={css.btn}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setColored((prev) => !prev);
          }}
          className={css.btn2}
        >
          Change color
        </button>
      </div>
    </div>
  );
};

export default UseMemo2;
