import { useEffect, useRef, useState } from "react";
import css from "./UseRef2.module.css";
import Heading from "../../Heading/Heading";

const UseRef2 = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const countRef = useRef(0);
  const buttonRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    countRef.current++;
    console.log("Render count: ", countRef.current);
  });
  useEffect(() => {
    setInterval(() => {
      //   buttonRef.current.click();
    }, 1000);
  }, []);
  return (
    <div className={css.wrap}>
      <Heading text="UseRef2" />
      <h2 className={css.title}>useRef - Count of Renders</h2>
      <p className={css.text}>Counter: {count}</p>
      <input
        placeholder="Enter the text..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        className={css.input}
      />
      <button
        className={css.btn}
        ref={buttonRef}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increase
      </button>
      <h2>UseRefInputFile</h2>
      <button className="button" onClick={() => inputRef.current.click()}>
        Click me!
      </button>
      <input ref={inputRef} type="file" style={{ visibility: "hidden" }} />
    </div>
  );
};

export default UseRef2;
