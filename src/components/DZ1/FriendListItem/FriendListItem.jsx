import css from "./FriendListItem.module.css";
import clsx from "clsx";
const FriendListItem = ({ name, image, isOnline }) => {
  return (
    <div>
      <img src={image} alt={name} width="48" />
      <p>{name}</p>
      {/* {isOnline ? (
        <p className={css.green}>Online</p>
      ) : (
        <p className={css.red}>Offline</p>
      )} */}
      <p
        className={clsx(css.status, {
          [css.green]: isOnline,
          [css.red]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
