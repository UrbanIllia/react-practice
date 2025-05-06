import { TbArrowBigLeftLines } from "react-icons/tb";
import CustomButton from "./CustomButton";
import css from "./Module2.module.css";
import { FaEyeSlash, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import ClickCounter from "./ClickCounter";
import { GiPulleyHook, GiPush } from "react-icons/gi";
import ClickCounter2 from "./ClickCounter2";
import Update from "./Update";
import { useCallback, useEffect, useState } from "react";
import ColorPicker from "./ColorPicker";
import ToDoList from "./ToDoList";
import Voting from "./Voting";
import FigureSkating from "./FigureSkating";
import Last from "./Last";
import Modal2 from "./Modal2";
import clsx from "clsx";
import Heading from "../Heading/Heading";

const Module2 = () => {
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [touch, setTouch] = useState(0);
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setClicks(clicks + step);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleTouch = () => {
    setTouch(touch + 5);
  };
  const handleChange = (event) => {
    setStep(+event.target.value);
  };
  // ..............................................   Modal
  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClickClose = () => {
    setOpen(!open);
  };
  const handleClickBackdrop = (event) => {
    if (event.target === event.currentTarget) {
      handleClickClose();
    }
  };
  useEffect(() => {
    if (!open) return;

    const intervalId = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 2000);

    const timeOutId = setTimeout(() => {
      console.log("This is TIMEOUT");
    }, 5000);

    const handleKeyDown = (event) => {
      console.log(event.key);
      if (event.key === "Escape") {
        handleClickClose(intervalId);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeOutId);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClickClose]);

  useEffect(() => {
    {
      open ? console.log("Модалка открыта") : console.log("Модалка закрыта");
    }
  }, [open]);
  return (
    <section>
      <div className={css.buttonWrapper}>
        <CustomButton message="Playing music!">Play some music</CustomButton>
        <CustomButton message="Uploading your data!">Upload data</CustomButton>
      </div>
      <div className={css.buttonwrapper2}>
        <div className={css.wrapStep}>
          <input type="number" className={css.input} onChange={handleChange} />
          <div className={css.wrapStep2}>
            <TbArrowBigLeftLines size={36} color="crimson" />
            <span>STEP</span>
          </div>
        </div>
        <button className={css.buttonClick} onClick={handleClick}>
          Current: {clicks} clicks!{" "}
        </button>
        <button className={css.buttonClick} onClick={handleToggle}>
          {isOpen ? "Hide" : "Show"}
        </button>
        {isOpen ? (
          <p className={css.text}>
            You can see me! <FaRegEye />
          </p>
        ) : (
          <FaRegEyeSlash size={28} color="red" className={css.eyeRed} />
        )}
        <div>
          <h1 className={css.titleObj}>Condition isolation</h1>
          <ClickCounter>
            <GiPush size={30} />
          </ClickCounter>
          <ClickCounter>
            <GiPulleyHook size={30} color="red" />
          </ClickCounter>
        </div>
        <div>
          <h1 className={css.titleObj}>Elevation of state</h1>
          <ClickCounter2 value={touch} onUpdate={handleTouch}>
            <GiPush size={30} />
          </ClickCounter2>
          <ClickCounter2 value={touch} onUpdate={handleTouch}>
            <GiPulleyHook size={30} color="red" />
          </ClickCounter2>
        </div>
        <div>
          <h1 className={css.titleObj}>Update objects in useState</h1>
          <Update />
        </div>
      </div>
      <ColorPicker />
      <ToDoList />
      <Voting />
      <FigureSkating />
      <Last />
      <section className={css.section}>
        <Heading text="Modal window" bottom />
        <button
          style={{
            display: "block",
            margin: "0 auto",
            background: "green",
            marginBottom: "40px",
          }}
          className={clsx("button")}
          onClick={handleClickOpen}
        >
          Open Modal window
        </button>
        {open && (
          <Modal2
            handleClickClose={handleClickClose}
            title={"Modal window"}
            handleClickBackdrop={handleClickBackdrop}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
            deleniti at vel voluptate. Vitae ex ipsam unde nesciunt deserunt
            debitis reiciendis nemo officiis, minima ipsum assumenda earum rerum
            eius dolor.
          </Modal2>
        )}
      </section>
    </section>
  );
};

export default Module2;
