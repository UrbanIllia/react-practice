import css from "./App.module.css";
import FriendList from "./components/DZ1/FriendList/FriendList";
import Profile from "./components/DZ1/Profile/Profile";
import userData from "./components/DZ1/data/userData.json";
import friends from "./components/DZ1/data/friends.json";
import transaction from "./components/DZ1/data/transactions.json";
import TransactionHistory from "./components/DZ1/TransactionHistory/TransactionHistory";
import Button from "./components/DZ1/Button/Button";
import { HandMetal, Send } from "lucide-react";
import Rock from "./components/DZ1/Rock/Rock";

function App() {
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
    </>
  );
}

export default App;
