import css from "./FriendListItem.module.css";
import clsx from "clsx";
import { MdVideoCameraFront } from "react-icons/md";
import { MdDoNotDisturbOff } from "react-icons/md";

const FriendListItem = ({ name, image, isOnline }) => {
  const icons = {
    true: <MdVideoCameraFront className={css.icon} size={24} color="red" />, // Уменьшен размер
    false: <MdDoNotDisturbOff className={css.icon} size={24} color="green" />,
  };
  return (
    <div className={css.card}>
      <img src={image} alt={name} />
      <p className={css.name}>{name}</p>
      <p
        className={clsx(css.status, {
          [css.green]: isOnline,
          [css.red]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
        {icons[isOnline]}
      </p>
    </div>
  );
};

export default FriendListItem;
