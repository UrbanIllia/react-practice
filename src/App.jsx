import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { HandMetal, Send } from "lucide-react";
import { GiPulleyHook, GiPush } from "react-icons/gi";
import { TbArrowBigLeftLines } from "react-icons/tb";
import FriendList from "./components/DZ1/FriendList/FriendList";
import Profile from "./components/DZ1/Profile/Profile";
import TransactionHistory from "./components/DZ1/TransactionHistory/TransactionHistory";
import Button from "./components/DZ1/Button/Button";
import Rock from "./components/DZ1/Rock/Rock";
import CustomButton from "./components/DZ2/CustomButton";
import ClickCounter from "./components/DZ2/ClickCounter";
import ClickCounter2 from "./components/DZ2/ClickCounter2";
import ColorPicker from "./components/DZ2/ColorPicker";
import ToDoList from "./components/DZ2/ToDoList";
import Update from "./components/DZ2/Update";
import transaction from "./components/DZ1/data/transactions.json";
import friends from "./components/DZ1/data/friends.json";
import userData from "./components/DZ1/data/userData.json";
import css from "./App.module.css";
import { useState } from "react";
import Voting from "./components/DZ2/Voting";

function App() {
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [touch, setTouch] = useState(0);
  const [step, setStep] = useState(1);
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
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
      <div className={css.flex}>
        <Button size="small" variant="primary">
          Click me!
        </Button>
        <Button size="large" variant="danger">
          Click me!
        </Button>
        <Button size="large" variant="dark">
          Click me!
        </Button>
        <Button size="large" variant="secondary">
          Submit <Send size={28} color="#000000" strokeWidth={2.25} />
        </Button>
        <Button size="disabled" variant="disabled">
          Submit <Send size={28} color="#000000" strokeWidth={2.25} />
        </Button>
      </div>

      <div className={css.rock}>
        <Rock>
          <HandMetal size={38} />
        </Rock>
      </div>

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
          <FaEyeSlash size={28} color="red" className={css.eyeRed} />
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
    </>
  );
}

export default App;
