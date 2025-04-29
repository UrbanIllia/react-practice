import css from "./FriendListItem.module.css";
import clsx from "clsx";
import { MdVideoCameraFront } from "react-icons/md";
import { MdDoNotDisturbOff } from "react-icons/md";
const FriendListItem = ({ name, image, isOnline }) => {
  const icons = {
    true: <MdVideoCameraFront width={40} />,
    false: <MdDoNotDisturbOff width={40} />,
  };
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
      {icons[isOnline]}
    </div>
  );
};

export default FriendListItem;
