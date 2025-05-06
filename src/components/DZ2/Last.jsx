import { useEffect, useState } from "react";
import Modal from "./Modal";
import clsx from "clsx";
import css from "./Last.module.css";
import Heading from "../Heading/Heading";

const Last = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [first, setFirst] = useState(() => {
    const savedClicks = window.localStorage.getItem("Anything");
    if (savedClicks !== null) {
      return Number(savedClicks);
    } else {
      return 0;
    }
  });
  const [second, setSecond] = useState(() => {
    const savedClicks2 = window.localStorage.getItem("Anything-2");
    if (savedClicks2 !== null) {
      return Number(savedClicks2);
    } else {
      return 0;
    }
  });
  useEffect(() => {
    console.log(`Button is open? - ${isOpen}`);
  }, [isOpen]);
  useEffect(() => {
    console.log(`I have ${first} clicks`);
  }, [first]);
  useEffect(() => {
    console.log(`I have ${second} clicks`);
  }, [second]);
  useEffect(() => {
    console.log(`I have total ${first + second} clicks`);
  }, [second, first]);
  useEffect(() => {
    window.localStorage.setItem("Anything", first);
  }, [first]);
  useEffect(() => {
    window.localStorage.setItem("Anything-2", second);
  }, [second]);
  // window.localStorage.setItem("key", JSON.stringify({}));
  return (
    <div className={clsx("flexColumn")} style={{ marginBottom: 40 }}>
      <h2 className={clsx("title")}>USeEffect in console </h2>
      <button
        className={clsx("button", css.btn)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <Modal />}
      <button
        className={clsx("button", css.btn)}
        onClick={() => setFirst(first + 1)}
      >
        {" "}
        Clicks: {first}
      </button>
      <button
        className={clsx("button", css.btn)}
        onClick={() => setSecond(second + 1)}
      >
        {" "}
        Clicks: {second}
      </button>
      <Heading text="Saved in localStorage" />
    </div>
  );
};

export default Last;
