import css from "./App.module.css";
import FriendList from "./components/DZ1/FriendList/FriendList";
import Profile from "./components/DZ1/Profile/Profile";
import userData from "./components/DZ1/data/userData.json";
import friends from "./components/DZ1/data/friends.json";
import transaction from "./components/DZ1/data/transactions.json";
import TransactionHistory from "./components/DZ1/TransactionHistory/TransactionHistory";

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
    </>
  );
}

export default App;
