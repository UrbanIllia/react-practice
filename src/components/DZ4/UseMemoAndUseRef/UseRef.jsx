import { useEffect, useRef, useState } from "react";
import Heading from "../../Heading/Heading";
import css from "./UseMemoAndUseRef.module.css";

const UseRef = () => {
  const [value, setValue] = useState(0);
  const btnRef = useRef();

  // Буде undefined на першому рендері
  // і посиланням на DOM-елемент всі наступні
  console.log("App: ", btnRef.current);

  useEffect(() => {
    // Ефект виконується після монтування,
    // тому завжди буде посиланням на DOM-елемент
    console.log("useEffect: ", btnRef.current);
  });

  const handleClick = () => {
    // Кліки будуть після монтування,
    // тому завжди буде посиланням на DOM-елемент
    console.log("handleClick: ", btnRef.current);
  };

  return (
    <div className={css.wrapp2}>
      <Heading text="UseRef" mTop />
      <button onClick={() => setValue(value + 1)} className={css.btn3}>
        Update value to trigger re-render
      </button>
      <button ref={btnRef} onClick={handleClick} className={css.btn2}>
        Button with ref
      </button>
    </div>
  );
};

export default UseRef;
