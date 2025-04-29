import { HandMetal, Send } from "lucide-react";
import FriendList from "./components/DZ1/FriendList/FriendList";
import Profile from "./components/DZ1/Profile/Profile";
import TransactionHistory from "./components/DZ1/TransactionHistory/TransactionHistory";
import Button from "./components/DZ1/Button/Button";
import Rock from "./components/DZ1/Rock/Rock";
import CustomButton from "./components/DZ2/CustomButton";
import transaction from "./components/DZ1/data/transactions.json";
import friends from "./components/DZ1/data/friends.json";
import userData from "./components/DZ1/data/userData.json";
import css from "./App.module.css";
import { useState } from "react";
function App() {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
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
      <button className={css.buttonClick} onClick={handleClick}>
        Current: {clicks} clicks!{" "}
      </button>
      <div className={css.buttonWrapper}>
        <CustomButton message="Playing music!">Play some music</CustomButton>
        <CustomButton message="Uploading your data!">Upload data</CustomButton>
      </div>
    </>
  );
}

export default App;
