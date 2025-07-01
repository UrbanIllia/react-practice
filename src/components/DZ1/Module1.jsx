import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transaction from "./data/transactions.json";
import FriendList from "./FriendList/FriendList";
import Profile from "./Profile/Profile";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import Button from "./Button/Button";
import css from "./Module1.module.css";
import { HandMetal, Send } from "lucide-react";
import Rock from "./Rock/Rock";
const Module1 = () => {
  return (
    <section>
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
    </section>
  );
};

export default Module1;
